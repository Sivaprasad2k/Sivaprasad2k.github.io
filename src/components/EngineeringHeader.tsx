import React, { useState, useEffect } from 'react';
import { SystemStatus } from './SystemStatus';
import { Terminal, Menu, X, Command, ShieldCheck } from 'lucide-react';

interface EngineeringHeaderProps {
  onOpenQuickScan?: () => void;
  onOpenCommandPalette?: () => void;
}

export const EngineeringHeader: React.FC<EngineeringHeaderProps> = ({ onOpenQuickScan, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SYSTEM', href: '#system-map', num: '01', id: 'nav-system' },
    { name: 'WORK', href: '#work', num: '02', id: 'nav-work' },
    { name: 'TOOLBOX', href: '#toolbox', num: '03', id: 'nav-toolbox' },
    { name: 'THINKING', href: '#thinking', num: '04', id: 'nav-thinking' },
    { name: 'JOURNEY', href: '#journey', num: '05', id: 'nav-journey' },
    { name: 'CONNECT', href: '#contact', num: '06', id: 'nav-connect' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#070a0f]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' 
        : 'bg-transparent py-4 border-b border-slate-800/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a id="nav-brand" href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-sky-500 rounded px-1 py-0.5">
            <div className="w-8 h-8 rounded bg-slate-900 border border-slate-700/80 flex items-center justify-center text-sky-400 group-hover:border-sky-500/60 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base font-sans group-hover:text-sky-400 transition-colors">
                  SIVA PRASAD
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 hidden sm:inline">
                  SYS_ID: SP-2K
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 hidden md:block">
                BACKEND SOFTWARE ENGINEER
              </p>
            </div>
          </a>

          {/* Center Status Indicator */}
          <div className="hidden xl:block">
            <SystemStatus statusText="ENGINEERING SYSTEM ONLINE" subText="JAVA & SPRING BOOT CORE" />
          </div>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={link.id}
                href={link.href}
                className="group flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded"
              >
                <span className="text-sky-500/80 text-[10px] font-semibold">{link.num}.</span>
                <span className="tracking-wide group-hover:underline underline-offset-4 decoration-sky-500">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              id="header-btn-command"
              type="button"
              onClick={onOpenCommandPalette}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all focus:ring-1 focus:ring-sky-500"
              title="Open Command Palette (/)"
            >
              <Command className="w-3.5 h-3.5 text-sky-400" />
              <span>/</span>
            </button>

            {/* Quick Scan Recruiter Trigger */}
            <button
              id="header-btn-quickscan"
              type="button"
              onClick={onOpenQuickScan}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-sky-950/80 border border-sky-800/80 text-xs font-mono text-sky-300 hover:text-white hover:bg-sky-900/80 transition-all focus:ring-1 focus:ring-sky-500 shadow-sm"
              title="Recruiter 30-Second Summary"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-bold">QUICK SCAN</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              id="btn-mobile-menu"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white focus:ring-1 focus:ring-sky-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e17] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4">
          <div className="pb-3 border-b border-slate-800/80">
            <SystemStatus />
          </div>
          <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded bg-slate-900/80 border border-slate-800/80 text-xs font-mono text-slate-300 hover:text-sky-400"
              >
                <span className="text-sky-500 text-[10px] font-bold">{link.num}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
