import React from 'react';

interface RoomServerRackProps {
  parallaxX: number;
  parallaxY: number;
  onClick: () => void;
  isFocused: boolean;
}

export const RoomServerRack: React.FC<RoomServerRackProps> = ({
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
      aria-label="Server Rack - Systems & Stack Infrastructure"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`absolute left-[14%] bottom-[8%] w-36 h-56 bg-[#111315] border-2 rounded-lg p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer z-30 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#1E2126] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.45}px, ${parallaxY * 0.45}px, 0)`
      }}
    >
      {/* Top Header Label */}
      <div className="flex items-center justify-between border-b border-[#1E2126] pb-1 font-mono text-[8px] text-[#8494a8]">
        <span className="font-bold text-[#65B8FF] tracking-wider">SYSTEM STACK</span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
        </div>
      </div>

      {/* Server Rack Units (4 Blades: API, CORE, DATA, WORKERS) */}
      <div className="space-y-2 py-0.5 font-mono text-[8px]">
        {/* Blade 1: API */}
        <div className="bg-[#060709] p-1.5 rounded border border-[#1E2126] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold tracking-wider">API</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          </div>
        </div>

        {/* Blade 2: CORE */}
        <div className="bg-[#060709] p-1.5 rounded border border-[#1E2126] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold tracking-wider">CORE</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          </div>
        </div>

        {/* Blade 3: DATA */}
        <div className="bg-[#060709] p-1.5 rounded border border-[#1E2126] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold tracking-wider">DATA</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#65B8FF]" />
          </div>
        </div>

        {/* Blade 4: WORKERS */}
        <div className="bg-[#060709] p-1.5 rounded border border-[#1E2126] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold tracking-wider">WORKERS</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Rack Floor Base Shadow */}
      <div className="absolute -bottom-3 left-0 right-0 h-4 bg-black/85 blur-md pointer-events-none" />

      {/* Ventilation Mesh Base */}
      <div className="h-4.5 bg-[#060709] rounded border border-[#1E2126] flex items-center justify-center font-mono text-[7.5px] text-[#8494a8] tracking-widest uppercase font-bold">
        INFRASTRUCTURE
      </div>
    </div>
  );
};
