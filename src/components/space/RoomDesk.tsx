import React from 'react';

interface RoomDeskProps {
  parallaxX: number;
  parallaxY: number;
}

export const RoomDesk: React.FC<RoomDeskProps> = ({ parallaxX, parallaxY }) => {
  return (
    <div 
      className="absolute inset-x-[12%] bottom-[16%] h-[26%] pointer-events-none select-none transition-transform duration-300 ease-out z-20"
      style={{
        transform: `translate3d(${parallaxX * 0.35}px, ${parallaxY * 0.35}px, 0)`
      }}
    >
      {/* Desk Surface Platform (#3A2920 Dark Walnut) */}
      <div className="relative w-full h-12 bg-[#3A2920] rounded-lg border-t-2 border-[#543b2e] shadow-2xl overflow-hidden flex items-center justify-between px-6">
        <div className="h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        {/* Subtle Edge Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8E2D6]/20" />
      </div>

      {/* Desk Legs Structure */}
      <div className="flex justify-between px-12 -mt-1 h-full opacity-90">
        {/* Left Leg Pair */}
        <div className="flex gap-4">
          <div className="w-4 h-full bg-[#201611] border-r border-[#3A2920]" />
          <div className="w-3 h-full bg-[#17100c]" />
        </div>

        {/* Right Leg Pair */}
        <div className="flex gap-4">
          <div className="w-3 h-full bg-[#17100c]" />
          <div className="w-4 h-full bg-[#201611] border-l border-[#3A2920]" />
        </div>
      </div>

      {/* Desk Warm Lamp Fixture (Left Side of Desk) */}
      <div className="absolute left-[8%] -top-32 w-16 h-36 flex flex-col items-center pointer-events-none">
        {/* Lamp Shade */}
        <div className="w-12 h-8 bg-[#25282D] rounded-t-xl border-t border-[#383d44] relative shadow-lg flex items-center justify-center">
          <div className="w-8 h-2 bg-amber-400/80 rounded-full blur-[2px] mt-4" />
        </div>
        {/* Lamp Arm */}
        <div className="w-1.5 h-20 bg-[#383d44] rounded-full" />
        {/* Lamp Base */}
        <div className="w-10 h-3 bg-[#25282D] rounded-full border-t border-[#383d44]" />
      </div>
    </div>
  );
};
