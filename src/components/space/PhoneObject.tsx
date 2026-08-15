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
      className={`absolute left-[82%] top-[52%] w-18 h-32 transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-110 -translate-y-2' : 'hover:-translate-y-1 hover:scale-105'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.45}px, ${parallaxY * 0.45}px, 0)`
      }}
    >
      {/* Phone Body Frame & Screen */}
      <div className={`w-full h-full bg-[#141619] border-2 rounded-xl p-2 flex flex-col justify-between shadow-2xl transition-all ${
        isFocused
          ? 'border-[#7EE2A8] ring-4 ring-[#7EE2A8]/30'
          : 'border-[#25282D] group-hover:border-[#7EE2A8]/70'
      }`}>
        {/* Screen Top Header */}
        <div className="flex items-center justify-between border-b border-[#202328] pb-1 font-mono text-[8px]">
          <Mail className="w-2.5 h-2.5 text-[#7EE2A8]" />
          <span className="text-[#7EE2A8] font-bold uppercase">CONTACT</span>
        </div>

        {/* Active Display Items */}
        <div className="bg-[#090B0D] p-1.5 rounded-lg border border-[#202328] font-mono text-[7px] text-[#E8E2D6] space-y-1 my-auto shadow-inner text-center">
          <PhoneCall className="w-3.5 h-3.5 text-[#7EE2A8] mx-auto animate-pulse" />
          <div className="space-y-0.5 font-bold text-slate-300">
            <span className="block text-[#7EE2A8]">✉ EMAIL</span>
            <span className="block">in LINKEDIN</span>
            <span className="block">⌨ GITHUB</span>
          </div>
        </div>

        {/* Bottom Speaker Notch */}
        <div className="flex justify-center gap-1">
          <span className="w-1 h-1 bg-[#202328] rounded-full" />
          <span className="w-1 h-1 bg-[#202328] rounded-full" />
        </div>
      </div>

      {/* Desk Stand Base & Contact Shadow */}
      <div className="w-[120%] -ml-[10%] h-3 bg-[#202328] rounded-b-md border-t border-[#383d44] shadow-lg -mt-1" />
      <div className="absolute -bottom-2 left-0 right-0 h-2 bg-black/70 blur-xs pointer-events-none" />
    </div>
  );
};
