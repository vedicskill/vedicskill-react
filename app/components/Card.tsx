import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  clickable?: boolean;
  as?: 'div' | 'article' | 'section';
}

/**
 * Premium card component for displaying content
 * Provides consistent styling with dark/light mode support
 * Supports hover effects and semantic HTML options
 */
export default function Card({
  children,
  className = '',
  hover = true,
  clickable = false,
  as: Component = 'div',
}: CardProps) {
  const baseClasses =
    'bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-[#2A2A2A] rounded-2xl p-6 transition-all duration-300';

  const hoverClasses =
    hover && !clickable
      ? 'hover:shadow-md hover:border-[#064E3B] dark:hover:border-[#10B981]'
      : '';

  const clickableClasses =
    clickable
      ? 'cursor-pointer hover:shadow-lg hover:border-[#064E3B] dark:hover:border-[#10B981] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F]'
      : '';

  return (
    <Component
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
    >
      {children}
    </Component>
  );
}
