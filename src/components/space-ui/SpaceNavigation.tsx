import React, { useState } from 'react';
import type { RoomObjectType, RoomObjectDefinition } from '../../data/room';
import { ROOM_OBJECTS_DATA } from '../../data/room';
import { Menu, X, Compass, CheckCircle2 } from 'lucide-react';

interface SpaceNavigationProps {
  onSelectObject: (obj: RoomObjectDefinition) => void;
  activeObjectId: RoomObjectType | null;
}

export const SpaceNavigation: React.FC<SpaceNavigationProps> = ({
  onSelectObject,
  activeObjectId
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-6 right-6 z-40 font-mono text-xs select-none">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#17191D]/90 border border-[#25282D] text-[#E8E2D6] hover:text-white backdrop-blur-md shadow-xl transition-all focus:ring-2 focus:ring-[#65B8FF]"
        aria-label="Toggle accessible workspace navigation menu"
        aria-expanded={isOpen}
      >
        <Compass className="w-4 h-4 text-[#65B8FF]" />
        <span className="font-bold hidden sm:inline">EXPLORE SIVA'S SPACE</span>
        {isOpen ? <X className="w-4 h-4 ml-1" /> : <Menu className="w-4 h-4 ml-1" />}
      </button>

      {/* Accessible Navigation Drawer */}
      {isOpen && (
        <div 
          role="region"
          aria-label="Accessible Workspace Objects List"
          className="absolute right-0 top-12 w-80 bg-[#17191D] border-2 border-[#25282D] rounded-xl p-4 shadow-2xl space-y-3 backdrop-blur-md z-50 text-[11px]"
        >
          <div className="flex items-center justify-between border-b border-[#25282D] pb-2">
            <span className="font-bold text-[#E8E2D6] uppercase tracking-wider text-xs">WORKSPACE OBJECTS</span>
            <span className="text-[9px] text-[#64748b]">12 INTERACTIVE METAPHORS</span>
          </div>

          <nav aria-label="Room Objects Navigation" className="space-y-1 max-h-80 overflow-y-auto pr-1">
            {ROOM_OBJECTS_DATA.map((obj) => {
              const isSelected = activeObjectId === obj.id;
              return (
                <button
                  key={obj.id}
                  type="button"
                  onClick={() => {
                    onSelectObject(obj);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded transition-all text-left font-mono ${
                    isSelected
                      ? 'bg-[#65B8FF]/15 border border-[#65B8FF] text-[#65B8FF] font-bold'
                      : 'bg-[#0B0D10]/60 border border-[#25282D] text-slate-300 hover:border-[#65B8FF]/40 hover:text-white'
                  }`}
                >
                  <div className="truncate pr-2">
                    <span className="text-[9px] text-[#64748b] block font-bold uppercase">{obj.categoryLabel}</span>
                    <span className="truncate block font-sans text-xs">{obj.title}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#65B8FF] shrink-0" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#25282D] text-[9px] text-[#64748b] text-center">
            Accessible semantic list for screen-reader & keyboard exploration
          </div>
        </div>
      )}
    </div>
  );
};
