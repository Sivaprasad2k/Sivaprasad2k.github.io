import React from 'react';
import { InteractiveFlow } from '../components/InteractiveFlow';
import { MetricBadge } from '../components/MetricBadge';
import { ArrowRight, Terminal, Server, Database, ShieldCheck, Play } from 'lucide-react';

interface HeroSectionProps {
  onEnterSystem?: () => void;
  onOpenQuickScan?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnterSystem, onOpenQuickScan }) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Technical Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <MetricBadge label="BACKEND ENGINEERING" variant="emerald" icon={<Server className="w-3 h-3" />} />
            <MetricBadge label="JAVA & SPRING BOOT CORE" variant="cyan" />
            <MetricBadge label="SYSTEMS · DATA · AI" variant="mono" />
          </div>

          <button
            type="button"
            onClick={onOpenQuickScan}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950/80 border border-sky-800 text-sky-300 font-mono text-xs hover:bg-sky-900 transition-colors focus:ring-1 focus:ring-sky-400"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>QUICK SCAN (30s)</span>
          </button>
        </div>

        {/* Main Grid: Headline & Positioning vs Telemetry Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Identity Label */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-sky-400 tracking-wider font-semibold mb-2">
                <Terminal className="w-4 h-4" />
                <span>SIVA PRASAD M L</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight font-sans leading-[1.1]">
                BACKEND ENGINEERING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-slate-100">
                  SYSTEMS · DATA · AI
                </span>
              </h1>
            </div>

            {/* Core Positioning Quote */}
            <blockquote className="border-l-2 border-sky-500 pl-4 py-2 italic font-sans text-base sm:text-lg text-slate-200 leading-relaxed bg-slate-950/60 rounded-r">
              "I build production software where domain rules, data models and failure behaviour matter."
            </blockquote>

            {/* Core Engineering Focus Pills */}
            <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2 p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <Server className="w-4 h-4 text-sky-400" />
                <span>Domain Modeling & REST</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Relational Data & ACID</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="btn-enter-system"
                type="button"
                onClick={onEnterSystem}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold tracking-wide transition-all shadow-lg shadow-sky-600/20 group focus:ring-2 focus:ring-sky-400"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>ENTER SYSTEM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="btn-quick-scan-hero"
                type="button"
                onClick={onOpenQuickScan}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-mono text-xs font-semibold transition-all focus:ring-2 focus:ring-sky-400"
              >
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>QUICK SCAN (30s)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Systems Architecture Diagram */}
          <div className="lg:col-span-6">
            <InteractiveFlow />
          </div>

        </div>

      </div>
    </section>
  );
};
