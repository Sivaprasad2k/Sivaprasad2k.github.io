import { useState, useEffect, useCallback } from 'react';

export type ZoomMode = 'ROOM' | 'EXPLORE' | 'FOCUS';

export interface RoomZoomState {
  zoomLevel: number; // 1.0 to 1.8
  mode: ZoomMode;
  setZoom: (level: number) => void;
  resetZoom: () => void;
}

export function useRoomZoom(
  minZoom: number = 1.0,
  maxZoom: number = 1.8,
  containerRef?: React.RefObject<HTMLElement | null>
): RoomZoomState {
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  const setZoom = useCallback((level: number) => {
    const clamped = Math.min(maxZoom, Math.max(minZoom, level));
    setZoomLevel(clamped);
  }, [minZoom, maxZoom]);

  const resetZoom = useCallback(() => {
    setZoomLevel(1.0);
  }, []);

  useEffect(() => {
    const target = containerRef?.current || window;

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      // Only handle wheel zoom if Ctrl key is pressed or inside room viewport
      if (wheelEvent.ctrlKey || (containerRef?.current && containerRef.current.contains(wheelEvent.target as Node))) {
        wheelEvent.preventDefault();
        const delta = wheelEvent.deltaY < 0 ? 0.08 : -0.08;
        setZoomLevel((prev) => Math.min(maxZoom, Math.max(minZoom, prev + delta)));
      }
    };

    target.addEventListener('wheel', handleWheel, { passive: false });
    return () => target.removeEventListener('wheel', handleWheel);
  }, [containerRef, minZoom, maxZoom]);

  let mode: ZoomMode = 'ROOM';
  if (zoomLevel >= 1.6) mode = 'FOCUS';
  else if (zoomLevel > 1.15) mode = 'EXPLORE';

  return { zoomLevel, mode, setZoom, resetZoom };
}
