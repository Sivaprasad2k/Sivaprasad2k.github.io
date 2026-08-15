import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ReturnToSpaceBtnProps {
  onClick: () => void;
  visible: boolean;
}

export const ReturnToSpaceBtn: React.FC<ReturnToSpaceBtnProps> = ({ onClick, visible }) => {
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-[#17191D]/90 border border-[#25282D] text-[#65B8FF] hover:text-white backdrop-blur-md shadow-xl transition-all font-mono text-xs font-bold focus:ring-2 focus:ring-[#65B8FF] pointer-events-auto"
      aria-label="Return to full workspace view"
    >
      <RotateCcw className="w-3.5 h-3.5" />
      <span>SIVA'S SPACE</span>
    </button>
  );
};
