import { useState, useCallback } from 'react';
import type { RoomObjectType, RoomObjectDefinition } from '../data/room';
import { ROOM_OBJECTS_DATA } from '../data/room';

export interface CameraTarget {
  focalX: number; // 0 to 100%
  focalY: number; // 0 to 100%
  zoom: number; // 1.0 to 1.8
}

export interface RoomCameraState {
  activeObjectId: RoomObjectType | null;
  activeObject: RoomObjectDefinition | null;
  cameraTarget: CameraTarget;
  isFocused: boolean;
  focusObject: (objectId: RoomObjectType) => void;
  resetCamera: () => void;
}

export function useRoomCamera(): RoomCameraState {
  const [activeObjectId, setActiveObjectId] = useState<RoomObjectType | null>(null);
  const [cameraTarget, setCameraTarget] = useState<CameraTarget>({
    focalX: 50,
    focalY: 50,
    zoom: 1.0
  });

  const activeObject = ROOM_OBJECTS_DATA.find(obj => obj.id === activeObjectId) || null;

  const focusObject = useCallback((objectId: RoomObjectType) => {
    const targetObj = ROOM_OBJECTS_DATA.find(obj => obj.id === objectId);
    if (targetObj) {
      setActiveObjectId(objectId);
      setCameraTarget({
        focalX: targetObj.position.x,
        focalY: targetObj.position.y,
        zoom: 1.75
      });
    }
  }, []);

  const resetCamera = useCallback(() => {
    setActiveObjectId(null);
    setCameraTarget({
      focalX: 50,
      focalY: 50,
      zoom: 1.0
    });
  }, []);

  return {
    activeObjectId,
    activeObject,
    cameraTarget,
    isFocused: activeObjectId !== null,
    focusObject,
    resetCamera
  };
}
