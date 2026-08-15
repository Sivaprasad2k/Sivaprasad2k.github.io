import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { RoomObjectType, RoomObjectDefinition } from '../../data/room';
import { ROOM_OBJECTS_DATA } from '../../data/room';
import { useSceneCamera } from '../../hooks/useSceneCamera';
import { Lighting } from './Lighting';
import { RoomGeometry } from './RoomGeometry';
import { DeskFurniture } from './DeskFurniture';
import { OfficeChair3D } from './OfficeChair3D';
import { Mouse3D } from './Mouse3D';
import { DeskLamp3D } from './DeskLamp3D';
import { WindowPane3D } from './WindowPane3D';
import { PhotoFrame3D } from './PhotoFrame3D';
import { Whiteboard3D } from './Whiteboard3D';
import { SocialPlaques3D } from './SocialPlaques3D';
import { ProjectBook3D } from './ProjectBook3D';
import { Laptop3D } from './Laptop3D';
import { PhoneDock3D } from './PhoneDock3D';
import { ServerRack3D } from './ServerRack3D';

interface SivasSpaceSceneProps {
  onFocusObject: (obj: RoomObjectDefinition) => void;
  activeObjectId: RoomObjectType | null;
  debugMode?: 'env' | 'furniture' | 'objects' | 'lighting' | 'assets' | 'full' | null;
}

const OBJECT_CAMERA_TARGETS: Record<RoomObjectType, { position: [number, number, number]; target: [number, number, number] }> = {
  'photo': { position: [-1.8, 2.3, -1.8], target: [-1.8, 2.3, -2.95] },
  'whiteboard': { position: [0, 2.3, -1.4], target: [0, 2.3, -2.95] },
  'poster-linkedin': { position: [1.8, 2.4, -1.8], target: [1.8, 2.4, -2.95] },
  'poster-instagram': { position: [1.8, 1.8, -1.8], target: [1.8, 1.8, -2.95] },
  'book-krishi': { position: [-1.4, 1.65, -0.1], target: [-1.4, 1.48, -0.48] },
  'book-careerpath': { position: [-1.1, 1.65, -0.1], target: [-1.1, 1.48, -0.52] },
  'book-realestate': { position: [-0.8, 1.65, -0.1], target: [-0.8, 1.48, -0.48] },
  'laptop': { position: [0, 1.45, 0.4], target: [0, 1.16, -0.05] },
  'book-avis': { position: [-1.2, 1.45, 0.6], target: [-1.2, 1.18, 0.25] },
  'book-ruralinfra': { position: [1.1, 1.45, 0.6], target: [1.1, 1.18, 0.25] },
  'phone': { position: [1.6, 1.65, -0.1], target: [1.6, 1.45, -0.5] },
  'server': { position: [-1.8, 0.6, 0.4], target: [-1.8, 0.4, 0.2] }
};

