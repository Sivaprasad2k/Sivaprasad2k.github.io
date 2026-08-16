import { useState, useEffect } from 'react';

export function ContextualCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Contextual inspection under cursor
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveCard = target.closest('[aria-label*="flip"]');
      const interactiveLink = target.closest('a');
      const domainPanel = target.closest('#domains');

      if (interactiveCard) {
        setLabel('FLIP ↻');
      } else if (interactiveLink) {
        setLabel('OPEN ↗');
      } else if (domainPanel && target.closest('[onMouseEnter]')) {
        setLabel('EXPLORE');
      } else {
        setLabel(null);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible || !label) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x + 16,
        top: pos.y + 16,
        zIndex: 900,
        pointerEvents: 'none',
        background: 'rgba(11, 11, 11, 0.88)',
        color: 'var(--accent-gold)',
        border: '1px solid var(--accent-red)',
        borderRadius: 3,
        padding: '3px 8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        boxShadow: '0 4px 12px rgba(11,11,11,0.2)',
        transition: 'opacity 140ms ease'
      }}
    >
      {label}
    </div>
  );
}
