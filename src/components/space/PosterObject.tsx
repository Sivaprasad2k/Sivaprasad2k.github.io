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
  const { id, title, categoryLabel, subtitle, position } = objectDef;
  const isLinkedIn = id === 'poster-linkedin';

  return (
    <div
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Poster - ${title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute w-28 h-36 bg-[#17191D] border-2 rounded-sm p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? isLinkedIn ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105' : 'border-rose-400 ring-4 ring-rose-400/30 scale-105'
          : isLinkedIn ? 'border-[#25282D] hover:border-[#65B8FF] hover:scale-[1.02]' : 'border-[#25282D] hover:border-rose-400 hover:scale-[1.02]'
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0) rotate(${position.rotation || 0}deg)`
      }}
    >
      {/* Poster Header */}
      <div className="flex items-center justify-between font-mono text-[8px] text-[#94a3b8] border-b border-[#25282D] pb-1">
        <span className="font-bold text-[#E8E2D6]">{categoryLabel}</span>
        <ExternalLink className={`w-3 h-3 ${isLinkedIn ? 'text-[#65B8FF]' : 'text-rose-400'}`} />
      </div>

      {/* Brand Icon Center Graphic */}
      <div className="my-auto flex flex-col items-center justify-center space-y-1">
        <div className={`p-2.5 rounded-full bg-[#0B0D10] border ${
          isLinkedIn ? 'border-[#65B8FF]/40 text-[#65B8FF]' : 'border-rose-400/40 text-rose-400'
        }`}>
          {isLinkedIn ? <LinkedinIcon className="w-5 h-5" /> : <InstagramIcon className="w-5 h-5" />}
        </div>
        <span className="font-sans font-bold text-[10px] text-[#E8E2D6] text-center">{title}</span>
      </div>

      {/* Poster Subtitle */}
      <div className="text-[8px] font-mono text-[#64748b] text-center truncate">
        {subtitle}
      </div>
    </div>
  );
};
