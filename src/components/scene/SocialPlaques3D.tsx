import React from 'react';

export const SocialPlaques3D: React.FC = () => {
  return (
    <group>
      {/* LinkedIn Framed Wall Plaque (Upper Right Wall) */}
      <group position={[1.8, 2.4, -2.95]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.45, 0.03]} />
          <meshStandardMaterial color="#121315" roughness={0.5} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.018]}>
          <planeGeometry args={[0.54, 0.39]} />
          <meshStandardMaterial color="#0A0B0D" roughness={0.8} />
        </mesh>
        {/* Blue Header Bar */}
        <mesh position={[0, 0.12, 0.02]}>
          <planeGeometry args={[0.54, 0.08]} />
          <meshStandardMaterial color="#0284C7" roughness={0.3} />
        </mesh>
      </group>

      {/* Instagram Framed Wall Plaque (Lower Right Wall) */}
      <group position={[1.8, 1.8, -2.95]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.45, 0.03]} />
          <meshStandardMaterial color="#121315" roughness={0.5} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.018]}>
          <planeGeometry args={[0.54, 0.39]} />
          <meshStandardMaterial color="#0A0B0D" roughness={0.8} />
        </mesh>
        {/* Rose Header Bar */}
        <mesh position={[0, 0.12, 0.02]}>
          <planeGeometry args={[0.54, 0.08]} />
          <meshStandardMaterial color="#E11D48" roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
};
