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
      {/* Dark Hardcover Binding Mesh (#22252A) with Hover/Focus Glow */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={isStanding ? [0.06, 0.32, 0.22] : [0.28, 0.05, 0.20]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#2D323A' : '#22252A'}
          emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
          emissiveIntensity={isFocused ? 0.30 : hovered ? 0.15 : 0}
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>

      {/* Dark Spine Strip (#2E333C) */}
      <mesh
        position={
          isStanding
            ? [-0.028, 0, 0]
            : [-0.13, 0, 0]
        }
      >
        <boxGeometry args={isStanding ? [0.008, 0.32, 0.22] : [0.015, 0.05, 0.20]} />
        <meshStandardMaterial color="#2E333C" roughness={0.7} />
      </mesh>

      {/* White Paper Page Block (#EEE8DD) */}
      <mesh
        position={
          isStanding
            ? [0.01, 0, 0.01]
            : [0.01, 0, 0.01]
        }
      >
        <boxGeometry args={isStanding ? [0.045, 0.30, 0.20] : [0.26, 0.038, 0.18]} />
        <meshStandardMaterial color="#EEE8DD" roughness={0.85} />
      </mesh>

      {/* Page Edge Texture Accent Line */}
      <mesh
        position={
          isStanding
            ? [0.033, 0, 0.01]
            : [0.01, 0, 0.101]
        }
      >
        <planeGeometry args={isStanding ? [0.20, 0.28] : [0.24, 0.03]} />
        <meshStandardMaterial color="#DED8CC" roughness={0.9} />
      </mesh>
    </group>
  );
};
