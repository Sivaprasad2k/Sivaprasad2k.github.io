import React from 'react';
import * as THREE from 'three';

export const RoomGeometry: React.FC = () => {
  return (
    <group>
      {/* 3D Floor Plane (#0F0D0A Dark Hardwood Floor) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[14, 12]} />
        <meshStandardMaterial
          color="#0F0D0A"
          roughness={0.78}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Hardwood Floor Plank Seams Grid (Visual Depth Texture Lines) */}
      {[-4, -2, 0, 2, 4].map((xPos, idx) => (
        <mesh key={idx} rotation-x={-Math.PI / 2} position={[xPos, 0.002, 0]}>
          <planeGeometry args={[0.018, 12]} />
          <meshStandardMaterial color="#050403" roughness={0.95} />
        </mesh>
      ))}

      {/* 3D Back Wall Plane (#121315 Matte Graphite Charcoal) */}
      <mesh
        position={[0, 3, -3]}
        receiveShadow
      >
        <planeGeometry args={[14, 6]} />
        <meshStandardMaterial
          color="#121315"
          roughness={0.88}
          metalness={0.05}
        />
      </mesh>

      {/* Back Wall Vertical Panel Seams (Architectural Seams per Reference) */}
      {[-4.5, -1.8, 1.2, 3.8].map((xPos, idx) => (
        <mesh key={idx} position={[xPos, 3, -2.98]}>
          <planeGeometry args={[0.015, 6]} />
          <meshStandardMaterial color="#0A0B0C" roughness={0.95} />
        </mesh>
      ))}

      {/* 3D Left Wall Plane (#101113) */}
      <mesh
        position={[-6, 3, 2]}
        rotation-y={Math.PI / 2}
        receiveShadow
      >
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial
          color="#101113"
          roughness={0.88}
          metalness={0.05}
        />
      </mesh>

      {/* 3D Woven Floor Rug under Desk (#14110E) */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0.005, 0]}
        receiveShadow
      >
        <planeGeometry args={[5.2, 2.4]} />
        <meshStandardMaterial
          color="#14110E"
          roughness={0.92}
          metalness={0.02}
        />
      </mesh>
    </group>
  );
};
