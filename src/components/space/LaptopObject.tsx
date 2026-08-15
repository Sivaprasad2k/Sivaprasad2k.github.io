import React from 'react';
import { Terminal, FolderGit2 } from 'lucide-react';

interface LaptopObjectProps {
  parallaxX: number;
  parallaxY: number;
  onClick: () => void;
  isFocused: boolean;
}

export const LaptopObject: React.FC<LaptopObjectProps> = ({
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
      aria-label="Workstation Laptop - SIVA / CODE Workspace"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute left-[48%] -translate-x-1/2 top-[44%] w-80 h-52 transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-105' : 'hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(calc(-50% + ${parallaxX * 0.50}px), ${parallaxY * 0.50}px, 0)`
      }}
    >
      {/* Laptop Screen Lid (#121417 Dark Metallic Screen Frame) */}
      <div className={`w-full h-40 bg-[#121417] border-2 rounded-t-lg p-3 flex flex-col justify-between shadow-2xl transition-all ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30'
          : 'border-[#25282D] group-hover:border-[#65B8FF]/70'
      }`}>
        {/* Screen Top Header Bar */}
        <div className="flex items-center justify-between border-b border-[#202328] pb-1 font-mono text-[9px] text-[#8494a8]">
          <div className="flex items-center gap-1.5 text-[#65B8FF] font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>SIVA / CODE</span>
          </div>
          <span className="text-[8px] text-[#7EE2A8] font-mono">github.com/Sivaprasad2k</span>
        </div>

        {/* Workspace Code Terminal Window */}
        <div className="bg-[#08090B] p-2.5 rounded border border-[#202328] font-mono text-[9px] text-[#E8E2D6] space-y-1 my-auto shadow-inner">
          <div className="text-[8px] text-[#8494a8] flex items-center gap-1">
            <FolderGit2 className="w-3.5 h-3.5 text-[#65B8FF]" />
            <span>repositories/</span>
          </div>
          <div className="space-y-0.5 text-[8.5px] text-emerald-400 font-mono font-bold pl-2 pt-0.5">
            <div>&gt; KRISHI</div>
            <div>&gt; CAREERPATH</div>
            <div>&gt; REAL ESTATE HUB</div>
            <div>&gt; AVIS</div>
            <div>&gt; RURAL-INFRASTRUCTURE</div>
          </div>
        </div>

        {/* Screen Bottom Bezel */}
        <div className="text-center font-mono text-[8px] text-[#64748b] tracking-widest uppercase font-bold">
          WHAT I BUILD
        </div>
      </div>

      {/* Laptop Keyboard Deck Base & Contact Shadow */}
      <div className="w-[110%] -ml-[5%] h-5 bg-[#1C2026] rounded-b-md border-t border-[#383d44] shadow-2xl flex items-center justify-center relative">
        {/* Trackpad Notch */}
        <div className="w-16 h-2 bg-[#121417] rounded-t border-t border-[#383d44]" />
      </div>
      <div className="absolute -bottom-3 left-0 right-0 h-4 bg-black/70 blur-md pointer-events-none" />
    </div>
  );
};
