import React from 'react';
import type { RoomObjectDefinition } from '../../data/room';
import { BookOpen } from 'lucide-react';

interface ProjectBookProps {
  objectDef: RoomObjectDefinition;
  parallaxX: number;
  parallaxY: number;
  onClick: () => void;
  isFocused: boolean;
}

export const ProjectBook: React.FC<ProjectBookProps> = ({
  objectDef,
  parallaxX,
  parallaxY,
  onClick,
  isFocused
}) => {
  const { title, categoryLabel, position } = objectDef;
  const isStanding = position.isStanding !== false;

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Project Book Notebook - ${title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute ${isStanding ? 'w-20 h-32' : 'w-28 h-20'} transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-110 -translate-y-3 shadow-2xl' : 'hover:-translate-y-1.5 hover:scale-105 shadow-xl'
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate3d(${parallaxX * 0.45}px, ${parallaxY * 0.45}px, 0) rotate(${position.rotation || 0}deg)`
      }}
    >
      {/* Book Cover Container (#E2DCD0 Warm Paper Cover with Dark Spine) */}
      <div className={`w-full h-full bg-[#E2DCD0] border-2 rounded-r-md p-2 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-2xl ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30'
          : 'border-[#2A1D17] group-hover:border-[#65B8FF]/70'
      }`}>
        {/* Book Spine Overlay Line */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2B231B] border-r border-[#1B140D]" />

        {/* Page Edges Visual Texture */}
        <div className="absolute right-0 top-1 bottom-1 w-1 bg-[#1B140D]/30 rounded-r-sm" />

        {/* Book Cover Header */}
        <div className="pl-2 space-y-0.5 font-mono">
          <span className="text-[7px] font-bold text-slate-700 block uppercase tracking-wider">{categoryLabel}</span>
          <h4 className="text-[10.5px] font-extrabold font-mono text-[#0B0D10] leading-tight group-hover:text-sky-900 transition-colors uppercase tracking-tight">
            {title}
          </h4>
        </div>

        {/* Book Icon & Label */}
        <div className="pl-2 flex items-center justify-between border-t border-[#0B0D10]/20 pt-1 font-mono text-[7.5px] text-slate-800 font-bold">
          <div className="flex items-center gap-1">
            <BookOpen className="w-2.5 h-2.5 text-sky-900" />
            <span>BOOK</span>
          </div>
          <span className="text-slate-900 font-extrabold">2024</span>
        </div>
      </div>

      {/* Desk Surface Contact Shadow */}
      <div className="absolute -bottom-2 left-0 right-0 h-2 bg-black/80 blur-xs pointer-events-none" />
    </div>
  );
};
