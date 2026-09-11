import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'white' | 'subtle' | 'dark' | 'gradient' | 'slate' | 'mesh';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'white',
  spacing = 'md',
  className = '',
  ...props
}) => {
  // Note: 'surface-dark' and 'bg-hero-atmosphere' are custom CSS utilities defined in src/index.css
  const variantMap = {
    white: 'bg-surface-page text-white',
    subtle: 'bg-surface-section text-white border-y border-white/10',
    slate: 'bg-surface-dark text-white border-y border-white/10',
    dark: 'bg-surface-page text-white',
    gradient: 'surface-dark text-white',
    mesh: 'bg-surface-page bg-hero-atmosphere text-white border-y border-white/10',
  };

  const spacingMap = {
    none: 'py-0',
    sm: 'py-10 md:py-14',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <section
      className={`relative overflow-hidden ${variantMap[variant]} ${spacingMap[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
