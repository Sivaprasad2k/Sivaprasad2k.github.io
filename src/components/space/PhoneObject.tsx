import React from 'react';
import { Mail, PhoneCall } from 'lucide-react';

interface PhoneObjectProps {
  parallaxX: number;
  parallaxY: number;
  onClick: () => void;
  isFocused: boolean;
}

export const PhoneObject: React.FC<PhoneObjectProps> = ({
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
      aria-label="Desk Phone - Direct Contact Inquiry"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute left-[74%] top-[48%] w-16 h-28 transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-110 -translate-y-2' : 'hover:-translate-y-1 hover:scale-105'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.45}px, ${parallaxY * 0.45}px, 0)`
      }}
    >
      {/* Phone Stand & Body Frame */}
      <div className={`w-full h-full bg-[#17191D] border-2 rounded-xl p-2 flex flex-col justify-between shadow-2xl transition-all ${
        isFocused
          ? 'border-[#7EE2A8] ring-4 ring-[#7EE2A8]/30'
          : 'border-[#25282D] group-hover:border-[#7EE2A8]/70'
      }`}>
        {/* Screen Top Indicator Bar */}
        <div className="flex items-center justify-between border-b border-[#25282D] pb-1 font-mono text-[8px]">
          <Mail className="w-2.5 h-2.5 text-[#7EE2A8]" />
          <span className="text-[#7EE2A8] font-bold">READY</span>
        </div>

        {/* Screen Center Active Display */}
        <div className="bg-[#0B0D10] p-2 rounded-lg border border-[#25282D] text-center space-y-1 my-auto shadow-inner">
          <PhoneCall className="w-4 h-4 text-[#7EE2A8] mx-auto animate-pulse" />
          <span className="font-mono text-[7px] text-[#E8E2D6] font-bold block uppercase">CONTACT</span>
        </div>

        {/* Bottom Speaker Grille */}
        <div className="flex justify-center gap-1">
          <span className="w-1 h-1 bg-[#25282D] rounded-full" />
          <span className="w-1 h-1 bg-[#25282D] rounded-full" />
          <span className="w-1 h-1 bg-[#25282D] rounded-full" />
        </div>
      </div>

      {/* Desk Surface Contact Shadow */}
      <div className="absolute -bottom-1.5 left-0 right-0 h-2 bg-black/60 blur-xs pointer-events-none" />
    </div>
  );
};
