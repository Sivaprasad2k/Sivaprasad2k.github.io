import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookNavigationProps {
  currentPageIndex: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export const BookNavigation: React.FC<BookNavigationProps> = ({
  currentPageIndex,
  totalPages,
  onPrev,
  onNext
}) => {
  const isFirst = currentPageIndex === 0;
  const isLast = currentPageIndex === totalPages - 1;

  const currentFormatted = currentPageIndex < 9 ? `0${currentPageIndex + 1}` : `${currentPageIndex + 1}`;
  const totalFormatted = totalPages < 10 ? `0${totalPages}` : `${totalPages}`;

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#17191D] border-t-2 border-[#25282D] font-mono text-xs text-[#E8E2D6] select-none">
      {/* Previous Page Control */}
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all font-bold ${
          isFirst
            ? 'opacity-40 cursor-not-allowed text-slate-600'
            : 'bg-[#0B0D10] border border-[#25282D] text-[#65B8FF] hover:bg-[#25282D] hover:text-white'
        }`}
        aria-label="Previous Page (ArrowLeft)"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">PREVIOUS</span>
      </button>

      {/* Page Indicator */}
      <div className="flex items-center gap-2 text-xs font-bold font-mono">
        <span className="text-[#65B8FF]">PAGE {currentFormatted}</span>
        <span className="text-[#64748b]">/</span>
        <span className="text-slate-400">{totalFormatted}</span>
      </div>

      {/* Next Page Control */}
      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-all font-bold ${
          isLast
            ? 'opacity-40 cursor-not-allowed text-slate-600'
            : 'bg-[#0B0D10] border border-[#25282D] text-[#65B8FF] hover:bg-[#25282D] hover:text-white'
        }`}
        aria-label="Next Page (ArrowRight)"
      >
        <span className="hidden sm:inline">NEXT</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
