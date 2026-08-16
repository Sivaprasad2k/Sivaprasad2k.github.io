import { useState, useEffect } from 'react';

interface SceneDotsIndicatorProps {
  currentScene: number;
  totalScenes: number;
  onSelectScene: (index: number) => void;
}

export function SceneDotsIndicator({
  currentScene,
  totalScenes,
  onSelectScene
}: SceneDotsIndicatorProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sceneLabels = [
    '01 // INDEX',
    '02 // DOSSIER',
    '03 // WORKBENCH',
    '04 // TOPOLOGY',
    '05 // CONTACT'
  ];

  // Global Keyboard Navigation: Arrow Up/Down or j/k keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing inside an input or textarea
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (targetTag === 'input' || targetTag === 'textarea') return;

      if (e.key === 'j' || e.key === 'J') {
        if (currentScene < totalScenes - 1) onSelectScene(currentScene + 1);
      } else if (e.key === 'k' || e.key === 'K') {
        if (currentScene > 0) onSelectScene(currentScene - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScene, totalScenes, onSelectScene]);

  return (
    <div
      style={{
        position: 'fixed',
        right: 22,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 500,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        alignItems: 'flex-end'
      }}
      aria-label="Viewport Pagination Rail"
    >
      {Array.from({ length: totalScenes }).map((_, i) => {
        const isActive = i === currentScene;
        const isHovered = hoveredIndex === i;

        return (
          <div
            key={i}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justify: 'flex-end'
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip Popover on Hover */}
            {isHovered && (
              <div
                style={{
                  position: 'absolute',
                  right: 24,
                  whiteSpace: 'nowrap',
                  background: 'var(--bg-dark)',
                  color: '#FFFFFF',
                  padding: '3px 8px',
                  borderRadius: 2,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(18, 18, 18, 0.2)',
                  animation: 'fadeIn 120ms ease'
                }}
              >
                {sceneLabels[i] || `0${i + 1} // SCENE`}
              </div>
            )}

            {/* Clickable Dot */}
            <button
              onClick={() => onSelectScene(i)}
              aria-label={`Navigate to ${sceneLabels[i] || `Scene ${i + 1}`}`}
              style={{
                width: isActive ? 10 : 6,
                height: isActive ? 10 : 6,
                borderRadius: '50%',
                background: isActive ? 'var(--accent-red)' : 'var(--text-muted)',
                border: isActive ? '1px solid var(--accent-gold)' : '1px solid transparent',
                cursor: 'pointer',
                transform: isActive ? 'scale(1.3)' : isHovered ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1), background 200ms ease',
                padding: 0
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
