import React from 'react';
import type { CameraTarget } from '../../hooks/useRoomCamera';

interface RoomViewportProps {
  cameraTarget: CameraTarget;
  zoomLevel: number;
  children: React.ReactNode;
}

export const RoomViewport: React.FC<RoomViewportProps> = ({
  cameraTarget,
  zoomLevel,
  children
}) => {
  const combinedZoom = cameraTarget.zoom * zoomLevel;

  // Calculate focal shift offset to center on selected object
  const focalOffsetX = (50 - cameraTarget.focalX) * (combinedZoom - 1.0) * 8;
  const focalOffsetY = (50 - cameraTarget.focalY) * (combinedZoom - 1.0) * 8;

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0C0E] select-none [perspective:1200px] [perspective-origin:50%_45%]">
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out transform-gpu origin-center [transform-style:preserve-3d]"
        style={{
          transform: `scale(${combinedZoom}) translate3d(${focalOffsetX}px, ${focalOffsetY}px, 0)`
        }}
      >
        {children}
      </div>
    </div>
  );
};
