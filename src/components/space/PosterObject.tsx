import React from 'react';
import type { RoomObjectDefinition } from '../../data/room';
import { ExternalLink } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../Icons';

interface PosterObjectProps {
  objectDef: RoomObjectDefinition;
  parallaxX: number;
  parallaxY: number;
  onClick: () => void;
  isFocused: boolean;
}

export const PosterObject: React.FC<PosterObjectProps> = ({
  objectDef,
  parallaxX,
  parallaxY,
  onClick,
  isFocused
}) => {
  const isLinkedin = objectDef.id === 'poster-linkedin';

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={objectDef.title}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute ${isLinkedin ? 'left-[16%] top-[44%]' : 'left-[23%] top-[44%]'} w-24 h-12 bg-[#111315] border-2 rounded-md p-1.5 flex items-center justify-between transition-all duration-300 cursor-pointer z-20 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#1E2126] hover:border-[#65B8FF]/70 hover:scale-[1.05]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      <div className="flex items-center gap-1.5">
        <div className={`p-1 rounded bg-[#08090B] border border-[#1E2126] ${
          isLinkedin ? 'text-[#65B8FF]' : 'text-rose-400'
        }`}>
          {isLinkedin ? <LinkedinIcon className="w-4 h-4" /> : <InstagramIcon className="w-4 h-4" />}
        </div>
        <span className="font-mono text-[8px] font-bold text-[#E8E2D6] uppercase tracking-wider">
          {isLinkedin ? 'LINKEDIN' : 'INSTAGRAM'}
        </span>
      </div>
      <ExternalLink className="w-2.5 h-2.5 text-[#8494a8]" />
    </div>
  );
};
