import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = true,
  className = '',
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="type-eyebrow mb-2.5 text-amber-400">
          {eyebrow}
        </p>
      )}
      <h2 className="type-h2 mb-4 text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="type-body-lg text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
