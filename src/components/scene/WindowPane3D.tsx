import React from 'react';

export const WindowPane3D: React.FC = () => {
  return (
    <group position={[7.94, 3.2, -0.6]} rotation-y={-Math.PI / 2}>
      {/* Wall Recess Outer Arch Frame Trim (#14161A) */}
      <mesh castShadow receiveShadow position={[0, 0, -0.04]}>
        <boxGeometry args={[3.0, 4.4, 0.14]} />
        <meshStandardMaterial color="#14161A" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Main Metal Window Frame Assembly (#1C1F24) */}
      <mesh castShadow receiveShadow position={[0, 0, 0.01]}>
        <boxGeometry args={[2.8, 4.2, 0.08]} />
        <meshStandardMaterial color="#1C1F24" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Inner Recessed Night Exterior Glass Pane (#07090C) */}
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[2.55, 3.95]} />
        <meshStandardMaterial
          color="#07090C"
          roughness={0.12}
          metalness={0.88}
        />
      </mesh>

      {/* Horizontal Window Pane Divider Mule Bars */}
      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[2.55, 0.04, 0.04]} />
        <meshStandardMaterial color="#1C1F24" roughness={0.5} metalness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[0.04, 3.95, 0.04]} />
        <meshStandardMaterial color="#1C1F24" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Louver Blind Slats Assembly */}
      {[-1.6, -1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2, 1.6].map((yPos, idx) => (
        <mesh key={idx} position={[0, yPos, 0.05]} rotation-x={0.15}>
          <boxGeometry args={[2.48, 0.035, 0.06]} />
          <meshStandardMaterial color="#121518" roughness={0.85} />
        </mesh>
      ))}

      {/* Night City Exterior Distant Illumination Lights */}
      <mesh position={[-0.6, -0.8, 0.04]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#FFB042" emissive="#FFB042" emissiveIntensity={3.0} />
      </mesh>
      <mesh position={[0.4, -1.2, 0.04]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={3.0} />
      </mesh>
      <mesh position={[0.8, -0.5, 0.04]}>
        <sphereGeometry args={[0.018, 8, 8]} />
        <meshStandardMaterial color="#F43F5E" emissive="#F43F5E" emissiveIntensity={2.5} />
      </mesh>
    </group>
  );
};

