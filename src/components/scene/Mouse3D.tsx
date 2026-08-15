import React from 'react';

export const Mouse3D: React.FC = () => {
  return (
    <group position={[0.55, 1.16, 0.15]}>
      {/* Ergonomic Dark Graphite Mouse Base Shell (#181B20) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.08, 0.032, 0.13]} />
        <meshStandardMaterial color="#181B20" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Ergonomic Curved Palm Ridge */}
      <mesh position={[0, 0.012, 0.02]} castShadow>
        <sphereGeometry args={[0.042, 16, 16]} />
        <meshStandardMaterial color="#1E2228" roughness={0.5} metalness={0.6} />
      </mesh>

      {/* Metallic Scroll Wheel (#383E48) */}
      <mesh position={[0, 0.018, -0.025]}>
        <cylinderGeometry args={[0.008, 0.008, 0.015, 16]} rotation-z={Math.PI / 2} />
        <meshStandardMaterial color="#383E48" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Left/Right Click Button Separation Notch */}
      <mesh position={[0, 0.017, -0.03]}>
        <planeGeometry args={[0.002, 0.04]} rotation-x={-Math.PI / 2} />
        <meshStandardMaterial color="#0A0B0D" roughness={0.9} />
      </mesh>
    </group>
  );
};
