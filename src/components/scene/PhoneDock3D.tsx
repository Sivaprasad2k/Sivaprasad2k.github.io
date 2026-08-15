import React, { useState } from 'react';

interface PhoneDock3DProps {
  onClick?: () => void;
  isFocused?: boolean;
}

export const PhoneDock3D: React.FC<PhoneDock3DProps> = ({ onClick, isFocused = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[1.6, 1.45, -0.5]}
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
      {/* Heavy Desktop Phone Dock Stand Base */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.16, 0.04, 0.16]} />
        <meshStandardMaterial
          color={isFocused ? '#7EE2A8' : hovered ? '#252D36' : '#1C2026'}
          roughness={0.5}
          metalness={0.6}
        />
      </mesh>

      {/* Smartphone Body Mesh (Tilted back at 75deg) */}
      <group position={[0, 0.16, 0]} rotation-x={-0.25}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.14, 0.28, 0.015]} />
          <meshStandardMaterial color="#111316" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Emissive Contact Screen Display */}
        <mesh position={[0, 0, 0.009]}>
          <planeGeometry args={[0.13, 0.26]} />
          <meshStandardMaterial
            color="#060709"
            emissive="#38BDF8"
            emissiveIntensity={hovered || isFocused ? 0.4 : 0.2}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
};
