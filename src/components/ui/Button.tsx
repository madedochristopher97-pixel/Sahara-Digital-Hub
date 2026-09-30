'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'outline-green';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  id?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  external = false,
  icon,
  iconPosition = 'right',
  id,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  // Spacing & Sizing in 8px grid increments
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wide',
    md: 'px-6 py-3 text-sm font-semibold tracking-wide',
    lg: 'px-8 py-4 text-base font-semibold tracking-wide',
  }[size];

  // Brand-guided color styles (Never green & black both full saturation on same element)
  const variantStyles = {
    // Primary: Solid green with warm-white paper text
    primary:
      'bg-[#008035] text-[#FFFDF6] border border-[#008035] hover:bg-[#006e2e] hover:border-[#006e2e] active:scale-[0.98] shadow-sm',
    // Secondary: Outline with automatic contrast for light & dark
    secondary:
      'border-2 border-black dark:border-white text-black dark:text-white bg-transparent hover:bg-black hover:text-[#FFFDF6] dark:hover:bg-white dark:hover:text-black active:scale-[0.98]',
    // Dark: Contrast inverted between light & dark
    dark:
      'bg-black dark:bg-white text-[#FFFDF6] dark:text-black border border-black dark:border-white hover:bg-neutral-900 dark:hover:bg-neutral-200 active:scale-[0.98] shadow-sm',
    // Outline Green: Green border with green text
    'outline-green':
      'border-2 border-[#008035] text-[#008035] bg-transparent hover:bg-[#008035] hover:text-[#FFFDF6] active:scale-[0.98]',
    // Ghost: Subtle hover state
    ghost:
      'text-black dark:text-white bg-transparent hover:bg-black/[0.05] dark:hover:bg-white/[0.08] active:bg-black/[0.08]',
  }[variant];

  const baseStyles =
    'inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008035] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const fullClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </>
  );

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { y: 1 },
      };

  if (href) {
    if (external) {
      return (
        <motion.a
          id={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={fullClassName}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link id={id} href={href} className={fullClassName}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullClassName}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
