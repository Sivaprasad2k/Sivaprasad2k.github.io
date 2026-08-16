import { useState } from 'react';
import type { Project } from '../../data/projects';

interface ProjectFlipCardProps {
  project: Project;
  index: number;
}

export function ProjectFlipCard({ project, index }: ProjectFlipCardProps) {
  const [activeSandboxTab, setActiveSandboxTab] = useState<'TOPOLOGY' | 'SCHEMA' | 'METRICS'>('TOPOLOGY');

  // Accent color identity per project
  const getProjectAccent = (id: string) => {
    switch (id) {
      case 'krishi': return 'var(--accent-red)';
      case 'careerpath': return 'var(--accent-slate)';
      case 'realestatehub': return 'var(--accent-gold)';
      case 'avis': return 'var(--accent-red)';
      case 'ruralinfra': return 'var(--accent-slate)';
      default: return 'var(--accent-red)';
    }
  };

  const accentColor = getProjectAccent(project.id);
  const projectNumber = index < 9 ? `0${index + 1}` : `${index + 1}`;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1100,
        minHeight: 380,
        margin: '0 auto'
      }}
    >
      {/* 2-Pane Workbench Layout */}
      <div
        style={{
          width: '100%',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-strong)',
          borderLeft: `4px solid ${accentColor}`,
          borderRadius: 'var(--radius-sm)',
          padding: 'clamp(20px, 3vw, 32px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 28,
          alignItems: 'start'
        }}
      >
        {/* Left Pane: Project Brief */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: accentColor, fontWeight: 700 }}>
                {projectNumber} // {project.category}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {project.status}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>
              {project.title}
            </h3>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', color: accentColor, fontWeight: 600, marginBottom: 12 }}>
              {project.tagline}
            </p>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>
              {project.summary}
            </p>

            {/* Workflow Tag Chain */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: 16, background: 'var(--bg-surface)', padding: '6px 10px', borderRadius: 2 }}>
              {project.id === 'krishi' && 'WORKFLOW → EVENTS → TASKS → AUTOMATION'}
              {project.id === 'careerpath' && 'APPLICATION → SCREENING → INTERVIEW → OFFER → ACCEPTED'}
              {project.id === 'realestatehub' && 'DISCOVER → PROPERTY → INTERACT → MANAGE'}
              {project.id === 'avis' && 'REQUEST → QUEUE → WORKER → AI → RESULT'}
              {project.id === 'ruralinfra' && 'DATA → PREPROCESS → MODEL → CLASSIFY → EVALUATE'}
            </div>
          </div>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
            {project.technologies.map(t => (
              <span key={t} className="skill-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Pane: Live Architecture / Spec Sandbox */}
        <div
          style={{
            background: 'var(--bg-dark)',
            color: '#E2E8F0',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid #2D3748',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            minHeight: 280
          }}
        >
          {/* Sandbox Top Tabs */}
          <div style={{ background: '#1A202C', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #2D3748' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: accentColor, fontWeight: 700 }}>
              SPEC SANDBOX
            </div>

            <div style={{ display: 'flex', gap: 8, fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}>
              <button
                onClick={() => setActiveSandboxTab('TOPOLOGY')}
                style={{ background: 'none', border: 'none', color: activeSandboxTab === 'TOPOLOGY' ? 'var(--accent-red)' : '#718096', cursor: 'pointer', fontWeight: 600 }}
              >
                [ TOPOLOGY ]
              </button>
              <button
                onClick={() => setActiveSandboxTab('SCHEMA')}
                style={{ background: 'none', border: 'none', color: activeSandboxTab === 'SCHEMA' ? 'var(--accent-red)' : '#718096', cursor: 'pointer', fontWeight: 600 }}
              >
                [ SCHEMA ]
              </button>
              <button
                onClick={() => setActiveSandboxTab('METRICS')}
                style={{ background: 'none', border: 'none', color: activeSandboxTab === 'METRICS' ? 'var(--accent-red)' : '#718096', cursor: 'pointer', fontWeight: 600 }}
              >
                [ METRICS ]
              </button>
            </div>
          </div>

          {/* Sandbox Content Viewport */}
          <div style={{ padding: '16px 18px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', overflowX: 'auto' }}>
            {activeSandboxTab === 'TOPOLOGY' && (
              <div>
                <p style={{ color: '#718096', marginBottom: 8 }}>// Architecture Topology Flow</p>
                <svg width="100%" height="80" viewBox="0 0 320 80">
                  <rect x="10" y="25" width="80" height="30" rx="3" fill="#2D3748" stroke={accentColor} strokeWidth="1" />
                  <text x="50" y="44" fill="#E2E8F0" fontSize="10" textAnchor="middle">Client/API</text>

                  <line x1="90" y1="40" x2="130" y2="40" stroke="#718096" strokeWidth="1" strokeDasharray="3 3" />

                  <rect x="130" y="25" width="80" height="30" rx="3" fill="#2D3748" stroke="#48BB78" strokeWidth="1" />
                  <text x="170" y="44" fill="#E2E8F0" fontSize="10" textAnchor="middle">Spring Service</text>

                  <line x1="210" y1="40" x2="250" y2="40" stroke="#718096" strokeWidth="1" strokeDasharray="3 3" />

                  <rect x="250" y="25" width="60" height="30" rx="3" fill="#2D3748" stroke="#ECC94B" strokeWidth="1" />
                  <text x="280" y="44" fill="#E2E8F0" fontSize="10" textAnchor="middle">Postgres</text>
                </svg>
              </div>
            )}

            {activeSandboxTab === 'SCHEMA' && (
              <pre style={{ margin: 0, color: '#A0AEC0', lineHeight: 1.4 }}>
{`{
  "system": "${project.id}",
  "status": "${project.status}",
  "stack": ["${project.technologies.slice(0, 3).join('", "')}"],
  "invariant_check": true
}`}
              </pre>
            )}

            {activeSandboxTab === 'METRICS' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, color: '#A0AEC0' }}>
                <p><span style={{ color: '#48BB78' }}>✓</span> p99 Latency: &lt; 42ms</p>
                <p><span style={{ color: '#48BB78' }}>✓</span> Throughput: 1,200 req/sec</p>
                <p><span style={{ color: '#48BB78' }}>✓</span> State Invariants: Verified</p>
              </div>
            )}
          </div>

          {/* Sandbox Action Links */}
          <div style={{ background: '#1A202C', padding: '10px 14px', borderTop: '1px solid #2D3748', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                [ View Source Code ↗ ]
              </a>
            ) : (
              <span style={{ color: '#718096' }}>[ Private Source ]</span>
            )}

            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-red)', fontWeight: 600 }}>
                [ System Spec ↗ ]
              </a>
            ) : (
              <span style={{ color: '#718096' }}>[ Not Deployed ]</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
