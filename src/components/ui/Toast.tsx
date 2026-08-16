import { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 1100,
        background: 'var(--bg-dark)',
        color: '#FFFFFF',
        border: '1px solid var(--accent-red)',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 18px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        fontWeight: 600,
        boxShadow: '0 8px 24px rgba(18, 18, 18, 0.25)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        animation: 'fadeIn 200ms ease'
      }}
    >
      <span style={{ color: 'var(--accent-red)' }}>✓</span>
      <span>{message}</span>
    </div>
  );
}
