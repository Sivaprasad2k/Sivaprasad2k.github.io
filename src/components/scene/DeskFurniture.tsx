import React from 'react';

export const DeskFurniture: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Contact Shadow Plane under Desk Legs on Rug/Floor */}
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0.003, 0]}
      >
        <planeGeometry args={[5.0, 2.0]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={0.6}
          roughness={1.0}
        />
      </mesh>

      {/* Main Desktop Surface Slab (#4E3527 Rich Dark Walnut) */}
      <mesh
        position={[0, 1.1, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[4.4, 0.12, 1.6]} />
        <meshStandardMaterial
          color="#4E3527"
          roughness={0.5}
          metalness={0.15}
        />
      </mesh>

      {/* Desk Front Apron Trim (#36241A Dark Wood) */}
      <mesh
        position={[0, 1.02, 0.78]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[4.4, 0.08, 0.04]} />
        <meshStandardMaterial
          color="#36241A"
          roughness={0.6}
        />
      </mesh>

      {/* Raised Rear Riser Shelf (#36241A Dark Walnut Riser) */}
      <mesh
        position={[0, 1.32, -0.5]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[4.0, 0.08, 0.45]} />
        <meshStandardMaterial
          color="#36241A"
          roughness={0.55}
          metalness={0.1}
        />
      </mesh>

      {/* Riser Shelf Left Support */}
      <mesh
        position={[-1.8, 1.20, -0.5]}
        castShadow
      >
        <boxGeometry args={[0.08, 0.16, 0.4]} />
        <meshStandardMaterial color="#281A12" roughness={0.7} />
      </mesh>

      {/* Riser Shelf Right Support */}
      <mesh
        position={[1.8, 1.20, -0.5]}
        castShadow
      >
        <boxGeometry args={[0.08, 0.16, 0.4]} />
        <meshStandardMaterial color="#281A12" roughness={0.7} />
      </mesh>

      {/* Left Solid Wooden Pillar Leg (#281A12) */}
      <mesh
        position={[-2.0, 0.52, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.18, 1.04, 1.4]} />
        <meshStandardMaterial
          color="#281A12"
          roughness={0.7}
        />
      </mesh>

      {/* Right Solid Wooden Pillar Leg (#281A12) */}
      <mesh
        position={[2.0, 0.52, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.18, 1.04, 1.4]} />
        <meshStandardMaterial
          color="#281A12"
          roughness={0.7}
        />
      </mesh>
    </group>
  );
};
