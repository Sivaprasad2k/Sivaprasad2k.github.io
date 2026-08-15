import React, { useState } from 'react';
import { Compass, Move, MousePointerClick } from 'lucide-react';

interface SpaceControlsOverlayProps {
  hasInteracted?: boolean;
}

export const SpaceControlsOverlay: React.FC<SpaceControlsOverlayProps> = ({ hasInteracted = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed bottom-6 left-6 z-30 transition-all duration-700 pointer-events-auto select-none ${
        hasInteracted && !hovered ? 'opacity-35 hover:opacity-100 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <div className="bg-[#0D1015]/85 border border-[#25282D] backdrop-blur-md rounded-xl p-4 shadow-2xl space-y-2.5 max-w-xs font-mono text-[11px] text-[#E8E2D6]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#25282D] pb-2">
          <div className="flex items-center gap-2 text-[#65B8FF] font-bold tracking-wider text-[10px] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>ROOM CONTROLS</span>
          </div>
          <span className="text-[9px] text-[#7EE2A8] font-bold">FREE ROAM</span>
        </div>

        {/* Mouse Navigation Row */}
        <div className="flex items-center justify-between text-slate-300 gap-3">
          <span className="text-slate-400 font-sans text-xs">Move Mouse</span>
          <span className="text-[#65B8FF] font-bold">Look Around</span>
        </div>

        {/* WASD Keyboard Movement Row */}
        <div className="flex items-center justify-between text-slate-300 gap-3">
          <div className="flex gap-1">
            {['W', 'A', 'S', 'D'].map((k) => (
              <span key={k} className="px-1.5 py-0.5 rounded bg-[#17191D] border border-[#25282D] text-white font-bold text-[10px]">
                {k}
              </span>
            ))}
          </div>
          <span className="text-[#7EE2A8] font-bold flex items-center gap-1">
            <Move className="w-3 h-3" />
            <span>Move</span>
          </span>
        </div>

        {/* Scroll Zoom Row */}
        <div className="flex items-center justify-between text-slate-300 gap-3">
          <span className="text-slate-400 font-sans text-xs">Scroll / Wheel</span>
          <span className="text-slate-200">Zoom View</span>
        </div>

        {/* Interaction Hint Footer */}
        <div className="pt-2 border-t border-[#25282D] flex items-center gap-1.5 text-[10px] text-[#65B8FF] font-sans">
          <MousePointerClick className="w-3.5 h-3.5 shrink-0" />
          <span>Click any physical object in room to interact</span>
        </div>
      </div>
    </div>
  );
};
