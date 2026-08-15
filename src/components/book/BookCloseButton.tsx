import React from 'react';
import { X, RotateCcw } from 'lucide-react';

interface BookCloseButtonProps {
  onClose: () => void;
}

export const BookCloseButton: React.FC<BookCloseButtonProps> = ({ onClose }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0D10] border border-[#25282D] text-[#65B8FF] hover:text-white transition-all font-mono text-xs font-bold shadow-lg focus:ring-2 focus:ring-[#65B8FF]"
      aria-label="Close Project Book (ESC)"
    >
      <RotateCcw className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">RETURN TO ROOM</span>
      <span className="sm:hidden">CLOSE</span>
      <X className="w-4 h-4 ml-1" />
    </button>
  );
};
