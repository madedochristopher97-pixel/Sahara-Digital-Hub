import React from 'react';
import Link from 'next/link';

export interface LogoProps {
  className?: string;
  inverted?: boolean; // For dark backgrounds (like the footer)
}

/**
 * Sahara Digital Hub Official Logo
 * Uses the authentic brand vector from Assets/Group.svg (/brand/Group.svg)
 */
export function Logo({
  className = '',
  inverted = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008035] rounded-lg transition-transform ${className}`}
      aria-label="Sahara Digital Hub Home"
    >
      <div className="relative flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Group.svg"
          alt="Sahara Digital Hub"
          className={`h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${
            inverted ? 'brightness-0 invert' : 'dark:brightness-0 dark:invert'
          }`}
        />
      </div>
    </Link>
  );
}
