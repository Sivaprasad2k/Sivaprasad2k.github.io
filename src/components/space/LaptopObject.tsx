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
      className={`absolute left-[48%] -translate-x-1/2 top-[44%] w-72 h-48 transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-105' : 'hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(calc(-50% + ${parallaxX * 0.50}px), ${parallaxY * 0.50}px, 0)`
      }}
    >
      {/* Laptop Screen Lid (#111316 Dark Metallic Screen Frame) */}
      <div className={`w-full h-36 bg-[#111316] border-2 rounded-t-lg p-2.5 flex flex-col justify-between shadow-2xl transition-all ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30'
          : 'border-[#1E2126] group-hover:border-[#65B8FF]/70'
      }`}>
        {/* Screen Top Header Bar */}
        <div className="flex items-center justify-between border-b border-[#1E2126] pb-1 font-mono text-[8.5px] text-[#8494a8]">
          <div className="flex items-center gap-1 text-[#65B8FF] font-bold">
            <Terminal className="w-3 h-3" />
            <span>SIVA / CODE</span>
          </div>
          <span className="text-[7.5px] text-[#7EE2A8] font-mono">github.com/Sivaprasad2k</span>
        </div>

        {/* Workspace Code Terminal Window */}
        <div className="bg-[#060709] p-2 rounded border border-[#1E2126] font-mono text-[8.5px] text-[#E8E2D6] space-y-0.5 my-auto shadow-inner">
          <div className="text-[7.5px] text-[#8494a8] flex items-center gap-1">
            <FolderGit2 className="w-3 h-3 text-[#65B8FF]" />
            <span>repositories/</span>
          </div>
          <div className="space-y-0.5 text-[8px] text-emerald-400 font-mono font-bold pl-2 pt-0.5">
            <div>&gt; KRISHI</div>
            <div>&gt; CAREERPATH</div>
            <div>&gt; REAL ESTATE HUB</div>
            <div>&gt; AVIS</div>
            <div>&gt; RURAL-INFRASTRUCTURE</div>
          </div>
        </div>

        {/* Screen Bottom Bezel */}
        <div className="text-center font-mono text-[7.5px] text-[#64748b] tracking-widest uppercase font-bold">
          WHAT I BUILD
        </div>
      </div>

      {/* Laptop Keyboard Deck Base & Contact Shadow */}
      <div className="w-[108%] -ml-[4%] h-4 bg-[#181B20] rounded-b-md border-t border-[#33373E] shadow-2xl flex items-center justify-center relative">
        {/* Trackpad Notch */}
        <div className="w-14 h-1.5 bg-[#111316] rounded-t border-t border-[#33373E]" />
      </div>
      <div className="absolute -bottom-2.5 left-0 right-0 h-3 bg-black/80 blur-md pointer-events-none" />
    </div>
  );
};
