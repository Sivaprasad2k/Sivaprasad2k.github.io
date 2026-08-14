import React from 'react';
import { EXPERIENCE_DATA } from '../data/experience';
import { MetricBadge } from '../components/MetricBadge';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>04.</span>
              <span className="uppercase tracking-widest">EXPERIENCE & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              SYSTEMS DEVELOPMENT TIMELINE
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Chronological log of backend engineering roles, system implementations, and technical deliverables.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-0.5 before:bg-slate-800">
          {EXPERIENCE_DATA.map((item) => (
            <div key={item.id} className="relative pl-8 sm:pl-14 space-y-3">
              
              {/* Timeline Node Icon */}
              <div className="absolute left-1.5 sm:left-4 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[#090d16] border-2 border-sky-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              </div>

              {/* Card Container */}
              <div className="bg-[#0b0f19] p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-sky-400 uppercase font-bold tracking-wider">{item.type}</span>
                    <h3 className="text-lg font-bold text-slate-100 font-sans">{item.role}</h3>
                    <p className="text-xs font-mono text-slate-400">{item.organization}</p>
                  </div>
                  <MetricBadge label={item.period} variant="mono" icon={<Calendar className="w-3 h-3" />} />
                </div>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-2 font-mono text-xs">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">TECHNICAL DELIVERABLES & HIGHLIGHTS</span>
                  <div className="space-y-1.5">
                    {item.architecturalHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-300 bg-slate-950 p-2 rounded border border-slate-800/60 text-xs font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
