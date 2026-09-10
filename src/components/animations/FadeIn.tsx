import React from 'react';

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // ms
  duration?: number; // ms
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 500,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default FadeIn;
