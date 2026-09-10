import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  icon,
  className = '',
  ...props
}) => {
  const variantMap = {
    primary:
      'bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white shadow-md hover:shadow-glow font-semibold',
    secondary:
      'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 font-semibold',
    gold:
      'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 shadow-md font-bold',
    outline:
      'border-2 border-slate-300 hover:border-purple-600 text-slate-700 hover:text-purple-600 bg-transparent font-semibold',
    ghost:
      'text-slate-600 hover:text-purple-600 hover:bg-purple-50 bg-transparent font-medium',
    whatsapp:
      'bg-[#25D366] hover:bg-emerald-600 text-white font-bold shadow-md',
  };

  const sizeMap = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3.5 rounded-2xl gap-2.5',
  };

  const baseClasses = `inline-flex items-center justify-center transition-all duration-300 active:scale-95 select-none ${variantMap[variant]} ${sizeMap[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
