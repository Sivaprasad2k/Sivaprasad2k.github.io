import React from 'react';

interface LayoutDebug3DProps {
  objectTargets?: Record<string, { position: [number, number, number]; target: [number, number, number] }>;
}

export const LayoutDebug3D: React.FC<LayoutDebug3DProps> = ({ objectTargets }) => {
  return (
    <group position={[0, 0, 0]}>
      {/* 1. Room Shell Enclosure Wireframe Boundary (#3B82F6 Bright Blue) */}
      <mesh position={[0, 2.5, 0.25]}>
        <boxGeometry args={[16, 5.0, 6.5]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.35} />
      </mesh>

      {/* 2. Main Desk & Riser Bounding Box (#10B981 Emerald Green) */}
      <mesh position={[0, 0.66, -0.05]}>
        <boxGeometry args={[4.6, 1.36, 1.6]} />
        <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.45} />
      </mesh>
      {/* Rear Riser Shelf Bounds */}
      <mesh position={[0, 1.36, -0.52]}>
        <boxGeometry args={[4.2, 0.16, 0.45]} />
        <meshBasicMaterial color="#34D399" wireframe transparent opacity={0.5} />
      </mesh>

      {/* 3. Spatial Depth Layer Indicators */}
      {/* Layer 1: Back Wall Anchor Plane (z = -2.95) */}
      <mesh position={[0, 2.3, -2.95]}>
        <planeGeometry args={[15.5, 4.5]} />
        <meshBasicMaterial color="#F59E0B" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Layer 2: Rear Riser Plane (z = -0.5) */}
      <mesh position={[0, 1.4, -0.5]}>
        <planeGeometry args={[4.2, 0.8]} />
        <meshBasicMaterial color="#EC4899" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Layer 3: Main Desktop Surface Plane (y = 1.16) */}
      <mesh position={[0, 1.16, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[4.4, 1.5]} />
        <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Layer 4: Under-Desk Floor Infrastructure Bounds (Server & Chair) */}
      <mesh position={[-1.8, 0.4, 0.15]}>
        <boxGeometry args={[0.65, 0.82, 0.7]} />
        <meshBasicMaterial color="#EF4444" wireframe transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 0.45, 0.72]}>
        <boxGeometry args={[0.7, 0.9, 0.7]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.4} />
      </mesh>

      {/* Layer 5: Bookshelf Right Wall Bounds */}
      <mesh position={[6.4, 1.8, -1.6]}>
        <boxGeometry args={[0.55, 3.6, 1.5]} />
        <meshBasicMaterial color="#F97316" wireframe transparent opacity={0.4} />
      </mesh>

      {/* Render Object Target Anchors if available */}
      {objectTargets &&
        Object.entries(objectTargets).map(([key, val]) => (
          <group key={key} position={val.target}>
            <mesh>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshBasicMaterial color="#F43F5E" />
            </mesh>
          </group>
        ))}
    </group>
  );
};
