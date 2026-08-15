import React, { useState, useEffect } from 'react';
import { Search, Terminal, ArrowRight, X, Cpu, Code2, Layers, BookOpen, Clock, Send, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { PROJECTS_DATA } from '../data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuickScan: () => void;
}

interface CommandOption {
  id: string;
  category: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectQuickScan }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen && (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        // Keyboard trigger handled by parent component in App.tsx
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (elementId: string) => {
    onClose();
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandOption[] = [
    {
      id: 'cmd-system',
      category: 'NAVIGATION',
      label: 'Explore Architecture System Map',
      icon: <Cpu className="w-4 h-4 text-sky-400" />,
      action: () => navigateTo('system-map')
    },
    {
      id: 'cmd-work',
      category: 'NAVIGATION',
      label: 'Explore Project Observatory',
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      action: () => navigateTo('work')
    },
    {
      id: 'cmd-toolbox',
      category: 'NAVIGATION',
      label: 'Explore Engineering Toolbox (Tech Relationship Map)',
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      action: () => navigateTo('toolbox')
    },
    {
      id: 'cmd-thinking',
      category: 'NAVIGATION',
      label: 'Open How I Think (Engineering Principles)',
      icon: <BookOpen className="w-4 h-4 text-amber-400" />,
      action: () => navigateTo('thinking')
    },
    {
      id: 'cmd-journey',
      category: 'NAVIGATION',
      label: 'Open Engineering Journey Timeline',
      icon: <Clock className="w-4 h-4 text-cyan-400" />,
      action: () => navigateTo('journey')
    },
    {
      id: 'cmd-connect',
      category: 'NAVIGATION',
      label: 'Open Connect & Contact Hub',
      icon: <Send className="w-4 h-4 text-rose-400" />,
      action: () => navigateTo('contact')
    },
    {
      id: 'cmd-quickscan',
      category: 'RECRUITER ACTION',
      label: 'Quick Scan (30s Executive Summary)',
      icon: <Terminal className="w-4 h-4 text-sky-400" />,
      action: () => { onClose(); onSelectQuickScan(); }
    },
    ...PROJECTS_DATA.map((p) => ({
      id: `cmd-project-${p.id}`,
      category: 'PROJECT EXPLORER',
      label: `Explore ${p.title} (${p.tagline})`,
      icon: <Code2 className="w-4 h-4 text-sky-300" />,
      action: () => navigateTo(`project-card-${p.id}`)
    })),
    {
      id: 'cmd-github',
      category: 'EXTERNAL CHANNEL',
      label: 'Open GitHub Profile (Sivaprasad2k)',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => window.open(PROFILE_DATA.github, '_blank')
    },
    {
      id: 'cmd-linkedin',
      category: 'EXTERNAL CHANNEL',
      label: 'Open LinkedIn Profile (Siva Prasad M L)',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => window.open(PROFILE_DATA.linkedin, '_blank')
    },
    {
      id: 'cmd-instagram',
      category: 'EXTERNAL CHANNEL',
      label: 'Open Instagram Profile',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => window.open(PROFILE_DATA.instagram, '_blank')
    }
  ];

  const filteredCommands = commands.filter(c => 
    c.label.toLowerCase().includes(query.toLowerCase()) || 
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div 
        role="dialog"
        aria-modal="true"
        aria-label="System Command Palette"
        className="relative w-full max-w-2xl bg-[#0b0f19] border border-slate-800 rounded-lg shadow-2xl overflow-hidden z-10 space-y-0"
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section... (Press Esc to close)"
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 font-mono text-xs focus:outline-none"
            autoFocus
          />
          <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
            ESC
          </span>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 font-mono text-xs">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-slate-500 text-xs">
              No system commands matched "{query}".
            </div>
          ) : (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                type="button"
                onClick={cmd.action}
                className="w-full flex items-center justify-between p-2.5 rounded hover:bg-slate-900/90 text-left group transition-colors focus:bg-slate-900 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  {cmd.icon}
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold">{cmd.category}</span>
                    <span className="text-slate-200 text-xs font-sans group-hover:text-sky-400 transition-colors">
                      {cmd.label}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-900 flex items-center justify-between font-mono text-[10px] text-slate-500">
          <span>Tip: Press '/' anywhere to open this menu</span>
          <span>SYSTEM CONTROLLER</span>
        </div>
      </div>
    </div>
  );
};
