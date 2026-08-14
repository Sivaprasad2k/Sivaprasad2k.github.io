import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal } from 'lucide-react';
import { MetricBadge } from '../components/MetricBadge';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>03.</span>
              <span className="uppercase tracking-widest">ABOUT & ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              SYSTEMS THINKING & METHODOLOGY
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Building software starts with domain understanding and data modeling before writing code.
          </p>
        </div>

        {/* Engineering Philosophy Pipeline Visualizer */}
        <div className="bg-[#0b0f19] p-6 rounded-lg border border-slate-800 space-y-4 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span className="font-bold text-slate-200 uppercase">ENGINEERING PROCESS LIFECYCLE</span>
            </div>
            <span className="text-[10px] text-slate-500 hidden sm:inline">DETERMINISTIC STAGE PIPELINE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {PROFILE_DATA.philosophySteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-slate-950 p-2.5 rounded border border-slate-800/80 hover:border-sky-500/50 transition-colors space-y-1 group"
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-sky-400 font-bold">{step.step}</span>
                  {idx < PROFILE_DATA.philosophySteps.length - 1 && (
                    <span className="text-slate-600 group-hover:text-sky-400 transition-colors">→</span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-200">{step.label}</h4>
                <p className="text-[10px] font-sans text-slate-400 line-clamp-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio & Core Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Overview */}
          <div className="lg:col-span-5 bg-[#0b0f19] p-6 rounded-lg border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 font-mono font-bold">
                SP
              </div>
              <div>
                <h3 className="font-bold text-slate-100 font-sans text-lg">{PROFILE_DATA.name}</h3>
                <p className="text-xs font-mono text-sky-400">{PROFILE_DATA.subRole}</p>
              </div>
            </div>

            <p className="text-xs font-sans text-slate-300 leading-relaxed">
              {PROFILE_DATA.bio}
            </p>

            <div className="pt-3 border-t border-slate-800 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">PRIMARY LANGUAGE:</span>
                <span className="text-slate-200 font-bold">Java (SE / EE)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">PRIMARY FRAMEWORK:</span>
                <span className="text-slate-200 font-bold">Spring Boot 3.x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">RELATIONAL DATABASE:</span>
                <span className="text-slate-200 font-bold">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Core Principles Cards */}
          <div className="lg:col-span-7 space-y-4">
            {PROFILE_DATA.corePrinciples.map((principle) => (
              <div
                key={principle.id}
                className="bg-[#0b0f19] p-5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors space-y-3 font-mono text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-slate-100 text-sm">
                    <MetricBadge label={principle.id} variant="mono" />
                    <span className="font-sans">{principle.title}</span>
                  </div>
                </div>

                <p className="font-sans text-slate-300 text-xs leading-relaxed">
                  {principle.detail}
                </p>

                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-[11px] text-sky-300 overflow-x-auto">
                  <pre className="font-mono"><code>{principle.codeSnippet}</code></pre>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
