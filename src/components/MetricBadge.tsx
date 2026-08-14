import React from 'react';
import { cn } from '../lib/utils';

interface MetricBadgeProps {
  label: string;
  variant?: 'default' | 'emerald' | 'cyan' | 'indigo' | 'amber' | 'mono';
  icon?: React.ReactNode;
  className?: string;
}

export const MetricBadge: React.FC<MetricBadgeProps> = ({
  label,
  variant = 'default',
  icon,
  className
}) => {
  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/80',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    cyan: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    mono: 'bg-slate-900 text-slate-400 border-slate-800 font-mono text-[11px]'
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-medium border font-mono tracking-tight transition-colors",
      variantStyles[variant],
      className
    )}>
      {icon && <span className="opacity-80">{icon}</span>}
      <span>{label}</span>
    </span>
  );
};
