import React from 'react';
import type { ProjectBookDefinition } from '../../data/projectBooks';
import { usePageNavigation } from '../../hooks/usePageNavigation';
import { BookCover } from './BookCover';
import { BookPage } from './BookPage';
import { BookPageTurn } from './BookPageTurn';
import { BookNavigation } from './BookNavigation';
import { BookCloseButton } from './BookCloseButton';

interface ProjectBookReaderProps {
  book: ProjectBookDefinition | null;
  currentPageIndex: number;
  turnDirection: 'next' | 'prev' | null;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  onOpenCover: () => void;
}

export const ProjectBookReader: React.FC<ProjectBookReaderProps> = ({
  book,
  currentPageIndex,
  turnDirection,
  onNext,
  onPrev,
  onClose,
  onOpenCover
}) => {
  usePageNavigation({
    isOpen: book !== null,
    onNext,
    onPrev,
    onClose
  });

  if (!book) return null;

  const isCover = currentPageIndex === 0;
  const currentPage = book.pages[currentPageIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0B0D10]/70 backdrop-blur-md select-none pointer-events-auto">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Open Book 2.5D Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label={`Project Book Reader: ${book.title}`}
        className="relative w-full max-w-4xl bg-[#17191D] border-4 border-[#3A2920] rounded-xl shadow-2xl z-10 flex flex-col overflow-hidden transition-all duration-500 scale-100"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#0B0D10] border-b-2 border-[#25282D] font-mono text-xs text-[#E8E2D6]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#65B8FF] font-bold uppercase">{book.categoryLabel}</span>
            <span className="text-white font-bold font-sans">{book.title}</span>
          </div>
          <BookCloseButton onClose={onClose} />
        </div>

        {/* Physical Open Notebook Spread (#E8E2D6 Warm Paper) */}
        <div className="relative w-full min-h-[500px] max-h-[75vh] bg-[#E8E2D6] overflow-hidden flex flex-col justify-between shadow-inner">
          {/* Center Gutter Spine Shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-black/15 via-black/25 to-black/15 pointer-events-none z-20 hidden md:block" />

          {/* Left/Right Paper Edge Shadow Filters */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-20" />

          {/* Page Turn Container */}
          <BookPageTurn turnDirection={turnDirection}>
            {isCover ? (
              <div className="p-8 sm:p-12 flex items-center justify-center min-h-[450px]">
                <BookCover book={book} onOpen={onOpenCover} />
              </div>
            ) : (
              <BookPage page={currentPage} book={book} />
            )}
          </BookPageTurn>
        </div>

        {/* Footer Page Navigation Bar */}
        <BookNavigation
          currentPageIndex={currentPageIndex}
          totalPages={book.pages.length}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>
    </div>
  );
};
