import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import type { Project } from '../data/projects';
import { ArchitectureModal } from '../components/ArchitectureModal';
import { KrishiWorkflowExplorer } from '../components/project-explorers/KrishiWorkflowExplorer';
import { CareerPathStateExplorer } from '../components/project-explorers/CareerPathStateExplorer';
import { RealEstateRbacExplorer } from '../components/project-explorers/RealEstateRbacExplorer';
import { AvisPipelineExplorer } from '../components/project-explorers/AvisPipelineExplorer';
import { RuralInfraMlPipeline } from '../components/project-explorers/RuralInfraMlPipeline';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const krishiProject = PROJECTS_DATA.find(p => p.id === 'krishi');
  const careerpathProject = PROJECTS_DATA.find(p => p.id === 'careerpath');
  const realestateProject = PROJECTS_DATA.find(p => p.id === 'realestatehub');
  const avisProject = PROJECTS_DATA.find(p => p.id === 'avis');
  const ruralinfraProject = PROJECTS_DATA.find(p => p.id === 'ruralinfra');

  return (
    <section id="work" className="py-20 md:py-28 bg-[#070a0f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-1">
              <span>02.</span>
              <span className="uppercase tracking-widest">PROJECT OBSERVATORY & INTERACTION MODELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-100">
              SYSTEM BUILDS & ARCHITECTURE
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Each major system project features a distinct interactive model: state transition machines, RBAC permissions, non-blocking pipelines, and ML workflows.
          </p>
        </div>

        {/* Custom Project Interactive Views Stack */}
        <div className="space-y-12">
          {krishiProject && (
            <KrishiWorkflowExplorer
              project={krishiProject}
              onOpenArchitecture={() => setSelectedProject(krishiProject)}
            />
          )}

          {careerpathProject && (
            <CareerPathStateExplorer
              project={careerpathProject}
              onOpenArchitecture={() => setSelectedProject(careerpathProject)}
            />
          )}

          {realestateProject && (
            <RealEstateRbacExplorer
              project={realestateProject}
              onOpenArchitecture={() => setSelectedProject(realestateProject)}
            />
          )}

          {avisProject && (
            <AvisPipelineExplorer
              project={avisProject}
              onOpenArchitecture={() => setSelectedProject(avisProject)}
            />
          )}

          {ruralinfraProject && (
            <RuralInfraMlPipeline
              project={ruralinfraProject}
              onOpenArchitecture={() => setSelectedProject(ruralinfraProject)}
            />
          )}
        </div>

        {/* Architecture Deep Dive Modal Drawer */}
        <ArchitectureModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      </div>
    </section>
  );
};
