import React, { useState, useEffect } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';

interface SystemInitOverlayProps {
  isOpen: boolean;
  onComplete: () => void;
}

export const SystemInitOverlay: React.FC<SystemInitOverlayProps> = ({ isOpen, onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    { label: 'DOMAIN ENGINE', status: 'ONLINE' },
    { label: 'DATA ENGINE', status: 'ONLINE' },
    { label: 'WORKFLOW ENGINE', status: 'ONLINE' },
    { label: 'SECURITY ENGINE', status: 'ONLINE' },
    { label: 'AI LAB', status: 'ONLINE' },
  ];

  const totalSteps = steps.length;

  useEffect(() => {
    if (!isOpen) return;

    setStepIndex(0);
    const timer = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= totalSteps) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return prev;
        }
        return prev + 1;
      });
    }, 250);

    return () => clearInterval(timer);
  }, [isOpen, onComplete, totalSteps]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05080e]/95 backdrop-blur-md p-4 font-mono text-xs">
      <div className="w-full max-w-md bg-[#0b0f19] border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="p-2 rounded bg-sky-950/80 border border-sky-800 text-sky-400">
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-sm">INITIALIZING ENGINEERING SYSTEM</h3>
            <span className="text-[10px] text-slate-500">SYSTEM DIAGNOSTIC ROUTINE</span>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const isDone = idx < stepIndex;
            const isCurrent = idx === stepIndex;
            return (
              <div 
                key={step.label} 
                className={`flex items-center justify-between p-2.5 rounded border transition-all ${
                  isDone 
                    ? 'bg-slate-900/80 border-slate-800 text-slate-200'
                    : isCurrent
                    ? 'bg-sky-950/40 border-sky-800/80 text-sky-300 animate-pulse'
                    : 'bg-slate-950/40 border-slate-900 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500">0{idx + 1}.</span>
                  <span className="font-bold">{step.label}</span>
                </div>
                {isDone ? (
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{step.status}</span>
                  </div>
                ) : isCurrent ? (
                  <span className="text-[10px] text-sky-400 font-bold tracking-widest">BOOTING...</span>
                ) : (
                  <span className="text-[10px] text-slate-700">STANDBY</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="space-y-1 pt-2">
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>DIAGNOSTIC STATUS</span>
            <span className="text-sky-400 font-bold">
              {stepIndex >= totalSteps ? 'SYSTEM READY' : `${Math.round((stepIndex / totalSteps) * 100)}%`}
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-sky-500 transition-all duration-300"
              style={{ width: `${(stepIndex / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Direct Skip Button */}
        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={onComplete}
            className="text-[10px] text-slate-500 hover:text-slate-300 underline underline-offset-4"
          >
            SKIP DIAGNOSTIC
          </button>
        </div>
      </div>
    </div>
  );
};
