import React, { useState } from 'react';
import type { RoomObjectType } from '../../data/room';

interface SocialPlaques3DProps {
  onSelectLinkedin: () => void;
  onSelectInstagram: () => void;
  activeId: RoomObjectType | null;
}

export const SocialPlaques3D: React.FC<SocialPlaques3DProps> = ({
  onSelectLinkedin,
  onSelectInstagram,
  activeId
}) => {
  const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
  const [hoveredInstagram, setHoveredInstagram] = useState(false);

  const isLinkedinFocused = activeId === 'poster-linkedin';
  const isInstagramFocused = activeId === 'poster-instagram';

  return (
    <group position={[1.8, 0, -2.95]}>
      {/* 1. LinkedIn Physical Wall Plaque */}
      <group
        position={[0, 2.4, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectLinkedin();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredLinkedin(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHoveredLinkedin(false);
          document.body.style.cursor = 'auto';
        }}
      >
        {/* Wall Contact Shadow */}
        <mesh position={[0, 0, 0.002]}>
          <planeGeometry args={[0.7, 0.45]} />
          <meshStandardMaterial color="#000000" transparent opacity={0.4} roughness={1.0} />
        </mesh>

        {/* Outer Metallic Dark Frame (#20242B) */}
        <mesh castShadow receiveShadow position={[0, 0, 0.015]}>
          <boxGeometry args={[0.64, 0.40, 0.025]} />
          <meshStandardMaterial
            color={isLinkedinFocused ? '#65B8FF' : hoveredLinkedin ? '#2C323B' : '#20242B'}
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>

        {/* Inset Face Plate (#0284C7 Dark LinkedIn Blue) */}
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[0.58, 0.34]} />
          <meshStandardMaterial
            color="#0284C7"
            emissive={hoveredLinkedin || isLinkedinFocused ? '#0284C7' : '#000000'}
            emissiveIntensity={isLinkedinFocused ? 0.25 : hoveredLinkedin ? 0.12 : 0}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* 2. Instagram Physical Wall Plaque */}
      <group
        position={[0, 1.8, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectInstagram();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredInstagram(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHoveredInstagram(false);
          document.body.style.cursor = 'auto';
        }}
      >
        {/* Wall Contact Shadow */}
        <mesh position={[0, 0, 0.002]}>
          <planeGeometry args={[0.7, 0.45]} />
          <meshStandardMaterial color="#000000" transparent opacity={0.4} roughness={1.0} />
        </mesh>

        {/* Outer Metallic Dark Frame (#20242B) */}
        <mesh castShadow receiveShadow position={[0, 0, 0.015]}>
          <boxGeometry args={[0.64, 0.40, 0.025]} />
          <meshStandardMaterial
            color={isInstagramFocused ? '#65B8FF' : hoveredInstagram ? '#2C323B' : '#20242B'}
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>

        {/* Inset Face Plate (#E11D48 Dark Instagram Rose) */}
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[0.58, 0.34]} />
          <meshStandardMaterial
            color="#E11D48"
            emissive={hoveredInstagram || isInstagramFocused ? '#E11D48' : '#000000'}
            emissiveIntensity={isInstagramFocused ? 0.25 : hoveredInstagram ? 0.12 : 0}
            roughness={0.4}
          />
        </mesh>
      </group>
    </group>
  );
};
