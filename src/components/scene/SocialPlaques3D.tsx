import React, { useState } from 'react';
import type { RoomObjectType } from '../../data/room';

interface SocialPlaques3DProps {
  onSelectLinkedin: () => void;
  onSelectInstagram: () => void;
  onSelectContact: () => void;
  activeId: RoomObjectType | null;
}

export const SocialPlaques3D: React.FC<SocialPlaques3DProps> = ({
  onSelectLinkedin,
  onSelectInstagram,
  onSelectContact,
  activeId
}) => {
  const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
  const [hoveredInstagram, setHoveredInstagram] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(false);

  const isLinkedinFocused = activeId === 'poster-linkedin';
  const isInstagramFocused = activeId === 'poster-instagram';
  const isContactFocused = activeId === 'poster-contact';

  return (
    <group position={[2.1, 0, -2.95]}>
      {/* 1. LinkedIn Wall Plaque */}
      <group
        position={[0, 2.45, 0]}
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
        <mesh position={[0, 0, 0.002]}>
          <planeGeometry args={[0.65, 0.42]} />
          <meshStandardMaterial color="#000000" transparent opacity={0.4} roughness={1.0} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0, 0.015]}>
          <boxGeometry args={[0.58, 0.36, 0.025]} />
          <meshStandardMaterial
            color={isLinkedinFocused ? '#65B8FF' : hoveredLinkedin ? '#2C323B' : '#20242B'}
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[0.52, 0.30]} />
          <meshStandardMaterial
            color="#0284C7"
            emissive={hoveredLinkedin || isLinkedinFocused ? '#0284C7' : '#000000'}
            emissiveIntensity={isLinkedinFocused ? 0.25 : hoveredLinkedin ? 0.12 : 0}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* 2. Instagram Wall Plaque */}
      <group
        position={[0, 1.90, 0]}
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
        <mesh position={[0, 0, 0.002]}>
          <planeGeometry args={[0.65, 0.42]} />
          <meshStandardMaterial color="#000000" transparent opacity={0.4} roughness={1.0} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0, 0.015]}>
          <boxGeometry args={[0.58, 0.36, 0.025]} />
          <meshStandardMaterial
            color={isInstagramFocused ? '#65B8FF' : hoveredInstagram ? '#2C323B' : '#20242B'}
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[0.52, 0.30]} />
          <meshStandardMaterial
            color="#E11D48"
            emissive={hoveredInstagram || isInstagramFocused ? '#E11D48' : '#000000'}
            emissiveIntensity={isInstagramFocused ? 0.25 : hoveredInstagram ? 0.12 : 0}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* 3. Direct Contact Wall Plaque */}
      <group
        position={[0, 1.35, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelectContact();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredContact(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHoveredContact(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <mesh position={[0, 0, 0.002]}>
          <planeGeometry args={[0.65, 0.42]} />
          <meshStandardMaterial color="#000000" transparent opacity={0.4} roughness={1.0} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0, 0.015]}>
          <boxGeometry args={[0.58, 0.36, 0.025]} />
          <meshStandardMaterial
            color={isContactFocused ? '#65B8FF' : hoveredContact ? '#2C323B' : '#20242B'}
            roughness={0.4}
            metalness={0.7}
          />
        </mesh>
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[0.52, 0.30]} />
          <meshStandardMaterial
            color="#10B981"
            emissive={hoveredContact || isContactFocused ? '#10B981' : '#000000'}
            emissiveIntensity={isContactFocused ? 0.25 : hoveredContact ? 0.12 : 0}
            roughness={0.4}
          />
        </mesh>
      </group>
    </group>
  );
};

