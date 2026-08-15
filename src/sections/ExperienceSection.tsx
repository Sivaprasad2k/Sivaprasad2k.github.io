import React, { useState } from 'react';
import { JOURNEY_DATA } from '../data/experience';
import { CheckCircle2, Layers, Sparkles, BookOpen, Target } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('ALL');
  const [selectedNodeId, setSelectedNodeId] = useState<string>(JOURNEY_DATA[JOURNEY_DATA.length - 1].id);

  const yearFilters = ['ALL', '2024', '2025', '2026', 'CURRENT'];

  const filteredNodes = selectedYearFilter === 'ALL'
    ? JOURNEY_DATA
    : JOURNEY_DATA.filter(n => n.year === selectedYearFilter);

  const activeNode = JOURNEY_DATA.find(n => n.id === selectedNodeId) || JOURNEY_DATA[JOURNEY_DATA.length - 1];

  const categoryBadges: Record<string, { bg: string; border: string; text: string; icon: React.ReactNode }> = {
    'PROJECT': { bg: 'bg-emerald-950/80', border: 'border-emerald-800', text: 'text-emerald-300', icon: <Layers className="w-3 h-3 text-emerald-400" /> },
    'LEARNING': { bg: 'bg-sky-950/80', border: 'border-sky-800', text: 'text-sky-300', icon: <BookOpen className="w-3 h-3 text-sky-400" /> },
    'EXPERIMENT': { bg: 'bg-amber-950/80', border: 'border-amber-800', text: 'text-amber-300', icon: <Sparkles className="w-3 h-3 text-amber-400" /> },
    'CURRENT FOCUS': { bg: 'bg-indigo-950/80', border: 'border-indigo-800', text: 'text-indigo-300', icon: <Target className="w-3 h-3 text-indigo-400" /> }
  };

  return (
    <section id="journey" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>05.</span>
              <span className="uppercase tracking-widest">CHRONOLOGICAL ENGINEERING PROGRESSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              ENGINEERING JOURNEY
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Interactive timeline tracking backend milestones, architectural learnings, experimental implementations, and active focus areas.
          </p>
        </div>

        {/* Year Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 font-mono text-xs">
          <div className="flex flex-wrap gap-2">
            {yearFilters.map((year) => {
              const isActive = selectedYearFilter === year;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYearFilter(year)}
                  className={`px-3.5 py-1.5 rounded font-bold transition-all border ${
                    isActive
                      ? 'bg-sky-600 border-sky-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>

          <span className="text-[10px] text-slate-500">
            {filteredNodes.length} MILESTONE NODES DISPLAYED
          </span>
        </div>

        {/* Timeline & Context Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Chronological Node Track */}
          <div className="lg:col-span-6 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
              <span className="font-bold text-sky-400 uppercase tracking-widest">TIMELINE MILESTONE TRACK</span>
              <span className="text-[10px] text-slate-500">CLICK NODE TO INSPECT</span>
            </div>

            <div className="space-y-3 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-800/80">
              {filteredNodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                const badge = categoryBadges[node.category];

                return (
                  <div key={node.id} className="relative pl-8">
                    {/* Node Dot */}
                    <div className={`absolute left-3 top-3.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-all ${
                      isSelected ? 'bg-sky-400 border-sky-300 ring-2 ring-sky-500/40' : 'bg-slate-900 border-slate-700'
                    }`} />

                    <button
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full p-4 rounded-lg border text-left transition-all space-y-2 group ${
                        isSelected
                          ? 'bg-sky-950/90 border-sky-400 text-sky-300 font-bold shadow-[0_0_15px_rgba(14,165,233,0.2)] ring-1 ring-sky-400'
                          : 'bg-[#0b0f19] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sky-400 font-extrabold text-xs">{node.year}</span>
                        <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-bold ${badge.bg} ${badge.border} ${badge.text}`}>
                          {badge.icon}
                          <span>{node.category}</span>
                        </div>
                      </div>

                      <h3 className="text-sm font-extrabold font-sans text-slate-100 group-hover:text-sky-300 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-[11px] font-sans text-slate-400 line-clamp-1">{node.summary}</p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Node Context Inspector */}
          {activeNode && (
            <div className="lg:col-span-6 bg-[#0b0f19] p-6 sm:p-8 rounded-lg border border-slate-800 space-y-6 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-sky-400 font-extrabold text-xs">{activeNode.year} MILESTONE</span>
                  <h3 className="text-xl font-extrabold font-sans text-slate-100 mt-0.5">{activeNode.title}</h3>
                  <span className="text-[11px] text-slate-400">{activeNode.organization}</span>
                </div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded border text-xs font-bold ${categoryBadges[activeNode.category].bg} ${categoryBadges[activeNode.category].border} ${categoryBadges[activeNode.category].text}`}>
                  {categoryBadges[activeNode.category].icon}
                  <span>{activeNode.category}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1.5">
                <span className="text-slate-500 font-bold uppercase text-[10px]">MILESTONE SUMMARY</span>
                <p className="font-sans text-slate-300 text-xs leading-relaxed bg-slate-950 p-3.5 rounded border border-slate-800">
                  {activeNode.summary}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-2">
                <span className="text-slate-500 font-bold uppercase text-[10px]">KEY DELIVERABLES & HIGHLIGHTS</span>
                <div className="space-y-1.5">
                  {activeNode.architecturalHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-950 p-2.5 rounded border border-slate-800 text-slate-300 text-xs font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Engineering Takeaway */}
              <div className="bg-sky-950/40 p-3.5 rounded border border-sky-800/80 space-y-1">
                <span className="text-[10px] text-sky-400 font-bold uppercase">KEY ENGINEERING TAKEAWAY</span>
                <p className="font-sans text-xs text-sky-200 italic">
                  "{activeNode.keyTakeaway}"
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                {activeNode.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
