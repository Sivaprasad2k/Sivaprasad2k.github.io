import React from 'react';

interface RoomDeskProps {
  parallaxX: number;
  parallaxY: number;
}

export const RoomDesk: React.FC<RoomDeskProps> = ({ parallaxX, parallaxY }) => {
  return (
    <div 
      className="absolute left-0 right-0 bottom-[10%] h-[50%] pointer-events-none select-none transition-transform duration-300 ease-out z-20 [transform-style:preserve-3d]"
      style={{
        transform: `translate3d(${parallaxX * 0.35}px, ${parallaxY * 0.35}px, 0)`
      }}
    >
      {/* Woven Floor Rug underneath Desk */}
      <div className="absolute -bottom-6 left-[22%] right-[22%] h-14 bg-[#181613] border border-[#2B251E] rounded-lg shadow-2xl opacity-85" />

      {/* Rear Wooden Riser Shelf (#20150F Dark Walnut Riser) */}
      <div className="absolute top-[32%] left-[6%] right-[18%] h-[14%] bg-[#20150F] rounded-t-md border-t-2 border-[#3D291E] shadow-2xl flex items-center justify-between px-6">
        <div className="w-full h-full bg-gradient-to-b from-white/10 via-transparent to-black/50" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8E2D6]/20" />
      </div>

      {/* Main Desktop Surface Platform (#2B1C14 Rich Dark Walnut Furniture) */}
      <div className="absolute top-[44%] left-0 right-0 h-[14%] bg-[#2B1C14] border-t-2 border-[#4E3527] shadow-2xl overflow-hidden flex items-center justify-between px-8">
        <div className="h-full w-full bg-gradient-to-b from-white/15 via-transparent to-black/60 pointer-events-none" />
        {/* Desk Front Edge Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#E8E2D6]/30" />
        {/* Front Edge Bevel Trim */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#1A120C]" />
      </div>

      {/* Left Gooseneck Desk Lamp Fixture */}
      <div className="absolute left-[2%] top-[12%] w-24 h-48 flex flex-col items-center pointer-events-none z-30">
        {/* Lamp Shade & Warm Light Cone Bulb */}
        <div className="w-16 h-10 bg-[#17191D] rounded-t-2xl border-t-2 border-[#383d44] relative shadow-2xl flex items-center justify-center -rotate-12">
          <div className="w-10 h-3 bg-amber-400/90 rounded-full blur-[2px] mt-6" />
        </div>
        {/* Curved Lamp Arm */}
        <div className="w-2 h-24 bg-[#23262B] rounded-full border-r border-[#383d44] -mt-1" />
        {/* Lamp Base */}
        <div className="w-14 h-4 bg-[#17191D] rounded-full border-t-2 border-[#383d44] shadow-2xl" />
      </div>

      {/* Small Plant Pot on Rear Riser Shelf (Right of Laptop) */}
      <div className="absolute right-[24%] top-[24%] w-8 h-10 flex flex-col items-center pointer-events-none z-30">
        {/* Plant Leaves */}
        <div className="w-8 h-6 bg-emerald-900/80 rounded-t-full flex justify-center gap-1">
          <span className="w-2 h-4 bg-emerald-600 rounded-full" />
          <span className="w-2 h-5 bg-emerald-500 rounded-full" />
        </div>
        {/* Ceramic Pot */}
        <div className="w-6 h-5 bg-[#141619] rounded-b border border-[#25282D] shadow" />
      </div>

      {/* Open Spiral Pad on Left Desktop Surface */}
      <div className="absolute left-[11%] top-[56%] w-16 h-12 bg-[#E8E2D6] rounded border border-[#25282D] rotate-[-6deg] shadow-lg p-1.5 flex flex-col justify-between pointer-events-none">
        <div className="w-full h-[1px] bg-slate-400" />
        <div className="w-full h-[1px] bg-slate-400" />
        <div className="w-full h-[1px] bg-slate-400" />
        {/* Spiral Binder */}
        <div className="absolute -left-1 top-0 bottom-0 w-1 flex flex-col justify-between py-1">
          <span className="w-1.5 h-1 bg-slate-700 rounded-full" />
          <span className="w-1.5 h-1 bg-slate-700 rounded-full" />
          <span className="w-1.5 h-1 bg-slate-700 rounded-full" />
        </div>
      </div>

      {/* Desk Legs & Solid Frame Structure */}
      <div className="absolute top-[58%] left-[2%] right-[2%] bottom-0 flex justify-between px-6 opacity-95">
        {/* Left Solid Leg Column */}
        <div className="w-10 h-full bg-[#1A120C] border-r-2 border-[#2B1C14] shadow-2xl flex flex-col justify-between">
          <div className="w-full h-3 bg-[#2B1C14]" />
        </div>

        {/* Right Solid Leg Column */}
        <div className="w-10 h-full bg-[#1A120C] border-l-2 border-[#2B1C14] shadow-2xl flex flex-col justify-between">
          <div className="w-full h-3 bg-[#2B1C14]" />
        </div>
      </div>

      {/* Floor Cast Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/80 blur-lg pointer-events-none" />

      {/* Warm Ambient Desk Lamp Light Cone */}
      <div className="absolute left-[1%] top-[10%] w-[400px] h-[320px] bg-amber-500/15 rounded-full blur-[105px] pointer-events-none" />
    </div>
  );
};
