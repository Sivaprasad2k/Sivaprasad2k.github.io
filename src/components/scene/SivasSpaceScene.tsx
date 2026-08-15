import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { RoomObjectType, RoomObjectDefinition } from '../../data/room';
import { ROOM_OBJECTS_DATA } from '../../data/room';
import { useRoomControls } from '../../hooks/useRoomControls';
import { Lighting } from './Lighting';
import { RoomGeometry } from './RoomGeometry';
import { DeskFurniture } from './DeskFurniture';
import { OfficeChair3D } from './OfficeChair3D';
import { Mouse3D } from './Mouse3D';
import { WindowPane3D } from './WindowPane3D';
import { Whiteboard3D } from './Whiteboard3D';
import { SocialPlaques3D } from './SocialPlaques3D';
import { ProjectBook3D } from './ProjectBook3D';
import { Laptop3D } from './Laptop3D';
import { PhoneDock3D } from './PhoneDock3D';
import { ServerRack3D } from './ServerRack3D';
import { Bookshelf3D } from './Bookshelf3D';
import { Notebook3D } from './Notebook3D';
import { LayoutDebug3D } from './LayoutDebug3D';
import { TubeLight3D } from './TubeLight3D';
import { DeskPhoto3D } from './DeskPhoto3D';
import { AcademicBook3D } from './AcademicBook3D';
import { ProjectPoster3D } from './ProjectPoster3D';
import { SpaceControlsOverlay } from '../space-ui/SpaceControlsOverlay';

interface SivasSpaceSceneProps {
  onFocusObject: (obj: RoomObjectDefinition) => void;
  activeObjectId: RoomObjectType | null;
  debugMode?: 'env' | 'furniture' | 'objects' | 'lighting' | 'assets' | 'layout' | 'camera' | 'physics' | 'full' | null;
}

const OBJECT_CAMERA_TARGETS: Record<RoomObjectType, { position: [number, number, number]; target: [number, number, number] }> = {
  'photo': { position: [-1.4, 1.45, 0.6], target: [-1.8, 1.18, 0.25] },
  'academic-book': { position: [-0.9, 1.5, 0.75], target: [-0.9, 1.18, 0.35] },
  'poster-krishi': { position: [-5.8, 2.4, -1.6], target: [-7.92, 2.4, -1.6] },
  'poster-careerpath': { position: [-5.8, 2.4, 0.0], target: [-7.92, 2.4, 0.0] },
  'poster-realestate': { position: [-5.8, 2.4, 1.6], target: [-7.92, 2.4, 1.6] },
  'whiteboard': { position: [0, 2.3, -1.2], target: [0, 2.3, -2.95] },
  'poster-linkedin': { position: [2.1, 2.45, -1.8], target: [2.1, 2.45, -2.95] },
  'poster-instagram': { position: [2.1, 1.90, -1.8], target: [2.1, 1.90, -2.95] },
  'poster-contact': { position: [2.1, 1.35, -1.8], target: [2.1, 1.35, -2.95] },
  'book-krishi': { position: [-1.4, 1.65, -0.1], target: [-1.4, 1.48, -0.52] },
  'book-careerpath': { position: [-1.0, 1.65, -0.1], target: [-1.0, 1.48, -0.52] },
  'book-realestate': { position: [-0.6, 1.65, -0.1], target: [-0.6, 1.48, -0.52] },
  'laptop': { position: [0, 1.45, 0.4], target: [0, 1.16, -0.05] },
  'book-avis': { position: [-1.2, 1.45, 0.6], target: [-1.2, 1.18, 0.25] },
  'book-ruralinfra': { position: [1.1, 1.45, 0.6], target: [1.1, 1.18, 0.25] },
  'phone': { position: [1.6, 1.65, -0.1], target: [1.6, 1.18, 0.2] },
  'server': { position: [-1.8, 0.6, 0.4], target: [-1.8, 0.4, 0.15] }
};

