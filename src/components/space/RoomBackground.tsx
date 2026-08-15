import React from 'react';

interface RoomBackgroundProps {
  parallaxX: number;
  parallaxY: number;
}

export const RoomBackground: React.FC<RoomBackgroundProps> = ({ parallaxX, parallaxY }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Layer 0: Room Atmosphere & Restrained Ambient Lighting */}
      <div 
        className="absolute inset-0 bg-[#0E1012] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${parallaxX * 0.05}px, ${parallaxY * 0.05}px, 0)`
        }}
      >
        {/* Warm Practical Ambient Lighting Cone above Desk */}
        <div 
          className="absolute left-[35%] top-[10%] w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
        />

        {/* Laptop Screen Soft Cool Ambient Illumination */}
        <div 
          className="absolute left-[42%] top-[40%] w-[320px] h-[220px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none"
        />
      </div>

      {/* Layer 1: Back Wall Surface (#141619 Graphite Charcoal) */}
      <div 
        className="absolute inset-x-0 top-0 h-[70%] bg-[#141619] border-b-2 border-[#202328] transition-transform duration-300 ease-out shadow-inner"
        style={{
          transform: `translate3d(${parallaxX * 0.10}px, ${parallaxY * 0.10}px, 0)`
        }}
      >
        {/* Wall Vignette Shadow Filters */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

        {/* Subtle Architectural Micro Grid Lines */}
        <svg className="w-full h-full opacity-[0.04]" fill="none">
          <pattern id="wall-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E8E2D6" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wall-grid)" />
        </svg>
      </div>

      {/* Floor Surface (#121110 Dark Hardwood Floor) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[30%] bg-[#121110] transition-transform duration-300 ease-out shadow-2xl"
        style={{
          transform: `translate3d(${parallaxX * 0.12}px, ${parallaxY * 0.12}px, 0)`
        }}
      >
        {/* Floor Horizon Contact Gradient */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

        {/* Floor Perspective Grid Lines */}
        <svg className="w-full h-full opacity-[0.04]" fill="none">
          <pattern id="floor-grid" width="60" height="30" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#E8E2D6" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#floor-grid)" />
        </svg>
      </div>
    </div>
  );
};
