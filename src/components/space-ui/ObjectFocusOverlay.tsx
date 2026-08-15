import React, { useEffect } from 'react';
import type { RoomObjectDefinition } from '../../data/room';
import { PROFILE_DATA } from '../../data/profile';
import { PROJECTS_DATA } from '../../data/projects';
import { X, ExternalLink, Mail, ShieldCheck, Terminal, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../Icons';

interface ObjectFocusOverlayProps {
  objectDef: RoomObjectDefinition | null;
  onClose: () => void;
  onOpenBook?: (projectId: string) => void;
}

export const ObjectFocusOverlay: React.FC<ObjectFocusOverlayProps> = ({
  objectDef,
  onClose,
  onOpenBook
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (objectDef) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [objectDef, onClose]);

  if (!objectDef) return null;

  const { id, title, categoryLabel, subtitle, projectId, externalUrl } = objectDef;

  const linkedProject = projectId ? PROJECTS_DATA.find(p => p.id === projectId) : null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-end p-4 sm:p-8 bg-[#0B0D10]/60 backdrop-blur-sm pointer-events-auto">
      {/* Click backdrop to return to room */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Focused Object Drawer / Panel */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label={`Object focus detail: ${title}`}
        className="relative w-full max-w-xl bg-[#17191D] border-2 border-[#25282D] rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl z-10 font-mono text-xs text-[#E8E2D6] overflow-y-auto max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#25282D] pb-4">
          <div className="space-y-0.5">
            <span className="text-[10px] text-[#65B8FF] font-bold uppercase tracking-widest">{categoryLabel}</span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">{title}</h3>
            <p className="text-xs text-[#64748b]">{subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0B0D10] border border-[#25282D] text-slate-400 hover:text-white transition-colors"
            aria-label="Close focus overlay (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Object Detail View based on Object ID */}
        
        {/* 1. IDENTITY PHOTO */}
        {id === 'photo' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-[#0B0D10] p-4 rounded-lg border border-[#25282D]">
              <div className="p-3 rounded-full bg-[#25282D] text-[#65B8FF]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-sans text-white">{PROFILE_DATA.name}</h4>
                <p className="text-xs text-[#65B8FF] font-mono">{PROFILE_DATA.role} · {PROFILE_DATA.subRole}</p>
              </div>
            </div>
            <p className="font-sans text-slate-300 text-xs leading-relaxed bg-[#0B0D10] p-4 rounded-lg border border-[#25282D]">
              {PROFILE_DATA.bio}
            </p>
            <blockquote className="border-l-2 border-[#65B8FF] pl-3 py-1 italic font-sans text-slate-200">
              "{PROFILE_DATA.heroQuote}"
            </blockquote>
          </div>
        )}

        {/* 1B. ACADEMIC RECORD BOOK */}
        {id === 'academic-book' && (
          <div className="space-y-4">
            <div className="bg-[#0B0D10] p-5 rounded-lg border border-[#25282D] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#65B8FF]">
                <span className="font-bold uppercase tracking-wider">ACADEMIC BACKGROUND & CREDENTIALS</span>
                <span className="text-[#7EE2A8]">DEGREE CONFERRED</span>
              </div>
              <h4 className="text-xl font-bold font-sans text-white">Bachelor of Technology</h4>
              <p className="text-xs text-[#65B8FF]">Computer Science & Engineering · Systems Specialization</p>
              <p className="font-sans text-slate-300 text-xs leading-relaxed pt-1">
                Rigorous grounding in computer science fundamentals, data structures, algorithms, relational database theory, operating systems, and distributed application architectures.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[#64748b] text-[10px] uppercase font-bold block">CORE ACADEMIC COURSEWORK</span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Relational DBMS & SQL Invariants',
                  'Distributed Systems & Async Pipelines',
                  'Software Architecture & Design Patterns',
                  'Operating Systems & Process Concurrency',
                  'Object-Oriented Analysis & Spring Framework'
                ].map((course, idx) => (
                  <div key={idx} className="bg-[#0B0D10] p-3 rounded border border-[#25282D] text-xs text-slate-200 font-sans">
                    • {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. WORKSTATION LAPTOP */}
        {id === 'laptop' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#0B0D10] p-3 rounded-lg border border-[#25282D]">
              <div className="flex items-center gap-2 text-[#65B8FF] font-bold">
                <Terminal className="w-4 h-4" />
                <span>SIVA / CODE WORKSPACE</span>
              </div>
              <span className="text-[10px] text-[#7EE2A8] font-bold">VERIFIED REPOSITORIES</span>
            </div>
            <p className="font-sans text-slate-300 text-xs leading-relaxed">
              Exploring production software builds, relational database persistence models, and domain-driven architectures.
            </p>
            <div className="space-y-2">
              <span className="text-[#64748b] text-[10px] uppercase font-bold block">VERIFIED CODEBASE REPOSITORIES</span>
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="bg-[#0B0D10] p-3 rounded border border-[#25282D] flex items-center justify-between">
                  <div>
                    <strong className="text-white block font-sans text-xs">{p.title}</strong>
                    <span className="text-[10px] text-[#64748b]">{p.tagline}</span>
                  </div>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-[#17191D] border border-[#25282D] text-slate-300 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3-7. PROJECT BOOKS & LEFT WALL GALLERY POSTERS */}
        {linkedProject && (
          <div className="space-y-4">
            <div className="bg-[#0B0D10] p-4 rounded-lg border border-[#25282D] space-y-2">
              <div className="flex items-center justify-between text-[10px] text-[#65B8FF]">
                <span className="font-bold uppercase">PROJECT OVERVIEW · {linkedProject.status}</span>
                <span className="text-[#64748b]">{linkedProject.technologies.slice(0, 3).join(' · ')}</span>
              </div>
              <h4 className="text-lg font-bold font-sans text-white">{linkedProject.title}</h4>
              <p className="text-xs font-mono text-[#65B8FF]">{linkedProject.tagline}</p>
              <p className="font-sans text-slate-300 text-xs leading-relaxed pt-1">
                {linkedProject.summary}
              </p>
            </div>

            {onOpenBook && projectId && (
              <button
                type="button"
                onClick={() => onOpenBook(projectId)}
                className="w-full py-3 px-4 rounded-lg bg-[#65B8FF] hover:bg-[#52a4eb] text-[#0B0D10] font-bold font-sans text-xs transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <BookOpen className="w-4 h-4" />
                <span>OPEN PROJECT ARCHITECTURE NOTEBOOK</span>
              </button>
            )}
          </div>
        )}

        {/* 8. WHITEBOARD */}
        {id === 'whiteboard' && (
          <div className="space-y-4">
            <div className="bg-[#0B0D10] p-4 rounded-lg border border-[#25282D] space-y-2">
              <span className="text-[10px] text-[#65B8FF] font-bold uppercase block">ENGINEERING METHODOLOGY</span>
              <div className="grid grid-cols-5 gap-1 text-[10px] font-bold text-[#E8E2D6] text-center border-y border-[#25282D] py-2">
                <span>DOMAIN</span>
                <span>MODEL</span>
                <span>STATE</span>
                <span>BEHAVIOUR</span>
                <span>FAILURE</span>
              </div>
            </div>

            <div className="space-y-2">
              {PROFILE_DATA.corePrinciples.slice(0, 4).map((p) => (
                <div key={p.id} className="bg-[#0B0D10] p-3.5 rounded-lg border border-[#25282D] space-y-1 text-xs">
                  <div className="flex items-center justify-between text-[#65B8FF] font-bold">
                    <span>{p.number}. {p.title}</span>
                  </div>
                  <p className="font-sans text-slate-300 text-xs">{p.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9 & 10. SOCIAL POSTERS */}
        {(id === 'poster-linkedin' || id === 'poster-instagram') && (
          <div className="space-y-4">
            <div className="bg-[#0B0D10] p-6 rounded-lg border border-[#25282D] text-center space-y-3">
              <div className={`p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center ${
                id === 'poster-linkedin' ? 'bg-[#65B8FF]/10 text-[#65B8FF]' : 'bg-rose-500/10 text-rose-400'
              }`}>
                {id === 'poster-linkedin' ? <LinkedinIcon className="w-8 h-8" /> : <InstagramIcon className="w-8 h-8" />}
              </div>
              <h4 className="text-xl font-bold font-sans text-white">{title}</h4>
              <p className="font-sans text-slate-300 text-xs max-w-sm mx-auto">
                {id === 'poster-linkedin' 
                  ? 'Connect with Siva Prasad M L for professional background, backend systems engineering roles, and career updates.'
                  : 'A personal layer highlighting creative interests, continuous learning, and software community involvement.'}
              </p>
            </div>

            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-lg text-white font-bold transition-colors flex items-center justify-center gap-2 ${
                  id === 'poster-linkedin' ? 'bg-[#65B8FF] hover:bg-[#52a4eb] text-[#0B0D10]' : 'bg-rose-600 hover:bg-rose-500'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>OPEN {id === 'poster-linkedin' ? 'LINKEDIN PROFILE' : 'INSTAGRAM PAGE'}</span>
              </a>
            )}
          </div>
        )}

        {/* 11. SERVER RACK */}
        {id === 'server' && (
          <div className="space-y-4">
            <div className="bg-[#0B0D10] p-4 rounded-lg border border-[#25282D] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#65B8FF]">
                <span className="font-bold uppercase">BACKEND TECHNOLOGY STACK</span>
                <span className="text-[#7EE2A8]">RACK OPERATIONAL</span>
              </div>
              
              <div className="space-y-2">
                <span className="text-[10px] text-[#64748b] uppercase font-bold block">CORE SPECIALIZATION</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#17191D] border border-[#25282D] text-[#E8E2D6]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#25282D]">
                <span className="text-[10px] text-[#64748b] uppercase font-bold block">WORKING KNOWLEDGE</span>
                <div className="flex flex-wrap gap-1.5">
                  {['MongoDB', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'Git', 'GitHub Actions', 'Linux'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#17191D] border border-[#25282D] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 12. PHONE & CONTACT PLAQUE */}
        {(id === 'phone' || id === 'poster-contact') && (
          <div className="space-y-4">
            <div className="bg-[#0B0D10] p-6 rounded-lg border border-[#25282D] text-center space-y-3">
              <div className="p-3.5 rounded-full bg-[#7EE2A8]/10 text-[#7EE2A8] w-14 h-14 mx-auto flex items-center justify-center">
                <Mail className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold font-sans text-white">Direct Engineering Contact</h4>
              <p className="font-sans text-slate-300 text-xs">
                Available for systems engineering, backend software development, and software architecture inquiries.
              </p>
              <span className="text-sm font-bold text-[#65B8FF] font-mono block">{PROFILE_DATA.email}</span>
            </div>

            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="w-full py-3 px-4 rounded-lg bg-[#7EE2A8] hover:bg-[#6bd696] text-[#0B0D10] font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>SEND EMAIL DIRECTLY</span>
            </a>
          </div>
        )}

        {/* Close Action Footer */}
        <div className="pt-4 border-t border-[#25282D] flex items-center justify-between text-[10px] text-[#64748b]">
          <span>Press ESC or click outside to return to room</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#65B8FF] hover:underline"
          >
            RETURN TO SIVA'S SPACE
          </button>
        </div>
      </div>
    </div>
  );
};
