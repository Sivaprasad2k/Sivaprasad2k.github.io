import React from 'react';

interface RoomBackgroundProps {
  parallaxX: number;
  parallaxY: number;
}

export const RoomBackground: React.FC<RoomBackgroundProps> = ({ parallaxX, parallaxY }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none [transform-style:preserve-3d]">
      {/* Layer 0: Deep Night Atmosphere & Restrained Practical Ambient Lighting */}
      <div 
        className="absolute inset-0 bg-[#08090A] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${parallaxX * 0.05}px, ${parallaxY * 0.05}px, 0)`
        }}
      >
        {/* Overhead Picture Lamp Spotlight Cone (Upper Left Photo Frame) */}
        <div 
          className="absolute left-[14%] top-[2%] w-[240px] h-[190px] bg-amber-400/20 rounded-full blur-[60px] pointer-events-none"
        />

        {/* Left Warm Desk Lamp Practical Light Cone */}
        <div 
          className="absolute left-[10%] top-[12%] w-[420px] h-[360px] bg-amber-500/15 rounded-full blur-[110px] pointer-events-none"
        />

        {/* Workstation Laptop Soft Cool Screen Glow */}
        <div 
          className="absolute left-[48%] top-[32%] w-[360px] h-[260px] bg-emerald-500/8 rounded-full blur-[95px] pointer-events-none"
        />
      </div>

      {/* Layer 1: Back Wall Surface (#111315 Matte Graphite Charcoal with Vertical Seams) */}
      <div 
        className="absolute inset-x-0 top-0 h-[68%] bg-[#111315] border-b-2 border-[#17191B] transition-transform duration-300 ease-out shadow-inner"
        style={{
          transform: `translate3d(${parallaxX * 0.10}px, ${parallaxY * 0.10}px, 0)`
        }}
      >
        {/* Far Left Night Window Pane with City Light Points (Left Edge of Room per input_file_0.png) */}
        <div className="absolute left-0 top-0 bottom-0 w-[8%] bg-[#060709] border-r-4 border-[#17191B] flex flex-col justify-between p-2">
          {/* Window Louver Blind Strings */}
          <div className="w-full h-full space-y-3 opacity-25">
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
          </div>
          {/* Subtle Night City Light Glows */}
          <div className="absolute bottom-5 left-3 flex gap-1.5 opacity-70">
            <span className="w-1 h-1 bg-amber-400 rounded-full blur-[1px]" />
            <span className="w-1 h-1.5 bg-sky-400 rounded-full blur-[1px]" />
          </div>
        </div>

        {/* Wall Vertical Seam Grid Lines (Architectural Panels) */}
        <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-20">
          <div className="w-[1px] h-full bg-[#30353D]" />
          <div className="w-[1px] h-full bg-[#30353D]" />
          <div className="w-[1px] h-full bg-[#30353D]" />
          <div className="w-[1px] h-full bg-[#30353D]" />
        </div>

        {/* Wall Vignette & Soft Ambient Falloff */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Floor Surface (#0A0B0C Dark Hardwood Floor) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[32%] bg-[#0A0B0C] transition-transform duration-300 ease-out shadow-2xl"
        style={{
          transform: `translate3d(${parallaxX * 0.12}px, ${parallaxY * 0.12}px, 0)`
        }}
      >
        {/* Floor Horizon Contact Gradient */}
        <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-black/75 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
