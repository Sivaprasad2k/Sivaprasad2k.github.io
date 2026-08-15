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

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Project Book - ${title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute w-24 h-32 transition-all duration-500 cursor-pointer z-30 group perspective-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-110 -translate-y-4 shadow-2xl' : 'hover:-translate-y-2 hover:scale-105 shadow-lg'
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate3d(${parallaxX * 0.50}px, ${parallaxY * 0.50}px, 0) rotate(${position.rotation || 0}deg)`
      }}
    >
      {/* Book Cover Container */}
      <div className={`w-full h-full bg-[#17191D] border-2 rounded-r-md p-2.5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30'
          : 'border-[#3A2920] group-hover:border-[#65B8FF]/70'
      }`}>
        {/* Book Spine Overlay Line */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#25282D] border-r border-[#3A2920]" />

        {/* Page Edges Visual Texture */}
        <div className="absolute right-0 top-1 bottom-1 w-1 bg-[#E8E2D6]/40 rounded-r-sm" />

        {/* Book Cover Header */}
        <div className="pl-2 space-y-1 font-mono">
          <span className="text-[8px] font-bold text-[#65B8FF] block uppercase tracking-wider">{categoryLabel}</span>
          <h4 className="text-xs font-bold font-sans text-[#E8E2D6] leading-tight group-hover:text-[#65B8FF] transition-colors">
            {title}
          </h4>
        </div>

        {/* Book Icon & Year */}
        <div className="pl-2 flex items-center justify-between border-t border-[#25282D] pt-1.5 font-mono text-[8px] text-[#94a3b8]">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-[#7EE2A8]" />
            <span>BOOK</span>
          </div>
          <span>2024</span>
        </div>
      </div>
    </div>
  );
};
