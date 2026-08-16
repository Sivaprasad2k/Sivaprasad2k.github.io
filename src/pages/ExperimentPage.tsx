import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';

export function ExperimentPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_DATA.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, paddingTop: 100 }}>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>404 — Project Case Study Not Found</p>
        <Link to="/" className="btn btn--outline">← Return Home</Link>
      </div>
    );
  }

  const otherProjects = PROJECTS_DATA.filter(p => p.id !== id).slice(0, 2);

  return (
    <div className="container" style={{ paddingTop: 120, paddingBottom: 80 }}>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <Link to="/" style={{ color: 'var(--text-muted)' }}>
          ← Home
        </Link>
        <span>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>Selected Work</span>
        <span>/</span>
        <span style={{ color: 'var(--accent-red)' }}>{project.title}</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 44 }}>
        <span className="label-editorial">
          <span style={{ color: 'var(--accent-gold)' }}>◆</span> STATUS · {project.status}
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, letterSpacing: '-0.035em', marginBottom: 12 }}>
          {project.title}
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--accent-red)', marginBottom: 28 }}>
          {project.tagline}
        </p>
        <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
              Live Demo ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn--outline">
              GitHub Repository ↗
            </a>
          )}
          <Link to="/" className="btn btn--outline">← Back to Portfolio</Link>
        </div>
      </div>

      {/* Problem & System Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 48 }}>
        {[
          { label: 'PROBLEM', content: project.problem },
          { label: 'SYSTEM ARCHITECTURE', content: project.systemOverview },
          { label: 'SUMMARY', content: project.summary },
        ].map(({ label, content }) => (
          <div key={label} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '24px 26px' }}>
            <span className="label-editorial" style={{ fontSize: '0.68rem', marginBottom: 8 }}>{label}</span>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{content}</p>
          </div>
        ))}
      </div>

      {/* Architecture Layers */}
      <div style={{ marginBottom: 48 }}>
        <span className="label-editorial">
          <span style={{ color: 'var(--accent-gold)' }}>◆</span> SYSTEM ARCHITECTURE BREAKDOWN
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
          {project.architectureLayers.map((layer, i) => (
            <div key={layer.layer} style={{ display: 'grid', gridTemplateColumns: '32px 180px 1fr', gap: 20, padding: '20px 24px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', alignItems: 'start' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-red)', fontWeight: 600 }}>0{i+1}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{layer.layer}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: 2 }}>{layer.component}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-red)', marginTop: 2 }}>{layer.tech}</div>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{layer.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Decisions */}
      <div style={{ marginBottom: 48 }}>
        <span className="label-editorial">
          <span style={{ color: 'var(--accent-gold)' }}>◆</span> ENGINEERING DECISIONS & TRADE-OFFS
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 12 }}>
          {project.engineeringDecisions.map((d, i) => (
            <div key={i} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent-red)', borderRadius: 'var(--radius-md)', padding: '24px 26px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 12 }}>{d.decision}</h3>
              <div className="kv-row">
                <span className="kv-label">RATIONALE</span>
                <span className="kv-value" style={{ color: 'var(--text-secondary)' }}>{d.rationale}</span>
              </div>
              <div className="kv-row" style={{ borderBottom: 'none' }}>
                <span className="kv-label">IMPACT</span>
                <span className="kv-value" style={{ color: 'var(--accent-red)', fontWeight: 600 }}>{d.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div style={{ paddingTop: 32, borderTop: '1px solid var(--border)' }}>
          <span className="label-editorial">OTHER PROJECTS</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 12 }}>
            {otherProjects.map(p => (
              <Link key={p.id} to={`/experiment/${p.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 4 }}>{p.title}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-red)' }}>{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
