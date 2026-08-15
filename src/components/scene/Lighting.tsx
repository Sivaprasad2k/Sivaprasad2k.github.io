import React from 'react';

export const Lighting: React.FC = () => {
  return (
    <>
      {/* Global Soft Ambient Room Illumination */}
      <ambientLight intensity={0.9} color="#303642" />

      {/* Main Directional Soft Window Sunlight/Moonlight Cone */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={0.9}
        color="#D0DCFF"
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

      {/* Left Articulated Desk Lamp Practical Key PointLight */}
      <pointLight
        position={[-1.8, 1.6, -0.2]}
        intensity={5.5}
        distance={5.5}
        color="#FFB042"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Upper-Left Picture Spotlight PointLight */}
      <pointLight
        position={[-1.8, 2.6, -1.2]}
        intensity={2.8}
        distance={3.5}
        color="#FFE5B4"
      />
    </>
  );
};
