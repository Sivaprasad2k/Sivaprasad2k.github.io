import React from 'react';

interface ProjectBook3DProps {
  title: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  isStanding?: boolean;
}

export const ProjectBook3D: React.FC<ProjectBook3DProps> = ({
  position,
  rotation = [0, 0, 0],
  isStanding = true
}) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Dark Graphite Cover Mesh (#181A1D) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={isStanding ? [0.06, 0.32, 0.22] : [0.28, 0.05, 0.20]} />
        <meshStandardMaterial color="#181A1D" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Dark Spine Strip (#25282D) */}
      <mesh
        position={
          isStanding
            ? [-0.028, 0, 0]
            : [-0.13, 0, 0]
        }
      >
        <boxGeometry args={isStanding ? [0.008, 0.32, 0.22] : [0.015, 0.05, 0.20]} />
        <meshStandardMaterial color="#25282D" roughness={0.7} />
      </mesh>

      {/* White Paper Page Block (#E8E2D6) */}
      <mesh
        position={
          isStanding
            ? [0.01, 0, 0.01]
            : [0.01, 0, 0.01]
        }
      >
        <boxGeometry args={isStanding ? [0.045, 0.30, 0.20] : [0.26, 0.038, 0.18]} />
        <meshStandardMaterial color="#E8E2D6" roughness={0.9} />
      </mesh>
    </group>
  );
};
