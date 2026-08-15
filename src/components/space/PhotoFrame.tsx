import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { ShieldCheck } from 'lucide-react';

interface PhotoFrameProps {
  parallaxX: number;
  parallaxY: number;
  onClick: () => void;
  isFocused: boolean;
}

export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  parallaxX,
  parallaxY,
  onClick,
  isFocused
}) => {
  return (
    <div
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label="Identity Portrait - Siva Prasad M L"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute left-[10%] top-[14%] w-52 h-64 bg-[#141619] border-4 rounded-lg p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#2D1F17] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      {/* Picture Fixture Overhead Lamp Bar */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-3 bg-[#25282D] rounded-full border-t border-[#383d44] shadow-lg flex items-center justify-center pointer-events-none">
        <div className="w-20 h-1 bg-amber-400/90 rounded-full blur-[1px]" />
      </div>

      {/* Photo Frame Matting & Portrait Container */}
      <div className="w-full h-44 bg-[#090B0D] rounded border border-[#202328] p-4 flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden shadow-inner">
        <div className="p-3.5 rounded-full bg-[#1C2026] text-[#65B8FF] ring-2 ring-[#65B8FF]/40 shadow-2xl">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <div className="font-sans">
          <span className="font-bold text-white text-xs block tracking-wide">{PROFILE_DATA.name}</span>
          <span className="text-[9px] text-[#65B8FF] font-mono block mt-0.5">{PROFILE_DATA.role}</span>
        </div>
      </div>

      {/* Frame Bottom Metal Inscription Tag */}
      <div className="bg-[#090B0D] p-2 rounded border border-[#202328] text-center font-mono text-[8px] text-[#8494a8] tracking-widest font-bold">
        <span>WHO I AM · BACKEND ENGINEER</span>
      </div>
    </div>
  );
};
