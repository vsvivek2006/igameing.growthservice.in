import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'base' | 'elevated' | 'interactive' | 'dark' | 'glass' | 'glass-dark' | '3d' | 'mesh-dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'interactive',
  padding = 'md',
  className = '',
  ...props
}) => {
  const variantMap = {
    base: 'surface-base rounded-2xl',
    elevated: 'surface-elevated rounded-2xl',
    interactive: 'surface-interactive rounded-2xl cursor-pointer',
    dark: 'surface-dark rounded-2xl',
    glass: 'glass-card rounded-2xl shadow-card',
    'glass-dark': 'glass-card-dark rounded-2xl text-white',
    '3d': 'surface-base rounded-3xl surface-3d shadow-card hover:shadow-card-3d-hover hover:border-purple-300/80 cursor-pointer transition-all duration-300',
    'mesh-dark': 'surface-dark rounded-3xl bg-dark-mesh border-slate-800/90 text-white shadow-card-dark',
  };

  const paddingMap = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div
      className={`${variantMap[variant]} ${paddingMap[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
