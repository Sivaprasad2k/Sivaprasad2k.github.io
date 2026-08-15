import React from 'react';
import type { ProjectBookDefinition } from '../../data/projectBooks';
import { BookOpen, ArrowRight } from 'lucide-react';

interface BookCoverProps {
  book: ProjectBookDefinition;
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ book, onOpen }) => {
  const { title, tagline, year, status, categoryLabel } = book;

  return (
    <div className="w-full max-w-lg mx-auto bg-[#17191D] border-4 border-[#3A2920] rounded-r-xl p-8 sm:p-12 shadow-2xl space-y-8 font-mono text-[#E8E2D6] relative overflow-hidden select-none">
      {/* Spine Line */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#25282D] border-r-2 border-[#3A2920]" />

      {/* Page Stack Edge */}
      <div className="absolute right-0 top-2 bottom-2 w-2 bg-[#E8E2D6]/50 rounded-r" />

      <div className="pl-4 space-y-6">
        <div className="flex items-center justify-between border-b border-[#25282D] pb-3">
          <span className="text-[10px] text-[#65B8FF] font-bold tracking-widest uppercase">{categoryLabel}</span>
          <span className="text-[10px] text-[#7EE2A8] font-bold px-2 py-0.5 rounded bg-[#0B0D10] border border-[#25282D]">
            {status}
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-white leading-tight">{title}</h2>
          <p className="text-xs text-[#65B8FF] font-mono leading-relaxed">{tagline}</p>
        </div>

        <div className="space-y-1 bg-[#0B0D10] p-4 rounded-lg border border-[#25282D] text-xs">
          <span className="text-[10px] text-[#64748b] uppercase font-bold block">CASE STUDY YEAR</span>
          <span className="font-bold text-white text-sm">{year} ARCHITECTURE</span>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="w-full py-3.5 px-6 rounded-lg bg-[#65B8FF] hover:bg-[#52a4eb] text-[#0B0D10] font-bold font-sans text-sm transition-all flex items-center justify-center gap-2 shadow-xl focus:ring-2 focus:ring-[#65B8FF]"
        >
          <BookOpen className="w-4 h-4" />
          <span>OPEN CASE STUDY NOTEBOOK</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
