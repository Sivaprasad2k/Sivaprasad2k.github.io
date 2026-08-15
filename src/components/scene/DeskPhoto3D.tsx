import React, { useState } from 'react';

interface DeskPhoto3DProps {
  onClick?: () => void;
  isFocused?: boolean;
}

export const DeskPhoto3D: React.FC<DeskPhoto3DProps> = ({ onClick, isFocused = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[-1.8, 1.161, 0.25]}
      rotation={[0, 0.2, 0.05]}
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
      {/* Contact Shadow on Desktop Surface */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.001, 0]}>
        <planeGeometry args={[0.26, 0.22]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.55} roughness={1.0} />
      </mesh>

      {/* Rear Kickstand Support Bracket */}
      <mesh position={[0, 0.1, -0.06]} rotation-x={-0.35} castShadow>
        <boxGeometry args={[0.06, 0.18, 0.012]} />
        <meshStandardMaterial color="#221A12" roughness={0.7} />
      </mesh>

      {/* Outer Wooden Frame (#36261A Dark Walnut Frame tilted back 12deg) */}
      <group rotation-x={-0.2}>
        <mesh castShadow receiveShadow position={[0, 0.12, 0]}>
          <boxGeometry args={[0.22, 0.28, 0.024]} />
          <meshStandardMaterial
            color={isFocused ? '#65B8FF' : hovered ? '#4A3626' : '#36261A'}
            roughness={0.5}
            metalness={0.15}
          />
        </mesh>

        {/* Off-White Paper Matting Canvas (#E8E2D6) */}
        <mesh position={[0, 0.12, 0.013]}>
          <planeGeometry args={[0.18, 0.24]} />
          <meshStandardMaterial color="#E8E2D6" roughness={0.8} />
        </mesh>

        {/* Inner Portrait Photo Canvas (#1C2028) */}
        <mesh position={[0, 0.12, 0.014]}>
          <planeGeometry args={[0.14, 0.20]} />
          <meshStandardMaterial
            color="#1C2028"
            emissive={hovered || isFocused ? '#65B8FF' : '#000000'}
            emissiveIntensity={isFocused ? 0.2 : hovered ? 0.1 : 0}
            roughness={0.3}
          />
        </mesh>

        {/* Abstract Portrait Silhouette Representation */}
        <mesh position={[0, 0.14, 0.015]}>
          <sphereGeometry args={[0.038, 16, 16]} />
          <meshStandardMaterial color="#3B424E" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.06, 0.015]}>
          <boxGeometry args={[0.09, 0.07, 0.005]} />
          <meshStandardMaterial color="#252A33" roughness={0.7} />
        </mesh>

        {/* Protective Glass Pane Reflection Overlay */}
        <mesh position={[0, 0.12, 0.016]}>
          <planeGeometry args={[0.18, 0.24]} />
          <meshStandardMaterial
            color="#FFFFFF"
            transparent
            opacity={0.08}
            roughness={0.05}
            metalness={0.9}
          />
        </mesh>
      </group>
    </group>
  );
};
