import React from 'react';
import type { RoomObjectType, RoomObjectDefinition } from '../../data/room';
import { SivasSpaceScene } from '../scene/SivasSpaceScene';

interface SpaceEnvironmentProps {
  onFocusObject: (obj: RoomObjectDefinition) => void;
  activeObjectId: RoomObjectType | null;
  debugMode?: 'env' | 'furniture' | 'objects' | 'lighting' | 'assets' | 'full' | null;
}

export const SpaceEnvironment: React.FC<SpaceEnvironmentProps> = ({
  onFocusObject,
  activeObjectId,
  debugMode
}) => {
  return (
    <div className="relative w-full h-screen min-h-[600px] bg-[#08090B] overflow-hidden select-none">
      <SivasSpaceScene
        onFocusObject={onFocusObject}
        activeObjectId={activeObjectId}
        debugMode={debugMode}
      />
    </div>
  );
};
