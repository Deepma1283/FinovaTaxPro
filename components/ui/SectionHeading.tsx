// components/ui/SectionHeading.tsx
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ 
  children, 
  subtitle,
  centered = true 
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}