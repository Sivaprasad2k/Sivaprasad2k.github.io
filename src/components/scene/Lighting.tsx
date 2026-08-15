import React from 'react';

export const Lighting: React.FC = () => {
  return (
    <>
      {/* Layer 1: Global Environment Soft Ambient Illumination */}
      <ambientLight intensity={1.2} color="#3A4250" />

      {/* Layer 2: Soft Room Directional Window Fill Light */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.0}
        color="#C8D8FF"
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

      {/* Layer 3: Left Articulated Desk Lamp Warm Practical Key Light */}
      <pointLight
        position={[-1.8, 1.6, -0.2]}
        intensity={6.0}
        distance={5.5}
        color="#FFB042"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Layer 4: Upper-Left Picture Spotlight PointLight */}
      <pointLight
        position={[-1.8, 2.6, -1.2]}
        intensity={2.8}
        distance={3.5}
        color="#FFE5B4"
      />
    </>
  );
};
