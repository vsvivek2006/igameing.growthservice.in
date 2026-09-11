import React from 'react';
import useInView from '../../hooks/useInView';

export interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });
  const animClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : direction === 'scale'
      ? 'reveal-scale'
      : 'reveal-up';

  return (
    <div
      ref={ref}
      className={`${animClass} ${isInView ? 'in-view' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
