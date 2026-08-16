import { useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function MagneticButton({ children, style }: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Max 6px magnetic pull
    const x = ((e.clientX - centerX) / (rect.width / 2)) * 6;
    const y = ((e.clientY - centerY) / (rect.height / 2)) * 6;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 300ms cubic-bezier(0,0,0.2,1)' : 'transform 100ms cubic-bezier(0,0,0.2,1)',
        willChange: 'transform',
        ...style
      }}
    >
      {children}
    </div>
  );
}
