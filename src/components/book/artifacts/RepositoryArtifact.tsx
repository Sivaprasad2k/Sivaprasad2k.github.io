import React from 'react';
import type { Project } from '../../../data/projects';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../../Icons';

interface RepositoryArtifactProps {
  project: Project;
}

export const RepositoryArtifact: React.FC<RepositoryArtifactProps> = ({ project }) => {
  const { title, repoUrl, technologies, keySpecs } = project;

  return (
    <div className="bg-[#0B0D10] border border-[#25282D] rounded-lg p-5 font-mono text-xs space-y-4 shadow-inner">
      <div className="flex items-center justify-between border-b border-[#25282D] pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded bg-[#17191D] border border-[#25282D] text-[#65B8FF]">
            <GithubIcon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold font-sans text-white text-sm">{title} Repository</h4>
            <span className="text-[10px] text-[#7EE2A8] flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>VERIFIED GITHUB CODEBASE</span>
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-[10px] text-[#64748b] uppercase font-bold block">TECHNOLOGY STACK</span>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map(t => (
            <span key={t} className="px-2.5 py-1 rounded bg-[#17191D] border border-[#25282D] text-slate-200 text-[11px]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1">
        {keySpecs.map(s => (
          <div key={s.label} className="bg-[#17191D] p-2 rounded border border-[#25282D] text-[10px]">
            <span className="text-[#64748b] block">{s.label}</span>
            <strong className="text-[#E8E2D6] font-bold block mt-0.5">{s.value}</strong>
          </div>
        ))}
      </div>

      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-lg bg-[#65B8FF] hover:bg-[#52a4eb] text-[#0B0D10] font-bold transition-colors flex items-center justify-center gap-2 mt-2"
        >
          <ExternalLink className="w-4 h-4" />
          <span>OPEN REPOSITORY ON GITHUB</span>
        </a>
      )}
    </div>
  );
};
