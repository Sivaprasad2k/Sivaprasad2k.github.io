import React, { useState } from 'react';

interface ServerRack3DProps {
  onClick?: () => void;
  isFocused?: boolean;
}

export const ServerRack3D: React.FC<ServerRack3DProps> = ({ onClick, isFocused = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-1.8, 0.4, -0.2]}
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
      {/* Outer Metal Server Chassis Mesh (#22262C Metallic Charcoal) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.55, 0.8, 0.65]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#2C323B' : '#22262C'}
          emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
          emissiveIntensity={isFocused ? 0.2 : hovered ? 0.1 : 0}
          roughness={0.45}
          metalness={0.65}
        />
      </mesh>

      {/* Front Panel Inset (#181B20) */}
      <mesh position={[0, 0, 0.328]}>
        <planeGeometry args={[0.5, 0.74]} />
        <meshStandardMaterial color="#181B20" roughness={0.7} />
      </mesh>

      {/* Server Blade 1: API */}
      <mesh position={[0, 0.24, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#14161A" roughness={0.6} />
      </mesh>

      {/* Server Blade 2: CORE */}
      <mesh position={[0, 0.08, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#14161A" roughness={0.6} />
      </mesh>

      {/* Server Blade 3: DATA */}
      <mesh position={[0, -0.08, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#14161A" roughness={0.6} />
      </mesh>

      {/* Server Blade 4: WORKERS */}
      <mesh position={[0, -0.24, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#14161A" roughness={0.6} />
      </mesh>

      {/* Subdued Status LEDs */}
      <mesh position={[0.18, 0.24, 0.332]}>
        <sphereGeometry args={[0.012, 16, 16]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={2.0} />
      </mesh>
      <mesh position={[0.18, 0.08, 0.332]}>
        <sphereGeometry args={[0.012, 16, 16]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={2.0} />
      </mesh>

      {/* Server Chassis Floor Cast Shadow */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.395, 0]}>
        <planeGeometry args={[0.65, 0.75]} />
        <meshStandardMaterial color="#000000" roughness={1.0} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};
