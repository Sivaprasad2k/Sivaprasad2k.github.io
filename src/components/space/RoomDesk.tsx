import React from 'react';

interface RoomDeskProps {
  parallaxX: number;
  parallaxY: number;
}

export const RoomDesk: React.FC<RoomDeskProps> = ({ parallaxX, parallaxY }) => {
  return (
    <div 
      className="absolute left-[18%] right-[18%] bottom-[12%] h-[48%] pointer-events-none select-none transition-transform duration-300 ease-out z-20"
      style={{
        transform: `translate3d(${parallaxX * 0.35}px, ${parallaxY * 0.35}px, 0)`
      }}
    >
      {/* Rear Desk Shelf / Riser (#231712 Dark Walnut Riser) */}
      <div className="absolute top-[32%] left-[4%] right-[4%] h-[14%] bg-[#231712] rounded-t border-t border-[#3D291F] shadow-lg flex items-center justify-between px-4">
        <div className="w-full h-full bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8E2D6]/15" />
      </div>

      {/* Main Desktop Surface Platform (#2A1D17 Dark Walnut) */}
      <div className="absolute top-[44%] left-0 right-0 h-[12%] bg-[#2A1D17] rounded-lg border-t-2 border-[#4A3428] shadow-2xl overflow-hidden flex items-center justify-between px-6">
        <div className="h-full w-full bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none" />
        {/* Desk Front Edge Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8E2D6]/25" />
        {/* Front Edge Bevel Trim */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1C130F]" />
      </div>

      {/* Desk Legs & Frame Structure */}
      <div className="absolute top-[55%] left-[3%] right-[3%] bottom-0 flex justify-between px-4 opacity-95">
        {/* Left Solid Leg Column */}
        <div className="w-8 h-full bg-[#1A120E] border-r-2 border-[#2A1D17] shadow-xl flex flex-col justify-between">
          <div className="w-full h-2 bg-[#2A1D17]" />
        </div>

        {/* Right Solid Leg Column */}
        <div className="w-8 h-full bg-[#1A120E] border-l-2 border-[#2A1D17] shadow-xl flex flex-col justify-between">
          <div className="w-full h-2 bg-[#2A1D17]" />
        </div>
      </div>

      {/* Floor Contact Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/50 blur-md pointer-events-none" />

      {/* Warm Ambient Desk Lighting Glow */}
      <div className="absolute left-[40%] top-[20%] w-[300px] h-[180px] bg-amber-600/10 rounded-full blur-[80px] pointer-events-none" />
    </div>
  );
};
