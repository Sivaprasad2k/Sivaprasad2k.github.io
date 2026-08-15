import React from 'react';

export const Bookshelf3D: React.FC = () => {
  return (
    <group position={[6.4, 1.8, -1.6]} rotation-y={-Math.PI / 2}>
      {/* Contact Shadow Plane */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -1.79, 0]}>
        <planeGeometry args={[1.6, 0.7]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.5} roughness={1.0} />
      </mesh>

      {/* Main Outer Wood Bookshelf Cabinet Frame (#2C1E16 Dark Oak) */}
      {/* Left Side Wall Panel */}
      <mesh position={[-0.72, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.06, 3.6, 0.5]} />
        <meshStandardMaterial color="#2C1E16" roughness={0.65} metalness={0.1} />
      </mesh>

      {/* Right Side Wall Panel */}
      <mesh position={[0.72, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.06, 3.6, 0.5]} />
        <meshStandardMaterial color="#2C1E16" roughness={0.65} metalness={0.1} />
      </mesh>

      {/* Top Cap Panel */}
      <mesh position={[0, 1.77, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.06, 0.52]} />
        <meshStandardMaterial color="#2C1E16" roughness={0.65} metalness={0.1} />
      </mesh>

      {/* Bottom Base Panel */}
      <mesh position={[0, -1.77, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.06, 0.52]} />
        <meshStandardMaterial color="#2C1E16" roughness={0.65} metalness={0.1} />
      </mesh>

      {/* Back Panel Plate (#1F140E) */}
      <mesh position={[0, 0, -0.23]} receiveShadow>
        <boxGeometry args={[1.4, 3.5, 0.03]} />
        <meshStandardMaterial color="#1F140E" roughness={0.8} />
      </mesh>

      {/* Horizontal Shelves (4 Tiers) */}
      {[-0.9, -0.0, 0.9].map((yPos, idx) => (
        <mesh key={idx} position={[0, yPos, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.05, 0.46]} />
          <meshStandardMaterial color="#241710" roughness={0.7} />
        </mesh>
      ))}

      {/* Shelf 1 Items (Bottom): Heavy Storage Binders & Volumes */}
      <group position={[0, -1.35, 0.05]}>
        {[-0.5, -0.38, -0.26, -0.14].map((xPos, idx) => (
          <mesh key={idx} position={[xPos, 0, 0]} castShadow>
            <boxGeometry args={[0.08, 0.65, 0.35]} />
            <meshStandardMaterial color={idx % 2 === 0 ? '#1E242B' : '#2D343F'} roughness={0.5} />
          </mesh>
        ))}
        <mesh position={[0.25, -0.2, 0]} rotation-z={0.2} castShadow>
          <boxGeometry args={[0.08, 0.6, 0.32]} />
          <meshStandardMaterial color="#3A281E" roughness={0.6} />
        </mesh>
      </group>

      {/* Shelf 2 Items (Middle-Lower): Engineering Manuals */}
      <group position={[0, -0.45, 0.05]}>
        {[-0.52, -0.42, -0.32, -0.22, -0.12, 0.0, 0.1].map((xPos, idx) => (
          <mesh key={idx} position={[xPos, 0, 0]} castShadow>
            <boxGeometry args={[0.07, 0.55, 0.32]} />
            <meshStandardMaterial
              color={['#2A303C', '#1D242E', '#36281F', '#1E2D3B', '#2B2B2B', '#1C2630', '#3B241A'][idx]}
              roughness={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Shelf 3 Items (Middle-Upper): Stacked Project Folders & Books */}
      <group position={[0, 0.45, 0.05]}>
        <mesh position={[-0.4, -0.18, 0]} castShadow>
          <boxGeometry args={[0.45, 0.12, 0.3]} />
          <meshStandardMaterial color="#2B323D" roughness={0.6} />
        </mesh>
        <mesh position={[-0.4, -0.06, 0]} castShadow>
          <boxGeometry args={[0.4, 0.1, 0.28]} />
          <meshStandardMaterial color="#1D242E" roughness={0.6} />
        </mesh>
        {/* Standing books on right of tier 3 */}
        {[0.1, 0.2, 0.3, 0.4, 0.5].map((xPos, idx) => (
          <mesh key={idx} position={[xPos, 0, 0]} castShadow>
            <boxGeometry args={[0.07, 0.52, 0.3]} />
            <meshStandardMaterial color={idx % 2 === 0 ? '#1F2937' : '#374151'} roughness={0.6} />
          </mesh>
        ))}
      </group>

      {/* Shelf 4 Items (Top): Technical Binders */}
      <group position={[0, 1.35, 0.05]}>
        {[-0.48, -0.36, -0.24, -0.12, 0.02].map((xPos, idx) => (
          <mesh key={idx} position={[xPos, 0, 0]} castShadow>
            <boxGeometry args={[0.09, 0.6, 0.34]} />
            <meshStandardMaterial color={idx % 2 === 0 ? '#111827' : '#1F2937'} roughness={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  );
};
