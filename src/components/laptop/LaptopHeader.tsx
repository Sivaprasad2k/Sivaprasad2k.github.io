import React from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';
import { LaptopCloseButton } from './LaptopCloseButton';

interface LaptopHeaderProps {
  onClose: () => void;
}

export const LaptopHeader: React.FC<LaptopHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-[#0B0D10] border-b-2 border-[#25282D] font-mono text-xs text-[#E8E2D6] select-none">
      <div className="flex items-center gap-3">
        <div className="p-1.5 rounded bg-[#17191D] border border-[#25282D] text-[#65B8FF]">
          <Terminal className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">SIVA / CODE WORKSPACE</span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-[#7EE2A8]/10 text-[#7EE2A8] border border-[#7EE2A8]/20 font-bold hidden sm:inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>VERIFIED SOURCE REPOSITORIES</span>
            </span>
          </div>
          <span className="text-[10px] text-[#64748b] font-mono block sm:hidden">VERIFIED REPOSITORIES</span>
        </div>
      </div>
      <LaptopCloseButton onClose={onClose} />
    </div>
  );
};
