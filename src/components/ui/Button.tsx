import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const variantMap = {
    primary:
      'bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white shadow-md shadow-purple-950/30 border border-purple-400/20 font-semibold hover:shadow-glow-purple-sm',
    secondary:
      'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200/90 shadow-sm font-semibold hover:border-purple-200 hover:text-purple-700',
    gold:
      'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-950/20 border border-amber-300/30 font-bold hover:shadow-glow-gold-sm',
    dark:
      'bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-sm font-semibold hover:border-white/30',
    outline:
      'border border-slate-300 hover:border-purple-600 text-slate-700 hover:text-purple-700 bg-transparent font-semibold',
    ghost:
      'text-slate-600 hover:text-purple-600 hover:bg-purple-50/80 bg-transparent font-medium',
  };

  const sizeMap = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5',
  };

  const baseClasses = `inline-flex items-center justify-center transition-all duration-200 select-none hover:-translate-y-0.5 active:translate-y-0 ${variantMap[variant]} ${sizeMap[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  const destination = to || href;
  if (destination) {
    if (destination.startsWith('http://') || destination.startsWith('https://') || destination.startsWith('//') || destination.startsWith('mailto:') || destination.startsWith('tel:')) {
      return (
        <a href={destination} className={baseClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link to={destination} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
