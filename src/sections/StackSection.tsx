import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/skills';
import type { SkillItem } from '../data/skills';
import { Server, Cpu, Sparkles, Code2, CheckCircle2, Layers, HelpCircle } from 'lucide-react';

export const StackSection: React.FC = () => {
  // Collect all skills into a flat array for easy access
  const allSkills: SkillItem[] = SKILLS_DATA.flatMap(d => d.skills);
  const [selectedSkillId, setSelectedSkillId] = useState<string>('java');

  const selectedSkill = allSkills.find(s => s.id === selectedSkillId) || allSkills[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    core: <Server className="w-3.5 h-3.5 text-sky-400" />,
    working: <Cpu className="w-3.5 h-3.5 text-emerald-400" />,
    exploring: <Sparkles className="w-3.5 h-3.5 text-amber-400" />
  };

  return (
    <section id="toolbox" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>03.</span>
              <span className="uppercase tracking-widest">ENGINEERING TOOLBOX & EVIDENCE MAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              TECHNOLOGY RELATIONSHIP MAP
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Connecting technical tools to architectural roles, system implementation evidence, and specific project builds.
          </p>
        </div>

        {/* Technology Map & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categorized Technology Grid */}
          <div className="lg:col-span-7 bg-[#0b0f19] p-6 rounded-lg border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-sky-400" />
                <span className="font-bold">TECHNOLOGY MATRIX</span>
              </div>
              <span className="text-[10px] text-slate-500">CLICK TO INSPECT RELATIONSHIPS</span>
            </div>

            {SKILLS_DATA.map((domain) => (
              <div key={domain.id} className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-bold border-b border-slate-800/60 pb-1.5">
                  {categoryIcons[domain.id]}
                  <span className="uppercase tracking-wider">{domain.domainName}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {domain.skills.map((skill) => {
                    const isSelected = selectedSkillId === skill.id;
                    return (
                      <button
                        key={skill.id}
                        type="button"
                        onClick={() => setSelectedSkillId(skill.id)}
                        className={`p-2.5 rounded border text-left transition-all ${
                          isSelected
                            ? 'bg-sky-950/90 border-sky-400 text-sky-300 font-bold shadow-[0_0_12px_rgba(14,165,233,0.2)] ring-1 ring-sky-400'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-xs font-bold truncate">{skill.name}</div>
                        <div className="text-[9px] text-slate-500 mt-1 truncate">
                          {skill.whereIUsedIt.slice(0, 1).join('')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Selected Tech Inspector Panel */}
          {selectedSkill && (
            <div className="lg:col-span-5 bg-[#0b0f19] p-6 sm:p-8 rounded-lg border border-slate-800 space-y-6 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  {categoryIcons[selectedSkill.category]}
                  <span className="font-bold text-slate-100 text-sm">{selectedSkill.name.toUpperCase()}</span>
                </div>
                <span className="text-[10px] text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                  {selectedSkill.category.toUpperCase()}
                </span>
              </div>

              {/* WHY I USE IT */}
              <div className="space-y-1.5 bg-slate-950 p-4 rounded border border-slate-800">
                <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[11px]">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>WHY I USE IT</span>
                </div>
                <p className="font-sans text-slate-300 text-xs leading-relaxed">
                  {selectedSkill.whyIUseIt}
                </p>
              </div>

              {/* ENGINEERING ROLE */}
              <div className="space-y-1.5 bg-slate-950 p-4 rounded border border-slate-800">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ENGINEERING ROLE IN SYSTEMS</span>
                </div>
                <p className="font-sans text-slate-300 text-xs leading-relaxed">
                  {selectedSkill.engineeringRole}
                </p>
              </div>

              {/* WHERE I USED IT & RELATED PROJECTS */}
              <div className="space-y-2 pt-1">
                <span className="text-slate-500 font-bold uppercase text-[10px]">WHERE I USED IT / RELATED PROJECTS</span>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.whereIUsedIt.map((proj) => (
                    <span key={proj} className="px-3 py-1 rounded bg-slate-900 text-slate-200 border border-slate-700 font-mono text-xs flex items-center gap-1">
                      <Layers className="w-3 h-3 text-sky-400" />
                      <span>{proj}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
