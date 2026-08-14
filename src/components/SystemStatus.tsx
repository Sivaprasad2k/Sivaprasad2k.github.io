import React from 'react';

interface SystemStatusProps {
  statusText?: string;
  subText?: string;
}

export const SystemStatus: React.FC<SystemStatusProps> = ({
  statusText = "SYSTEM OPERATIONAL",
  subText = "JAVA & SPRING BOOT CORE"
}) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-emerald-400 font-semibold tracking-wider">{statusText}</span>
      <span className="text-slate-600">|</span>
      <span className="text-slate-400 text-[11px] hidden sm:inline">{subText}</span>
    </div>
  );
};