function SceneContent({ onFocusObject, activeObjectId, debugMode, setHasInteracted }: SivasSpaceSceneProps & { setHasInteracted: (val: boolean) => void }) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const activeCameraTarget = activeObjectId ? OBJECT_CAMERA_TARGETS[activeObjectId] : null;

  // WASD Free-Roam Navigation & Camera Collision Controller
  const { hasInteracted } = useRoomControls({
    activeTarget: activeCameraTarget,
    controlsRef
  });

  React.useEffect(() => {
    if (hasInteracted) setHasInteracted(true);
  }, [hasInteracted, setHasInteracted]);

  const getObjectDef = (id: RoomObjectType) => ROOM_OBJECTS_DATA.find(o => o.id === id)!;

  // Determine active debug mode from prop or URL parameter (?debug=env, ?debug=furniture, ?debug=objects, ?debug=lighting, ?debug=layout, ?debug=camera, ?debug=physics)
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const activeDebugParam = debugMode || (urlParams ? (urlParams.get('debug') as 'env' | 'furniture' | 'objects' | 'lighting' | 'assets' | 'layout' | 'camera' | 'physics') : null);

  const isLightingDebug = activeDebugParam === 'lighting';
  const isLayoutDebug = activeDebugParam === 'layout' || activeDebugParam === 'camera' || activeDebugParam === 'physics';
  const showRoom = activeDebugParam !== 'objects' && activeDebugParam !== 'assets';
  const showFurniture = activeDebugParam !== 'objects' && activeDebugParam !== 'assets';
  const showPortfolioObjects = activeDebugParam !== 'env' && activeDebugParam !== 'furniture';

  return (
    <>
      {/* 3D Room Exploration Camera (Eye height 1.62m, 50deg FOV) */}
      <PerspectiveCamera makeDefault fov={50} position={[0.0, 1.62, 3.4]} />

      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={true}
        screenSpacePanning={true}
        maxPolarAngle={Math.PI / 2 - 0.02}
        minPolarAngle={Math.PI / 6}
        minDistance={1.4}
        maxDistance={5.2}
        target={[0, 1.12, -0.2]}
      />

      <Suspense fallback={null}>
        {/* Layered Architectural & Room Illumination */}
        <Lighting debugLighting={isLightingDebug} />

        {/* Layout & Camera Debug Wireframe Overlay */}
        {isLayoutDebug && <LayoutDebug3D objectTargets={OBJECT_CAMERA_TARGETS} />}

        {/* Layer 1: Architectural Room Shell, Back Wall Tube Light, Window */}
        {showRoom && (
          <>
            <RoomGeometry />
            <TubeLight3D />
            <WindowPane3D />

            {/* Left Wall Project Gallery Posters */}
            <ProjectPoster3D
              id="poster-krishi"
              title="Krishi Engine"
              tagline="Agricultural Operations Backend Architecture"
              accentColor="#10B981"
              position={[-7.92, 2.4, -1.6]}
              onClick={() => onFocusObject(getObjectDef('poster-krishi'))}
              isFocused={activeObjectId === 'poster-krishi'}
            />
            <ProjectPoster3D
              id="poster-careerpath"
              title="CareerPath Engine"
              tagline="Relational Application & Milestone Tracker"
              accentColor="#3B82F6"
              position={[-7.92, 2.4, 0.0]}
              onClick={() => onFocusObject(getObjectDef('poster-careerpath'))}
              isFocused={activeObjectId === 'poster-careerpath'}
            />
            <ProjectPoster3D
              id="poster-realestate"
              title="Real Estate Hub"
              tagline="Property Marketplace with Fine-Grained RBAC"
              accentColor="#F59E0B"
              position={[-7.92, 2.4, 1.6]}
              onClick={() => onFocusObject(getObjectDef('poster-realestate'))}
              isFocused={activeObjectId === 'poster-realestate'}
            />
          </>
        )}

        {/* Layer 2 & 4: Furniture Structures */}
        {showFurniture && (
          <>
            <DeskFurniture />
            <OfficeChair3D />
            <Bookshelf3D />
            <Notebook3D />
            <Mouse3D />
          </>
        )}

        {/* Portfolio Interactive Objects across Spatial Layers */}
        {showPortfolioObjects && (
          <>
            {/* Layer 1: Back Wall Whiteboard & Social/Contact Plaques */}
            <Whiteboard3D
              onClick={() => onFocusObject(getObjectDef('whiteboard'))}
              isFocused={activeObjectId === 'whiteboard'}
            />
            <SocialPlaques3D
              onSelectLinkedin={() => onFocusObject(getObjectDef('poster-linkedin'))}
              onSelectInstagram={() => onFocusObject(getObjectDef('poster-instagram'))}
              onSelectContact={() => onFocusObject(getObjectDef('poster-contact'))}
              activeId={activeObjectId}
            />

            {/* Layer 2: Rear Riser Shelf Upright Books */}
            <ProjectBook3D
              id="book-krishi"
              title="Krishi Engine"
              position={[-1.4, 1.48, -0.52]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-krishi'))}
              isFocused={activeObjectId === 'book-krishi'}
            />
            <ProjectBook3D
              id="book-careerpath"
              title="CareerPath Engine"
              position={[-1.0, 1.48, -0.52]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-careerpath'))}
              isFocused={activeObjectId === 'book-careerpath'}
            />
            <ProjectBook3D
              id="book-realestate"
              title="Real Estate Hub"
              position={[-0.6, 1.48, -0.52]}
              isStanding={true}
              onClick={() => onFocusObject(getObjectDef('book-realestate'))}
              isFocused={activeObjectId === 'book-realestate'}
            />

            {/* Layer 3: Main Desktop Surface Objects */}
            <DeskPhoto3D
              onClick={() => onFocusObject(getObjectDef('photo'))}
              isFocused={activeObjectId === 'photo'}
            />

            <AcademicBook3D
              onClick={() => onFocusObject(getObjectDef('academic-book'))}
              isFocused={activeObjectId === 'academic-book'}
            />

            <Laptop3D
              rotation={[0, -0.05, 0]}
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

            {/* Layer 4: Floor-Standing Server Rack Under/Beside Desk Leg */}
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
  const [hasInteracted, setHasInteracted] = React.useState(false);

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
        <SceneContent {...props} setHasInteracted={setHasInteracted} />
      </Canvas>

      {/* Room Controls HUD Overlay */}
      <SpaceControlsOverlay hasInteracted={hasInteracted} />
    </div>
  );
};


