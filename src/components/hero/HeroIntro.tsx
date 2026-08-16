import { usePointerParallax } from '../../hooks/usePointerParallax';

interface HeroIntroProps {
  onNavigateNext?: () => void;
}

export function HeroIntro({ onNavigateNext }: HeroIntroProps) {
  const parallax = usePointerParallax();

  return (
    <section className="container" style={{ width: '100%', minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', padding: '24px var(--container-padding)' }}>
      {/* Main Hero Content */}
      <div style={{
        transform: `translate3d(${parallax.x * 0.8}px, ${parallax.y * 0.8}px, 0)`,
        transition: 'transform 120ms cubic-bezier(0,0,0.2,1)',
        marginBottom: 'clamp(20px, 4vh, 36px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>◆</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'var(--accent-slate)',
            textTransform: 'uppercase'
          }}>
            SIVA PRASAD M L · SOFTWARE ENGINEER
          </span>
        </div>

        {/* Engineering Lifecycle Pipeline Headline */}
        <h1 style={{
          fontSize: 'clamp(1.9rem, 6vw, 4.8rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.08,
          maxWidth: 1060,
          color: 'var(--text-primary)',
          wordBreak: 'break-word'
        }}>
          IDEA → SRS → SSD → <br />
          <span style={{ color: 'var(--accent-red)' }}>IMPLEMENTATION → TESTING → DEPLOYMENT</span>
        </h1>
      </div>

      {/* Focused Subtext */}
      <div style={{
        transform: `translate3d(${parallax.x * 0.4}px, ${parallax.y * 0.4}px, 0)`,
        transition: 'transform 120ms cubic-bezier(0,0,0.2,1)',
        maxWidth: 640
      }}>
        <p style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          fontWeight: 500
        }}>
          I build software systems from scratch.
        </p>
      </div>

      {/* Interactive Magnetic Scroll Trigger */}
      <div style={{ position: 'absolute', bottom: 32, left: 'var(--container-padding)' }}>
        <button
          onClick={onNavigateNext}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-primary)',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <span>DISCOVER WORK & IDENTITY</span>
          <span style={{ color: 'var(--accent-red)', fontWeight: 700, fontSize: '1rem', animation: 'bounce 1.5s infinite' }}>↓</span>
        </button>
      </div>
    </section>
  );
}
