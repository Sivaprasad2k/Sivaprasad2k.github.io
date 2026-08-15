import React from 'react';

export const WindowPane3D: React.FC = () => {
  return (
    <group position={[7.95, 3.5, -0.5]} rotation-y={-Math.PI / 2}>
      {/* Outer Window Frame Assembly (#1C1F24) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.8, 4.2, 0.12]} />
        <meshStandardMaterial color="#1C1F24" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* Dark Exterior Night Glass Pane (#07090C) */}
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[2.5, 3.9]} />
        <meshStandardMaterial
          color="#07090C"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Louver Blind Slats Assembly */}
      {[-1.6, -1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2, 1.6].map((yPos, idx) => (
        <mesh key={idx} position={[0, yPos, 0.04]} rotation-x={0.15}>
          <boxGeometry args={[2.46, 0.04, 0.08]} />
          <meshStandardMaterial color="#14171A" roughness={0.8} />
        </mesh>
      ))}

      {/* Night City Distant Light Points */}
      <mesh position={[-0.6, -0.8, 0.03]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#FFB042" emissive="#FFB042" emissiveIntensity={3.0} />
      </mesh>
      <mesh position={[0.4, -1.2, 0.03]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={3.0} />
      </mesh>
      <mesh position={[0.8, -0.5, 0.03]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial color="#F43F5E" emissive="#F43F5E" emissiveIntensity={2.5} />
      </mesh>
    </group>
  );
};
