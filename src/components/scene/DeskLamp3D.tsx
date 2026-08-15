import React from 'react';

export const DeskLamp3D: React.FC = () => {
  return (
    <group position={[-1.8, 1.16, -0.2]}>
      {/* Heavy Circular Metal Base */}
      <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.14, 0.15, 0.03, 32]} />
        <meshStandardMaterial color="#17191D" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Vertical Lower Arm */}
      <mesh position={[0, 0.22, 0]} rotation-z={-0.15} castShadow>
        <cylinderGeometry args={[0.012, 0.012, 0.4, 16]} />
        <meshStandardMaterial color="#23262B" roughness={0.3} metalness={0.85} />
      </mesh>

      {/* Elbow Joint */}
      <mesh position={[-0.06, 0.4, 0]} castShadow>
        <sphereGeometry args={[0.022, 16, 16]} />
        <meshStandardMaterial color="#383D44" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Upper Angled Arm */}
      <mesh position={[0.08, 0.52, 0]} rotation-z={0.5} castShadow>
        <cylinderGeometry args={[0.012, 0.012, 0.35, 16]} />
        <meshStandardMaterial color="#23262B" roughness={0.3} metalness={0.85} />
      </mesh>

      {/* Articulated Lamp Shade Cone */}
      <group position={[0.22, 0.58, 0]} rotation-z={-0.85}>
        <mesh castShadow receiveShadow>
          <coneGeometry args={[0.14, 0.2, 32, 1, true]} />
          <meshStandardMaterial color="#17191D" roughness={0.4} metalness={0.8} side={2} />
        </mesh>

        {/* Warm Emissive Light Bulb Sphere inside Cone */}
        <mesh position={[0, -0.05, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#FFB042" emissive="#FFB042" emissiveIntensity={2.5} />
        </mesh>

        {/* Localized Warm PointLight casting onto Desktop */}
        <pointLight
          position={[0, -0.1, 0]}
          intensity={4.2}
          distance={4.8}
          color="#FFB042"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </group>
    </group>
  );
};
