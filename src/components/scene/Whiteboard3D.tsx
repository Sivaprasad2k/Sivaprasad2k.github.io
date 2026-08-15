import React, { useState } from 'react';

interface Whiteboard3DProps {
  onClick?: () => void;
  isFocused?: boolean;
}

export const Whiteboard3D: React.FC<Whiteboard3DProps> = ({ onClick, isFocused = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[0, 2.3, -2.95]}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Outer Silver Aluminum Frame (#3A3F48) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.4, 0.03]} />
        <meshStandardMaterial
          color={isFocused ? '#65B8FF' : hovered ? '#4A505B' : '#3A3F48'}
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* Off-White Board Surface (#E6E0D6) */}
      <mesh position={[0, 0, 0.018]}>
        <planeGeometry args={[2.52, 1.32]} />
        <meshStandardMaterial
          color="#E6E0D6"
          emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
          emissiveIntensity={isFocused ? 0.12 : hovered ? 0.06 : 0}
          roughness={0.32}
        />
      </mesh>

      {/* Title Header Bar ("SIVA PRASAD M L · SOFTWARE ENGINEER") */}
      <mesh position={[0, 0.50, 0.02]}>
        <planeGeometry args={[2.4, 0.14]} />
        <meshStandardMaterial color="#1E232A" roughness={0.7} />
      </mesh>

      {/* Subheader Banner ("BACKEND • SYSTEMS • AI") */}
      <mesh position={[0, 0.38, 0.02]}>
        <planeGeometry args={[1.8, 0.06]} />
        <meshStandardMaterial color="#2563EB" roughness={0.5} />
      </mesh>

      {/* HOW I THINK Section Header */}
      <mesh position={[-0.55, 0.22, 0.02]}>
        <planeGeometry args={[0.8, 0.07]} />
        <meshStandardMaterial color="#1E293B" roughness={0.6} />
      </mesh>

      {/* Diagram Block 1: DOMAIN */}
      <mesh position={[-0.9, 0.08, 0.02]}>
        <planeGeometry args={[0.36, 0.14]} />
        <meshStandardMaterial color="#1D4ED8" roughness={0.5} />
      </mesh>

      {/* Arrow 1 */}
      <mesh position={[-0.60, 0.08, 0.02]}>
        <planeGeometry args={[0.10, 0.03]} />
        <meshStandardMaterial color="#33373E" roughness={0.5} />
      </mesh>

      {/* Diagram Block 2: MODEL */}
      <mesh position={[-0.40, 0.08, 0.02]}>
        <planeGeometry args={[0.36, 0.14]} />
        <meshStandardMaterial color="#0F766E" roughness={0.5} />
      </mesh>

      {/* Arrow 2 */}
      <mesh position={[-0.10, 0.08, 0.02]}>
        <planeGeometry args={[0.10, 0.03]} />
        <meshStandardMaterial color="#33373E" roughness={0.5} />
      </mesh>

      {/* Diagram Block 3: STATE */}
      <mesh position={[0.10, 0.08, 0.02]}>
        <planeGeometry args={[0.36, 0.14]} />
        <meshStandardMaterial color="#B91C1C" roughness={0.5} />
      </mesh>

      {/* Down Arrow */}
      <mesh position={[-0.40, -0.06, 0.02]}>
        <planeGeometry args={[0.04, 0.09]} />
        <meshStandardMaterial color="#33373E" roughness={0.5} />
      </mesh>

      {/* Diagram Block 4: BEHAVIOUR */}
      <mesh position={[-0.40, -0.18, 0.02]}>
        <planeGeometry args={[0.65, 0.11]} />
        <meshStandardMaterial color="#1E293B" roughness={0.5} />
      </mesh>

      {/* Down Arrow 2 */}
      <mesh position={[-0.40, -0.28, 0.02]}>
        <planeGeometry args={[0.04, 0.07]} />
        <meshStandardMaterial color="#33373E" roughness={0.5} />
      </mesh>

      {/* Diagram Block 5: FAILURE */}
      <mesh position={[-0.40, -0.38, 0.02]}>
        <planeGeometry args={[0.65, 0.11]} />
        <meshStandardMaterial color="#991B1B" roughness={0.5} />
      </mesh>

      {/* Principles Section (Right Side of Whiteboard) */}
      <mesh position={[0.75, 0.18, 0.02]}>
        <planeGeometry args={[0.85, 0.07]} />
        <meshStandardMaterial color="#1E293B" roughness={0.6} />
      </mesh>

      {/* Principle Bullet Lines */}
      {[-0.02, -0.12, -0.22, -0.32].map((yPos, idx) => (
        <mesh key={idx} position={[0.75, yPos, 0.02]}>
          <planeGeometry args={[0.80, 0.06]} />
          <meshStandardMaterial color={['#0F766E', '#1D4ED8', '#B91C1C', '#1E293B'][idx]} roughness={0.6} />
        </mesh>
      ))}

      {/* Footer Tagline ("ENGINEERING FIRST.") */}
      <mesh position={[0, -0.52, 0.02]}>
        <planeGeometry args={[1.2, 0.08]} />
        <meshStandardMaterial color="#1D4ED8" roughness={0.5} />
      </mesh>

      {/* Silver Aluminum Marker Tray */}
      <mesh position={[0, -0.70, 0.05]} castShadow>
        <boxGeometry args={[1.0, 0.02, 0.08]} />
        <meshStandardMaterial color="#25282D" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Markers (Black, Blue, Red) */}
      <mesh position={[-0.2, -0.68, 0.06]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.008, 0.008, 0.14, 16]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      <mesh position={[0, -0.68, 0.06]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.008, 0.008, 0.14, 16]} />
        <meshStandardMaterial color="#1D4ED8" />
      </mesh>
      <mesh position={[0.2, -0.68, 0.06]} rotation-z={Math.PI / 2}>
        <cylinderGeometry args={[0.008, 0.008, 0.14, 16]} />
        <meshStandardMaterial color="#B91C1C" />
      </mesh>
    </group>
  );
};

