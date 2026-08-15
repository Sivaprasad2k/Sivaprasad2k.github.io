import { useEffect, useRef, useState, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';

export interface CameraTarget3D {
  position: [number, number, number];
  target: [number, number, number];
}

interface RoomControlsOptions {
  activeTarget: CameraTarget3D | null;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
  isLocked?: boolean;
}

export function useRoomControls({ activeTarget, controlsRef, isLocked = false }: RoomControlsOptions) {
  const { camera } = useThree();
  const [hasInteracted, setHasInteracted] = useState(false);

  // Position & Velocity State
  const position = useRef(new THREE.Vector3(0.0, 1.62, 3.4));
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // Establishing Shot Animation State (1.5s on boot)
  const isBooting = useRef(true);
  const bootProgress = useRef(0.0);
  const bootStartPos = useRef(new THREE.Vector3(0.35, 1.95, 4.3));
  const bootEndPos = useRef(new THREE.Vector3(0.0, 1.62, 3.4));

  // Key event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
        keysPressed.current[key] = true;
        if (!hasInteracted) setHasInteracted(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
        keysPressed.current[key] = false;
      }
    };

    const handleInteraction = () => {
      if (!hasInteracted) setHasInteracted(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted]);

  // Frame Loop logic
  useFrame((_, delta) => {
    if (!controlsRef.current) return;

    const lerpFactor = Math.min(1.0, delta * 4.5);

    // If an object is actively focused, smoothly animate camera to focus target
    if (activeTarget) {
      const targetPos = new THREE.Vector3(...activeTarget.position);
      const targetLookAt = new THREE.Vector3(...activeTarget.target);

      camera.position.lerp(targetPos, lerpFactor);
      controlsRef.current.target.lerp(targetLookAt, lerpFactor);
      controlsRef.current.update();
      return;
    }

    // 1. Initial Establishing Shot Lerp
    if (isBooting.current) {
      bootProgress.current += delta * 0.75; // ~1.5s total duration
      if (bootProgress.current >= 1.0) {
        bootProgress.current = 1.0;
        isBooting.current = false;
      }
      const currentBootPos = new THREE.Vector3().lerpVectors(
        bootStartPos.current,
        bootEndPos.current,
        THREE.MathUtils.smoothstep(bootProgress.current, 0, 1)
      );
      camera.position.copy(currentBootPos);
      position.current.copy(currentBootPos);
      controlsRef.current.target.set(0, 1.12, -0.2);
      controlsRef.current.update();
      return;
    }

    if (isLocked) return;

    // 2. Free-Roam Keyboard Movement Logic
    const moveSpeed = 3.2 * delta;
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0; // Lock movement to horizontal ground plane
    forward.normalize();

    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).negate();

    const moveVector = new THREE.Vector3(0, 0, 0);

    if (keysPressed.current['w'] || keysPressed.current['arrowup']) {
      moveVector.add(forward.clone().multiplyScalar(moveSpeed));
    }
    if (keysPressed.current['s'] || keysPressed.current['arrowdown']) {
      moveVector.sub(forward.clone().multiplyScalar(moveSpeed));
    }
    if (keysPressed.current['a'] || keysPressed.current['arrowleft']) {
      moveVector.sub(right.clone().multiplyScalar(moveSpeed));
    }
    if (keysPressed.current['d'] || keysPressed.current['arrowright']) {
      moveVector.add(right.clone().multiplyScalar(moveSpeed));
    }

    // Velocity momentum lerp
    velocity.current.lerp(moveVector, Math.min(1.0, delta * 10.0));
    position.current.add(velocity.current);

    // Enforce Room Boundary Collisions
    // x ∈ [-5.5, 5.5], y ∈ [1.2, 2.5], z ∈ [-1.2, 3.8]
    position.current.x = THREE.MathUtils.clamp(position.current.x, -5.5, 5.5);
    position.current.y = THREE.MathUtils.clamp(position.current.y, 1.25, 2.4);
    position.current.z = THREE.MathUtils.clamp(position.current.z, -1.2, 3.8);

    // Apply movement delta to camera position and OrbitControls target
    const currentTarget = controlsRef.current.target.clone();
    const cameraDelta = position.current.clone().sub(camera.position);

    camera.position.add(cameraDelta);
    currentTarget.add(cameraDelta);

    // Enforce OrbitControls lookAt constraints
    currentTarget.y = THREE.MathUtils.clamp(currentTarget.y, 0.4, 3.2);

    controlsRef.current.target.copy(currentTarget);
    controlsRef.current.update();
  });

  const resetPosition = useCallback(() => {
    position.current.set(0.0, 1.62, 3.4);
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 1.12, -0.2);
    }
  }, [controlsRef]);

  return {
    hasInteracted,
    resetPosition
  };
}
