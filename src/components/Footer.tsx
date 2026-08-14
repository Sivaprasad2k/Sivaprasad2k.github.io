import React from 'react';
import { PROFILE_DATA } from '../data/profile';
import { Terminal, Mail, ArrowUp, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-slate-200 text-sm font-sans">SIVA PRASAD M L</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                HTTP 200 OK
              </span>
            </div>
            <p className="text-slate-500 text-xs font-sans max-w-lg">
              Systems-oriented software engineer building backend architectures, reliable REST services, data persistence models, and production systems.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 text-sky-400 hover:text-white hover:border-sky-500 transition-colors flex items-center gap-1 text-xs"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>
        </div>

        {/* System Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] bg-slate-950 p-4 rounded border border-slate-800/80">
          <div>
            <span className="text-slate-600 block text-[10px]">DEPLOYMENT TARGET</span>
            <span className="text-slate-300">GitHub Pages (gh-pages)</span>
          </div>
          <div>
            <span className="text-slate-600 block text-[10px]">CI/CD PIPELINE</span>
            <span className="text-slate-300">GitHub Actions Workflow</span>
          </div>
          <div>
            <span className="text-slate-600 block text-[10px]">CORE RUNTIME</span>
            <span className="text-slate-300">React + TypeScript + Vite</span>
          </div>
          <div>
            <span className="text-slate-600 block text-[10px]">PRIMARY BACKEND FOCUS</span>
            <span className="text-emerald-400">Java / Spring Boot</span>
          </div>
        </div>

        {/* Copyright & Commit Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-2">
          <div>
            © {new Date().getFullYear()} Siva Prasad M L. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3 text-slate-600" />
            <span>BUILD VER: 2026.08.01 • SYSTEM ID: SP-2K</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
