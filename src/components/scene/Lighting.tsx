import React from 'react';

export const Lighting: React.FC = () => {
  return (
    <>
      {/* Layer 0: Hemisphere Light - Sky Fill & Ground Bounce */}
      <hemisphereLight args={['#505C72', '#201C18', 1.8]} />

      {/* Layer 1: Global Soft Ambient Illumination */}
      <ambientLight intensity={2.2} color="#606C82" />

      {/* Layer 2: Soft Room Directional Window Fill Light */}
      <directionalLight
        position={[3, 5, 4]}
        intensity={1.8}
        color="#D8E4FF"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />

      {/* Layer 3: Left Articulated Desk Lamp Warm Practical Key Light */}
      <pointLight
        position={[-1.8, 1.6, -0.2]}
        intensity={5.0}
        distance={6.0}
        color="#FFB042"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Layer 4: Upper-Left Picture Spotlight PointLight */}
      <pointLight
        position={[-1.8, 2.6, -1.2]}
        intensity={2.5}
        distance={4.0}
        color="#FFE5B4"
      />
    </>
  );
};
