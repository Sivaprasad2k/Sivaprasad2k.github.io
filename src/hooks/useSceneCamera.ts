import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

export interface CameraTarget3D {
  position: [number, number, number];
  target: [number, number, number];
}

export function useSceneCamera(
  controlsRef: React.RefObject<OrbitControlsImpl | null>,
  activeTarget: CameraTarget3D | null
) {
  const { camera } = useThree();
  const defaultPos = useRef(new THREE.Vector3(0, 2.2, 4.8));
  const defaultTarget = useRef(new THREE.Vector3(0, 1.2, 0));

  useFrame((_, delta) => {
    if (!controlsRef.current) return;

    const lerpFactor = Math.min(1.0, delta * 3.5);

    if (activeTarget) {
      const targetPos = new THREE.Vector3(...activeTarget.position);
      const targetLookAt = new THREE.Vector3(...activeTarget.target);

      camera.position.lerp(targetPos, lerpFactor);
      controlsRef.current.target.lerp(targetLookAt, lerpFactor);
    } else {
      camera.position.lerp(defaultPos.current, lerpFactor);
      controlsRef.current.target.lerp(defaultTarget.current, lerpFactor);
    }

    controlsRef.current.update();
  });
}
