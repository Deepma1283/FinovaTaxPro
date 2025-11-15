// components/ui/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  className = '',
  padding = 'md',
  hover = true,
  onClick
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-white 
        rounded-xl 
        shadow-sm 
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-md transition-shadow duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}