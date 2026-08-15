import React from 'react';
import * as THREE from 'three';

export const RoomGeometry: React.FC = () => {
  return (
    <group>
      {/* 3D Floor Plane (#221E1A Dark Hardwood Floor extending toward camera) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[18, 14]} />
        <meshStandardMaterial
          color="#221E1A"
          roughness={0.70}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Hardwood Floor Plank Seams Grid (#120F0C Visual Depth Lines) */}
      {[-6, -3, 0, 3, 6].map((xPos, idx) => (
        <mesh key={idx} rotation-x={-Math.PI / 2} position={[xPos, 0.002, 0]}>
          <planeGeometry args={[0.025, 14]} />
          <meshStandardMaterial color="#120F0C" roughness={0.95} />
        </mesh>
      ))}

      {/* 3D Back Wall Plane (#282B30 Matte Graphite Charcoal) */}
      <mesh
        position={[0, 3.5, -3]}
        receiveShadow
      >
        <planeGeometry args={[18, 8]} />
        <meshStandardMaterial
          color="#282B30"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Architectural Baseboard Seam Line at Floor-to-Wall Transition */}
      <mesh position={[0, 0.04, -2.98]} receiveShadow castShadow>
        <boxGeometry args={[18, 0.08, 0.04]} />
        <meshStandardMaterial color="#141619" roughness={0.9} />
      </mesh>

      {/* Back Wall Vertical Architectural Panel Seams */}
      {[-6.0, -3.0, 0.0, 3.0, 6.0].map((xPos, idx) => (
        <mesh key={idx} position={[xPos, 3.5, -2.98]}>
          <planeGeometry args={[0.02, 8]} />
          <meshStandardMaterial color="#16181C" roughness={0.95} />
        </mesh>
      ))}

      {/* 3D Left Perspective Side Wall Plane (#22252A) */}
      <mesh
        position={[-8, 3.5, 2]}
        rotation-y={Math.PI / 2}
        receiveShadow
      >
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial
          color="#22252A"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* 3D Woven Floor Rug under Desk (#1A1713) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0.005, 0]}
        receiveShadow
      >
        <planeGeometry args={[5.6, 2.8]} />
        <meshStandardMaterial
          color="#1A1713"
          roughness={0.90}
          metalness={0.02}
        />
      </mesh>
    </group>
  );
};
