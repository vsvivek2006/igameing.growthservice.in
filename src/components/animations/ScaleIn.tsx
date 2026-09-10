import React from 'react';

export interface ScaleInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div
      className={`transition-all duration-500 ease-luxury hover:scale-[1.02] ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScaleIn;
