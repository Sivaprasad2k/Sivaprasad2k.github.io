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
      className={`absolute left-[32%] top-[10%] w-[420px] h-[250px] bg-[#E2DCD0] border-4 rounded-md p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer z-20 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#383D44] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.20}px, ${parallaxY * 0.20}px, 0)`
      }}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b-2 border-[#0B0D10]/20 pb-2 font-mono text-xs text-[#0B0D10]">
        <div className="flex items-center gap-2 font-bold tracking-wider">
          <Brain className="w-4 h-4 text-[#0B0D10]" />
          <span>HOW I THINK</span>
        </div>
        <span className="text-[10px] font-mono text-slate-700 font-bold uppercase tracking-widest">METHODOLOGY</span>
      </div>

      {/* Marker Annotation Diagram: DOMAIN -> MODEL -> STATE / ↓ BEHAVIOUR -> FAILURE */}
      <div className="font-mono text-sm text-[#0B0D10] space-y-3 my-auto pl-2">
        <div className="flex items-center gap-3 font-extrabold text-sky-950 text-base tracking-wide">
          <span>DOMAIN</span>
          <span>→</span>
          <span>MODEL</span>
          <span>→</span>
          <span>STATE</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-800 text-xs">
          <span className="text-emerald-950 text-sm">↓</span>
          <span className="text-emerald-950 font-bold">BEHAVIOUR</span>
          <span>→</span>
          <span className="text-rose-900 font-extrabold">FAILURE</span>
        </div>
      </div>

      {/* Silver Aluminum Tray with Markers */}
      <div className="w-48 mx-auto h-2.5 bg-[#2A2E35] rounded-t-sm flex items-center justify-end px-3 gap-2 -mb-2 shadow-inner">
        <span className="w-6 h-1.5 bg-black rounded-full" />
        <span className="w-6 h-1.5 bg-blue-700 rounded-full" />
        <span className="w-6 h-1.5 bg-red-700 rounded-full" />
      </div>
    </div>
  );
};
