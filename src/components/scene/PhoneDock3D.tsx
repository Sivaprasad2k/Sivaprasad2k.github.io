import React from 'react';

export const PhoneDock3D: React.FC = () => {
  return (
    <group position={[1.6, 1.45, -0.5]}>
      {/* Heavy Desktop Phone Dock Stand Base */}
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.16, 0.04, 0.16]} />
        <meshStandardMaterial color="#1C2026" roughness={0.5} metalness={0.6} />
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
            emissiveIntensity={0.2}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
};
