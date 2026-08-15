import { useState, useCallback, useEffect } from 'react';
import type { RepositoryDefinition } from '../data/repositories';
import { REPOSITORIES_DATA } from '../data/repositories';

export interface LaptopWorkspaceState {
  isOpen: boolean;
  selectedRepoId: string;
  selectedRepo: RepositoryDefinition;
  openWorkspace: (projectId?: string) => void;
  closeWorkspace: () => void;
  selectRepo: (repoId: string) => void;
  nextRepo: () => void;
  prevRepo: () => void;
  openSelectedGithub: () => void;
}

export function useLaptopWorkspace(): LaptopWorkspaceState {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRepoId, setSelectedRepoId] = useState<string>(REPOSITORIES_DATA[0].id);

  const selectedRepo = REPOSITORIES_DATA.find(r => r.id === selectedRepoId) || REPOSITORIES_DATA[0];

  // Sync URL hash e.g. #/code/krishi
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/code/')) {
        const pId = hash.replace('#/code/', '');
        const target = REPOSITORIES_DATA.find(r => r.projectId === pId);
        if (target) {
          setSelectedRepoId(target.id);
          setIsOpen(true);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openWorkspace = useCallback((projectId?: string) => {
    if (projectId) {
      const target = REPOSITORIES_DATA.find(r => r.projectId === projectId);
      if (target) setSelectedRepoId(target.id);
    }
    setIsOpen(true);
    const activePId = projectId || selectedRepo.projectId;
    window.history.replaceState(null, '', `#/code/${activePId}`);
  }, [selectedRepo]);

  const closeWorkspace = useCallback(() => {
    setIsOpen(false);
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  const selectRepo = useCallback((repoId: string) => {
    const target = REPOSITORIES_DATA.find(r => r.id === repoId);
    if (target) {
      setSelectedRepoId(repoId);
      window.history.replaceState(null, '', `#/code/${target.projectId}`);
    }
  }, []);

  const nextRepo = useCallback(() => {
    const idx = REPOSITORIES_DATA.findIndex(r => r.id === selectedRepoId);
    if (idx < REPOSITORIES_DATA.length - 1) {
      const next = REPOSITORIES_DATA[idx + 1];
      setSelectedRepoId(next.id);
      window.history.replaceState(null, '', `#/code/${next.projectId}`);
    }
  }, [selectedRepoId]);

  const prevRepo = useCallback(() => {
    const idx = REPOSITORIES_DATA.findIndex(r => r.id === selectedRepoId);
    if (idx > 0) {
      const prev = REPOSITORIES_DATA[idx - 1];
      setSelectedRepoId(prev.id);
      window.history.replaceState(null, '', `#/code/${prev.projectId}`);
    }
  }, [selectedRepoId]);

  const openSelectedGithub = useCallback(() => {
    if (selectedRepo.repositoryUrl) {
      window.open(selectedRepo.repositoryUrl, '_blank', 'noopener,noreferrer');
    }
  }, [selectedRepo]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        nextRepo();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        prevRepo();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        openSelectedGithub();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeWorkspace();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextRepo, prevRepo, openSelectedGithub, closeWorkspace]);

  return {
    isOpen,
    selectedRepoId,
    selectedRepo,
    openWorkspace,
    closeWorkspace,
    selectRepo,
    nextRepo,
    prevRepo,
    openSelectedGithub
  };
}
