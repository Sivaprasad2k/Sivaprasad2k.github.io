import React from 'react';

interface RoomBackgroundProps {
  parallaxX: number;
  parallaxY: number;
}

export const RoomBackground: React.FC<RoomBackgroundProps> = ({ parallaxX, parallaxY }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Layer 0: Deep Night Atmosphere & Ambient Lighting */}
      <div 
        className="absolute inset-0 bg-[#0B0D10] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${parallaxX * 0.05}px, ${parallaxY * 0.05}px, 0)`
        }}
      >
        {/* Warm Desk Lamp Ambient Glow */}
        <div 
          className="absolute left-[38%] top-[35%] w-[450px] h-[350px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none"
        />

        {/* Laptop Screen Ambient Cool Glow */}
        <div 
          className="absolute left-[46%] top-[50%] w-[350px] h-[250px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"
        />

        {/* Server Rack Ambient LED Glow */}
        <div 
          className="absolute right-[8%] bottom-[20%] w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"
        />
      </div>

      {/* Layer 1: Back Wall (#17191D) & Architectural Grid Lines */}
      <div 
        className="absolute inset-x-0 top-0 h-[68%] bg-[#17191D] border-b border-[#25282D] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${parallaxX * 0.10}px, ${parallaxY * 0.10}px, 0)`
        }}
      >
        {/* Subtle Architectural Grid */}
        <svg className="w-full h-full opacity-[0.07]" fill="none">
          <pattern id="wall-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8E2D6" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wall-grid)" />
        </svg>
      </div>

      {/* Floor Surface (#1A1816) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[32%] bg-[#1A1816] transition-transform duration-300 ease-out shadow-inner"
        style={{
          transform: `translate3d(${parallaxX * 0.12}px, ${parallaxY * 0.12}px, 0)`
        }}
      >
        {/* Floor Perspective Grid Lines */}
        <svg className="w-full h-full opacity-[0.05]" fill="none">
          <pattern id="floor-grid" width="60" height="30" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#E8E2D6" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#floor-grid)" />
        </svg>
      </div>
    </div>
  );
};
