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
      className={`absolute left-[68%] top-[15%] w-48 h-56 bg-[#17191D] border-4 rounded-lg p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#3A2920] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      {/* Photo Frame Matting & Avatar Container */}
      <div className="w-full h-36 bg-[#0B0D10] rounded border border-[#25282D] p-3 flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
        <div className="p-3 rounded-full bg-[#25282D] text-[#65B8FF] ring-2 ring-[#65B8FF]/30 shadow-inner">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div className="font-sans">
          <span className="font-bold text-white text-xs block">{PROFILE_DATA.name}</span>
          <span className="text-[9px] text-[#65B8FF] font-mono block">{PROFILE_DATA.role}</span>
        </div>
      </div>

      {/* Frame Bottom Inscription Tag */}
      <div className="bg-[#0B0D10] p-1.5 rounded border border-[#25282D] text-center font-mono text-[8px] text-[#64748b]">
        <span>WHO I AM · BACKEND ENGINEER</span>
      </div>
    </div>
  );
};
