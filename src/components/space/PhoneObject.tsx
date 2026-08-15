import React from 'react';
import { PhoneCall } from 'lucide-react';

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
      aria-label="Desk Phone - Contact Siva Prasad"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute left-[80%] bottom-[28%] w-16 h-28 bg-[#17191D] border-2 rounded-xl p-1.5 flex flex-col justify-between transition-all duration-300 cursor-pointer z-30 group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7EE2A8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#7EE2A8] ring-4 ring-[#7EE2A8]/30 scale-105'
          : 'border-[#3A2920] hover:border-[#7EE2A8]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.50}px, ${parallaxY * 0.50}px, 0) rotate(8deg)`
      }}
    >
      {/* Phone Screen Lid */}
      <div className={`w-full h-20 bg-[#0B0D10] border rounded-lg p-1 flex flex-col justify-between transition-colors ${
        isFocused ? 'border-[#7EE2A8]' : 'border-[#25282D] group-hover:border-[#7EE2A8]/50'
      }`}>
        <div className="flex items-center justify-between text-[7px] font-mono text-[#64748b]">
          <span>PHONE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7EE2A8] animate-pulse" />
        </div>

        {/* Active Contact Icon Screen */}
        <div className="my-auto flex flex-col items-center justify-center text-[#7EE2A8]">
          <PhoneCall className="w-4 h-4 mb-0.5" />
          <span className="text-[7px] font-mono font-bold">CONTACT</span>
        </div>

        <div className="text-[6px] font-mono text-center text-[#94a3b8] truncate">
          DIRECT LINE
        </div>
      </div>

      {/* Home Indicator Bar */}
      <div className="w-6 h-1 bg-[#383d44] rounded-full mx-auto" />
    </div>
  );
};
