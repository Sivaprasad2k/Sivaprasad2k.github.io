import React from 'react';

interface LightingProps {
  debugLighting?: boolean;
}

export const Lighting: React.FC<LightingProps> = ({ debugLighting = false }) => {
  if (debugLighting) {
    return (
      <>
        {/* Neutral Diagnostic White Illumination (?debug=lighting) */}
        <ambientLight intensity={3.0} color="#FFFFFF" />
        <directionalLight position={[0, 8, 4]} intensity={2.0} color="#FFFFFF" castShadow />
      </>
    );
  }

  return (
    <>
      {/* Layer 0: Hemisphere Light - Warm Upper Sky & Dark Ground Bounce */}
      <hemisphereLight args={['#58657B', '#241E1A', 1.6]} />

      {/* Layer 1: Global Soft Ambient Illumination for Material Readability */}
      <ambientLight intensity={1.6} color="#606C82" />

      {/* Layer 2: Soft Room Window Directional Fill Light from Right Wall */}
      <directionalLight
        position={[6, 5, 3]}
        intensity={1.2}
        color="#CBE0FF"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={15}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />

      {/* Layer 3: Subtle Terminal & Screen Glow Accents */}
      <pointLight
        position={[0, 1.3, 0.1]}
        intensity={0.35}
        distance={1.5}
        color="#10B981"
      />
    </>
  );
};

