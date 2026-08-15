import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

interface SpaceInitOverlayProps {
  isOpen: boolean;
  onComplete: () => void;
}

export const SpaceInitOverlay: React.FC<SpaceInitOverlayProps> = ({ isOpen, onComplete }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (!isOpen) return;

    setStep(0);
    const timer1 = setTimeout(() => setStep(1), 300); // BLACK -> SIVA'S SPACE
    const timer2 = setTimeout(() => setStep(2), 650); // workspace initializing...
    const timer3 = setTimeout(() => {
      setStep(3); // ROOM READY
      setTimeout(() => onComplete(), 350);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0D10] font-mono text-xs text-[#E8E2D6] p-4 select-none">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="p-3 rounded-full bg-[#17191D] border border-[#25282D] w-12 h-12 mx-auto flex items-center justify-center text-[#65B8FF]">
          <Cpu className="w-6 h-6 animate-pulse" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold font-sans tracking-tight text-white">SIVA'S SPACE</h2>
          <p className="text-xs text-[#65B8FF] font-mono tracking-widest uppercase">
            {step === 0 && 'BOOT SEQUENCE INITIATED...'}
            {step === 1 && 'INITIALIZING ENGINEERING WORKSPACE...'}
            {step === 2 && 'ILLUMINATING SPATIAL ENVIRONMENT...'}
            {step >= 3 && 'ROOM READY'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-[#17191D] rounded-full mx-auto overflow-hidden border border-[#25282D]">
          <div 
            className="h-full bg-[#65B8FF] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
