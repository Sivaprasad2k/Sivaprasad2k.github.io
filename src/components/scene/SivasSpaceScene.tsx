import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Lighting } from './Lighting';
import { RoomGeometry } from './RoomGeometry';
import { DeskFurniture } from './DeskFurniture';
import { DeskLamp3D } from './DeskLamp3D';
import { WindowPane3D } from './WindowPane3D';
import { PhotoFrame3D } from './PhotoFrame3D';
import { Whiteboard3D } from './Whiteboard3D';
import { SocialPlaques3D } from './SocialPlaques3D';
import { ProjectBook3D } from './ProjectBook3D';
import { Laptop3D } from './Laptop3D';
import { PhoneDock3D } from './PhoneDock3D';
import { ServerRack3D } from './ServerRack3D';

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
          {/* Environment, Room Geometry & Furniture */}
          <Lighting />
          <RoomGeometry />
          <DeskFurniture />
          <DeskLamp3D />
          <WindowPane3D />

          {/* Wall-Mounted Portfolio Objects */}
          <PhotoFrame3D />
          <Whiteboard3D />
          <SocialPlaques3D />

          {/* 3 Upright Standing Project Books on Rear Riser Shelf */}
          <ProjectBook3D title="Krishi Engine" position={[-1.4, 1.48, -0.5]} isStanding={true} />
          <ProjectBook3D title="CareerPath Engine" position={[-1.1, 1.48, -0.5]} isStanding={true} />
          <ProjectBook3D title="Real Estate Hub" position={[-0.8, 1.48, -0.5]} isStanding={true} />

          {/* Centered Workstation Laptop on Desktop */}
          <Laptop3D />

          {/* 2 Resting Desktop Project Books */}
          <ProjectBook3D title="Avis AI Assistant" position={[-1.2, 1.18, 0.2]} rotation={[0, -0.1, 0]} isStanding={false} />
          <ProjectBook3D title="Rural Infrastructure" position={[1.1, 1.18, 0.2]} rotation={[0, 0.1, 0]} isStanding={false} />

          {/* Phone Dock on Right Riser Shelf */}
          <PhoneDock3D />

          {/* Floor-Standing Server Rack Under Left Desk */}
          <ServerRack3D />
        </Suspense>
      </Canvas>
    </div>
  );
};
