import { EngineeringHeader } from './components/EngineeringHeader';
import { HeroSection } from './sections/HeroSection';
import { WorkSection } from './sections/WorkSection';
import { StackSection } from './sections/StackSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { GithubSection } from './sections/GithubSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 font-sans selection:bg-sky-500/20 selection:text-sky-300">
      {/* Global Engineering Navigation */}
      <EngineeringHeader />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <WorkSection />
        <StackSection />
        <AboutSection />
        <ExperienceSection />
        <GithubSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
