import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Lighting } from './Lighting';
import { RoomGeometry } from './RoomGeometry';
import { DeskFurniture } from './DeskFurniture';
import { DeskLamp3D } from './DeskLamp3D';
import { WindowPane3D } from './WindowPane3D';

export const SivasSpaceScene: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#08090B] overflow-hidden select-none">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: false }}
        className="w-full h-full"
      >
        <PerspectiveCamera
          makeDefault
          fov={45}
          position={[0, 2.2, 4.8]}
        />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minPolarAngle={Math.PI / 6}
          minDistance={3.0}
          maxDistance={6.5}
          target={[0, 1.2, 0]}
        />

        <Suspense fallback={null}>
          <Lighting />
          <RoomGeometry />
          <DeskFurniture />
          <DeskLamp3D />
          <WindowPane3D />
        </Suspense>
      </Canvas>
    </div>
  );
};
