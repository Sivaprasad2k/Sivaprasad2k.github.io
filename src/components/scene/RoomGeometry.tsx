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
          roughness={0.82}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3D Back Wall Plane (#121315 Matte Graphite Charcoal) */}
      <mesh
        position={[0, 3, -3]}
        receiveShadow
      >
        <planeGeometry args={[14, 6]} />
        <meshStandardMaterial
          color="#121315"
          roughness={0.92}
          metalness={0.05}
        />
      </mesh>

      {/* 3D Left Wall Plane (#101113) */}
      <mesh
        position={[-6, 3, 2]}
        rotation-y={Math.PI / 2}
        receiveShadow
      >
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial
          color="#101113"
          roughness={0.90}
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
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>
    </group>
  );
};
