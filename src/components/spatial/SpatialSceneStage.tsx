import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SpatialSceneStageProps {
  children: React.ReactNode[];
  onSceneChange?: (index: number) => void;
}

export function SpatialSceneStage({ children, onSceneChange }: SpatialSceneStageProps) {
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const isLocked = useRef<boolean>(false);
  const totalScenes = children.length;
  const touchStartY = useRef<number>(0);

  // Scene background tone shifts & radial light definitions
  const sceneConfigs = [
    { bg: '#F4F1E9', light: 'radial-gradient(circle at 60% 40%, rgba(201, 21, 30, 0.08) 0%, transparent 60%)' }, // Hero: Red light
    { bg: '#F2EFE7', light: 'radial-gradient(circle at 50% 50%, rgba(200, 162, 74, 0.09) 0%, transparent 65%)' }, // Identity: Gold light
    { bg: '#F5F2EA', light: 'radial-gradient(circle at 30% 70%, rgba(36, 87, 255, 0.07) 0%, rgba(201, 21, 30, 0.05) 50%, transparent 70%)' }, // Projects: Blue+Red light
    { bg: '#F1EEE6', light: 'radial-gradient(circle at 70% 30%, rgba(36, 87, 255, 0.08) 0%, transparent 65%)' }, // Domains: Blue light
    { bg: '#F4F0E7', light: 'radial-gradient(circle at 50% 50%, rgba(201, 21, 30, 0.07) 0%, rgba(200, 162, 74, 0.06) 50%, transparent 70%)' }, // Contact: Red+Gold light
  ];

  const goToScene = useCallback((targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= totalScenes) return;
    setIsTransitioning(true);
    setCurrentScene(targetIndex);
    if (onSceneChange) onSceneChange(targetIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 750);
  }, [totalScenes, onSceneChange]);

  const nextScene = useCallback(() => {
    if (currentScene < totalScenes - 1) {
      goToScene(currentScene + 1);
    }
  }, [currentScene, totalScenes, goToScene]);

  const prevScene = useCallback(() => {
    if (currentScene > 0) {
      goToScene(currentScene - 1);
    }
  }, [currentScene, goToScene]);

  // Controlled Mouse Wheel Input
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isLocked.current) return;
      if (Math.abs(e.deltaY) < 22) return;

      isLocked.current = true;

      if (e.deltaY > 0) {
        nextScene();
      } else {
        prevScene();
      }

      setTimeout(() => {
        isLocked.current = false;
      }, 750);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextScene, prevScene]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        nextScene();
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        prevScene();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToScene(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToScene(totalScenes - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextScene, prevScene, goToScene, totalScenes]);

  // Touch Swipe Handling
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffY) > 40) {
        if (diffY > 0) {
          nextScene();
        } else {
          prevScene();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextScene, prevScene]);

  const activeConfig = sceneConfigs[currentScene] || sceneConfigs[0];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: activeConfig.bg,
        perspective: '1200px',
        transition: 'background 750ms ease'
      }}
    >
      {/* LAYER 1: SCROLL-REACTIVE LIGHT FIELD */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: activeConfig.light,
          opacity: isTransitioning ? 0.12 : 0.05,
          transition: 'opacity 750ms ease, background 750ms ease',
          pointerEvents: 'none'
        }}
      />

      {/* LAYER 2: TECHNICAL DEPTH GRID */}
      <div
        className="tech-grid-pattern"
        style={{
          opacity: isTransitioning ? 0.08 : 0.02,
          transform: isTransitioning ? 'scale(1.05) translateZ(-400px)' : 'scale(1) translateZ(-700px)',
          transition: 'transform 750ms cubic-bezier(0.2, 0, 0.25, 1), opacity 750ms ease'
        }}
      />

      {/* LAYER 3: MAIN CONTENT PLANES */}
      {React.Children.map(children, (child, index) => {
        const isActive = index === currentScene;
        const isPast = index < currentScene;
        const isFuture = index > currentScene;

        let scale = 1;
        let translateZ = 0;
        let rotateX = 0;
        let opacity = 1;
        let blur = 0;

        if (isPast) {
          scale = 0.82;
          translateZ = -500;
          rotateX = -2;
          opacity = 0;
          blur = 2;
        } else if (isFuture) {
          scale = 1.18;
          translateZ = 450;
          opacity = 0;
          blur = 2;
        }

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justify: 'center',
              alignItems: 'center',
              overflowY: 'auto',
              padding: 'clamp(16px, 3vh, 40px) 0',
              transform: `translate3d(0, 0, ${translateZ}px) scale(${scale}) rotateX(${rotateX}deg)`,
              opacity,
              filter: blur > 0 ? `blur(${blur}px)` : 'none',
              pointerEvents: isActive ? 'auto' : 'none',
              transition: 'transform 750ms cubic-bezier(0.2, 0, 0.25, 1), opacity 750ms cubic-bezier(0.2, 0, 0.25, 1), filter 750ms ease',
              willChange: 'transform, opacity, filter'
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
