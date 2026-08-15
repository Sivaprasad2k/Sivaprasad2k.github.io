import React, { useState, useEffect } from 'react';
import type { Project } from '../../data/projects';
import { MetricBadge } from '../MetricBadge';
import { Layers, Play, RefreshCw, Cpu, Clock, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../Icons';

interface AvisPipelineExplorerProps {
  project: Project;
  onOpenArchitecture: () => void;
}

export const AvisPipelineExplorer: React.FC<AvisPipelineExplorerProps> = ({ project, onOpenArchitecture }) => {
  const steps = project.asyncPipelineSteps || [];
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev >= steps.length - 1) {
          setIsSimulating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isSimulating, steps.length]);

  const startSimulation = () => {
    setActiveStepIndex(0);
    setIsSimulating(true);
  };

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div id={`project-card-${project.id}`} className="bg-[#0b0f19] border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sky-400 font-bold tracking-widest">INTERACTION: ASYNC PIPELINE VISUALIZER</span>
            <MetricBadge label={project.status} variant="cyan" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-100">{project.title}</h3>
        </div>

        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SOURCE CODE</span>
            </a>
          )}
          <button
            type="button"
            onClick={onOpenArchitecture}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-sky-950 border border-sky-800 text-xs font-mono text-sky-300 hover:bg-sky-900 transition-all"
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

      {/* Pipeline Simulation Controls & Track */}
      <div className="space-y-4 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-bold text-sky-400">NON-BLOCKING ASYNC PIPELINE SIMULATOR</span>
          <button
            type="button"
            onClick={startSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-mono text-xs font-bold transition-all shadow-md"
          >
            {isSimulating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
            <span>{isSimulating ? 'SIMULATING PACKET TRAVERSAL...' : 'SIMULATE REQUEST DISPATCH'}</span>
          </button>
        </div>

        {/* Pipeline Step Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((st, idx) => {
            const isActive = activeStepIndex === idx;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={st.id}
                type="button"
                onClick={() => { setIsSimulating(false); setActiveStepIndex(idx); }}
                className={`p-3 rounded-lg border text-left transition-all relative ${
                  isActive
                    ? 'bg-sky-950 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(14,165,233,0.25)] ring-1 ring-sky-400'
                    : isCompleted
                    ? 'bg-slate-900/90 border-slate-700 text-slate-300'
                    : 'bg-slate-950/80 border-slate-800/80 text-slate-500 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-1 font-mono">
                  <span>STEP {st.stepNumber}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />}
                </div>
                <div className="text-xs font-bold font-sans truncate">{st.name}</div>
                <div className="text-[10px] text-slate-400 mt-2 font-mono">{st.latencyBoundary}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Pipeline Step Detailed Inspector */}
      {activeStep && (
        <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span className="font-bold text-slate-100 text-sm">STEP {activeStep.stepNumber}: {activeStep.name}</span>
            </div>
            <span className="text-[10px] text-slate-500">API: {activeStep.apiBoundary}</span>
          </div>

          <p className="font-sans text-slate-300 text-xs leading-relaxed bg-slate-900/80 p-3.5 rounded border border-slate-800">
            {activeStep.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="bg-slate-900/60 p-3 rounded border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-1 text-sky-400 font-bold text-[10px]">
                <Clock className="w-3.5 h-3.5" />
                <span>LATENCY BOUNDARY</span>
              </div>
              <div className="text-slate-200 font-mono font-bold text-xs">{activeStep.latencyBoundary}</div>
            </div>

            <div className="bg-slate-900/60 p-3 rounded border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-1 text-indigo-400 font-bold text-[10px]">
                <Cpu className="w-3.5 h-3.5" />
                <span>EXECUTION MODEL</span>
              </div>
              <div className="text-slate-200 font-mono text-xs">{activeStep.executionModel}</div>
            </div>

            <div className="bg-slate-900/60 p-3 rounded border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-1 text-amber-400 font-bold text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FAILURE ISOLATION</span>
              </div>
              <div className="text-slate-300 font-sans text-xs">{activeStep.failureIsolation}</div>
            </div>
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
