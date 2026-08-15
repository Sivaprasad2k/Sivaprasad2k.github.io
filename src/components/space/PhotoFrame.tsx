import React from 'react';
import { User, ShieldCheck } from 'lucide-react';

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
      aria-label="Identity Portrait - Siva Prasad M L, Backend Engineer"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute left-[15%] top-[22%] w-36 h-44 bg-[#17191D] border-4 rounded-md p-3 flex flex-col items-center justify-between transition-all duration-300 cursor-pointer z-20 group shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#3A2920] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0) rotate(-2deg)`
      }}
    >
      {/* Frame Hanger String */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-6 border-b border-l border-r border-[#3A2920] rounded-b-md pointer-events-none" />

      {/* Portrait Content Area */}
      <div className="w-full h-28 bg-[#0B0D10] border border-[#25282D] rounded flex flex-col items-center justify-center p-2 relative overflow-hidden group-hover:border-[#65B8FF]/40 transition-colors">
        <div className="w-12 h-12 rounded-full bg-[#25282D] border border-slate-700 flex items-center justify-center text-[#65B8FF] mb-1">
          <User className="w-6 h-6" />
        </div>
        <span className="font-sans font-bold text-[11px] text-[#E8E2D6] tracking-tight">SIVA PRASAD</span>
        <span className="font-mono text-[8px] text-[#65B8FF]">BACKEND ENGINEER</span>
      </div>

      {/* Bottom Name Plate */}
      <div className="w-full bg-[#25282D] p-1 rounded border border-[#383d44] text-center font-mono text-[9px] text-[#E8E2D6] flex items-center justify-center gap-1">
        <ShieldCheck className="w-3 h-3 text-[#7EE2A8]" />
        <span>SYS_ID: SP-2K</span>
      </div>
    </div>
  );
};
