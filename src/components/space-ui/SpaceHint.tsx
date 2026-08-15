import React, { useState, useEffect } from 'react';
import { Compass, X } from 'lucide-react';

export const SpaceHint: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleDismiss = () => setVisible(false);
    window.addEventListener('mousemove', handleDismiss, { once: true });
    window.addEventListener('click', handleDismiss, { once: true });
    window.addEventListener('touchstart', handleDismiss, { once: true });
    return () => {
      window.removeEventListener('mousemove', handleDismiss);
      window.removeEventListener('click', handleDismiss);
      window.removeEventListener('touchstart', handleDismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 font-mono text-xs text-[#E8E2D6] bg-[#17191D]/90 border border-[#25282D] backdrop-blur-md px-4 py-2 rounded-full shadow-xl flex items-center gap-2 pointer-events-auto">
      <Compass className="w-4 h-4 text-[#65B8FF] animate-pulse" />
      <span className="hidden sm:inline">Move to explore · Click to inspect · Scroll to zoom</span>
      <span className="sm:hidden">Tap objects to explore</span>
      <button 
        type="button" 
        onClick={() => setVisible(false)}
        className="ml-2 p-0.5 text-slate-500 hover:text-white"
        aria-label="Dismiss hint"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
