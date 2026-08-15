import React, { useRef } from 'react';
import type { RoomObjectType, RoomObjectDefinition } from '../../data/room';
import { ROOM_OBJECTS_DATA } from '../../data/room';
import { useParallax } from '../../hooks/useParallax';
import { useRoomZoom } from '../../hooks/useRoomZoom';
import { RoomViewport } from './RoomViewport';
import { RoomBackground } from './RoomBackground';
import { RoomDesk } from './RoomDesk';
import { RoomServerRack } from './RoomServerRack';
import { PhotoFrame } from './PhotoFrame';
import { LaptopObject } from './LaptopObject';
import { ProjectBook } from './ProjectBook';
import { WhiteboardObject } from './WhiteboardObject';
import { PosterObject } from './PosterObject';
import { PhoneObject } from './PhoneObject';

interface SpaceEnvironmentProps {
  onFocusObject: (obj: RoomObjectDefinition) => void;
  activeObjectId: RoomObjectType | null;
}

export const SpaceEnvironment: React.FC<SpaceEnvironmentProps> = ({
  onFocusObject,
  activeObjectId
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallax = useParallax(35, 20);
  const { zoomLevel } = useRoomZoom(1.0, 1.8, containerRef);

  const getObjectDef = (id: RoomObjectType) => ROOM_OBJECTS_DATA.find(o => o.id === id)!;

  // Calculate dynamic camera focal target based on active focused object
  const activeObjectDef = activeObjectId ? ROOM_OBJECTS_DATA.find(o => o.id === activeObjectId) : null;
  const cameraTarget = activeObjectDef
    ? {
        focalX: activeObjectDef.position.x,
        focalY: activeObjectDef.position.y,
        zoom: 1.65
      }
    : {
        focalX: 50,
        focalY: 50,
        zoom: 1.0
      };

  const handleObjectClick = (objDef: RoomObjectDefinition) => {
    onFocusObject(objDef);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] bg-[#0B0D10] overflow-hidden select-none"
    >
      <RoomViewport cameraTarget={cameraTarget} zoomLevel={zoomLevel}>
        {/* Layer 0 & 1: Atmosphere, Back Wall & Floor Grid */}
        <RoomBackground parallaxX={parallax.offsetX} parallaxY={parallax.offsetY} />

        {/* Layer 2: Wall Objects (Photo, Whiteboard, LinkedIn Poster, Instagram Poster) */}
        <PhotoFrame
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('photo'))}
          isFocused={activeObjectId === 'photo'}
        />

        <WhiteboardObject
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('whiteboard'))}
          isFocused={activeObjectId === 'whiteboard'}
        />

        <PosterObject
          objectDef={getObjectDef('poster-linkedin')}
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('poster-linkedin'))}
          isFocused={activeObjectId === 'poster-linkedin'}
        />

        <PosterObject
          objectDef={getObjectDef('poster-instagram')}
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('poster-instagram'))}
          isFocused={activeObjectId === 'poster-instagram'}
        />

        {/* Layer 3: Walnut Desk Surface Structure */}
        <RoomDesk parallaxX={parallax.offsetX} parallaxY={parallax.offsetY} />

        {/* Layer 4: Desk Objects (Laptop, 5 Project Books, Phone) */}
        <LaptopObject
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('laptop'))}
          isFocused={activeObjectId === 'laptop'}
        />

        <ProjectBook
          objectDef={getObjectDef('book-krishi')}
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('book-krishi'))}
          isFocused={activeObjectId === 'book-krishi'}
        />

        <ProjectBook
          objectDef={getObjectDef('book-careerpath')}
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('book-careerpath'))}
          isFocused={activeObjectId === 'book-careerpath'}
        />

        <ProjectBook
          objectDef={getObjectDef('book-realestate')}
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('book-realestate'))}
          isFocused={activeObjectId === 'book-realestate'}
        />

        <ProjectBook
          objectDef={getObjectDef('book-avis')}
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('book-avis'))}
          isFocused={activeObjectId === 'book-avis'}
        />

        <ProjectBook
          objectDef={getObjectDef('book-ruralinfra')}
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('book-ruralinfra'))}
          isFocused={activeObjectId === 'book-ruralinfra'}
        />

        <PhoneObject
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('phone'))}
          isFocused={activeObjectId === 'phone'}
        />

        {/* Layer 5: Server Rack */}
        <RoomServerRack
          parallaxX={parallax.offsetX}
          parallaxY={parallax.offsetY}
          onClick={() => handleObjectClick(getObjectDef('server'))}
          isFocused={activeObjectId === 'server'}
        />
      </RoomViewport>
    </div>
  );
};
