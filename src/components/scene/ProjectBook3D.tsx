import React, { useState } from 'react';

interface ProjectBook3DProps {
  id: string;
  title: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  isStanding?: boolean;
  onClick?: () => void;
  isFocused?: boolean;
}

export const ProjectBook3D: React.FC<ProjectBook3DProps> = ({
  position,
  rotation = [0, 0, 0],
  isStanding = true,
  onClick,
  isFocused = false
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Dark Graphite Cover Mesh (#181A1D) with Hover/Focus Glow */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={isStanding ? [0.06, 0.32, 0.22] : [0.28, 0.05, 0.20]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#252930' : '#181A1D'}
          emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
          emissiveIntensity={isFocused ? 0.35 : hovered ? 0.2 : 0}
          roughness={0.5}
          metalness={0.1}
        />
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
