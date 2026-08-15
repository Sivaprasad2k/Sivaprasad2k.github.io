import React from 'react';

export const WindowPane3D: React.FC = () => {
  return (
    <group position={[5.6, 3.0, -2.96]}>
      {/* Outer Dark Window Frame */}
      <mesh receiveShadow>
        <boxGeometry args={[1.4, 4.2, 0.05]} />
        <meshStandardMaterial color="#17191B" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Deep Night Glass Pane */}
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[1.2, 4.0]} />
        <meshStandardMaterial
          color="#060709"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Horizontal Louver Blind Slats (7 Slats) */}
      {[1.6, 1.1, 0.6, 0.1, -0.4, -0.9, -1.4].map((yPos, idx) => (
        <mesh key={idx} position={[0, yPos, 0.04]} rotation-x={0.2}>
          <boxGeometry args={[1.22, 0.02, 0.04]} />
          <meshStandardMaterial color="#22252A" roughness={0.6} />
        </mesh>
      ))}

      {/* Subtle Night City Light Glow Point 1 (Warm Amber) */}
      <pointLight
        position={[0.2, -1.2, 0.1]}
        intensity={0.4}
        distance={1.5}
        color="#FFB042"
      />

      {/* Subtle Night City Light Glow Point 2 (Cool Cyan) */}
      <pointLight
        position={[-0.3, -1.4, 0.1]}
        intensity={0.4}
        distance={1.5}
        color="#38BDF8"
      />
    </group>
  );
};
