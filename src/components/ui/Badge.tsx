import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'purple' | 'gold' | 'green' | 'dark' | 'outline' | 'amber' | 'blue' | 'slate' | 'rose';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantMap = {
    purple: 'bg-purple-100 text-purple-800 border border-purple-200/80 shadow-xs',
    gold: 'bg-yellow-100 text-yellow-800 border border-yellow-300/80 shadow-xs',
    amber: 'bg-amber-100 text-amber-800 border border-amber-300/80 shadow-xs',
    green: 'bg-emerald-100 text-emerald-800 border border-emerald-200/80 shadow-xs',
    blue: 'bg-blue-100 text-blue-800 border border-blue-200/80 shadow-xs',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200 shadow-xs',
    rose: 'bg-rose-100 text-rose-800 border border-rose-200/80 shadow-xs',
    dark: 'bg-slate-900/90 text-purple-300 border border-purple-500/30 shadow-xs',
    outline: 'border border-slate-300 text-slate-700 bg-white/80',
  };

  const sizeMap = {
    sm: 'text-xs px-2.5 py-0.5 font-medium rounded-full',
    md: 'text-xs px-3 py-1 font-semibold rounded-full tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${variantMap[variant]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
