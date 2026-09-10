import React from 'react';

export interface SlideInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <div
      className={`animate-slide-up ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default SlideIn;