function SceneContent({ onFocusObject, activeObjectId, debugMode }: SivasSpaceSceneProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const activeCameraTarget = activeObjectId ? OBJECT_CAMERA_TARGETS[activeObjectId] : null;

  useSceneCamera(controlsRef, activeCameraTarget);

  const getObjectDef = (id: RoomObjectType) => ROOM_OBJECTS_DATA.find(o => o.id === id)!;

  // Determine active debug mode from prop or URL parameter (?debug=env, ?debug=furniture, ?debug=objects, ?debug=lighting, ?debug=assets)
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const activeDebugParam = debugMode || (urlParams ? (urlParams.get('debug') as 'env' | 'furniture' | 'objects' | 'lighting' | 'assets') : null);

  const isLightingDebug = activeDebugParam === 'lighting';
  const showRoom = activeDebugParam !== 'objects' && activeDebugParam !== 'assets';
  const showFurniture = activeDebugParam !== 'objects' && activeDebugParam !== 'assets';
  const showPortfolioObjects = activeDebugParam !== 'env' && activeDebugParam !== 'furniture';

  return (
    <>
      {/* 3-Quarter Perspective Camera (10-12deg offset, eye height 1.62m, Desk occupies 60-75% width) */}
      <PerspectiveCamera makeDefault fov={52} position={[0.35, 1.62, 3.35]} />

      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2 - 0.05}
        minPolarAngle={Math.PI / 6}
        minDistance={2.2}
        maxDistance={4.8}
        target={[0, 1.12, -0.2]}
      />

      <Suspense fallback={null}>
        {/* Layered Interior Lighting */}
        <Lighting debugLighting={isLightingDebug} />

        {/* Layer 1: Back Wall Architecture & Inset Window */}
        {showRoom && <RoomGeometry />}

        {/* Layer 4: Under-Desk Furniture (Chair, Legs, Server Base) */}
        {showFurniture && (
          <>
            <DeskFurniture />
            <OfficeChair3D />
            <DeskLamp3D />
            <WindowPane3D />
            <Mouse3D />
          </>
        )}

        {/* Portfolio Objects across Spatial Layers */}
        {showPortfolioObjects && (
          <>
            {/* Layer 1: Wall-Mounted Portfolio Objects (z = -2.95) */}
            <PhotoFrame3D
              onClick={() => onFocusObject(getObjectDef('photo'))}
              isFocused={activeObjectId === 'photo'}
            />
            <Whiteboard3D
              onClick={() => onFocusObject(getObjectDef('whiteboard'))}
              isFocused={activeObjectId === 'whiteboard'}
            />
            <SocialPlaques3D
              onSelectLinkedin={() => onFocusObject(getObjectDef('poster-linkedin'))}
              onSelectInstagram={() => onFocusObject(getObjectDef('poster-instagram'))}
              activeId={activeObjectId}
            />

            {/* Layer 2: Rear Riser Shelf Objects (z = -0.48 / -0.52) */}
            <ProjectBook3D
              id="book-krishi"
              title="Krishi Engine"
              position={[-1.4, 1.48, -0.48]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-krishi'))}
              isFocused={activeObjectId === 'book-krishi'}
            />
            <ProjectBook3D
              id="book-careerpath"
              title="CareerPath Engine"
              position={[-1.1, 1.48, -0.52]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-careerpath'))}
              isFocused={activeObjectId === 'book-careerpath'}
            />
            <ProjectBook3D
              id="book-realestate"
              title="Real Estate Hub"
              position={[-0.8, 1.48, -0.48]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-realestate'))}
              isFocused={activeObjectId === 'book-realestate'}
            />

            {/* Layer 3: Walnut Desktop Objects (z = -0.05 / 0.25) */}
            <Laptop3D
              rotation={[0, -0.08, 0]}
              onClick={() => onFocusObject(getObjectDef('laptop'))}
              isFocused={activeObjectId === 'laptop'}
            />

            <ProjectBook3D
              id="book-avis"
              title="Avis AI Assistant"
              position={[-1.2, 1.18, 0.25]}
              rotation={[0, -0.12, 0]}
              isStanding={false}
              onClick={() => onFocusObject(getObjectDef('book-avis'))}
              isFocused={activeObjectId === 'book-avis'}
            />
            <ProjectBook3D
              id="book-ruralinfra"
              title="Rural Infrastructure"
              position={[1.1, 1.18, 0.25]}
              rotation={[0, 0.12, 0]}
              isStanding={false}
              onClick={() => onFocusObject(getObjectDef('book-ruralinfra'))}
              isFocused={activeObjectId === 'book-ruralinfra'}
            />

            <PhoneDock3D
              onClick={() => onFocusObject(getObjectDef('phone'))}
              isFocused={activeObjectId === 'phone'}
            />

            {/* Layer 4: Floor-Standing Server Rack Under Desk (z = 0.2) */}
            <ServerRack3D
              onClick={() => onFocusObject(getObjectDef('server'))}
              isFocused={activeObjectId === 'server'}
            />
          </>
        )}
      </Suspense>
    </>
  );
}

export const SivasSpaceScene: React.FC<SivasSpaceSceneProps> = (props) => {
  return (
    <div className="relative w-full h-screen bg-[#08090B] overflow-hidden select-none">
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
          outputColorSpace: THREE.SRGBColorSpace
        }}
        className="w-full h-full"
      >
        <SceneContent {...props} />
      </Canvas>
    </div>
  );
};
