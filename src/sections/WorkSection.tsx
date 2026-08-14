import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import type { Project } from '../data/projects';
import { MetricBadge } from '../components/MetricBadge';
import { ArchitectureModal } from '../components/ArchitectureModal';
import { Layers, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS_DATA.filter(p => p.tier === 'featured');
  const additionalProjects = PROJECTS_DATA.filter(p => p.tier === 'additional');

  const renderProjectCard = (project: Project, index: number, isFeatured: boolean) => (
    <div
      key={project.id}
      id={`project-card-${project.id}`}
      className="bg-[#0b0f19] border border-slate-800/90 rounded-lg p-6 sm:p-8 hover:border-slate-700 transition-all space-y-6 relative overflow-hidden group"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/60 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-slate-500">
            {isFeatured ? `FEATURED 0${index + 1}` : `SYSTEM 0${index + 1}`}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-100 group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>
          <MetricBadge 
            label={project.status} 
            variant={project.status === 'SHIPPED' ? 'emerald' : project.status === 'BUILDING' ? 'cyan' : 'indigo'} 
          />
        </div>

        <div className="flex items-center gap-2">
          {project.repoUrl && (
            <a
              id={`link-repo-${project.id}`}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors focus:ring-1 focus:ring-sky-500"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Tagline & Summary */}
      <div className="space-y-2">
        <p className="text-sm font-mono text-sky-400 font-semibold">{project.tagline}</p>
        <p className="text-sm font-sans text-slate-300 leading-relaxed max-w-4xl">{project.summary}</p>
      </div>

      {/* Grid: Problem vs System Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        <div className="bg-slate-950/80 p-4 rounded border border-slate-800/80 space-y-1.5 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-rose-400 font-bold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>PROBLEM DOMAIN</span>
          </div>
          <p className="font-sans text-slate-300 text-xs leading-relaxed">{project.problem}</p>
        </div>

        <div className="bg-slate-950/80 p-4 rounded border border-slate-800/80 space-y-1.5 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-sky-400 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>SYSTEM & DEPLOYMENT</span>
          </div>
          <p className="font-sans text-slate-300 text-xs leading-relaxed">{project.systemOverview}</p>
        </div>

      </div>

      {/* Key Engineering Decision Highlights */}
      <div className="space-y-2 pt-1 font-mono text-xs">
        <span className="text-slate-500 font-bold uppercase text-[10px]">KEY ENGINEERING DECISION</span>
        <div className="bg-slate-950 p-3 rounded border border-slate-800 text-slate-300">
          <strong className="text-sky-300">{project.engineeringDecisions[0]?.decision}: </strong>
          <span className="font-sans text-slate-400">{project.engineeringDecisions[0]?.impact}</span>
        </div>
      </div>

      {/* Technologies & Deep Dive Drawer Trigger */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">
              {tech}
            </span>
          ))}
        </div>

        <button
          id={`btn-deepdive-${project.id}`}
          type="button"
          onClick={() => setSelectedProject(project)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 hover:text-white transition-all group/btn focus:ring-2 focus:ring-sky-400"
        >
          <Layers className="w-4 h-4 text-sky-400" />
          <span>SYSTEM ARCHITECTURE DEEP-DIVE</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="work" className="py-20 md:py-28 bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>01.</span>
              <span className="uppercase tracking-widest">SELECTED WORK & SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              FEATURED & ADDITIONAL SYSTEMS
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Detailed engineering breakdowns showcasing domain modeling, state management, relational data persistence, and software architecture.
          </p>
        </div>

        {/* Featured Work Sub-section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-slate-800/60 pb-2">
            <span className="text-sky-400 font-bold tracking-widest uppercase">FEATURED WORK</span>
            <span className="text-[11px] text-slate-500">PRIMARY BACKEND & FULL-STACK SYSTEMS</span>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, idx) => renderProjectCard(project, idx, true))}
          </div>
        </div>

        {/* Additional Work Sub-section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-slate-800/60 pb-2">
            <span className="text-indigo-400 font-bold tracking-widest uppercase">ADDITIONAL WORK</span>
            <span className="text-[11px] text-slate-500">SPECIALIZED & INTEGRATION PROJECTS</span>
          </div>

          <div className="space-y-8">
            {additionalProjects.map((project, idx) => renderProjectCard(project, idx, false))}
          </div>
        </div>

        {/* Architecture Modal Drawer */}
        <ArchitectureModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      </div>
    </section>
  );
};
