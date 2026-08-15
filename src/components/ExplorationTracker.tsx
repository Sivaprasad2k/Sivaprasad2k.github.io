import React, { useState, useEffect } from 'react';
import { Compass, CheckCircle2, RotateCcw } from 'lucide-react';

export const ExplorationTracker: React.FC = () => {
  const TOTAL_MODULES = 8;
  const [exploredModules, setExploredModules] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('explored_modules_v2');
    if (saved) {
      try {
        setExploredModules(JSON.parse(saved));
      } catch {
        setExploredModules([]);
      }
    }
  }, []);

  const markModuleExplored = (moduleId: string) => {
    setExploredModules((prev) => {
      if (prev.includes(moduleId)) return prev;
      const updated = [...prev, moduleId];
      sessionStorage.setItem('explored_modules_v2', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'system-map', module: 'System Map' },
        { id: 'work', module: 'Project Observatory' },
        { id: 'toolbox', module: 'Engineering Toolbox' },
        { id: 'thinking', module: 'How I Think' },
        { id: 'journey', module: 'Engineering Journey' },
        { id: 'contact', module: 'Connect' }
      ];

      sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
            markModuleExplored(s.module);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resetProgress = () => {
    sessionStorage.removeItem('explored_modules_v2');
    setExploredModules([]);
  };

  const progressPercent = Math.round((exploredModules.length / TOTAL_MODULES) * 100);
  const isComplete = exploredModules.length >= TOTAL_MODULES;

  const modulesList = [
    'System Map',
    'Project Observatory',
    'Engineering Toolbox',
    'How I Think',
    'Engineering Journey',
    'Connect',
    'Architecture Modal',
    'Quick Scan'
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40 font-mono text-xs">
      {isExpanded ? (
        <div className="bg-[#0b0f19] border border-slate-800 rounded-lg p-4 shadow-2xl space-y-3 w-72 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-sky-400" />
              <span className="font-bold text-slate-200">SYSTEM EXPLORATION</span>
            </div>
            <button 
              type="button" 
              onClick={() => setIsExpanded(false)}
              className="text-slate-500 hover:text-slate-300"
            >
              ✕
            </button>
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400 font-bold">
              <span>{isComplete ? 'SYSTEM FULLY EXPLORED' : `${exploredModules.length} / ${TOTAL_MODULES} MODULES`}</span>
              <span className="text-sky-400">{progressPercent}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* List of Modules */}
          <div className="space-y-1 pt-1 text-[11px] max-h-48 overflow-y-auto pr-1">
            {modulesList.map((mod) => {
              const done = exploredModules.includes(mod);
              return (
                <div key={mod} className="flex items-center justify-between text-slate-400 py-0.5">
                  <span className={done ? 'text-slate-200' : 'text-slate-600'}>{mod}</span>
                  {done ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  )}
                </div>
              );
            })}
          </div>

          {isComplete && (
            <div className="space-y-2 pt-1 border-t border-slate-800">
              <p className="text-[10px] text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-800/40 leading-relaxed font-sans">
                "You have inspected the engineering system."
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={resetProgress}
                  className="flex-1 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 hover:text-white"
                >
                  EXPLORE AGAIN
                </button>
                <a
                  href="#contact"
                  className="flex-1 py-1 rounded bg-sky-600 text-white text-center text-[10px] font-bold"
                >
                  CONNECT
                </a>
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500">
            <button 
              type="button"
              onClick={resetProgress}
              className="hover:text-slate-300 inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
            <span>SESSION TRACKED</span>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0b0f19]/90 border border-slate-800 text-slate-300 hover:text-white shadow-xl hover:border-slate-700 transition-all backdrop-blur-md focus:ring-1 focus:ring-sky-500"
          aria-label="Open exploration tracker"
        >
          <Compass className="w-4 h-4 text-sky-400" />
          <span className="text-[11px] font-bold">
            {isComplete ? '100% FULLY EXPLORED' : `${progressPercent}% EXPLORED`}
          </span>
        </button>
      )}
    </div>
  );
};
