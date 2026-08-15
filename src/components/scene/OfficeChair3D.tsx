import React from 'react';

export const OfficeChair3D: React.FC = () => {
  return (
    <group position={[0, 0.45, 0.7]}>
      {/* Floor Contact Shadow under Chair Base */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, -0.44, 0]}
      >
        <planeGeometry args={[0.95, 0.95]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={0.55}
          roughness={1.0}
        />
      </mesh>

      {/* Seat Cushion (#1E2228 Dark Fabric) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.62, 0.08, 0.60]} />
        <meshStandardMaterial color="#1E2228" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Ergonomic Curved Mesh Backrest */}
      <mesh position={[0, 0.38, 0.28]} rotation-x={-0.1} castShadow receiveShadow>
        <boxGeometry args={[0.58, 0.68, 0.06]} />
        <meshStandardMaterial color="#171A1F" roughness={0.85} metalness={0.1} />
      </mesh>

      {/* Backrest Metal Support Posts */}
      <mesh position={[-0.2, 0.15, 0.24]} rotation-x={-0.1} castShadow>
        <cylinderGeometry args={[0.015, 0.015, 0.3, 16]} />
        <meshStandardMaterial color="#20252B" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[0.2, 0.15, 0.24]} rotation-x={-0.1} castShadow>
        <cylinderGeometry args={[0.015, 0.015, 0.3, 16]} />
        <meshStandardMaterial color="#20252B" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Central Support Metal Cylinder Stem */}
      <mesh position={[0, -0.22, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.36, 16]} />
        <meshStandardMaterial color="#20252B" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* 5-Star Caster Base Hub */}
      <mesh position={[0, -0.40, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
        <meshStandardMaterial color="#171A1F" roughness={0.6} metalness={0.5} />
      </mesh>

      {/* 5 Radial Leg Arms */}
      {[0, 1.256, 2.513, 3.77, 5.026].map((angle, idx) => (
        <group key={idx} rotation-y={angle}>
          <mesh position={[0.18, -0.41, 0]} rotation-z={-0.1} castShadow>
            <cylinderGeometry args={[0.018, 0.018, 0.34, 12]} rotation-z={Math.PI / 2} />
            <meshStandardMaterial color="#171A1F" roughness={0.6} metalness={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
};
