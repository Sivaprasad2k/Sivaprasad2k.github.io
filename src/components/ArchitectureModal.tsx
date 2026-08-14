import React, { useEffect } from 'react';
import type { Project } from '../data/projects';
import { X, Layers, ShieldCheck, ArrowRight, Database, Server, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { MetricBadge } from './MetricBadge';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative bg-[#090d16] border border-slate-700/80 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl text-slate-200 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <MetricBadge label={project.status} variant={project.status === 'SHIPPED' ? 'emerald' : 'cyan'} />
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">SYSTEM ARCHITECTURE CASE STUDY</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-sans text-slate-100">{project.title}</h2>
            <p className="text-sm font-mono text-sky-400 mt-1">{project.tagline}</p>
          </div>
          <button
            id="btn-modal-close"
            type="button"
            onClick={onClose}
            aria-label="Close architecture modal"
            className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors focus:ring-1 focus:ring-sky-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview & Key Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/80 p-4 rounded border border-slate-800 font-mono text-xs">
          {project.keySpecs.map((spec, i) => (
            <div key={i} className="space-y-1">
              <span className="text-[10px] text-slate-500 block uppercase">{spec.label}</span>
              <span className="text-slate-200 font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Problem & System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 p-4 rounded border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Problem Domain & Requirement</span>
            </div>
            <p className="text-xs font-sans text-slate-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="bg-slate-900/60 p-4 rounded border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase">
              <Cpu className="w-4 h-4" />
              <span>Architectural Solution</span>
            </div>
            <p className="text-xs font-sans text-slate-300 leading-relaxed">{project.systemOverview}</p>
          </div>
        </div>

        {/* Architecture Layers Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-bold uppercase">
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Component & Layer Topology</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.architectureLayers.map((layer, idx) => (
              <div key={idx} className="bg-slate-950 p-3.5 rounded border border-slate-800 font-mono space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-bold">{layer.layer}</span>
                  <span className="text-sky-400 text-[10px] bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800/40">{layer.tech}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-200">{layer.component}</h4>
                <p className="text-[11px] font-sans text-slate-400">{layer.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions & Rationale */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-bold uppercase">
            <Server className="w-4 h-4 text-indigo-400" />
            <span>Key Engineering Trade-offs & Decisions</span>
          </div>

          <div className="space-y-2.5">
            {project.engineeringDecisions.map((item, idx) => (
              <div key={idx} className="bg-slate-950/80 p-3.5 rounded border border-slate-800 space-y-1 text-xs">
                <div className="flex items-center gap-2 text-slate-100 font-bold font-mono">
                  <span className="text-sky-400 text-[11px]">[{idx + 1}]</span>
                  <span>{item.decision}</span>
                </div>
                <div className="text-slate-400 font-sans text-xs">
                  <strong className="text-slate-300">Rationale: </strong>{item.rationale}
                </div>
                <div className="text-emerald-400/90 font-mono text-[11px]">
                  <strong>System Impact: </strong>{item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow Pathways */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-bold uppercase">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Data Flow & Inter-Service Messaging</span>
          </div>

          <div className="bg-slate-950 p-4 rounded border border-slate-800 space-y-2 font-mono text-xs">
            {project.dataFlow.map((flow, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded bg-slate-900/60 border border-slate-800/60">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-sky-400">{flow.from}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span className="text-emerald-400">{flow.to}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">{flow.protocol}</span>
                  <span className="text-[11px] font-sans text-slate-400 hidden lg:inline">{flow.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-sky-600 text-white font-mono text-xs font-semibold hover:bg-sky-500 transition-colors shadow-lg focus:ring-2 focus:ring-sky-400"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
