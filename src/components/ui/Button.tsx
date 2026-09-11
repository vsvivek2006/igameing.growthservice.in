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
      'bg-[#0B0B12] hover:bg-[#12121F] text-white border border-white/15 shadow-sm font-semibold hover:border-amber-400/50 hover:text-amber-300',
    gold:
      'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 border border-amber-300/40 font-bold',
    dark:
      'bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-sm font-semibold hover:border-white/30',
    outline:
      'border border-white/20 hover:border-amber-400 text-slate-200 hover:text-white hover:bg-white/5 bg-transparent font-semibold',
    ghost:
      'text-slate-300 hover:text-white hover:bg-white/10 bg-transparent font-medium',
  };

  const sizeMap = {
    sm: 'text-xs px-4 py-2 rounded-xl gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-2xl gap-2',
    lg: 'text-base px-7 py-3.5 rounded-2xl gap-2.5',
  };

  const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 ${variantMap[variant]} ${sizeMap[size]} ${className}`;

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
