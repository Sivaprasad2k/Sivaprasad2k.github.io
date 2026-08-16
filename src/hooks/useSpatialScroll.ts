import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSpatialScroll(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    // Respect reduced motion settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const layers = containerRef.current.querySelectorAll<HTMLElement>('.spatial-layer');
    if (!layers || layers.length === 0) return;

    const ctx = gsap.context(() => {
      layers.forEach((layer, i) => {
        // Ensure layer is crisp when in focal viewport zone
        ScrollTrigger.create({
          trigger: layer,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => {
            gsap.to(layer, {
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.4,
              ease: 'power2.out'
            });
          },
          onEnterBack: () => {
            gsap.to(layer, {
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.4,
              ease: 'power2.out'
            });
          },
          onLeave: () => {
            // Subtle transition when leaving viewport
            gsap.to(layer, {
              scale: 0.98,
              opacity: 0.7,
              filter: 'blur(0px)',
              duration: 0.4,
              ease: 'power2.in'
            });
          },
          onLeaveBack: () => {
            if (i > 0) {
              gsap.to(layer, {
                scale: 0.98,
                opacity: 0.7,
                filter: 'blur(0px)',
                duration: 0.4,
                ease: 'power2.in'
              });
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}
