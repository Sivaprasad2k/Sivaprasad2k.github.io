import { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../../data/profile';

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'work', 'domains', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-nav" role="banner">
      <a href="#intro" className="nav-logo">
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>◆</span>
        <span>{PROFILE_DATA.name}</span>
      </a>

      <nav className="nav-links" aria-label="Main Navigation">
        {[
          { id: 'about', label: 'ABOUT' },
          { id: 'work', label: 'WORK' },
          { id: 'domains', label: 'DOMAINS' },
          { id: 'contact', label: 'CONTACT' },
        ].map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            {activeSection === item.id && (
              <span style={{ color: 'var(--accent-red)', fontSize: '0.65rem' }}>●</span>
            )}
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
