import React from 'react';

export const Notebook3D: React.FC = () => {
  return (
    <group position={[-1.4, 1.168, 0.35]} rotation={[0, 0.15, 0]}>
      {/* Notebook Base Cover (#1C2026 Dark Slate Leather) */}
      <mesh position={[0, 0.005, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.26, 0.012, 0.36]} />
        <meshStandardMaterial color="#1C2026" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* Cream Grid Pages Stack (#F2EDDE) */}
      <mesh position={[0, 0.012, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.24, 0.008, 0.34]} />
        <meshStandardMaterial color="#F2EDDE" roughness={0.9} />
      </mesh>

      {/* Left Spiral Binding Ring Array */}
      {[-0.14, -0.10, -0.06, -0.02, 0.02, 0.06, 0.10, 0.14].map((zPos, idx) => (
        <mesh key={idx} position={[-0.115, 0.012, zPos]} rotation-x={Math.PI / 2}>
          <torusGeometry args={[0.008, 0.002, 8, 16]} />
          <meshStandardMaterial color="#4B5563" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}

      {/* Engineering Stylus / Pen beside notebook */}
      <mesh position={[0.16, 0.01, 0.02]} rotation-z={-0.05} castShadow>
        <cylinderGeometry args={[0.004, 0.004, 0.28, 16]} rotation-x={Math.PI / 2} />
        <meshStandardMaterial color="#374151" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
};
