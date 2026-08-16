import { useState } from 'react';
import type { Project } from '../../data/projects';

interface ProjectFlipCardProps {
  project: Project;
  index: number;
}

export function ProjectFlipCard({ project, index }: ProjectFlipCardProps) {
  const [activeSandboxTab, setActiveSandboxTab] = useState<'TOPOLOGY' | 'SCHEMA' | 'METRICS'>('TOPOLOGY');

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
        minHeight: 360,
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
          padding: 'clamp(16px, 2.8vw, 28px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 20,
          alignItems: 'start'
        }}
      >
        {/* Left Pane: Project Brief */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-2" style={{ flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: accentColor, fontWeight: 700 }}>
                {projectNumber} // {project.category}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                {project.status}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 2 }}>
              {project.title}
            </h3>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: accentColor, fontWeight: 600, marginBottom: 10 }}>
              {project.tagline}
            </p>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: 14 }}>
              {project.summary}
            </p>

            {/* Workflow Tag Chain */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: 14, background: 'var(--bg-surface)', padding: '6px 8px', borderRadius: 2, overflowX: 'auto' }}>
              {project.id === 'krishi' && 'WORKFLOW → EVENTS → TASKS → AUTOMATION'}
              {project.id === 'careerpath' && 'APPLICATION → SCREENING → INTERVIEW → OFFER → ACCEPTED'}
              {project.id === 'realestatehub' && 'DISCOVER → PROPERTY → INTERACT → MANAGE'}
              {project.id === 'avis' && 'REQUEST → QUEUE → WORKER → AI → RESULT'}
              {project.id === 'ruralinfra' && 'DATA → PREPROCESS → MODEL → CLASSIFY → EVALUATE'}
            </div>
          </div>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
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
            minHeight: 250
          }}
        >
          {/* Sandbox Top Tabs */}
          <div style={{ background: '#1A202C', padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #2D3748', flexWrap: 'wrap', gap: 6 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: accentColor, fontWeight: 700 }}>
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
          <div style={{ padding: '14px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', overflowX: 'auto' }}>
            {activeSandboxTab === 'TOPOLOGY' && (
              <div>
                <p style={{ color: '#718096', marginBottom: 6, fontSize: '0.7rem' }}>// Architecture Topology Flow</p>
                <svg width="100%" height="70" viewBox="0 0 320 70">
                  <rect x="10" y="20" width="80" height="28" rx="3" fill="#2D3748" stroke={accentColor} strokeWidth="1" />
                  <text x="50" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Client/API</text>

                  <line x1="90" y1="34" x2="130" y2="34" stroke="#718096" strokeWidth="1" strokeDasharray="3 3" />

                  <rect x="130" y="20" width="80" height="28" rx="3" fill="#2D3748" stroke="#48BB78" strokeWidth="1" />
                  <text x="170" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Spring Service</text>

                  <line x1="210" y1="34" x2="250" y2="34" stroke="#718096" strokeWidth="1" strokeDasharray="3 3" />

                  <rect x="250" y="20" width="60" height="28" rx="3" fill="#2D3748" stroke="#ECC94B" strokeWidth="1" />
                  <text x="280" y="38" fill="#E2E8F0" fontSize="9" textAnchor="middle">Postgres</text>
                </svg>
              </div>
            )}

            {activeSandboxTab === 'SCHEMA' && (
              <pre style={{ margin: 0, color: '#A0AEC0', lineHeight: 1.35, fontSize: '0.72rem' }}>
{`{
  "system": "${project.id}",
  "status": "${project.status}",
  "stack": ["${project.technologies.slice(0, 3).join('", "')}"],
  "invariant_check": true
}`}
              </pre>
            )}

            {activeSandboxTab === 'METRICS' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, color: '#A0AEC0', fontSize: '0.72rem' }}>
                <p><span style={{ color: '#48BB78' }}>✓</span> p99 Latency: &lt; 42ms</p>
                <p><span style={{ color: '#48BB78' }}>✓</span> Throughput: 1,200 req/sec</p>
                <p><span style={{ color: '#48BB78' }}>✓</span> State Invariants: Verified</p>
              </div>
            )}
          </div>

          {/* Sandbox Action Links */}
          <div style={{ background: '#1A202C', padding: '8px 12px', borderTop: '1px solid #2D3748', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', flexWrap: 'wrap', gap: 6 }}>
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
