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
      className={`absolute left-1/2 -translate-x-1/2 bottom-[24%] w-68 h-46 transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-105' : 'hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(calc(-50% + ${parallaxX * 0.50}px), ${parallaxY * 0.50}px, 0)`
      }}
    >
      {/* Laptop Screen Lid */}
      <div className={`w-full h-34 bg-[#141619] border-2 rounded-t-lg p-2.5 flex flex-col justify-between shadow-2xl transition-all ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30'
          : 'border-[#25282D] group-hover:border-[#65B8FF]/70'
      }`}>
        {/* Screen Top Bar */}
        <div className="flex items-center justify-between border-b border-[#25282D] pb-1 font-mono text-[9px] text-[#94a3b8]">
          <div className="flex items-center gap-1 text-[#65B8FF] font-bold">
            <Terminal className="w-3 h-3" />
            <span>SIVA / CODE</span>
          </div>
          <span className="text-[8px] text-[#7EE2A8]">github.com/Sivaprasad2k</span>
        </div>

        {/* Static Workspace Directory Display */}
        <div className="bg-[#0B0D10] p-2 rounded border border-[#25282D] font-mono text-[9px] text-[#E8E2D6] space-y-1 my-auto shadow-inner">
          <div className="text-[8px] text-[#64748b] flex items-center gap-1">
            <FolderGit2 className="w-3 h-3 text-[#65B8FF]" />
            <span>repositories/</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[8px] text-slate-300 pt-0.5 font-bold">
            <span className="text-[#7EE2A8]">▶ KRISHI</span>
            <span>▶ CAREERPATH</span>
            <span>▶ REAL ESTATE</span>
            <span>▶ AVIS</span>
          </div>
        </div>

        {/* Screen Bottom Bezel Logo */}
        <div className="text-center font-mono text-[8px] text-[#64748b] tracking-widest uppercase font-bold">
          WHAT I BUILD
        </div>
      </div>

      {/* Laptop Keyboard Deck Base & Shadow */}
      <div className="w-[110%] -ml-[5%] h-4 bg-[#202328] rounded-b-md border-t border-[#383d44] shadow-2xl flex items-center justify-center relative">
        {/* Trackpad Notch */}
        <div className="w-12 h-1.5 bg-[#141619] rounded-t border-t border-[#383d44]" />
      </div>
      <div className="absolute -bottom-2 left-0 right-0 h-3 bg-black/60 blur-sm pointer-events-none" />
    </div>
  );
};
