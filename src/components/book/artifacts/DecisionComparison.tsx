import React from 'react';
import type { Project } from '../../../data/projects';
import { Scale, CheckCircle2 } from 'lucide-react';

interface DecisionComparisonProps {
  project: Project;
}

export const DecisionComparison: React.FC<DecisionComparisonProps> = ({ project }) => {
  const decisions = project.engineeringDecisions;

  return (
    <div className="bg-[#0B0D10] border border-[#25282D] rounded-lg p-4 font-mono text-xs space-y-4 shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-[#65B8FF] border-b border-[#25282D] pb-2 font-bold uppercase">
        <div className="flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5" />
          <span>ENGINEERING DECISION & TRADE-OFF COMPARISON</span>
        </div>
        <span className="text-[9px] text-[#7EE2A8]">RATIONALE MATRIX</span>
      </div>

      <div className="space-y-3">
        {decisions.map((d, idx) => (
          <div key={idx} className="bg-[#17191D] p-3.5 rounded border border-[#25282D] space-y-2">
            <div className="flex items-center gap-2 text-[#65B8FF] font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#7EE2A8] shrink-0" />
              <span>{d.decision}</span>
            </div>
            <p className="font-sans text-slate-300 text-xs leading-relaxed bg-[#0B0D10] p-2.5 rounded border border-[#25282D]">
              <strong className="text-white block text-[10px] uppercase font-bold mb-0.5">TECHNICAL RATIONALE:</strong>
              {d.rationale}
            </p>
            <div className="bg-[#0B0D10] p-2.5 rounded border border-[#25282D] text-[#7EE2A8] text-[11px] font-sans">
              <strong className="text-[#65B8FF] block text-[10px] font-mono uppercase font-bold mb-0.5">SYSTEM IMPACT:</strong>
              {d.impact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
