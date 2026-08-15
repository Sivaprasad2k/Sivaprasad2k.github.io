import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, ChevronRight, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = PROFILE_DATA.corePrinciples;
  const [selectedPrincipleId, setSelectedPrincipleId] = useState<string>(principles[0].id);

  const activePrinciple = principles.find(p => p.id === selectedPrincipleId) || principles[0];

  return (
    <section id="thinking" className="py-20 md:py-28 bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>04.</span>
              <span className="uppercase tracking-widest">ENGINEERING METHODOLOGY & THINKING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              HOW I THINK
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Production systems demand clear domain rules, explicit data schemas, and design for partial failure over superficial CRUD APIs.
          </p>
        </div>

        {/* Interactive Principles Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Principles Selector List */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
              <span className="font-bold text-sky-400 uppercase tracking-widest">CORE ENGINEERING PRINCIPLES</span>
              <span className="text-[10px] text-slate-500">SELECT TO EXPAND TECHNICAL RATIONALE</span>
            </div>

            {principles.map((p) => {
              const isSelected = selectedPrincipleId === p.id;
              return (
                <button
                  key={p.id}
                  id={`thinking-${p.id}`}
                  type="button"
                  onClick={() => setSelectedPrincipleId(p.id)}
                  className={`w-full p-4 rounded-lg border text-left transition-all space-y-1 group ${
                    isSelected
                      ? 'bg-sky-950/80 border-sky-400 text-sky-300 font-bold shadow-[0_0_15px_rgba(14,165,233,0.2)] ring-1 ring-sky-400'
                      : 'bg-[#0b0f19] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sky-500 font-bold text-[11px]">{p.number}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-300'}`} />
                  </div>
                  <h3 className="text-sm font-extrabold font-sans text-slate-100">{p.title}</h3>
                  <p className="text-[11px] font-sans text-slate-400 line-clamp-1">{p.summary}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Principle Inspector */}
          {activePrinciple && (
            <div className="lg:col-span-7 bg-[#0b0f19] p-6 sm:p-8 rounded-lg border border-slate-800 space-y-6 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-sky-400" />
                  <span className="font-bold text-slate-100 text-sm">{activePrinciple.number}. {activePrinciple.title}</span>
                </div>
                <span className="text-[10px] text-slate-500">{activePrinciple.id}</span>
              </div>

              {/* Principle Detail Explanation */}
              <div className="space-y-2">
                <span className="text-slate-500 font-bold uppercase text-[10px]">ARCHITECTURAL RATIONALE</span>
                <p className="font-sans text-slate-300 text-sm leading-relaxed bg-slate-950 p-4 rounded border border-slate-800">
                  {activePrinciple.detail}
                </p>
              </div>

              {/* Technical Example & Impact */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-sky-400 font-bold uppercase">SYSTEM EXAMPLE: {activePrinciple.technicalExample}</span>
                  <span className="text-slate-500 text-[10px]">CODE & PATTERN PROOF</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-[11px] text-slate-200 overflow-x-auto shadow-inner">
                  <pre className="font-mono"><code>{activePrinciple.codeSnippet}</code></pre>
                </div>
              </div>

              {/* Impact Callout */}
              <div className="bg-sky-950/40 p-3.5 rounded border border-sky-800/80 flex items-start gap-2.5 text-sky-300">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[11px] font-bold">SYSTEM IMPACT:</strong>
                  <span className="font-sans text-xs text-slate-300">{activePrinciple.impact}</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
