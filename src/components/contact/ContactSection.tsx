import { PROFILE_DATA } from '../../data/profile';
import { MagneticButton } from '../ui/MagneticButton';

interface ContactSectionProps {
  onShowToast?: (msg: string) => void;
}

export function ContactSection({ onShowToast }: ContactSectionProps) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    if (onShowToast) onShowToast(`Copied ${PROFILE_DATA.email} to clipboard!`);
  };

  return (
    <section className="container" style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px var(--container-padding)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>◆</span>
        <span className="label-editorial" style={{ marginBottom: 0 }}>05 // CONTACT & ACTION</span>
      </div>

      <h2 className="section-headline" style={{ fontSize: 'clamp(2rem, 5vw, 4.2rem)', marginBottom: 14 }}>
        Let's build <br />
        <span style={{ color: 'var(--accent-red)' }}>SOMETHING USEFUL.</span>
      </h2>

      <p className="section-desc" style={{ marginBottom: 28, maxWidth: 640 }}>
        Available for software engineering and backend opportunities focused on system architecture, reliable backend systems and product execution.
      </p>

      {/* Standardized 3-Button Action Grid */}
      <div className="flex items-center gap-3 mb-6" style={{ flexWrap: 'wrap' }}>
        <MagneticButton>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="btn btn--primary"
            style={{ fontSize: '0.92rem', padding: '12px 24px' }}
          >
            ✉ Send Email ↗
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
            style={{ fontSize: '0.92rem', padding: '12px 20px' }}
          >
            LinkedIn ↗
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
            style={{ fontSize: '0.92rem', padding: '12px 20px' }}
          >
            GitHub ↗
          </a>
        </MagneticButton>
      </div>

      {/* Inline Copyable Email Badge */}
      <div style={{ marginBottom: 32 }}>
        <button
          onClick={handleCopyEmail}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            padding: '8px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 140ms ease',
            maxWidth: '100%',
            overflowX: 'auto'
          }}
        >
          <span>{PROFILE_DATA.email}</span>
          <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>[Click to copy ⧉]</span>
        </button>
      </div>

      {/* Minimal Status Bar Footer */}
      <div style={{ paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.78rem' }}>
          SIVA PRASAD M L • SOFTWARE ENGINEER © 2026
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 16, fontSize: '0.78rem' }}>
          <a href={PROFILE_DATA.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}>GitHub</a>
          <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-slate)' }}>LinkedIn</a>
          <a href={`mailto:${PROFILE_DATA.email}`} style={{ color: 'var(--accent-red)' }}>Email</a>
        </div>
      </div>
    </section>
  );
}
