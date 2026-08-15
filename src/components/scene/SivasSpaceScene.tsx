import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { RoomObjectType, RoomObjectDefinition } from '../../data/room';
import { ROOM_OBJECTS_DATA } from '../../data/room';
import { useSceneCamera } from '../../hooks/useSceneCamera';
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

interface SivasSpaceSceneProps {
  onFocusObject: (obj: RoomObjectDefinition) => void;
  activeObjectId: RoomObjectType | null;
  debugEnvironmentOnly?: boolean;
}

const OBJECT_CAMERA_TARGETS: Record<RoomObjectType, { position: [number, number, number]; target: [number, number, number] }> = {
  'photo': { position: [-1.8, 2.3, -1.8], target: [-1.8, 2.3, -2.95] },
  'whiteboard': { position: [0, 2.3, -1.4], target: [0, 2.3, -2.95] },
  'poster-linkedin': { position: [1.8, 2.4, -1.8], target: [1.8, 2.4, -2.95] },
  'poster-instagram': { position: [1.8, 1.8, -1.8], target: [1.8, 1.8, -2.95] },
  'book-krishi': { position: [-1.4, 1.65, -0.1], target: [-1.4, 1.48, -0.5] },
  'book-careerpath': { position: [-1.1, 1.65, -0.1], target: [-1.1, 1.48, -0.5] },
  'book-realestate': { position: [-0.8, 1.65, -0.1], target: [-0.8, 1.48, -0.5] },
  'laptop': { position: [0, 1.45, 0.4], target: [0, 1.16, -0.1] },
  'book-avis': { position: [-1.2, 1.45, 0.6], target: [-1.2, 1.18, 0.2] },
  'book-ruralinfra': { position: [1.1, 1.45, 0.6], target: [1.1, 1.18, 0.2] },
  'phone': { position: [1.6, 1.65, -0.1], target: [1.6, 1.45, -0.5] },
  'server': { position: [-1.8, 0.6, 0.4], target: [-1.8, 0.4, -0.2] }
};

function SceneContent({ onFocusObject, activeObjectId, debugEnvironmentOnly = false }: SivasSpaceSceneProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const activeCameraTarget = activeObjectId ? OBJECT_CAMERA_TARGETS[activeObjectId] : null;

  useSceneCamera(controlsRef, activeCameraTarget);

  const getObjectDef = (id: RoomObjectType) => ROOM_OBJECTS_DATA.find(o => o.id === id)!;

  // Check if URL has ?debug=env parameter
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const isUrlDebugEnv = urlParams ? urlParams.get('debug') === 'env' : false;
  const shouldHideObjects = debugEnvironmentOnly || isUrlDebugEnv;

  return (
    <>
      {/* Perspective Camera positioned closer at human eye height (Desk occupies 60-75% width) */}
      <PerspectiveCamera makeDefault fov={52} position={[0, 1.65, 3.4]} />

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
        {/* Environment, Room Geometry & Furniture */}
        <Lighting />
        <RoomGeometry />
        <DeskFurniture />
        <DeskLamp3D />
        <WindowPane3D />

        {/* Render Portfolio Objects unless debugEnvironmentOnly / ?debug=env is active */}
        {!shouldHideObjects && (
          <>
            {/* Wall-Mounted Portfolio Objects */}
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

            {/* 3 Upright Standing Project Books on Rear Riser Shelf */}
            <ProjectBook3D
              id="book-krishi"
              title="Krishi Engine"
              position={[-1.4, 1.48, -0.5]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-krishi'))}
              isFocused={activeObjectId === 'book-krishi'}
            />
            <ProjectBook3D
              id="book-careerpath"
              title="CareerPath Engine"
              position={[-1.1, 1.48, -0.5]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-careerpath'))}
              isFocused={activeObjectId === 'book-careerpath'}
            />
            <ProjectBook3D
              id="book-realestate"
              title="Real Estate Hub"
              position={[-0.8, 1.48, -0.5]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-realestate'))}
              isFocused={activeObjectId === 'book-realestate'}
            />

            {/* Centered Workstation Laptop on Desktop */}
            <Laptop3D
              onClick={() => onFocusObject(getObjectDef('laptop'))}
              isFocused={activeObjectId === 'laptop'}
            />

            {/* 2 Resting Desktop Project Books */}
            <ProjectBook3D
              id="book-avis"
              title="Avis AI Assistant"
              position={[-1.2, 1.18, 0.2]}
              rotation={[0, -0.1, 0]}
              isStanding={false}
              onClick={() => onFocusObject(getObjectDef('book-avis'))}
              isFocused={activeObjectId === 'book-avis'}
            />
            <ProjectBook3D
              id="book-ruralinfra"
              title="Rural Infrastructure"
              position={[1.1, 1.18, 0.2]}
              rotation={[0, 0.1, 0]}
              isStanding={false}
              onClick={() => onFocusObject(getObjectDef('book-ruralinfra'))}
              isFocused={activeObjectId === 'book-ruralinfra'}
            />

            {/* Phone Dock on Right Riser Shelf */}
            <PhoneDock3D
              onClick={() => onFocusObject(getObjectDef('phone'))}
              isFocused={activeObjectId === 'phone'}
            />

            {/* Floor-Standing Server Rack Under Left Desk */}
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
        gl={{ antialias: true, alpha: false }}
        className="w-full h-full"
      >
        <SceneContent {...props} />
      </Canvas>
    </div>
  );
};
