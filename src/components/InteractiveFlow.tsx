import React, { useState } from 'react';
import { ArrowDown, Cpu, Zap, RefreshCw, Layers, CheckCircle2 } from 'lucide-react';
import { MetricBadge } from './MetricBadge';

interface FlowNode {
  id: string;
  stage: string;
  title: string;
  protocol: string;
  tech: string;
  tag: string;
  description: string;
  activeMetrics: string[];
}

export const InteractiveFlow: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('services');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const nodes: FlowNode[] = [
    {
      id: 'api',
      stage: 'LAYER 01',
      title: 'API GATEWAY & INGESTION',
      protocol: 'HTTPS / REST API',
      tech: 'Spring Web MVC Controllers',
      tag: 'INGRESS',
      description: 'Ingests external client requests, applies rate limiting rules, parses request headers, and validates stateless JWT authentication tokens.',
      activeMetrics: ['Stateless JWT Authentication', 'Request Payload Contract Validation', 'Spring Security Filter Chain']
    },
    {
      id: 'services',
      stage: 'LAYER 02',
      title: 'BUSINESS SERVICES ENGINE',
      protocol: 'Inversion of Control',
      tech: 'Spring Boot 3.x / Java',
      tag: 'CORE ENGINE',
      description: 'Orchestrates domain entity invariants, enforces business state machine transitions, and manages transactional boundaries.',
      activeMetrics: ['ACID Transaction Boundaries', 'Domain State Automata', 'Service Exception Handling']
    },
    {
      id: 'events',
      stage: 'LAYER 03',
      title: 'ASYNCHRONOUS TASK WORKERS',
      protocol: 'In-Process Task Queue',
      tech: 'Spring @Async / ExecutorPool',
      tag: 'WORKER POOL',
      description: 'Executes non-blocking background routines, processes data calculations, and dispatches event notification tasks.',
      activeMetrics: ['Asynchronous Thread Execution', 'Background Task Processing', 'Event Task Dispatcher']
    },
    {
      id: 'database',
      stage: 'LAYER 04',
      title: 'ACID DATASTORE & PERSISTENCE',
      protocol: 'JDBC / Relational SQL',
      tech: 'PostgreSQL / JPA Hibernate',
      tag: 'ACID STORE',
      description: 'Persists relational entities with normalized constraints, B-tree/spatial indexing, and transactional audit records.',
      activeMetrics: ['Normalized Entity Relational Schema', 'Composite B-Tree & Spatial Indexes', 'ACID Compliance Guarantees']
    }
  ];

  const currentNode = nodes.find(n => n.id === selectedNode) || nodes[1];

  return (
    <div className="w-full bg-[#0a0e17] rounded-lg border border-slate-800 p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <Cpu className="w-64 h-64 text-sky-400" />
      </div>

      {/* Header controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">
            System Architecture Diagram
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/50">
            Interactive Telemetry
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsSimulating(!isSimulating)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-[11px] font-mono text-slate-300 hover:text-white transition-colors focus:ring-1 focus:ring-sky-500"
          aria-label={isSimulating ? 'Pause animation simulation' : 'Start animation simulation'}
        >
          <RefreshCw className={`w-3 h-3 text-sky-400 ${isSimulating ? 'animate-spin' : ''}`} />
          <span>{isSimulating ? 'Simulation Running' : 'Pause Simulation'}</span>
        </button>
      </div>

      {/* Flow Visualization Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Architecture Pipeline Stack */}
        <div className="lg:col-span-6 space-y-3">
          {nodes.map((node, index) => {
            const isSelected = selectedNode === node.id;
            return (
              <React.Fragment key={node.id}>
                {/* Node Button */}
                <button
                  type="button"
                  onClick={() => setSelectedNode(node.id)}
                  aria-pressed={isSelected}
                  aria-label={`Select layer ${node.stage}: ${node.title}`}
                  className={`w-full text-left cursor-pointer rounded border p-3.5 transition-all relative focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isSelected
                      ? 'bg-slate-900/90 border-sky-500/80 shadow-[0_0_15px_rgba(14,165,233,0.15)] ring-1 ring-sky-500/30'
                      : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 font-bold tracking-widest">{node.stage}</span>
                      <span className="text-xs font-mono font-bold text-slate-200">{node.title}</span>
                    </div>
                    <MetricBadge label={node.tag} variant={isSelected ? 'cyan' : 'mono'} />
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">Tech:</span>
                      <span className="text-sky-300/90">{node.tech}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="text-slate-400">{node.protocol}</span>
                    </div>
                  </div>

                  {/* Active telemetry pulse animation indicator */}
                  {isSimulating && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-emerald-400 to-indigo-500 rounded-l animate-pulse" />
                  )}
                </button>

                {/* Downward Connector Arrow */}
                {index < nodes.length - 1 && (
                  <div className="flex items-center justify-center my-0.5 py-0.5" aria-hidden="true">
                    <div className="flex flex-col items-center">
                      <div className={`w-0.5 h-3 ${isSimulating ? 'bg-gradient-to-b from-sky-500 to-emerald-400 animate-pulse' : 'bg-slate-800'}`} />
                      <ArrowDown className={`w-3.5 h-3.5 ${isSimulating ? 'text-sky-400 animate-bounce' : 'text-slate-600'}`} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Layer Inspector Drawer */}
        <div className="lg:col-span-6 bg-slate-950/90 rounded border border-slate-800 p-4 font-mono">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-bold text-slate-200">LAYER INSPECTOR</span>
            </div>
            <span className="text-[10px] text-slate-500 uppercase">{currentNode.stage}</span>
          </div>

          <div className="mt-4 space-y-4 text-xs">
            <div>
              <h4 className="text-sky-400 font-bold mb-1 text-sm">{currentNode.title}</h4>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">{currentNode.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-900">
              <div>
                <span className="text-[10px] text-slate-500 block mb-0.5">PROTOCOL CONTRACT</span>
                <span className="text-slate-200 text-xs">{currentNode.protocol}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block mb-0.5">ROLE BOUNDARY</span>
                <span className="text-emerald-400 text-xs">{currentNode.tag}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-900">
              <span className="text-[10px] text-slate-500 block mb-2">SYSTEM INVARIANTS & REQUISITES</span>
              <div className="space-y-1.5">
                {currentNode.activeMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs bg-slate-900/60 p-1.5 rounded border border-slate-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-2.5 rounded bg-sky-950/30 border border-sky-800/40 text-[11px] text-sky-300/90 leading-normal">
              <span className="font-bold block text-sky-400 mb-0.5">ARCHITECTURAL DESIGN INTENT:</span>
              Decoupled interface contracts ensure high maintainability, deterministic testability, and isolated failure modes.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
