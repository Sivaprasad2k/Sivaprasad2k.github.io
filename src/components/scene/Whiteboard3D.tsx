import React, { useState } from 'react';

interface Whiteboard3DProps {
  onClick?: () => void;
  isFocused?: boolean;
}

export const Whiteboard3D: React.FC<Whiteboard3DProps> = ({ onClick, isFocused = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[0, 2.3, -2.95]}
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
      {/* Outer Silver Aluminum Frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.2, 1.2, 0.03]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#404550' : '#33373E'}
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* Off-White Board Surface (#DDD7CB) */}
      <mesh position={[0, 0, 0.018]}>
        <planeGeometry args={[2.12, 1.12]} />
        <meshStandardMaterial
          color="#DDD7CB"
          emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
          emissiveIntensity={isFocused ? 0.15 : hovered ? 0.08 : 0}
          roughness={0.3}
        />
      </mesh>

      {/* Silver Aluminum Marker Tray */}
      <mesh position={[0, -0.6, 0.05]} castShadow>
        <boxGeometry args={[0.8, 0.02, 0.08]} />
        <meshStandardMaterial color="#25282D" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Markers (Black, Blue, Red) */}
      <mesh position={[-0.15, -0.58, 0.06]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.008, 0.008, 0.12, 16]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      <mesh position={[0, -0.58, 0.06]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.008, 0.008, 0.12, 16]} />
        <meshStandardMaterial color="#1D4ED8" />
      </mesh>
      <mesh position={[0.15, -0.58, 0.06]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.008, 0.008, 0.12, 16]} />
        <meshStandardMaterial color="#B91C1C" />
      </mesh>
    </group>
  );
};
