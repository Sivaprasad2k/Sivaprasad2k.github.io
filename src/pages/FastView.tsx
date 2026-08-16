import { useState } from 'react';
import { ExperimentCard } from '../components/lab/ExperimentCard';
import { HowIBuild } from '../components/lab/HowIBuild';
import { UiUxStation } from '../components/studio/UiUxStation';
import { ArchitectureBoard } from '../components/studio/ArchitectureBoard';
import { BackendMonitor } from '../components/studio/BackendMonitor';
import { FailureMuseum } from '../components/lab/FailureMuseum';
import { BuildLog } from '../components/lab/BuildLog';
import { LabFooter } from '../components/lab/LabFooter';
import { XRayModal } from '../components/lab/XRayModal';
import { PROJECTS_DATA } from '../data/projects';
import { PROFILE_DATA } from '../data/profile';
import type { Project } from '../data/projects';

export function FastView() {
  const [inspectProject, setInspectProject] = useState<Project | null>(null);

  return (
    <div style={{ paddingTop: 32, paddingBottom: 80 }}>
      {/* Editorial Identity Header */}
      <section style={{ borderBottom: '1px solid var(--border)', paddingBottom: 64 }}>
        <div className="container">
          <div className="flex items-center justify-between gap-3 mb-6" style={{ flexWrap: 'wrap' }}>
            <div className="flex items-center gap-3">
              <span className="label-mono" style={{ marginBottom: 0 }}>
                {PROFILE_DATA.name}
              </span>
              <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>/</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {PROFILE_DATA.role}
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-green)', background: 'var(--accent-green-dim)', padding: '2px 8px', borderRadius: 2 }}>
              FAST VIEW (ACCESSIBLE HTML/CSS MODE)
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            marginBottom: 20,
            color: 'var(--text-primary)'
          }}>
            I design the interface, <br />
            model the system, and build the backend.
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 680, marginBottom: 28 }}>
            {PROFILE_DATA.heroQuote} Core technologies: Java, Spring Boot, PostgreSQL, Python/FastAPI, and React.
          </p>

          <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
            <a href="#work" className="btn btn--primary">
              [ EXPLORE WORK ] ↓
            </a>
            <a href={PROFILE_DATA.resumePdf} target="_blank" rel="noreferrer" className="btn btn--outline">
              [ RESUME PDF ] ↗
            </a>
            <a href={PROFILE_DATA.github} target="_blank" rel="noreferrer" className="btn btn--ghost" style={{ fontFamily: 'var(--font-mono)' }}>
              GitHub ↗
            </a>
            <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost" style={{ fontFamily: 'var(--font-mono)' }}>
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="work">
        <div className="container">
          <p className="label-mono">SELECTED SYSTEMS & PRODUCTS</p>
          <h2 className="section-title">Architectures & Implementations</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            Physical project panels displaying user workflows, domain models, architecture boundaries, and production backend code.
          </p>

          <div>
            {PROJECTS_DATA.map((project, i) => (
              <ExperimentCard
                key={project.id}
                project={project}
                index={i}
                onInspect={setInspectProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive UI / UX Workstation */}
      <section id="ux">
        <div className="container">
          <UiUxStation />
        </div>
      </section>

      {/* Interactive System Architecture Board */}
      <section id="systems">
        <div className="container">
          <ArchitectureBoard />
        </div>
      </section>

      {/* Interactive Backend API Monitor */}
      <section id="backend">
        <div className="container">
          <BackendMonitor />
        </div>
      </section>

      {/* Engineering Methodology */}
      <HowIBuild />

      {/* Engineering Failures / Incidents */}
      <section id="failures">
        <div className="container">
          <p className="label-mono" style={{ color: 'var(--accent-red)' }}>ENGINEERING INCIDENTS</p>
          <h2 className="section-title">Things I Broke & Diagnosed</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            Honest post-mortems documenting root cause diagnosis, fixes, and persistence/boundary lessons.
          </p>

          <FailureMuseum />
        </div>
      </section>

      {/* Build Log Timeline */}
      <section id="timeline">
        <div className="container">
          <p className="label-mono">TECHNICAL JOURNAL</p>
          <h2 className="section-title">Build Log</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            Chronological engineering updates, project milestones, and iteration history.
          </p>

          <BuildLog />
        </div>
      </section>

      {/* Footer */}
      <LabFooter />

      {/* System Inspector Modal */}
      {inspectProject && (
        <XRayModal project={inspectProject} onClose={() => setInspectProject(null)} />
      )}
    </div>
  );
}
