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
    purple: 'bg-purple-500/15 text-purple-300 border border-purple-500/30',
    gold: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    amber: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    green: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    blue: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
    slate: 'bg-white/5 text-slate-300 border border-white/10',
    rose: 'bg-rose-500/15 text-rose-300 border border-rose-500/30',
    dark: 'bg-black/60 text-purple-300 border border-purple-500/40',
    outline: 'border border-white/20 text-slate-300 bg-transparent',
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
