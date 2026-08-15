import React, { useState } from 'react';
import type { ArchitectureNode } from '../../../data/projects';
import { Cpu } from 'lucide-react';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeNode = nodes[selectedIndex] || nodes[0];

  return (
    <div className="bg-[#0B0D10] border border-[#25282D] rounded-lg p-4 font-mono text-xs space-y-4 shadow-inner">
      <div className="flex items-center justify-between text-[10px] text-[#65B8FF] border-b border-[#25282D] pb-2 font-bold uppercase">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          <span>INTERACTIVE ARCHITECTURE MAP</span>
        </div>
        <span className="text-[9px] text-[#64748b]">CLICK NODE TO INSPECT RESPONSIBILITY</span>
      </div>

      {/* Architecture Node Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {nodes.map((n, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={n.layer}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`p-3 rounded border text-left transition-all font-mono ${
                isSelected
                  ? 'bg-[#65B8FF]/15 border-[#65B8FF] text-[#65B8FF] font-bold shadow-[0_0_12px_rgba(101,184,255,0.2)]'
                  : 'bg-[#17191D] border-[#25282D] text-slate-300 hover:border-slate-600 hover:text-white'
              }`}
            >
              <div className="text-[9px] text-[#64748b] font-bold uppercase">{n.layer}</div>
              <div className="text-xs font-bold truncate mt-0.5">{n.component}</div>
              <div className="text-[9px] text-[#7EE2A8] mt-1 truncate">{n.tech}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      {activeNode && (
        <div className="bg-[#17191D] p-3.5 rounded border border-[#25282D] space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#65B8FF] font-bold uppercase">{activeNode.layer} · {activeNode.component}</span>
            <span className="text-[#7EE2A8] font-bold">{activeNode.tech}</span>
          </div>
          <p className="font-sans text-slate-300 text-xs leading-relaxed bg-[#0B0D10] p-2.5 rounded border border-[#25282D]">
            {activeNode.details}
          </p>
        </div>
      )}
    </div>
  );
};
