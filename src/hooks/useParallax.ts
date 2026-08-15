import { useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface ParallaxState {
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
  offsetX: number; // px
  offsetY: number; // px
}

export function useParallax(maxOffsetX: number = 30, maxOffsetY: number = 18): ParallaxState {
  const prefersReducedMotion = useReducedMotion();
  const [parallax, setParallax] = useState<ParallaxState>({
    normalizedX: 0,
    normalizedY: 0,
    offsetX: 0,
    offsetY: 0
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      setParallax({ normalizedX: 0, normalizedY: 0, offsetX: 0, offsetY: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const normX = Math.min(1, Math.max(-1, (e.clientX - centerX) / centerX));
      const normY = Math.min(1, Math.max(-1, (e.clientY - centerY) / centerY));

      setParallax({
        normalizedX: normX,
        normalizedY: normY,
        offsetX: normX * maxOffsetX,
        offsetY: normY * maxOffsetY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [maxOffsetX, maxOffsetY, prefersReducedMotion]);

  return parallax;
}
