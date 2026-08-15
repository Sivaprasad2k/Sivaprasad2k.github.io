import React, { useState } from 'react';

interface SocialPlaques3DProps {
  onSelectLinkedin?: () => void;
  onSelectInstagram?: () => void;
  activeId?: string | null;
}

export const SocialPlaques3D: React.FC<SocialPlaques3DProps> = ({
  onSelectLinkedin,
  onSelectInstagram,
  activeId
}) => {
  const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
  const [hoveredInstagram, setHoveredInstagram] = useState(false);

  return (
    <group>
      {/* LinkedIn Framed Wall Plaque (Upper Right Wall) */}
      <group
        position={[1.8, 2.4, -2.95]}
        onClick={(e) => {
          e.stopPropagation();
          if (onSelectLinkedin) onSelectLinkedin();
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
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.45, 0.03]} />
          <meshStandardMaterial
            color={activeId === 'poster-linkedin' ? '#65B8FF' : hoveredLinkedin ? '#1E232B' : '#121315'}
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
        <mesh position={[0, 0, 0.018]}>
          <planeGeometry args={[0.54, 0.39]} />
          <meshStandardMaterial color="#0A0B0D" roughness={0.8} />
        </mesh>

        {/* Blue Header Bar */}
        <mesh position={[0, 0.12, 0.02]}>
          <planeGeometry args={[0.54, 0.08]} />
          <meshStandardMaterial color="#0284C7" roughness={0.3} />
        </mesh>
      </group>

      {/* Instagram Framed Wall Plaque (Lower Right Wall) */}
      <group
        position={[1.8, 1.8, -2.95]}
        onClick={(e) => {
          e.stopPropagation();
          if (onSelectInstagram) onSelectInstagram();
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
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.45, 0.03]} />
          <meshStandardMaterial
            color={activeId === 'poster-instagram' ? '#65B8FF' : hoveredInstagram ? '#1E232B' : '#121315'}
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
        <mesh position={[0, 0, 0.018]}>
          <planeGeometry args={[0.54, 0.39]} />
          <meshStandardMaterial color="#0A0B0D" roughness={0.8} />
        </mesh>

        {/* Rose Header Bar */}
        <mesh position={[0, 0.12, 0.02]}>
          <planeGeometry args={[0.54, 0.08]} />
          <meshStandardMaterial color="#E11D48" roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
};
