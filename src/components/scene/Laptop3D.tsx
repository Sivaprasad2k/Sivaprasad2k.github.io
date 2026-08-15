import React from 'react';

export const Laptop3D: React.FC = () => {
  return (
    <group position={[0, 1.16, -0.1]}>
      {/* Keyboard Base Deck (#181B20 Dark Graphite Metallic) */}
      <mesh position={[0, 0.01, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.75, 0.02, 0.5]} />
        <meshStandardMaterial color="#181B20" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Trackpad Notch */}
      <mesh position={[0, 0.021, 0.23]}>
        <planeGeometry args={[0.22, 0.12]} rotation-x={-Math.PI / 2} />
        <meshStandardMaterial color="#111316" roughness={0.3} />
      </mesh>

      {/* Keyboard Key Area */}
      <mesh position={[0, 0.021, 0.03]}>
        <planeGeometry args={[0.68, 0.22]} rotation-x={-Math.PI / 2} />
        <meshStandardMaterial color="#0A0B0D" roughness={0.8} />
      </mesh>

      {/* Display Lid Frame (Opened at 105deg angle) */}
      <group position={[0, 0.02, -0.14]} rotation-x={-0.25}>
        <mesh position={[0, 0.24, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.75, 0.48, 0.018]} />
          <meshStandardMaterial color="#111316" roughness={0.4} metalness={0.7} />
        </mesh>

        {/* Emissive Green Workspace Terminal Display Screen */}
        <mesh position={[0, 0.24, 0.01]}>
          <planeGeometry args={[0.70, 0.43]} />
          <meshStandardMaterial
            color="#060709"
            emissive="#10B981"
            emissiveIntensity={0.15}
            roughness={0.2}
          />
        </mesh>

        {/* Soft Cool Screen Glow Point Light */}
        <pointLight position={[0, 0.2, 0.15]} intensity={1.2} distance={2.5} color="#10B981" />
      </group>
    </group>
  );
};
