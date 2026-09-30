import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'black' | 'surface' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = 'green',
  size = 'md',
  className = '',
  icon,
}: BadgeProps) {
  const sizeStyles = {
    sm: 'px-2.5 py-1 text-[11px]',
    md: 'px-3.5 py-1.5 text-xs',
  }[size];

  const variantStyles = {
    green: 'bg-[#008035]/10 text-[#008035] border border-[#008035]/20 font-medium',
    black: 'bg-black dark:bg-white text-[#FFFDF6] dark:text-black border border-black dark:border-white font-medium',
    surface: 'bg-[#F6F3E9] dark:bg-[#1E1E1E] text-black dark:text-white border border-black/10 dark:border-white/10 font-medium',
    outline: 'bg-transparent text-black/80 dark:text-white/80 border border-black/20 dark:border-white/20 font-medium',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-body uppercase tracking-wider ${sizeStyles} ${variantStyles} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0 items-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
