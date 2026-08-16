import { useState, useEffect, useRef } from 'react';
import { PROFILE_DATA } from '../../data/profile';

interface CommandItem {
  id: string;
  category: 'NAVIGATION' | 'ACTION';
  label: string;
  detail: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScene: (index: number) => void;
  onShowToast?: (msg: string) => void;
}

export function CommandPalette({ isOpen, onClose, onSelectScene, onShowToast }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const commands: CommandItem[] = [
    { id: 'c-01', category: 'NAVIGATION', label: '01 // Jump to Hero Intro', detail: 'SIVA PRASAD M L · Index', action: () => onSelectScene(0) },
    { id: 'c-02', category: 'NAVIGATION', label: '02 // Jump to Identity Dossier', detail: 'Background, Stack & Telemetry', action: () => onSelectScene(1) },
    { id: 'c-03', category: 'NAVIGATION', label: '03 // Jump to Portfolio Workbench', detail: 'Architectural Specs & Code', action: () => onSelectScene(2) },
    { id: 'c-04', category: 'NAVIGATION', label: '04 // Jump to Topology Node Map', detail: 'Domains & Engineering Matrix', action: () => onSelectScene(3) },
    { id: 'c-05', category: 'NAVIGATION', label: '05 // Jump to Contact & Action', detail: 'Let\'s Build Something Useful', action: () => onSelectScene(4) },
    {
      id: 'c-email-copy',
      category: 'ACTION',
      label: 'Copy Primary Email Address',
      detail: PROFILE_DATA.email,
      action: () => {
        navigator.clipboard.writeText(PROFILE_DATA.email);
        if (onShowToast) onShowToast(`Copied ${PROFILE_DATA.email} to clipboard!`);
      }
    },
    { id: 'c-github', category: 'ACTION', label: 'Open GitHub Profile', detail: PROFILE_DATA.github, action: () => window.open(PROFILE_DATA.github, '_blank') },
    { id: 'c-linkedin', category: 'ACTION', label: 'Open LinkedIn Profile', detail: PROFILE_DATA.linkedin, action: () => window.open(PROFILE_DATA.linkedin, '_blank') },
  ];

  const filteredCommands = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.detail.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filteredCommands, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(18, 18, 18, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justify: 'center',
        paddingTop: '15vh'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '90%',
          maxWidth: 620,
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-strong)',
          borderTop: '4px solid var(--accent-red)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 24px 64px rgba(18, 18, 18, 0.3)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700 }}>
            {isMac ? '⌘K' : 'CTRL+K'}
          </span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search section..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--text-primary)'
            }}
          />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold)', background: 'var(--accent-gold-subtle)', padding: '2px 6px', borderRadius: 2 }}>
            ESC
          </span>
        </div>

        {/* Command List */}
        <div style={{ maxHeight: 340, overflowY: 'auto', padding: 8 }}>
          {filteredCommands.length === 0 ? (
            <div style={{ padding: '24px 16px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => { cmd.action(); onClose(); }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 3,
                    background: isSelected ? 'var(--accent-red-subtle)' : 'transparent',
                    borderLeft: `3px solid ${isSelected ? 'var(--accent-red)' : 'transparent'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    transition: 'all 120ms ease'
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.92rem', color: isSelected ? 'var(--accent-red)' : 'var(--text-primary)' }}>
                      {cmd.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                      {cmd.detail}
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: isSelected ? 'var(--accent-red)' : 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {cmd.category} ↵
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div style={{ padding: '10px 20px', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          <span>↑↓ NAVIGATE · ↵ SELECT · ESC CLOSE</span>
          <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>SIVA PRASAD M L</span>
        </div>
      </div>
    </div>
  );
}
