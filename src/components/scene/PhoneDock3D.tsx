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
      {/* Contact Shadow under Charging Stand */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.09, 0]}>
        <planeGeometry args={[0.3, 0.3]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.5} roughness={1.0} />
      </mesh>

      {/* Angled Desktop Charging Dock Stand Base (#252930) */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.18, 0.08, 0.18]} />
        <meshStandardMaterial color="#252930" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Dock Backrest Pillar */}
      <mesh position={[0, 0.05, -0.04]} rotation-x={-0.2} castShadow>
        <boxGeometry args={[0.14, 0.18, 0.03]} />
        <meshStandardMaterial color="#1C1F24" roughness={0.5} metalness={0.6} />
      </mesh>

      {/* Smartphone Body Mesh (#1A1D22 Anodized Dark Metal) */}
      <group position={[0, 0.12, 0.01]} rotation-x={-0.2}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.16, 0.32, 0.018]} />
          <meshStandardMaterial
            color={isFocused ? '#65B8FF' : hovered ? '#252930' : '#1A1D22'}
            roughness={0.35}
            metalness={0.85}
          />
        </mesh>

        {/* Smartphone Glass Display Surface (#0B0D10) */}
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[0.14, 0.30]} />
          <meshStandardMaterial
            color="#0B0D10"
            emissive={hovered || isFocused ? '#38BDF8' : '#000000'}
            emissiveIntensity={isFocused ? 0.25 : hovered ? 0.12 : 0}
            roughness={0.15}
          />
        </mesh>

        {/* Side Volume Buttons */}
        <mesh position={[-0.082, 0.04, 0]}>
          <boxGeometry args={[0.005, 0.05, 0.008]} />
          <meshStandardMaterial color="#33373E" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
};
