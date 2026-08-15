import React, { useState } from 'react';
import type { Project } from '../../data/projects';
import { MetricBadge } from '../MetricBadge';
import { Layers, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../Icons';

interface KrishiWorkflowExplorerProps {
  project: Project;
  onOpenArchitecture: () => void;
}

export const KrishiWorkflowExplorer: React.FC<KrishiWorkflowExplorerProps> = ({ project, onOpenArchitecture }) => {
  const states = project.workflowStates || [];
  const [activeStateId, setActiveStateId] = useState<string>('GROWING');

  const currentState = states.find(s => s.id === activeStateId) || states[0];

  return (
    <div id={`project-card-${project.id}`} className="bg-[#0b0f19] border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sky-400 font-bold tracking-widest">INTERACTION: WORKFLOW EXPLORER</span>
            <MetricBadge label={project.status} variant="emerald" />
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

      {/* Workflow Interactive State Machine Track */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400">
          <span className="font-bold text-sky-400">CROP CYCLE WORKFLOW STATE TRACK</span>
          <span className="text-[10px] text-slate-500">CLICK ANY STATE TO INSPECT INVARIANTS</span>
        </div>

        {/* State Track Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {states.map((st, idx) => {
            const isSelected = activeStateId === st.id;
            const isTransitionAllowed = currentState.allowedTransitions.includes(st.name);

            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStateId(st.id)}
                className={`p-2.5 rounded border text-center transition-all relative ${
                  isSelected
                    ? 'bg-sky-950 border-sky-400 text-sky-300 font-bold shadow-[0_0_12px_rgba(14,165,233,0.2)]'
                    : isTransitionAllowed
                    ? 'bg-slate-900 border-emerald-500/60 text-slate-200 hover:border-emerald-400'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[9px] text-slate-500 mb-0.5">0{idx + 1}</div>
                <div className="text-xs font-bold truncate">{st.name}</div>
                {isTransitionAllowed && (
                  <span className="text-[8px] text-emerald-400 block font-bold mt-1">ALLOWED STEP</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected State Inspector Box */}
      {currentState && (
        <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-sky-400" />
              <span className="font-bold text-slate-100 text-sm">INSPECTING STATE: {currentState.name}</span>
            </div>
            <span className="text-[10px] text-slate-500">MODULE: {currentState.responsibleModule}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5 bg-slate-900/80 p-3 rounded border border-slate-800">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>BUSINESS INVARIANT</span>
              </div>
              <p className="font-sans text-slate-300 text-xs leading-relaxed">{currentState.businessInvariant}</p>
            </div>

            <div className="space-y-1.5 bg-slate-900/80 p-3 rounded border border-slate-800">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>TECHNICAL IMPLEMENTATION</span>
              </div>
              <p className="font-sans text-slate-300 text-xs leading-relaxed">{currentState.technicalImplementation}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">ALLOWED TRANSITIONS:</span>
              {currentState.allowedTransitions.length > 0 ? (
                currentState.allowedTransitions.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                    → {t}
                  </span>
                ))
              ) : (
                <span className="text-slate-500 italic">None (Terminal State)</span>
              )}
            </div>
            <span className="text-slate-500 text-[10px]">RESPONSIBLE SERVICE: {currentState.responsibleModule}</span>
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
