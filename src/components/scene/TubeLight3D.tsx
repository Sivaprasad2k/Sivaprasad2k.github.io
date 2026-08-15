import React from 'react';

export const TubeLight3D: React.FC = () => {
  return (
    <group position={[0, 4.25, -2.88]}>
      {/* Wall Bracket Supports (Left and Right Mount Brackets) */}
      <mesh position={[-1.4, 0, -0.04]} castShadow>
        <boxGeometry args={[0.08, 0.14, 0.08]} />
        <meshStandardMaterial color="#22252A" roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[1.4, 0, -0.04]} castShadow>
        <boxGeometry args={[0.08, 0.14, 0.08]} />
        <meshStandardMaterial color="#22252A" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Main Architectural Matte Aluminum Housing Frame (#1C1F24) */}
      <mesh position={[0, 0, -0.02]} castShadow receiveShadow>
        <boxGeometry args={[3.0, 0.10, 0.12]} />
        <meshStandardMaterial color="#1C1F24" roughness={0.35} metalness={0.75} />
      </mesh>

      {/* Warm Diffused Light Bar Cylinder/Tube (#FFF3E0) */}
      <mesh position={[0, -0.02, 0.04]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.032, 0.032, 2.8, 32]} />
        <meshStandardMaterial
          color="#FFF3E0"
          emissive="#FFE8C2"
          emissiveIntensity={2.8}
          roughness={0.2}
        />
      </mesh>

      {/* Primary Warm Architectural Illumination PointLights */}
      <pointLight
        position={[0, -0.1, 0.1]}
        intensity={6.5}
        distance={7.5}
        color="#FFE5B4"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
      />

      <pointLight
        position={[-1.0, -0.1, 0.1]}
        intensity={4.0}
        distance={6.0}
        color="#FFE5B4"
      />

      <pointLight
        position={[1.0, -0.1, 0.1]}
        intensity={4.0}
        distance={6.0}
        color="#FFE5B4"
      />
    </group>
  );
};
