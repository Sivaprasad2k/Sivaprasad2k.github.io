import React from 'react';
import type { RepositoryDefinition } from '../../data/repositories';
import { ChevronRight } from 'lucide-react';

interface RepositoryListProps {
  repositories: RepositoryDefinition[];
  selectedRepoId: string;
  onSelectRepo: (repoId: string) => void;
}

export const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  selectedRepoId,
  onSelectRepo
}) => {
  const featured = repositories.filter(r => r.category === 'FEATURED');
  const additional = repositories.filter(r => r.category === 'ADDITIONAL');

  const renderRow = (repo: RepositoryDefinition) => {
    const isSelected = repo.id === selectedRepoId;

    return (
      <button
        key={repo.id}
        type="button"
        onClick={() => onSelectRepo(repo.id)}
        className={`w-full p-3 rounded-lg border text-left transition-all font-mono group focus:ring-2 focus:ring-[#65B8FF] ${
          isSelected
            ? 'bg-[#65B8FF]/15 border-[#65B8FF] text-[#65B8FF] font-bold shadow-[0_0_12px_rgba(101,184,255,0.15)]'
            : 'bg-[#0B0D10] border-[#25282D] text-slate-300 hover:border-slate-600 hover:text-white'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-bold ${isSelected ? 'text-[#65B8FF]' : 'text-[#64748b]'}`}>
              {isSelected ? '>' : ' '}
            </span>
            <span className="text-xs font-bold font-sans tracking-wide">{repo.name}</span>
          </div>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#65B8FF] translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'}`} />
        </div>
        <p className="text-[10px] text-slate-400 font-sans truncate mt-1 line-clamp-1">
          {repo.tagline}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {repo.technologies.slice(0, 3).map(t => (
            <span
              key={t}
              className={`text-[8px] px-1.5 py-0.5 rounded border ${
                isSelected
                  ? 'bg-[#65B8FF]/20 border-[#65B8FF]/30 text-[#65B8FF]'
                  : 'bg-[#17191D] border-[#25282D] text-slate-400'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </button>
    );
  };

  return (
    <div className="w-full space-y-4 font-mono text-xs select-none">
      {/* FEATURED REPOSITORIES */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] text-[#65B8FF] font-bold uppercase tracking-widest px-1">
          <span>FEATURED CODEBASES</span>
          <span>{featured.length} REPOS</span>
        </div>
        <div className="space-y-1.5">
          {featured.map(renderRow)}
        </div>
      </div>

      {/* ADDITIONAL REPOSITORIES */}
      <div className="space-y-2 pt-2 border-t border-[#25282D]">
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest px-1">
          <span>ADDITIONAL BUILDS</span>
          <span>{additional.length} REPOS</span>
        </div>
        <div className="space-y-1.5">
          {additional.map(renderRow)}
        </div>
      </div>
    </div>
  );
};
