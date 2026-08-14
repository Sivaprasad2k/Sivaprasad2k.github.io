import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { PROJECTS_DATA } from '../data/projects';
import { ExternalLink, Code2, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { MetricBadge } from '../components/MetricBadge';

export const GithubSection: React.FC = () => {
  return (
    <section id="github" className="py-20 md:py-28 bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>05.</span>
              <span className="uppercase tracking-widest">GITHUB & OPEN SOURCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              CODE REPOSITORIES & TELEMETRY
            </h2>
          </div>
          <a
            id="link-github-top-profile"
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 hover:text-white hover:border-sky-500 transition-colors shrink-0 focus:ring-1 focus:ring-sky-500"
          >
            <GithubIcon className="w-4 h-4 text-sky-400" />
            <span>github.com/{PROFILE_DATA.handle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((repo) => (
            <div
              key={repo.id}
              id={`github-card-${repo.id}`}
              className="bg-[#0b0f19] p-6 rounded-lg border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sky-400 font-mono font-bold text-sm">
                    <Code2 className="w-4 h-4" />
                    <span className="group-hover:underline underline-offset-4">{repo.title}</span>
                  </div>
                  <MetricBadge label={repo.status} variant="mono" />
                </div>

                <p className="text-xs font-sans text-slate-300 line-clamp-3 leading-relaxed">
                  {repo.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {repo.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                {repo.repoUrl && (
                  <a
                    id={`link-inspect-${repo.id}`}
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full p-2 rounded bg-slate-950 hover:bg-slate-900 border border-slate-800/80 text-[11px] text-slate-300 hover:text-sky-400 transition-colors focus:ring-1 focus:ring-sky-500"
                  >
                    <span>Inspect Codebase</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#0b0f19] p-6 rounded-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-slate-100 font-bold block text-sm">REPOSITORIES & ARCHITECTURAL SPECS</span>
              <span className="text-slate-400 text-xs">Explore public source code, commit history, and issue tracking.</span>
            </div>
          </div>

          <a
            id="btn-github-view-all"
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors focus:ring-2 focus:ring-sky-400"
          >
            <span>VIEW ALL REPOS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
