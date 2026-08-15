import React, { useState } from 'react';

interface PhotoFrame3DProps {
  onClick?: () => void;
  isFocused?: boolean;
}

export const PhotoFrame3D: React.FC<PhotoFrame3DProps> = ({ onClick, isFocused = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-1.8, 2.3, -2.95]}
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
        <planeGeometry args={[0.9, 1.1]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.4} roughness={1.0} />
      </mesh>

      {/* Outer Beveled Wood Frame (#28241E) */}
      <mesh castShadow receiveShadow position={[0, 0, 0.015]}>
        <boxGeometry args={[0.84, 1.04, 0.03]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#38322B' : '#28241E'}
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>

      {/* Inner Off-White Matting Canvas (#E5DFD5) */}
      <mesh position={[0, 0, 0.031]}>
        <planeGeometry args={[0.74, 0.94]} />
        <meshStandardMaterial color="#E5DFD5" roughness={0.8} />
      </mesh>

      {/* Portrait Photograph Image Canvas (#1A1E24) */}
      <mesh position={[0, 0, 0.032]}>
        <planeGeometry args={[0.62, 0.82]} />
        <meshStandardMaterial
          color="#1A1E24"
          emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
          emissiveIntensity={isFocused ? 0.15 : hovered ? 0.08 : 0}
          roughness={0.3}
        />
      </mesh>

      {/* Abstract Portrait Silhouette Representation */}
      <mesh position={[0, 0.08, 0.033]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#3A404A" roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.22, 0.033]}>
        <boxGeometry args={[0.42, 0.34, 0.01]} />
        <meshStandardMaterial color="#222730" roughness={0.7} />
      </mesh>

      {/* Overhead Brass Picture Light Fixture Assembly */}
      <mesh position={[0, 0.56, 0.08]} castShadow>
        <boxGeometry args={[0.45, 0.03, 0.06]} />
        <meshStandardMaterial color="#3A3226" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0, 0.54, 0.04]} rotation-x={0.3} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.08, 16]} />
        <meshStandardMaterial color="#3A3226" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
};
