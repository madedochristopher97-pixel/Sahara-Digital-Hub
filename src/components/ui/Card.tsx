import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  as?: 'div' | 'article' | 'section';
  className?: string;
  variant?: 'white' | 'surface' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
  id?: string;
}

export function Card({
  children,
  as: Component = 'div',
  className = '',
  variant = 'white',
  padding = 'md',
  hoverEffect = false,
  id,
}: CardProps) {
  const variantStyles = {
    white: 'bg-white dark:bg-[#18181B] border border-black/[0.08] dark:border-white/10 text-black dark:text-white',
    surface: 'bg-[#F6F3E9] dark:bg-[#141414] border border-black/[0.06] dark:border-white/10 text-black dark:text-white',
    bordered: 'bg-transparent border-2 border-black/[0.12] dark:border-white/20 text-black dark:text-white',
  }[variant];

  // 8px grid spacing: sm = 16px (p-4), md = 24px (p-6), lg = 32px (p-8)
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  }[padding];

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg card-shadow'
    : 'card-shadow';

  return (
    <Component
      id={id}
      className={`rounded-[20px] ${variantStyles} ${paddingStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </Component>
  );
}
