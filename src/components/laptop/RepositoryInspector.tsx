import React from 'react';
import type { RepositoryDefinition } from '../../data/repositories';
import { ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from '../Icons';

interface RepositoryInspectorProps {
  repository: RepositoryDefinition;
}

export const RepositoryInspector: React.FC<RepositoryInspectorProps> = ({ repository }) => {
  const { name, tagline, description, technologies, architecturePattern, primaryLanguage, repositoryUrl, keySpecs } = repository;

  return (
    <div className="w-full h-full bg-[#17191D] border border-[#25282D] rounded-lg p-6 font-mono text-xs text-[#E8E2D6] space-y-6 flex flex-col justify-between shadow-inner select-text">
      <div className="space-y-5">
        {/* Header Title */}
        <div className="border-b border-[#25282D] pb-3 space-y-1">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#65B8FF] font-bold uppercase tracking-widest">REPOSITORY INSPECTOR</span>
            <span className="text-[#7EE2A8] font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED IMPLEMENTATION</span>
            </span>
          </div>
          <h3 className="text-2xl font-extrabold font-sans text-white mt-1">{name}</h3>
          <p className="text-xs text-[#65B8FF] font-mono">{tagline}</p>
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-[#64748b] uppercase font-bold block">CODEBASE SUMMARY</span>
          <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed bg-[#0B0D10] p-3.5 rounded-lg border border-[#25282D]">
            {description}
          </p>
        </div>

        {/* Technology Stack Badges */}
        <div className="space-y-2">
          <span className="text-[10px] text-[#64748b] uppercase font-bold block">TECHNOLOGY STACK</span>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map(t => (
              <span key={t} className="px-2.5 py-1 rounded bg-[#0B0D10] border border-[#25282D] text-slate-200 text-[11px] font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Pattern & Key Specs */}
        <div className="space-y-2">
          <span className="text-[10px] text-[#64748b] uppercase font-bold block">ARCHITECTURE & PATTERN</span>
          <div className="bg-[#0B0D10] p-3 rounded-lg border border-[#25282D] flex items-center gap-2 text-xs">
            <Cpu className="w-4 h-4 text-[#65B8FF] shrink-0" />
            <span className="text-white font-bold">{architecturePattern}</span>
            <span className="text-[#64748b] text-[10px] font-mono ml-auto">PRIMARY: {primaryLanguage}</span>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {keySpecs.map(s => (
            <div key={s.label} className="bg-[#0B0D10] p-2.5 rounded border border-[#25282D] text-[10px]">
              <span className="text-[#64748b] block uppercase">{s.label}</span>
              <strong className="text-[#E8E2D6] font-bold block mt-0.5">{s.value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Repository Action Link */}
      <div className="pt-4 border-t border-[#25282D]">
        {repositoryUrl ? (
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-lg bg-[#65B8FF] hover:bg-[#52a4eb] text-[#0B0D10] font-bold font-sans text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xl focus:ring-2 focus:ring-[#65B8FF]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>OPEN GITHUB REPOSITORY ↗</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <div className="p-3.5 rounded-lg bg-[#0B0D10] border border-[#25282D] text-center text-xs text-[#7EE2A8]">
            <span>Dataset & ML Notebook References Curated in Project Book</span>
          </div>
        )}
      </div>
    </div>
  );
};
