import { useState } from 'react';
import { SpatialSceneStage } from '../components/spatial/SpatialSceneStage';
import { SceneDotsIndicator } from '../components/spatial/SceneDotsIndicator';
import { CommandPalette } from '../components/ui/CommandPalette';
import { ContextualCursor } from '../components/ui/ContextualCursor';
import { AmbientCanvas } from '../components/ui/AmbientCanvas';
import { Toast } from '../components/ui/Toast';

import { HeroIntro } from '../components/hero/HeroIntro';
import { AboutSection } from '../components/about/AboutSection';
import { ProjectComposition } from '../components/projects/ProjectComposition';
import { DomainsSection } from '../components/domains/DomainsSection';
import { ContactSection } from '../components/contact/ContactSection';

export function HomePage() {
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const totalScenes = 5;

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <>
      {/* Ambient Blueprint Canvas & Cursor Spotlight */}
      <AmbientCanvas />

      {/* Contextual Micro-Cursor Inspector */}
      <ContextualCursor />

      {/* Toast Notification Banner */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Command Palette Modal (⌘K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectScene={(index) => setCurrentScene(index)}
        onShowToast={showToast}
      />

      {/* Vertical Viewport Pagination Rail (Right Edge) */}
      <SceneDotsIndicator
        currentScene={currentScene}
        totalScenes={totalScenes}
        onSelectScene={(index) => setCurrentScene(index)}
      />

      {/* 5-Scene Multi-Layer Parallax Dive Stage */}
      <SpatialSceneStage
        onSceneChange={(index) => setCurrentScene(index)}
      >
        {/* SLIDE 1: HERO INDEX */}
        <HeroIntro
          onNavigateNext={() => setCurrentScene(1)}
        />

        {/* SLIDE 2: ENGINEER DOSSIER */}
        <AboutSection />

        {/* SLIDE 3: PORTFOLIO WORKBENCH */}
        <ProjectComposition />

        {/* SLIDE 4: DOMAINS TOPOLOGY */}
        <DomainsSection />

        {/* SLIDE 5: CONTACT & ACTION */}
        <ContactSection
          onShowToast={showToast}
        />
      </SpatialSceneStage>
    </>
  );
}
