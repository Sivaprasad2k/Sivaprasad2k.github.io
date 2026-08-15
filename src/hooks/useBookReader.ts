import { useState, useCallback, useEffect } from 'react';
import type { ProjectBookDefinition, ProjectPage } from '../data/projectBooks';
import { PROJECT_BOOKS_DATA } from '../data/projectBooks';

export interface BookReaderState {
  activeProjectId: string | null;
  activeBook: ProjectBookDefinition | null;
  currentPageIndex: number;
  currentPage: ProjectPage | null;
  totalPages: number;
  isOpening: boolean;
  turnDirection: 'next' | 'prev' | null;
  openBook: (projectId: string) => void;
  closeBook: () => void;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (pageIndex: number) => void;
}

export function useBookReader(): BookReaderState {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev' | null>(null);

  const activeBook = PROJECT_BOOKS_DATA.find(b => b.projectId === activeProjectId) || null;
  const totalPages = activeBook ? activeBook.pages.length : 0;
  const currentPage = activeBook ? activeBook.pages[currentPageIndex] || null : null;

  // Sync URL hash deep linking e.g. #/work/krishi
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/work/')) {
        const pId = hash.replace('#/work/', '');
        const target = PROJECT_BOOKS_DATA.find(b => b.projectId === pId);
        if (target) {
          setActiveProjectId(pId);
          setCurrentPageIndex(0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial load hash
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openBook = useCallback((projectId: string) => {
    const book = PROJECT_BOOKS_DATA.find(b => b.projectId === projectId);
    if (book) {
      setIsOpening(true);
      setActiveProjectId(projectId);
      setCurrentPageIndex(0);
      window.history.replaceState(null, '', `#/work/${projectId}`);
      setTimeout(() => setIsOpening(false), 600);
    }
  }, []);

  const closeBook = useCallback(() => {
    setActiveProjectId(null);
    setCurrentPageIndex(0);
    setTurnDirection(null);
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  const nextPage = useCallback(() => {
    if (!activeBook) return;
    if (currentPageIndex < totalPages - 1) {
      setTurnDirection('next');
      setCurrentPageIndex(prev => prev + 1);
      setTimeout(() => setTurnDirection(null), 400);
    }
  }, [activeBook, currentPageIndex, totalPages]);

  const prevPage = useCallback(() => {
    if (!activeBook) return;
    if (currentPageIndex > 0) {
      setTurnDirection('prev');
      setCurrentPageIndex(prev => prev - 1);
      setTimeout(() => setTurnDirection(null), 400);
    }
  }, [activeBook, currentPageIndex]);

  const goToPage = useCallback((pageIndex: number) => {
    if (!activeBook) return;
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setTurnDirection(pageIndex > currentPageIndex ? 'next' : 'prev');
      setCurrentPageIndex(pageIndex);
      setTimeout(() => setTurnDirection(null), 400);
    }
  }, [activeBook, currentPageIndex, totalPages]);

  return {
    activeProjectId,
    activeBook,
    currentPageIndex,
    currentPage,
    totalPages,
    isOpening,
    turnDirection,
    openBook,
    closeBook,
    nextPage,
    prevPage,
    goToPage
  };
}
