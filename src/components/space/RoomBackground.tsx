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
        className="absolute inset-0 bg-[#0C0E10] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${parallaxX * 0.05}px, ${parallaxY * 0.05}px, 0)`
        }}
      >
        {/* Left Warm Desk Lamp Practical Cone */}
        <div 
          className="absolute left-[2%] top-[15%] w-[450px] h-[380px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Overhead Picture Light Spotlight Cone (Upper Left Photo Frame) */}
        <div 
          className="absolute left-[10%] top-[5%] w-[250px] h-[200px] bg-amber-400/20 rounded-full blur-[70px] pointer-events-none"
        />

        {/* Laptop Screen Soft Cool Ambient Illumination */}
        <div 
          className="absolute left-[40%] top-[35%] w-[350px] h-[250px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none"
        />
      </div>

      {/* Layer 1: Back Wall Surface (#121417 Graphite Charcoal) */}
      <div 
        className="absolute inset-x-0 top-0 h-[70%] bg-[#121417] border-b-2 border-[#1E2126] transition-transform duration-300 ease-out shadow-inner"
        style={{
          transform: `translate3d(${parallaxX * 0.10}px, ${parallaxY * 0.10}px, 0)`
        }}
      >
        {/* Wall Vignette & Shadow Falloff */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none" />

        {/* Far Right Night Window Pane with City Lights (Right Edge of Room) */}
        <div className="absolute right-0 top-0 bottom-0 w-[12%] bg-[#08090B] border-l-4 border-[#1E2126] flex flex-col justify-between p-2">
          {/* Window Louvers */}
          <div className="w-full h-full space-y-3 opacity-30">
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
            <div className="w-full h-[1px] bg-[#E8E2D6]" />
          </div>
          {/* Night City Light Glows */}
          <div className="absolute bottom-6 right-3 flex gap-1.5 opacity-60">
            <span className="w-1 h-1 bg-amber-400 rounded-full blur-[1px]" />
            <span className="w-1 h-1.5 bg-sky-400 rounded-full blur-[1px]" />
            <span className="w-1 h-1 bg-emerald-400 rounded-full blur-[1px]" />
          </div>
        </div>
      </div>

      {/* Floor Surface (#11100E Dark Hardwood Floor) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[30%] bg-[#11100E] transition-transform duration-300 ease-out shadow-2xl"
        style={{
          transform: `translate3d(${parallaxX * 0.12}px, ${parallaxY * 0.12}px, 0)`
        }}
      >
        {/* Floor Horizon Shadow */}
        <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
