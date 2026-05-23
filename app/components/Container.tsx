import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'tight' | 'normal' | 'loose';
  as?: 'div' | 'section' | 'article' | 'main';
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-full',
};

const paddingClasses = {
  tight: 'px-4 md:px-6',
  normal: 'px-6 md:px-8',
  loose: 'px-6 md:px-8 lg:px-12',
};

/**
 * Container component provides consistent max-width and padding for content sections
 * Follows the premium design system with responsive spacing
 */
export default function Container({
  children,
  className = '',
  maxWidth = '2xl',
  padding = 'normal',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </Component>
  );
}
