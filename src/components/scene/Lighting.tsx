import React from 'react';

export const Lighting: React.FC = () => {
  return (
    <>
      {/* Ambient Night Room Lighting */}
      <ambientLight intensity={0.35} color="#10141D" />

      {/* Main Directional Soft Sunlight/Moonlight Window Cone */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={0.45}
        color="#D6E2FF"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />

      {/* Left Articulated Desk Lamp Practical Warm PointLight */}
      <pointLight
        position={[-1.8, 1.6, -0.2]}
        intensity={3.2}
        distance={4.5}
        color="#FFB042"
        castShadow
      />

      {/* Upper-Left Picture Spotlight PointLight */}
      <pointLight
        position={[-1.8, 2.6, -1.2]}
        intensity={1.8}
        distance={3.0}
        color="#FFE5B4"
      />
    </>
  );
};
