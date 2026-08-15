import { useState, useEffect } from 'react';
import type { RoomObjectDefinition } from './data/room';
import { SpaceEnvironment } from './components/space/SpaceEnvironment';
import { SpaceInitOverlay } from './components/space-ui/SpaceInitOverlay';
import { SpaceHint } from './components/space-ui/SpaceHint';
import { ObjectFocusOverlay } from './components/space-ui/ObjectFocusOverlay';
import { SpaceNavigation } from './components/space-ui/SpaceNavigation';
import { ReturnToSpaceBtn } from './components/space-ui/ReturnToSpaceBtn';
import { ProjectBookReader } from './components/book/ProjectBookReader';
import { useBookReader } from './hooks/useBookReader';

export function App() {
  const [booting, setBooting] = useState<boolean>(true);
  const [activeObject, setActiveObject] = useState<RoomObjectDefinition | null>(null);

  const bookReader = useBookReader();

  useEffect(() => {
    // Check if session has already initialized space
    const initialized = sessionStorage.getItem('siva_space_booted');
    if (initialized) {
      setBooting(false);
    }
  }, []);

  const handleCompleteBoot = () => {
    sessionStorage.setItem('siva_space_booted', 'true');
    setBooting(false);
  };

  const handleFocusObject = (objDef: RoomObjectDefinition) => {
    if (objDef.projectId) {
      // If clicking a project book, open the Project Book Engine reader directly
      bookReader.openBook(objDef.projectId);
      setActiveObject(null);
    } else {
      setActiveObject(objDef);
    }
  };

  const handleOpenBookFromFocus = (projectId: string) => {
    setActiveObject(null);
    bookReader.openBook(projectId);
  };

  const handleCloseFocus = () => {
    setActiveObject(null);
  };

  return (
    <div className="relative w-full h-screen bg-[#0B0D10] text-[#E8E2D6] font-sans selection:bg-[#65B8FF]/20 selection:text-[#65B8FF] overflow-hidden select-none">
      {/* 2.5D Room Environment */}
      <SpaceEnvironment
        onFocusObject={handleFocusObject}
        activeObjectId={activeObject?.id || null}
      />

      {/* Interactive UI Layer 6 Overlays */}
      <SpaceHint />

      <SpaceNavigation
        onSelectObject={handleFocusObject}
        activeObjectId={activeObject?.id || null}
      />

      <ReturnToSpaceBtn
        visible={activeObject !== null && bookReader.activeBook === null}
        onClick={handleCloseFocus}
      />

      <ObjectFocusOverlay
        objectDef={activeObject}
        onClose={handleCloseFocus}
        onOpenBook={handleOpenBookFromFocus}
      />

      {/* Project Book Engine Notebook Reader */}
      <ProjectBookReader
        book={bookReader.activeBook}
        currentPageIndex={bookReader.currentPageIndex}
        turnDirection={bookReader.turnDirection}
        onNext={bookReader.nextPage}
        onPrev={bookReader.prevPage}
        onClose={bookReader.closeBook}
        onOpenCover={bookReader.nextPage}
      />

      {/* Boot Initialization Overlay */}
      <SpaceInitOverlay
        isOpen={booting}
        onComplete={handleCompleteBoot}
      />
    </div>
  );
}

export default App;
