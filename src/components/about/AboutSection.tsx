import { AboutFlipCard } from './AboutFlipCard';

export function AboutSection() {
  return (
    <section className="container" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      {/* Single Large Editorial Identity Object */}
      <AboutFlipCard imageSrc="/images/siva-profile.jpg" />
    </section>
  );
}
