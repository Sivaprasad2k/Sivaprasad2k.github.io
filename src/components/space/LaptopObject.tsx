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
      className={`absolute left-[46%] bottom-[25%] w-64 h-44 transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-105' : 'hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.50}px, ${parallaxY * 0.50}px, 0)`
      }}
    >
      {/* Laptop Screen Lid */}
      <div className={`w-full h-32 bg-[#17191D] border-2 rounded-t-lg p-2.5 flex flex-col justify-between shadow-2xl transition-all ${
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
        <div className="bg-[#0B0D10] p-2 rounded border border-[#25282D] font-mono text-[9px] text-[#E8E2D6] space-y-1 my-auto">
          <div className="text-[8px] text-[#64748b] flex items-center gap-1">
            <FolderGit2 className="w-3 h-3 text-[#65B8FF]" />
            <span>repositories/</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[8px] text-slate-300 pt-0.5">
            <span className="text-[#7EE2A8] font-bold">▶ KRISHI</span>
            <span>▶ CAREERPATH</span>
            <span>▶ REAL ESTATE</span>
            <span>▶ AVIS</span>
          </div>
        </div>

        {/* Screen Bottom Bezel Logo */}
        <div className="text-center font-mono text-[8px] text-[#64748b] tracking-widest">
          SYSTEM WORKSTATION
        </div>
      </div>

      {/* Laptop Keyboard Deck Base */}
      <div className="w-[110%] -ml-[5%] h-4 bg-[#25282D] rounded-b-md border-t border-[#383d44] shadow-lg flex items-center justify-center relative">
        {/* Trackpad Notch */}
        <div className="w-12 h-1.5 bg-[#17191D] rounded-t border-t border-[#383d44]" />
      </div>
    </div>
  );
};
