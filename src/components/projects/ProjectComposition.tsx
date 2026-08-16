import { useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectFlipCard } from './ProjectFlipCard';

export function ProjectComposition() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProject = PROJECTS_DATA[activeIndex] || PROJECTS_DATA[0];

  const nextProject = () => {
    setActiveIndex(prev => (prev + 1) % PROJECTS_DATA.length);
  };

  const prevProject = () => {
    setActiveIndex(prev => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  return (
    <section className="container" style={{ width: '100%', padding: '16px var(--container-padding)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Header & Quick Selector Ribbon */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
          <div>
            <span className="label-editorial" style={{ marginBottom: 2 }}>
              <span style={{ color: 'var(--accent-gold)' }}>◆</span> PORTFOLIO WORKBENCH
            </span>
            <h2 className="section-headline" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', marginBottom: 0 }}>
              Selected Work
            </h2>
          </div>

          {/* Stepper Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
            <button
              onClick={prevProject}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-strong)',
                borderRadius: 3,
                padding: '6px 12px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                minHeight: 36
              }}
            >
              ← PREV
            </button>
            <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>
              0{activeIndex + 1} / 0{PROJECTS_DATA.length}
            </span>
            <button
              onClick={nextProject}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-strong)',
                borderRadius: 3,
                padding: '6px 12px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                minHeight: 36
              }}
            >
              NEXT →
            </button>
          </div>
        </div>

        {/* Project Quick Selector Ribbon (Touch Scrollable) */}
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 6, WebkitOverflowScrolling: 'touch' }}>
          {PROJECTS_DATA.map((p, i) => {
            const isSelected = i === activeIndex;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                style={{
                  background: isSelected ? 'var(--accent-red-subtle)' : 'var(--bg-surface)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--accent-red)' : 'var(--border)',
                  borderLeft: `3px solid ${isSelected ? 'var(--accent-red)' : 'transparent'}`,
                  borderRadius: 2,
                  padding: '6px 12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? 'var(--accent-red)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 160ms ease',
                  flexShrink: 0
                }}
              >
                0{i + 1} {p.title.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Viewport-Locked Project Stage (Zero Clipping) */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ProjectFlipCard
          key={activeProject.id}
          project={activeProject}
          index={activeIndex}
        />
      </div>
    </section>
  );
}
