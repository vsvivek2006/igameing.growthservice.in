import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'white' | 'subtle' | 'dark' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg' | 'none';
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'white',
  spacing = 'md',
  className = '',
  ...props
}) => {
  const variantMap = {
    white: 'bg-white text-slate-900',
    subtle: 'bg-slate-50/80 text-slate-900 border-y border-slate-200/60',
    dark: 'bg-slate-900 text-white',
    gradient: 'surface-dark text-white',
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
