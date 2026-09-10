import React from 'react';
import { Card, CardProps } from '../ui/Card';

export interface MotionCardProps extends CardProps {
  delay?: number;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  delay = 0,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <Card
      className={`animate-fade-in ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
        ...style,
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default MotionCard;
