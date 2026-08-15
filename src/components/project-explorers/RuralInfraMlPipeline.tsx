import React, { useState } from 'react';
import type { Project } from '../../data/projects';
import { MetricBadge } from '../MetricBadge';
import { Layers, Cpu, Database, FileText, CheckCircle2 } from 'lucide-react';

interface RuralInfraMlPipelineProps {
  project: Project;
  onOpenArchitecture: () => void;
}

export const RuralInfraMlPipeline: React.FC<RuralInfraMlPipelineProps> = ({ project, onOpenArchitecture }) => {
  const steps = project.mlPipelineSteps || [];
  const [selectedStepId, setSelectedStepId] = useState<string>('ML-3');

  const activeStep = steps.find(s => s.id === selectedStepId) || steps[0];

  return (
    <div id={`project-card-${project.id}`} className="bg-[#0b0f19] border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-indigo-400 font-bold tracking-widest">INTERACTION: ML ENGINEERING PIPELINE</span>
            <MetricBadge label={project.status} variant="indigo" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-100">{project.title}</h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenArchitecture}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-indigo-950 border border-indigo-800 text-xs font-mono text-indigo-300 hover:bg-indigo-900 transition-all"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURE</span>
          </button>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm font-sans text-slate-300 leading-relaxed">
        {project.summary}
      </p>

      {/* ML Pipeline Stage Tracker */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400">
          <span className="font-bold text-indigo-400">ML DATASET & MODEL INFERENCE PIPELINE</span>
          <span className="text-[10px] text-slate-500">CLICK STAGE TO INSPECT TRANSFORMATIONS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {steps.map((st) => {
            const isSelected = selectedStepId === st.id;

            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setSelectedStepId(st.id)}
                className={`p-3 rounded border text-center transition-all ${
                  isSelected
                    ? 'bg-indigo-950 border-indigo-400 text-indigo-300 font-bold shadow-[0_0_12px_rgba(99,102,241,0.25)]'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-[9px] text-slate-500 mb-0.5">STAGE {st.stepNumber}</div>
                <div className="text-xs font-bold font-sans truncate">{st.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected ML Pipeline Inspector */}
      {activeStep && (
        <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span className="font-bold text-slate-100 text-sm">STAGE {activeStep.stepNumber}: {activeStep.name}</span>
            </div>
            <span className="text-[10px] text-slate-500">STACK: {activeStep.techStack}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input vs Output Transformations */}
            <div className="bg-slate-900/80 p-3.5 rounded border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px]">
                <Database className="w-3.5 h-3.5" />
                <span>INPUT SCHEMA / DATA FORMAT</span>
              </div>
              <p className="font-mono text-slate-300 text-xs bg-slate-950 p-2 rounded border border-slate-800">
                {activeStep.inputFormat}
              </p>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>OUTPUT TRANSFORM / ARTIFACT</span>
              </div>
              <p className="font-mono text-slate-300 text-xs bg-slate-950 p-2 rounded border border-slate-800">
                {activeStep.outputFormat}
              </p>
            </div>
          </div>

          {/* Detailed Engineering Implementation */}
          <div className="bg-slate-900/60 p-3.5 rounded border border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5 text-indigo-300 font-bold text-[11px]">
              <FileText className="w-3.5 h-3.5" />
              <span>ENGINEERING DETAILS & TRANSFORMATION RATIONALE</span>
            </div>
            <p className="font-sans text-slate-300 text-xs leading-relaxed">
              {activeStep.engineeringDetails}
            </p>
          </div>
        </div>
      )}

      {/* Specs Footer */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60 font-mono text-[11px]">
        {project.keySpecs.map((spec) => (
          <span key={spec.label} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
            <strong className="text-slate-200">{spec.label}:</strong> {spec.value}
          </span>
        ))}
      </div>
    </div>
  );
};
