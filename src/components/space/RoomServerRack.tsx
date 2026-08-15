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
      className={`absolute left-[22%] bottom-[8%] w-36 h-60 bg-[#141619] border-2 rounded-lg p-3 flex flex-col justify-between transition-all duration-300 cursor-pointer z-30 group shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65B8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10] ${
        isFocused
          ? 'border-[#65B8FF] ring-4 ring-[#65B8FF]/30 scale-105'
          : 'border-[#25282D] hover:border-[#65B8FF]/70 hover:scale-[1.02]'
      }`}
      style={{
        transform: `translate3d(${parallaxX * 0.45}px, ${parallaxY * 0.45}px, 0)`
      }}
    >
      {/* Top Header Label */}
      <div className="flex items-center justify-between border-b border-[#25282D] pb-1.5 font-mono text-[9px] text-[#94a3b8]">
        <span className="font-bold text-[#65B8FF]">RACK-01</span>
        <span className="text-[8px] text-emerald-400 font-bold tracking-wider">ONLINE</span>
      </div>

      {/* Server Rack Units (4 Blades: API, CORE, DATA, WORKERS) */}
      <div className="space-y-2 py-1 font-mono text-[9px]">
        {/* Blade 1: API */}
        <div className="bg-[#0B0D10] p-1.5 rounded border border-[#25282D] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold">API</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          </div>
        </div>

        {/* Blade 2: CORE */}
        <div className="bg-[#0B0D10] p-1.5 rounded border border-[#25282D] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold">CORE</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          </div>
        </div>

        {/* Blade 3: DATA */}
        <div className="bg-[#0B0D10] p-1.5 rounded border border-[#25282D] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold">DATA</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#65B8FF]" />
          </div>
        </div>

        {/* Blade 4: WORKERS */}
        <div className="bg-[#0B0D10] p-1.5 rounded border border-[#25282D] flex items-center justify-between group-hover:border-[#65B8FF]/40 transition-colors shadow-inner">
          <span className="text-[#E8E2D6] font-bold">WORKERS</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Rack Floor Base Shadow */}
      <div className="absolute -bottom-3 left-0 right-0 h-3 bg-black/70 blur-sm pointer-events-none" />

      {/* Rack Ventilation Mesh */}
      <div className="h-5 bg-[#0B0D10] rounded border border-[#25282D] flex items-center justify-center font-mono text-[8px] text-[#64748b]">
        <span>INFRASTRUCTURE</span>
      </div>
    </div>
  );
};
