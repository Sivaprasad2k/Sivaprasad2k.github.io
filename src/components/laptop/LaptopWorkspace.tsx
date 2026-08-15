import React from 'react';
import type { RepositoryDefinition } from '../../data/repositories';
import { REPOSITORIES_DATA } from '../../data/repositories';
import { LaptopHeader } from './LaptopHeader';
import { RepositoryList } from './RepositoryList';
import { RepositoryInspector } from './RepositoryInspector';

interface LaptopWorkspaceProps {
  isOpen: boolean;
  selectedRepo: RepositoryDefinition;
  onSelectRepo: (repoId: string) => void;
  onClose: () => void;
}

export const LaptopWorkspace: React.FC<LaptopWorkspaceProps> = ({
  isOpen,
  selectedRepo,
  onSelectRepo,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0B0D10]/70 backdrop-blur-md select-none pointer-events-auto">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Laptop Workspace Window Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Laptop Code Workspace Engine"
        className="relative w-full max-w-5xl bg-[#17191D] border-4 border-[#25282D] rounded-xl shadow-2xl z-10 flex flex-col overflow-hidden transition-all duration-500 max-h-[90vh]"
      >
        {/* Terminal Header */}
        <LaptopHeader onClose={onClose} />

        {/* Content Body: Desktop Split View vs Mobile Single Column */}
        <div className="p-4 sm:p-6 bg-[#0B0D10] overflow-y-auto max-h-[78vh]">
          {/* Desktop Split View (Hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-12 gap-6 items-stretch">
            {/* Left 4 Cols: Repository List */}
            <div className="md:col-span-5 lg:col-span-4 bg-[#17191D] p-4 rounded-xl border border-[#25282D] space-y-4">
              <RepositoryList
                repositories={REPOSITORIES_DATA}
                selectedRepoId={selectedRepo.id}
                onSelectRepo={onSelectRepo}
              />
            </div>

            {/* Right 8 Cols: Repository Inspector */}
            <div className="md:col-span-7 lg:col-span-8 flex flex-col">
              <RepositoryInspector repository={selectedRepo} />
            </div>
          </div>

          {/* Mobile Single Column View (Visible <768px) */}
          <div className="block md:hidden space-y-6">
            <RepositoryList
              repositories={REPOSITORIES_DATA}
              selectedRepoId={selectedRepo.id}
              onSelectRepo={onSelectRepo}
            />
            <div className="pt-2 border-t border-[#25282D]">
              <RepositoryInspector repository={selectedRepo} />
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="px-6 py-2.5 bg-[#0B0D10] border-t border-[#25282D] flex items-center justify-between text-[10px] font-mono text-[#64748b]">
          <span>Use ↑ / ↓ arrows to navigate repos · Enter to open GitHub · ESC to return to room</span>
          <span className="hidden sm:inline text-[#65B8FF] font-bold">5 CODEBASES</span>
        </div>
      </div>
    </div>
  );
};
