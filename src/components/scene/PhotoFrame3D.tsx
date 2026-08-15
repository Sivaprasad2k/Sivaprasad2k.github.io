import React from 'react';

export const PhotoFrame3D: React.FC = () => {
  return (
    <group position={[-1.8, 2.3, -2.95]}>
      {/* Black Outer Picture Frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.9, 0.03]} />
        <meshStandardMaterial color="#121315" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* White Matting Canvas */}
      <mesh position={[0, 0, 0.018]}>
        <planeGeometry args={[0.62, 0.82]} />
        <meshStandardMaterial color="#0A0B0D" roughness={0.9} />
      </mesh>

      {/* Inner Portrait Label Container */}
      <mesh position={[0, -0.05, 0.02]}>
        <planeGeometry args={[0.48, 0.55]} />
        <meshStandardMaterial color="#171A20" roughness={0.7} />
      </mesh>

      {/* Overhead Picture Lamp Brass Fixture */}
      <group position={[0, 0.48, 0.06]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.4, 16]} rotation-z={Math.PI / 2} />
          <meshStandardMaterial color="#202328" roughness={0.3} metalness={0.8} />
        </mesh>
        <pointLight position={[0, -0.05, 0.05]} intensity={1.5} distance={1.8} color="#FFE5B4" />
      </group>
    </group>
  );
};
