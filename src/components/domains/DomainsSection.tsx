import { useState } from 'react';
import { usePointerParallax } from '../../hooks/usePointerParallax';

export function DomainsSection() {
  const parallax = usePointerParallax();
  const [activeDomain, setActiveDomain] = useState<number | null>(0);

  const domains = [
    {
      id: 'sys',
      title: 'SYSTEM DESIGN',
      subtitle: 'Architecture, State & Reliability',
      accent: 'var(--accent-slate)',
      skills: ['Domain Modeling', 'Finite State Automata', 'Service Boundaries', 'Decoupled Systems']
    },
    {
      id: 'back',
      title: 'BACKEND ENGINEERING',
      subtitle: 'Java, Spring Boot & Relational Data',
      accent: 'var(--accent-red)',
      skills: ['Java 21 / Spring Boot 3', 'Spring Security & JWT', 'PostgreSQL & JPA', 'Query Optimization']
    },
    {
      id: 'ux',
      title: 'PRODUCT / UI / UX',
      subtitle: 'Interaction Design & Workflows',
      accent: 'var(--accent-gold)',
      skills: ['Task-First Workflows', 'Information Architecture', 'Client State Sync', 'Accessibility Standards']
    },
    {
      id: 'ai',
      title: 'AI ENGINEERING',
      subtitle: 'Async Pipelines & Model Inference',
      accent: 'var(--accent-slate)',
      skills: ['Async Task Pipelines', 'FastAPI Microservices', 'TensorFlow / Inference', 'Schema Validation']
    }
  ];

  return (
    <section className="container" style={{ width: '100%', padding: '20px var(--container-padding)', position: 'relative' }}>
      {/* Header & Central Core Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>◆</span>
            <span className="label-editorial" style={{ marginBottom: 0 }}>04 // ENGINEERING TOPOLOGY</span>
          </div>
          <h2 className="section-headline" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)', marginBottom: 0 }}>
            Domains & Matrix
          </h2>
        </div>

        {/* Central Core Badge */}
        <div style={{ background: 'var(--bg-dark)', color: '#FFFFFF', padding: '6px 12px', borderRadius: 2, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em' }}>
          CORE // ENGINEERING
        </div>
      </div>

      {/* Responsive 2x2 Bento Grid with Central Beam Connections */}
      <div style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
        transform: `translate3d(${parallax.x * 0.3}px, ${parallax.y * 0.3}px, 0)`,
        transition: 'transform 120ms cubic-bezier(0,0,0.2,1)'
      }}>
        {/* Animated SVG Beam Lines Connecting to Center Core */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <line
            x1="25%" y1="25%" x2="50%" y2="50%"
            stroke={activeDomain === 0 ? 'var(--accent-slate)' : 'rgba(18, 18, 18, 0.12)'}
            strokeWidth={activeDomain === 0 ? '2' : '1'}
            strokeDasharray={activeDomain === 0 ? '4 4' : 'none'}
          />
          <line
            x1="75%" y1="25%" x2="50%" y2="50%"
            stroke={activeDomain === 1 ? 'var(--accent-red)' : 'rgba(18, 18, 18, 0.12)'}
            strokeWidth={activeDomain === 1 ? '2' : '1'}
            strokeDasharray={activeDomain === 1 ? '4 4' : 'none'}
          />
          <line
            x1="25%" y1="75%" x2="50%" y2="50%"
            stroke={activeDomain === 2 ? 'var(--accent-gold)' : 'rgba(18, 18, 18, 0.12)'}
            strokeWidth={activeDomain === 2 ? '2' : '1'}
            strokeDasharray={activeDomain === 2 ? '4 4' : 'none'}
          />
          <line
            x1="75%" y1="75%" x2="50%" y2="50%"
            stroke={activeDomain === 3 ? 'var(--accent-slate)' : 'rgba(18, 18, 18, 0.12)'}
            strokeWidth={activeDomain === 3 ? '2' : '1'}
            strokeDasharray={activeDomain === 3 ? '4 4' : 'none'}
          />
        </svg>

        {domains.map((d, i) => {
          const isActive = activeDomain === i;
          return (
            <div
              key={d.id}
              onMouseEnter={() => setActiveDomain(i)}
              onMouseLeave={() => setActiveDomain(null)}
              style={{
                position: 'relative',
                zIndex: 10,
                background: isActive ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                borderLeft: `1px solid ${isActive ? d.accent : 'var(--border)'}`,
                borderRight: `1px solid ${isActive ? d.accent : 'var(--border)'}`,
                borderBottom: `1px solid ${isActive ? d.accent : 'var(--border)'}`,
                borderTop: `4px solid ${d.accent}`,
                borderRadius: 'var(--radius-sm)',
                padding: 'clamp(18px, 2.5vw, 24px)',
                cursor: 'pointer',
                transition: 'all 200ms cubic-bezier(0.2, 0, 0.2, 1)',
                boxShadow: isActive ? '0 12px 32px rgba(18, 18, 18, 0.08)' : 'none'
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: d.accent, fontWeight: 700 }}>
                  NODE 0{i + 1}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  {isActive ? 'ACTIVE LINK ●' : 'READY'}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                fontWeight: 800,
                color: isActive ? d.accent : 'var(--text-primary)',
                marginBottom: 4,
                transition: 'color 200ms ease'
              }}>
                {d.title}
              </h3>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                {d.subtitle}
              </p>

              {/* Categorized Capability Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                {d.skills.map(s => (
                  <span key={s} className="skill-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
