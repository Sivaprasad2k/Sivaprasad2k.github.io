import { useState, useEffect } from 'react';

export function SignatureProgressionLine() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setScrollPercent(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      left: 12,
      top: 0,
      bottom: 0,
      width: 1,
      zIndex: 400,
      background: 'rgba(11, 11, 11, 0.08)',
      pointerEvents: 'none'
    }}>
      {/* Active Red Progression Track */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${scrollPercent}%`,
        background: 'var(--accent-red)',
        transition: 'height 100ms linear'
      }} />

      {/* Signature Muted Gold Scroll Marker */}
      <div style={{
        position: 'absolute',
        top: `${scrollPercent}%`,
        left: -3,
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--accent-gold)',
        border: '1px solid var(--accent-gold-dark)',
        boxShadow: '0 0 4px rgba(198, 161, 91, 0.4)',
        transform: 'translateY(-50%)',
        transition: 'top 100ms linear'
      }} />
    </div>
  );
}
