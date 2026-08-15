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
      className={`absolute ${isLinkedin ? 'left-[71%] top-[10%]' : 'left-[71%] top-[36%]'} w-44 h-46 bg-[#141619] border-2 rounded-lg p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#25282D] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      {/* Poster Top Bar */}
      <div className="flex items-center justify-between border-b border-[#202328] pb-1.5 font-mono text-[9px] text-[#8494a8]">
        <span className="font-bold text-[#65B8FF] uppercase tracking-wider">{isLinkedin ? 'LINKEDIN' : 'INSTAGRAM'}</span>
        <ExternalLink className="w-3 h-3" />
      </div>

      {/* Icon Graphic Center */}
      <div className={`p-4 rounded-lg bg-[#090B0D] border border-[#202328] flex flex-col items-center justify-center space-y-1.5 my-auto text-center shadow-inner ${
        isLinkedin ? 'text-[#65B8FF]' : 'text-rose-400'
      }`}>
        {isLinkedin ? <LinkedinIcon className="w-7 h-7" /> : <InstagramIcon className="w-7 h-7" />}
        <span className="font-mono text-[9px] text-[#8494a8] block mt-1">
          {isLinkedin ? 'linkedin.com/in/sivaprasad2k' : 'instagram.com/siva.codespace'}
        </span>
      </div>

      {/* Bottom Label */}
      <div className="text-center font-mono text-[8px] text-[#8494a8] tracking-widest font-bold uppercase">
        {isLinkedin ? 'Professional Network' : 'Personal Context'}
      </div>
    </div>
  );
};
