import React, { useEffect } from 'react';
import { X, Mail, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { PROJECTS_DATA } from '../data/projects';
import { GithubIcon, LinkedinIcon } from './Icons';

interface QuickScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickScanModal: React.FC<QuickScanModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const featured = PROJECTS_DATA.filter(p => p.tier === 'featured');

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm transition-opacity">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Drawer Panel */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-scan-title"
        className="relative w-full max-w-xl bg-[#0b0f19] border-l border-slate-800 h-full overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl z-10 flex flex-col justify-between"
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
              <h2 id="quick-scan-title" className="text-lg font-mono font-bold text-slate-100 uppercase tracking-wide">
                RECRUITER QUICK SCAN (30s SUMMARY)
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors focus:ring-1 focus:ring-sky-500"
              aria-label="Close summary drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Candidate Profile Summary */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-bold font-sans text-slate-100">{PROFILE_DATA.name}</h3>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                {PROFILE_DATA.status}
              </span>
            </div>
            <p className="text-xs font-mono text-sky-400 font-semibold">{PROFILE_DATA.role} · {PROFILE_DATA.subRole}</p>
            <p className="text-xs font-sans text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded border border-slate-800/80">
              {PROFILE_DATA.bio}
            </p>
          </div>

          {/* Core Stack Highlights */}
          <div className="space-y-2 font-mono text-xs">
            <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider block">CORE ENGINEERING FOCUS</span>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL', 'Docker', 'REST APIs', 'FastAPI'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Production Systems */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider block">SELECTED PRODUCTION BUILDS</span>
            <div className="space-y-2">
              {featured.map((p) => (
                <div key={p.id} className="bg-slate-950 p-3 rounded border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-200">{p.title}</span>
                    <span className="text-[10px] text-sky-400 font-semibold">{p.technologies.slice(0, 3).join(' · ')}</span>
                  </div>
                  <p className="font-sans text-slate-400 text-xs">{p.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus & Location */}
          <div className="space-y-2 font-mono text-xs">
            <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider block">CURRENT FOCUS & AVAILABILITY</span>
            <div className="bg-slate-950 p-3 rounded border border-slate-800/80 space-y-1">
              <span className="text-slate-200 font-bold block">{PROFILE_DATA.availability}</span>
              <span className="text-slate-400 text-[11px] block">Location: {PROFILE_DATA.location}</span>
            </div>
          </div>
        </div>

        {/* Direct Action Footer */}
        <div className="pt-4 border-t border-slate-800 space-y-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="flex-1 py-2.5 px-4 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Candidate</span>
            </a>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] text-slate-500 text-center font-sans">
            Interactive system specs & architectural visualizers available across the portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};
