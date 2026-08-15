import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface BookPageTurnProps {
  turnDirection: 'next' | 'prev' | null;
  children: React.ReactNode;
}

export const BookPageTurn: React.FC<BookPageTurnProps> = ({ turnDirection, children }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion || !turnDirection) {
    return <div className="w-full h-full">{children}</div>;
  }

  return (
    <div
      className={`w-full h-full transition-transform duration-400 ease-in-out transform-gpu ${
        turnDirection === 'next'
          ? 'animate-slide-left'
          : 'animate-slide-right'
      }`}
    >
      {children}
    </div>
  );
};
