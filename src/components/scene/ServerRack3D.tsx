import React from 'react';

export const ServerRack3D: React.FC = () => {
  return (
    <group position={[-1.8, 0.4, -0.2]}>
      {/* Outer Metal Server Chassis Mesh (#141618) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.55, 0.8, 0.65]} />
        <meshStandardMaterial color="#141618" roughness={0.5} metalness={0.7} />
      </mesh>

      {/* Front Panel Inset */}
      <mesh position={[0, 0, 0.328]}>
        <planeGeometry args={[0.5, 0.74]} />
        <meshStandardMaterial color="#0A0B0D" roughness={0.8} />
      </mesh>

      {/* Server Blade 1: API */}
      <mesh position={[0, 0.24, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#111316" roughness={0.6} />
      </mesh>

      {/* Server Blade 2: CORE */}
      <mesh position={[0, 0.08, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#111316" roughness={0.6} />
      </mesh>

      {/* Server Blade 3: DATA */}
      <mesh position={[0, -0.08, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#111316" roughness={0.6} />
      </mesh>

      {/* Server Blade 4: WORKERS */}
      <mesh position={[0, -0.24, 0.33]}>
        <planeGeometry args={[0.46, 0.12]} />
        <meshStandardMaterial color="#111316" roughness={0.6} />
      </mesh>

      {/* Pulsing Green/Blue Status LEDs */}
      <mesh position={[0.18, 0.24, 0.332]}>
        <sphereGeometry args={[0.012, 16, 16]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={3.0} />
      </mesh>
      <mesh position={[0.18, 0.08, 0.332]}>
        <sphereGeometry args={[0.012, 16, 16]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={3.0} />
      </mesh>

      {/* Server Chassis Floor Cast Shadow */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.395, 0]}>
        <planeGeometry args={[0.65, 0.75]} />
        <meshStandardMaterial color="#000000" roughness={1.0} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};
