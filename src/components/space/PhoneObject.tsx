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
      className={`absolute left-[82%] top-[50%] w-16 h-28 transition-all duration-300 cursor-pointer z-30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused ? 'scale-110 -translate-y-2' : 'hover:-translate-y-1 hover:scale-105'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.45}px, ${parallaxY * 0.45}px, 0)`
      }}
    >
      {/* Phone Body Frame & Screen */}
      <div className={`w-full h-full bg-[#111316] border-2 rounded-xl p-1.5 flex flex-col justify-between shadow-2xl transition-all ${
        isFocused
          ? 'border-[#7EE2A8] ring-4 ring-[#7EE2A8]/30'
          : 'border-[#1E2126] group-hover:border-[#7EE2A8]/70'
      }`}>
        {/* Screen Top Header */}
        <div className="flex items-center justify-between border-b border-[#1E2126] pb-0.5 font-mono text-[7.5px]">
          <Mail className="w-2 h-2 text-[#7EE2A8]" />
          <span className="text-[#7EE2A8] font-bold uppercase">CONTACT</span>
        </div>

        {/* Active Display Items */}
        <div className="bg-[#060709] p-1 rounded-lg border border-[#1E2126] font-mono text-[6.5px] text-[#E8E2D6] space-y-0.5 my-auto shadow-inner text-center">
          <PhoneCall className="w-3 h-3 text-[#7EE2A8] mx-auto animate-pulse" />
          <div className="space-y-0.5 font-bold text-slate-300">
            <span className="block text-[#7EE2A8]">✉ EMAIL</span>
            <span className="block">in LINKEDIN</span>
            <span className="block">⌨ GITHUB</span>
          </div>
        </div>

        {/* Bottom Speaker Notch */}
        <div className="flex justify-center gap-1">
          <span className="w-1 h-1 bg-[#1E2126] rounded-full" />
          <span className="w-1 h-1 bg-[#1E2126] rounded-full" />
        </div>
      </div>

      {/* Desk Stand Base & Contact Shadow */}
      <div className="w-[115%] -ml-[7.5%] h-2.5 bg-[#1C2026] rounded-b-md border-t border-[#33373E] shadow-lg -mt-1" />
      <div className="absolute -bottom-2 left-0 right-0 h-2 bg-black/80 blur-xs pointer-events-none" />
    </div>
  );
};
