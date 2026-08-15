import React from 'react';

export const Mouse3D: React.FC = () => {
  return (
    <group position={[0.55, 1.16, 0.15]}>
      {/* Ergonomic Dark Graphite Mouse Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.08, 0.03, 0.13]} />
        <meshStandardMaterial color="#181B20" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Mouse Wheel & Divider Notch */}
      <mesh position={[0, 0.016, -0.02]}>
        <boxGeometry args={[0.012, 0.008, 0.03]} />
        <meshStandardMaterial color="#33373E" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
};
