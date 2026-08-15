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
      className={`absolute left-[14%] top-[15%] w-[175px] h-[215px] bg-[#111316] border-4 rounded-lg p-2.5 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#2A1D17] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      {/* Picture Fixture Overhead Lamp Bar */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-26 h-2.5 bg-[#202328] rounded-full border-t border-[#383d44] shadow-lg flex items-center justify-center pointer-events-none">
        <div className="w-18 h-1 bg-amber-400/90 rounded-full blur-[1px]" />
      </div>

      {/* Photo Frame Matting & Portrait Container */}
      <div className="w-full h-36 bg-[#08090B] rounded border border-[#1A1D22] p-3 flex flex-col items-center justify-center text-center space-y-1.5 relative overflow-hidden shadow-inner">
        <div className="p-3 rounded-full bg-[#171A20] text-[#65B8FF] ring-2 ring-[#65B8FF]/30 shadow-2xl">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div className="font-sans">
          <span className="font-bold text-white text-[11px] block tracking-wide">{PROFILE_DATA.name}</span>
          <span className="text-[8.5px] text-[#65B8FF] font-mono block mt-0.5">{PROFILE_DATA.role}</span>
        </div>
      </div>

      {/* Frame Bottom Metal Inscription Tag */}
      <div className="bg-[#08090B] p-1.5 rounded border border-[#1A1D22] text-center font-mono text-[7.5px] text-[#8494a8] tracking-widest font-bold">
        <span>WHO I AM · BACKEND ENGINEER</span>
      </div>
    </div>
  );
};
