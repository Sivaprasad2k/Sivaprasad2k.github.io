import React, { useState } from 'react';

interface ProjectPoster3DProps {
  id: string;
  title: string;
  tagline: string;
  accentColor: string;
  position: [number, number, number];
  onClick?: () => void;
  isFocused?: boolean;
}

export const ProjectPoster3D: React.FC<ProjectPoster3DProps> = ({
  id,
  title,
  tagline,
  accentColor,
  position,
  onClick,
  isFocused = false
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={position}
      rotation-y={Math.PI / 2}
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
      {/* Wall Contact Shadow */}
      <mesh position={[0, 0, 0.002]}>
        <planeGeometry args={[1.05, 1.45]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.45} roughness={1.0} />
      </mesh>

      {/* Outer Metallic Dark Frame (#1E222A) */}
      <mesh castShadow receiveShadow position={[0, 0, 0.015]}>
        <boxGeometry args={[0.98, 1.38, 0.03]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#313744' : '#1E222A'}
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* Inset Matte Poster Board Face (#12151B) */}
      <mesh position={[0, 0, 0.031]}>
        <planeGeometry args={[0.90, 1.30]} />
        <meshStandardMaterial
          color="#12151B"
          emissive={hovered || isFocused ? accentColor : '#000000'}
          emissiveIntensity={isFocused ? 0.18 : hovered ? 0.09 : 0}
          roughness={0.6}
        />
      </mesh>

      {/* Accent Header Banner */}
      <mesh position={[0, 0.52, 0.032]} name={`poster-${id}-${title}`}>
        <planeGeometry args={[0.82, 0.14]} />
        <meshStandardMaterial color={accentColor} roughness={0.4} />
      </mesh>

      {/* Project Title Block Representation */}
      <mesh position={[-0.15, 0.36, 0.032]} name={`tagline-${tagline.length}`}>
        <planeGeometry args={[0.5, 0.06]} />
        <meshStandardMaterial color="#E8E2D6" roughness={0.7} />
      </mesh>


      {/* System Architecture Diagram Block */}
      <mesh position={[0, 0.05, 0.032]}>
        <planeGeometry args={[0.78, 0.42]} />
        <meshStandardMaterial color="#1C212B" roughness={0.7} />
      </mesh>

      {/* Diagram Node Blocks */}
      <mesh position={[-0.22, 0.05, 0.033]}>
        <planeGeometry args={[0.22, 0.22]} />
        <meshStandardMaterial color={accentColor} roughness={0.5} />
      </mesh>
      <mesh position={[0.22, 0.05, 0.033]}>
        <planeGeometry args={[0.22, 0.22]} />
        <meshStandardMaterial color="#2B3242" roughness={0.5} />
      </mesh>

      {/* Bullet Point Summary Lines */}
      {[-0.22, -0.32, -0.42, -0.52].map((yPos, idx) => (
        <mesh key={idx} position={[0, yPos, 0.032]}>
          <planeGeometry args={[0.76, 0.04]} />
          <meshStandardMaterial color="#2D3444" roughness={0.8} />
        </mesh>
      ))}

      {/* Protective Glass Overlay */}
      <mesh position={[0, 0, 0.034]}>
        <planeGeometry args={[0.90, 1.30]} />
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.05} roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
};
