import { useState } from 'react';
import { TerminalWidget } from './TerminalWidget';

interface AboutFlipCardProps {
  imageSrc?: string;
}

export function AboutFlipCard({
  imageSrc = '/images/siva-profile.jpg'
}: AboutFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  const skillCategories = [
    { title: 'BACKEND', chips: ['Java 21', 'Spring Boot 3', 'Spring Security', 'REST APIs', 'FastAPI'] },
    { title: 'DATABASE', chips: ['PostgreSQL', 'JPA / Hibernate', 'Redis', 'SQL Tuning'] },
    { title: 'FRONTEND', chips: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { title: 'TOOLS & ML', chips: ['Python', 'Docker', 'Git', 'TensorFlow'] }
  ];

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label="Engineer Dossier. Click to flip profile portrait."
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      className="perspective-1000"
      style={{
        width: '100%',
        maxWidth: 1080,
        minHeight: 400,
        margin: '0 auto',
        cursor: 'pointer',
        outline: 'none'
      }}
    >
      <div
        className="preserve-3d"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
          transition: 'transform var(--transition-3d)'
        }}
      >
        {/* FRONT FACE (Balanced 2-Column Engineer Dossier) */}
        <div
          className="backface-hidden"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'var(--bg-primary)',
            padding: 'clamp(24px, 4vw, 36px) clamp(24px, 4vw, 44px)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            borderLeft: '4px solid var(--accent-red)'
          }}
        >
          <div>
            {/* Header & Degree */}
            <div className="flex items-center justify-between gap-4 mb-4" style={{ flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-slate)', fontWeight: 600, letterSpacing: '0.12em' }}>
                  02 // ENGINEER DOSSIER
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.8vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: 2, letterSpacing: '-0.035em' }}>
                  Siva Prasad M L
                </h2>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-red)', fontWeight: 600 }}>
                SOFTWARE ENGINEER
              </div>
            </div>

            {/* Academic Line */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Computer Science & Engineering
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                College of Engineering Munnar · APJ Abdul Kalam Technological University
              </p>
            </div>

            {/* 2-Column Layout (Left Skills Chips, Right Terminal Widget) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, alignItems: 'start' }}>
              {/* Left Column: Categorized Skill Chips */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {skillCategories.map(cat => (
                  <div key={cat.title}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-slate)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, fontWeight: 600 }}>
                      {cat.title}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {cat.chips.map(chip => (
                        <span key={chip} className="skill-chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: ASCII Terminal Live Telemetry Widget */}
              <div onClick={(e) => e.stopPropagation()}>
                <TerminalWidget />
              </div>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'right', marginTop: 16 }}>
            CLICK DOSSIER TO FLIP PORTRAIT ↺
          </div>
        </div>

        {/* BACK FACE (Real Profile Photo Integrated Cleanly) */}
        <div
          className="backface-hidden rotate-y-180"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg-dark-deep)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justify: 'flex-end',
            color: '#FFFFFF'
          }}
        >
          {/* Real Profile Photo */}
          <img
            src={imageSrc}
            alt="Siva Prasad M L"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.9
            }}
          />

          {/* Overlay Typography */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            padding: '24px 32px',
            background: 'linear-gradient(to top, rgba(5,5,5,0.95), rgba(5,5,5,0.2) 75%, transparent)'
          }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-gold)', letterSpacing: '0.14em', fontWeight: 600 }}>
              SIVA PRASAD M L
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: '#FFFFFF', marginTop: 4 }}>
              COMPUTER SCIENCE & ENGINEERING · SOFTWARE ENGINEER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
