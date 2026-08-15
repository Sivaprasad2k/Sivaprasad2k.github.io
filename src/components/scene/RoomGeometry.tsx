import React from 'react';
import * as THREE from 'three';

export const RoomGeometry: React.FC = () => {
  return (
    <group>
      {/* 3D Floor Plane (#28231E Dark Hardwood Floor extending toward camera) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[18, 14]} />
        <meshStandardMaterial
          color="#28231E"
          roughness={0.70}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Hardwood Floor Plank Seams Grid (#14110E Visual Depth Lines) */}
      {[-6, -3, 0, 3, 6].map((xPos, idx) => (
        <mesh key={idx} rotation-x={-Math.PI / 2} position={[xPos, 0.002, 0]}>
          <planeGeometry args={[0.025, 14]} />
          <meshStandardMaterial color="#14110E" roughness={0.95} />
        </mesh>
      ))}

      {/* 3D Woven Floor Rug under Desk (#1E1B17) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0.005, 0]}
        receiveShadow
      >
        <planeGeometry args={[5.6, 2.8]} />
        <meshStandardMaterial
          color="#1E1B17"
          roughness={0.90}
          metalness={0.02}
        />
      </mesh>

      {/* 3D Back Wall Plane (#252830 Matte Graphite Charcoal) */}
      <mesh
        position={[0, 3.5, -3]}
        receiveShadow
      >
        <planeGeometry args={[18, 8]} />
        <meshStandardMaterial
          color="#252830"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Back Wall Vertical Architectural Panel Seams (#16181D) */}
      {[-6.0, -3.0, 0.0, 3.0, 6.0].map((xPos, idx) => (
        <mesh key={idx} position={[xPos, 3.5, -2.98]}>
          <planeGeometry args={[0.02, 8]} />
          <meshStandardMaterial color="#16181D" roughness={0.95} />
        </mesh>
      ))}

      {/* Back Wall Baseboard Seam Line at Floor Transition (#121418) */}
      <mesh position={[0, 0.04, -2.98]} receiveShadow castShadow>
        <boxGeometry args={[18, 0.08, 0.04]} />
        <meshStandardMaterial color="#121418" roughness={0.9} />
      </mesh>

      {/* 3D Left Side Wall Plane (#20232A) */}
      <mesh
        position={[-8, 3.5, 2]}
        rotation-y={Math.PI / 2}
        receiveShadow
      >
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial
          color="#20232A"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Left Wall Baseboard Seam Line */}
      <mesh position={[-7.98, 0.04, 2]} rotation-y={Math.PI / 2} receiveShadow castShadow>
        <boxGeometry args={[14, 0.08, 0.04]} />
        <meshStandardMaterial color="#121418" roughness={0.9} />
      </mesh>

      {/* 3D Right Side Wall Plane (#20232A) */}
      <mesh
        position={[8, 3.5, 2]}
        rotation-y={-Math.PI / 2}
        receiveShadow
      >
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial
          color="#20232A"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Right Wall Baseboard Seam Line */}
      <mesh position={[7.98, 0.04, 2]} rotation-y={-Math.PI / 2} receiveShadow castShadow>
        <boxGeometry args={[14, 0.08, 0.04]} />
        <meshStandardMaterial color="#121418" roughness={0.9} />
      </mesh>

      {/* Ceiling Architectural Boundary Beam / Ceiling Header (#16181D) */}
      <mesh position={[0, 4.96, -2.96]} receiveShadow castShadow>
        <boxGeometry args={[18, 0.12, 0.12]} />
        <meshStandardMaterial color="#16181D" roughness={0.9} />
      </mesh>

      <mesh position={[-7.96, 4.96, 2]} rotation-y={Math.PI / 2} receiveShadow castShadow>
        <boxGeometry args={[14, 0.12, 0.12]} />
        <meshStandardMaterial color="#16181D" roughness={0.9} />
      </mesh>

      <mesh position={[7.96, 4.96, 2]} rotation-y={-Math.PI / 2} receiveShadow castShadow>
        <boxGeometry args={[14, 0.12, 0.12]} />
        <meshStandardMaterial color="#16181D" roughness={0.9} />
      </mesh>
    </group>
  );
};

