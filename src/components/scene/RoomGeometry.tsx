import React from 'react';
import * as THREE from 'three';

export const RoomGeometry: React.FC = () => {
  return (
    <group>
      {/* 3D Floor Plane (#1A1612 Dark Hardwood Floor extending toward camera) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[16, 14]} />
        <meshStandardMaterial
          color="#1A1612"
          roughness={0.75}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Hardwood Floor Plank Seams Grid (#0A0806 Visual Depth Lines) */}
      {[-5, -2.5, 0, 2.5, 5].map((xPos, idx) => (
        <mesh key={idx} rotation-x={-Math.PI / 2} position={[xPos, 0.002, 0]}>
          <planeGeometry args={[0.02, 14]} />
          <meshStandardMaterial color="#0A0806" roughness={0.95} />
        </mesh>
      ))}

      {/* 3D Back Wall Plane (#1A1C20 Matte Graphite Charcoal) */}
      <mesh
        position={[0, 3.5, -3]}
        receiveShadow
      >
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial
          color="#1A1C20"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* Architectural Baseboard Seam Line at Floor-to-Wall Transition */}
      <mesh position={[0, 0.04, -2.98]} receiveShadow castShadow>
        <boxGeometry args={[16, 0.08, 0.04]} />
        <meshStandardMaterial color="#0C0D0F" roughness={0.9} />
      </mesh>

      {/* Back Wall Vertical Architectural Panel Seams */}
      {[-5.2, -2.2, 1.5, 4.5].map((xPos, idx) => (
        <mesh key={idx} position={[xPos, 3.5, -2.98]}>
          <planeGeometry args={[0.018, 8]} />
          <meshStandardMaterial color="#0D0E10" roughness={0.95} />
        </mesh>
      ))}

      {/* 3D Left Perspective Side Wall Plane (#16181C) */}
      <mesh
        position={[-7, 3.5, 2]}
        rotation-y={Math.PI / 2}
        receiveShadow
      >
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial
          color="#16181C"
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* 3D Woven Floor Rug under Desk (#161310) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0.005, 0]}
        receiveShadow
      >
        <planeGeometry args={[5.4, 2.6]} />
        <meshStandardMaterial
          color="#161310"
          roughness={0.90}
          metalness={0.02}
        />
      </mesh>
    </group>
  );
};
