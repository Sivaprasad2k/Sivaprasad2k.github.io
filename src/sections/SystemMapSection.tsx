import React, { useState } from 'react';
import { Cpu, ArrowUpRight, Network } from 'lucide-react';

interface SubNode {
  id: string;
  name: string;
  targetId?: string;
  description: string;
}

interface DomainNode {
  id: string;
  title: string;
  code: string;
  targetSection: string;
  color: 'sky' | 'emerald' | 'amber' | 'indigo';
  subNodes: SubNode[];
  summary: string;
}

export const SystemMapSection: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('systems');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const domainNodes: DomainNode[] = [
    {
      id: 'systems',
      title: 'SYSTEMS',
      code: 'SYS-01',
      targetSection: 'toolbox',
      color: 'sky',
      summary: 'Backend infrastructure, API design, security boundaries, and database persistence layer.',
      subNodes: [
        { id: 'sys-backend', name: 'Backend', targetId: 'toolbox', description: 'Java 21 & Spring Boot REST API service architecture' },
        { id: 'sys-arch', name: 'Architecture', targetId: 'toolbox', description: 'Domain-driven aggregates and decoupled microservice patterns' },
        { id: 'sys-sec', name: 'Security', targetId: 'toolbox', description: 'Spring Security filter chain, JWT tokens, & RBAC authorization' },
        { id: 'sys-data', name: 'Data', targetId: 'toolbox', description: 'PostgreSQL ACID transactions & Hibernate ORM criteria search' },
        { id: 'sys-infra', name: 'Infrastructure', targetId: 'toolbox', description: 'Docker Compose containerization & GitHub Actions CI/CD' },
      ]
    },
    {
      id: 'builds',
      title: 'BUILDS',
      code: 'SYS-02',
      targetSection: 'work',
      color: 'emerald',
      summary: 'Production backend software implementations, state machine engines, and AI pipelines.',
      subNodes: [
        { id: 'bld-krishi', name: 'Krishi', targetId: 'project-card-krishi', description: 'Workflow-driven agricultural operations & event backend' },
        { id: 'bld-careerpath', name: 'CareerPath', targetId: 'project-card-careerpath', description: 'Relational application & state machine milestone tracker' },
        { id: 'bld-realestate', name: 'Real Estate Hub', targetId: 'project-card-realestatehub', description: 'Property marketplace with fine-grained RBAC' },
        { id: 'bld-avis', name: 'Avis', targetId: 'project-card-avis', description: 'Asynchronous AI task pipeline & prompt context framing' },
        { id: 'bld-ruralinfra', name: 'Rural Infrastructure', targetId: 'project-card-ruralinfra', description: 'ML dataset preprocessing & neural network classification' },
      ]
    },
    {
      id: 'thinking',
      title: 'THINKING',
      code: 'SYS-03',
      targetSection: 'thinking',
      color: 'amber',
      summary: 'Core engineering philosophy prioritizing domain invariants, schema design, and design for failure.',
      subNodes: [
        { id: 'thk-domain', name: 'Domain First', targetId: 'thinking-PR-01', description: 'Model domain invariants before writing CRUD controllers' },
        { id: 'thk-data', name: 'Data First', targetId: 'thinking-PR-02', description: 'Database schema normalization & index optimization precedence' },
        { id: 'thk-failure', name: 'Failure First', targetId: 'thinking-PR-03', description: 'Idempotency, circuit boundaries, and backoff retries' },
        { id: 'thk-async', name: 'Asynchronous Where Necessary', targetId: 'thinking-PR-04', description: 'Decouple high-latency workers from synchronous HTTP request threads' },
        { id: 'thk-observability', name: 'Observability', targetId: 'thinking-PR-05', description: 'Expose telemetry metrics, error bounds, & audit trails' },
      ]
    },
    {
      id: 'journey',
      title: 'JOURNEY',
      code: 'SYS-04',
      targetSection: 'journey',
      color: 'indigo',
      summary: 'Chronological progression of engineering capabilities, projects, and active areas of focus.',
      subNodes: [
        { id: 'jrn-projects', name: 'Projects', targetId: 'journey', description: 'Shipped production applications & full-stack implementations' },
        { id: 'jrn-experience', name: 'Experience', targetId: 'journey', description: 'Engineering capability milestones (2024 — Present)' },
        { id: 'jrn-learning', name: 'Learning', targetId: 'journey', description: 'System design, distributed systems, & caching patterns' },
        { id: 'jrn-focus', name: 'Current Focus', targetId: 'journey', description: 'Backend software engineering & AI pipeline integration' },
      ]
    }
  ];

  const activeDomain = domainNodes.find(d => d.id === selectedDomainId) || domainNodes[0];

  const navigateToSection = (targetId?: string) => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="system-map" className="py-20 md:py-28 bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>01.</span>
              <span className="uppercase tracking-widest">SYSTEM ARCHITECTURE MAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              CENTRAL SYSTEM GRAPH
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Interactive system topology mapping core backend domains, active builds, engineering principles, and capability evolution.
          </p>
        </div>

        {/* System Graph Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SVG & Node Grid Container */}
          <div className="lg:col-span-7 bg-[#0b0f19] p-6 sm:p-8 rounded-lg border border-slate-800 relative overflow-hidden space-y-8 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/60 pb-3">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-sky-400" />
                <span className="font-bold">DOM-BASED GRAPH TOPOLOGY</span>
              </div>
              <span className="text-[10px] text-slate-500">HOVER / CLICK NODES</span>
            </div>

            {/* Central Core Node */}
            <div className="flex justify-center relative z-10">
              <div
                className="px-6 py-4 rounded-lg bg-slate-900 border-2 border-sky-500/80 text-sky-300 font-mono text-center shadow-[0_0_25px_rgba(14,165,233,0.15)] group transition-all"
              >
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">CORE AGGREGATE ROOT</div>
                <div className="text-lg font-extrabold text-slate-100 group-hover:text-sky-300 transition-colors">SIVA PRASAD M L</div>
                <div className="text-[11px] text-sky-400 font-mono">BACKEND ENGINEER</div>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="w-full flex justify-center py-1">
              <svg className="w-full max-w-md h-10 stroke-sky-500/40" fill="none">
                <line x1="50%" y1="0" x2="50%" y2="100%" strokeWidth="2" strokeDasharray="3 3" className="animate-pulse" />
              </svg>
            </div>

            {/* Domain Nodes Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
              {domainNodes.map((domain) => {
                const isSelected = selectedDomainId === domain.id;
                const isHovered = hoveredNodeId === domain.id;

                return (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() => setSelectedDomainId(domain.id)}
                    onMouseEnter={() => setHoveredNodeId(domain.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className={`p-3 rounded-lg border font-mono text-left transition-all relative ${
                      isSelected
                        ? 'bg-slate-900 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(14,165,233,0.2)] ring-1 ring-sky-400/50'
                        : isHovered
                        ? 'bg-slate-900/90 border-slate-700 text-slate-200'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span>{domain.title}</span>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-sky-400 animate-ping' : 'bg-slate-700'}`} />
                    </div>
                    <span className="text-[9px] text-slate-500 block">{domain.code}</span>
                    <div className="text-[10px] text-slate-500 mt-2">
                      {domain.subNodes.length} Sub-systems
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sub-node Chips for Currently Selected Domain */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>CONNECTED NODES IN <strong className="text-sky-400">{activeDomain.title}</strong></span>
                <span className="text-[10px] text-slate-500">CLICK TO INSPECT / NAVIGATE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeDomain.subNodes.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => navigateToSection(sub.targetId)}
                    className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800/90 hover:border-sky-500/60 text-slate-300 hover:text-sky-300 font-mono text-xs transition-all flex items-center gap-1.5 group"
                  >
                    <span>{sub.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Inspector Panel */}
          <div className="lg:col-span-5 bg-[#0b0f19] p-6 sm:p-8 rounded-lg border border-slate-800 space-y-6 font-mono shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-sky-400" />
                <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">DOMAIN INSPECTOR</span>
              </div>
              <span className="text-[10px] text-slate-500">{activeDomain.code}</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-sans text-slate-100">{activeDomain.title} DOMAIN</h3>
              <p className="text-xs font-sans text-slate-300 leading-relaxed bg-slate-950 p-4 rounded border border-slate-800/80">
                {activeDomain.summary}
              </p>
            </div>

            {/* Connected Components Detail List */}
            <div className="space-y-2 text-xs">
              <span className="text-slate-500 font-bold uppercase text-[10px]">CONNECTED SUB-SYSTEM DETAILS</span>
              <div className="space-y-2">
                {activeDomain.subNodes.map((sub) => (
                  <div 
                    key={sub.id} 
                    onClick={() => navigateToSection(sub.targetId)}
                    className="p-2.5 rounded bg-slate-950/90 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between font-bold text-sky-300">
                      <span>{sub.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <p className="text-[11px] font-sans text-slate-400">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Jump Button */}
            <div className="pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => navigateToSection(activeDomain.targetSection)}
                className="w-full py-2.5 px-4 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold transition-all flex items-center justify-center gap-2 text-xs focus:ring-2 focus:ring-sky-400"
              >
                <span>EXPLORE {activeDomain.title} SECTION</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
