import React, { useState } from 'react';
import type { Project } from '../../data/projects';
import { MetricBadge } from '../MetricBadge';
import { Layers, CheckCircle2, XCircle, Database, Lock } from 'lucide-react';
import { GithubIcon } from '../Icons';

interface CareerPathStateExplorerProps {
  project: Project;
  onOpenArchitecture: () => void;
}

export const CareerPathStateExplorer: React.FC<CareerPathStateExplorerProps> = ({ project, onOpenArchitecture }) => {
  const states = project.stateMachineStates || [];
  const [selectedStateId, setSelectedStateId] = useState<string>('INTERVIEW');

  const activeState = states.find(s => s.id === selectedStateId) || states[0];

  return (
    <div id={`project-card-${project.id}`} className="bg-[#0b0f19] border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-indigo-400 font-bold tracking-widest">INTERACTION: STATE MACHINE EXPLORER</span>
            <MetricBadge label={project.status} variant="indigo" />
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

      {/* State Machine Interactive Selector */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400">
          <span className="font-bold text-indigo-400">FINITE STATE AUTOMATA TRANSITIONS</span>
          <span className="text-[10px] text-slate-500">SELECT STATE TO VALIDATE TRANSITION PATHS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {states.map((st) => {
            const isSelected = selectedStateId === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setSelectedStateId(st.id)}
                className={`p-3 rounded border text-center transition-all ${
                  isSelected
                    ? 'bg-indigo-950 border-indigo-400 text-indigo-300 font-bold shadow-[0_0_12px_rgba(99,102,241,0.25)]'
                    : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-xs font-bold">{st.name}</div>
                <div className="text-[9px] text-slate-500 mt-1">
                  {st.allowedTransitions.length} Valid Next Step(s)
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active State Detail Board */}
      {activeState && (
        <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="font-bold text-slate-100 text-sm">INSPECTING STATE: {activeState.name}</span>
            <span className="text-[10px] text-slate-500">PERSISTENCE MODEL & BOUNDARIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Allowed Transitions */}
            <div className="bg-slate-900/80 p-3.5 rounded border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ALLOWED TRANSITIONS</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeState.allowedTransitions.length > 0 ? (
                  activeState.allowedTransitions.map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-bold">
                      → {t}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-500 italic text-xs">Terminal State (No further transitions)</span>
                )}
              </div>
            </div>

            {/* Invalid Transitions */}
            <div className="bg-slate-900/80 p-3.5 rounded border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px]">
                <XCircle className="w-3.5 h-3.5" />
                <span>REJECTED TRANSITIONS (BLOCKED)</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeState.invalidTransitions.map((inv) => (
                  <span key={inv} className="px-2 py-1 rounded bg-rose-950/40 border border-rose-900/80 text-rose-300 text-xs line-through opacity-80">
                    ✕ {inv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Persistence Model & Security Boundary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1 bg-slate-900/60 p-3 rounded border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px]">
                <Database className="w-3.5 h-3.5" />
                <span>PERSISTENCE MODEL</span>
              </div>
              <p className="font-mono text-slate-300 text-[11px] leading-relaxed break-all bg-slate-950 p-2 rounded border border-slate-800">
                {activeState.persistenceModel}
              </p>
            </div>

            <div className="space-y-1 bg-slate-900/60 p-3 rounded border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[11px]">
                <Lock className="w-3.5 h-3.5" />
                <span>SECURITY BOUNDARY</span>
              </div>
              <p className="font-sans text-slate-300 text-xs leading-relaxed">
                {activeState.securityBoundary}
              </p>
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
