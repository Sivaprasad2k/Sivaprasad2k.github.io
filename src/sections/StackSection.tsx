import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/skills';
import { Server, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { MetricBadge } from '../components/MetricBadge';

export const StackSection: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>('core');

  const domainIcons: Record<string, React.ReactNode> = {
    core: <Server className="w-4 h-4 text-sky-400" />,
    working: <Cpu className="w-4 h-4 text-emerald-400" />,
    exploring: <Sparkles className="w-4 h-4 text-amber-400" />
  };

  const activeDomain = SKILLS_DATA.find(d => d.id === activeDomainId) || SKILLS_DATA[0];

  return (
    <section id="stack" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>02.</span>
              <span className="uppercase tracking-widest">ENGINEERING STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              TECHNICAL PROFICIENCY & STACK
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Categorized by core backend specialization, working production knowledge, and active areas of exploration.
          </p>
        </div>

        {/* Domain Selection Tabs */}
        <div role="tablist" aria-label="Engineering Domains" className="flex flex-wrap gap-2">
          {SKILLS_DATA.map((domain) => {
            const isActive = domain.id === activeDomainId;
            return (
              <button
                key={domain.id}
                id={`btn-domain-${domain.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`domain-panel-${domain.id}`}
                onClick={() => setActiveDomainId(domain.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded font-mono text-xs font-semibold transition-all border focus:ring-1 focus:ring-sky-500 ${
                  isActive
                    ? 'bg-slate-900 border-sky-500 text-slate-100 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/30'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                {domainIcons[domain.id]}
                <span>{domain.domainName}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-950 text-slate-500 border border-slate-800 font-normal">
                  {domain.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Technical Breakdown */}
        <div 
          id={`domain-panel-${activeDomain.id}`}
          role="tabpanel"
          aria-labelledby={`btn-domain-${activeDomain.id}`}
          className="bg-[#0b0f19] rounded-lg border border-slate-800 p-6 sm:p-8 space-y-6"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                {domainIcons[activeDomain.id]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100 font-sans">{activeDomain.domainName}</h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{activeDomain.description}</p>
              </div>
            </div>
            <MetricBadge label={`CATEGORY: ${activeDomain.id.toUpperCase()}`} variant="mono" />
          </div>

          {/* Skill Items List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeDomain.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-slate-950/90 p-4 rounded border border-slate-800/80 hover:border-slate-700 transition-colors space-y-2 font-mono text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-slate-100 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/50">
                    {skill.featuredProject}
                  </span>
                </div>

                <p className="font-sans text-slate-300 text-xs leading-relaxed pt-1">
                  {skill.roleInSystems}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
