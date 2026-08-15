import React, { useState } from 'react';

interface AcademicBook3DProps {
  onClick?: () => void;
  isFocused?: boolean;
}

export const AcademicBook3D: React.FC<AcademicBook3DProps> = ({ onClick, isFocused = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-0.9, 1.161, 0.35]}
      rotation={[0, -0.08, 0]}
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
      {/* Desktop Contact Shadow */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.001, 0]}>
        <planeGeometry args={[0.34, 0.44]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.55} roughness={1.0} />
      </mesh>

      {/* Dark Hardcover Binding Mesh (#1E2430 Dark Navy Charcoal) */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.30, 0.04, 0.40]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#2A3446' : '#1E2430'}
          emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
          emissiveIntensity={isFocused ? 0.25 : hovered ? 0.12 : 0}
          roughness={0.55}
          metalness={0.15}
        />
      </mesh>

      {/* Spine Binding Accent Strip (#141922) */}
      <mesh position={[-0.142, 0.02, 0]}>
        <boxGeometry args={[0.018, 0.041, 0.40]} />
        <meshStandardMaterial color="#141922" roughness={0.7} />
      </mesh>

      {/* White Paper Pages Stack (#F2ECE1) */}
      <mesh position={[0.01, 0.02, 0.005]}>
        <boxGeometry args={[0.278, 0.034, 0.385]} />
        <meshStandardMaterial color="#F2ECE1" roughness={0.88} />
      </mesh>

      {/* Gold Embossed Cover Title Plate ("ACADEMIC RECORD") */}
      <mesh position={[0, 0.041, -0.02]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[0.22, 0.08]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.35} metalness={0.85} />
      </mesh>

      {/* Inset Dark Title Text Representation Strip */}
      <mesh position={[0, 0.042, -0.02]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[0.18, 0.04]} />
        <meshStandardMaterial color="#11151C" roughness={0.8} />
      </mesh>
    </group>
  );
};
