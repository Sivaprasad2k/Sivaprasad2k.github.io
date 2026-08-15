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
      className={`absolute ${isLinkedin ? 'left-[85%] top-[15%]' : 'left-[85%] top-[42%]'} w-36 h-48 bg-[#17191D] border-2 rounded-md p-2.5 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#25282D] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      {/* Poster Top Bar */}
      <div className="flex items-center justify-between border-b border-[#25282D] pb-1 font-mono text-[8px] text-[#64748b]">
        <span className="font-bold text-[#65B8FF] uppercase">{isLinkedin ? 'LINKEDIN' : 'INSTAGRAM'}</span>
        <ExternalLink className="w-2.5 h-2.5" />
      </div>

      {/* Icon Graphic Center */}
      <div className={`p-4 rounded-lg bg-[#0B0D10] border border-[#25282D] flex flex-col items-center justify-center space-y-1 my-auto text-center ${
        isLinkedin ? 'text-[#65B8FF]' : 'text-rose-400'
      }`}>
        {isLinkedin ? <LinkedinIcon className="w-6 h-6" /> : <InstagramIcon className="w-6 h-6" />}
        <span className="font-sans font-bold text-white text-[10px] block mt-1">{objectDef.title}</span>
      </div>

      {/* Bottom Label */}
      <div className="text-center font-mono text-[8px] text-[#64748b] truncate">
        {isLinkedin ? 'Professional Network' : 'Personal Context'}
      </div>
    </div>
  );
};
