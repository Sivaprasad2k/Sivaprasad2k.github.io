import React from 'react';
import { Brain } from 'lucide-react';

interface WhiteboardObjectProps {
  parallaxX: number;
  parallaxY: number;
  onClick: () => void;
  isFocused: boolean;
}

export const WhiteboardObject: React.FC<WhiteboardObjectProps> = ({
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
      aria-label="Whiteboard - How I Think Engineering Principles"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute left-[45%] top-[18%] w-64 h-40 bg-[#E8E2D6] border-4 rounded-md p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#25282D] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#25282D]/20 pb-1 font-mono text-[9px] text-[#25282D]">
        <div className="flex items-center gap-1 font-bold">
          <Brain className="w-3.5 h-3.5 text-[#0B0D10]" />
          <span>HOW I THINK</span>
        </div>
        <span className="text-[8px] font-mono text-[#64748b]">METHODOLOGY</span>
      </div>

      {/* Marker Annotation Diagram: DOMAIN -> MODEL -> STATE -> BEHAVIOUR -> FAILURE */}
      <div className="font-mono text-[9px] text-[#0B0D10] space-y-1.5 my-auto pl-1">
        <div className="flex items-center gap-1 font-bold text-sky-800 text-[10px]">
          <span>DOMAIN</span>
          <span>→</span>
          <span>MODEL</span>
          <span>→</span>
          <span>STATE</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-slate-700">
          <span>↓ BEHAVIOUR</span>
          <span className="font-bold text-rose-800">→ FAILURE INPUT</span>
        </div>
      </div>

      {/* Tray with Markers */}
      <div className="w-full h-2 bg-[#25282D] rounded-full flex items-center justify-end px-2 gap-1 -mb-1">
        <span className="w-4 h-1 bg-sky-600 rounded-full" />
        <span className="w-4 h-1 bg-emerald-600 rounded-full" />
      </div>
    </div>
  );
};
