import React from 'react';

export default function LogoIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Sahara Emblem Tree / Geometric Sun Icon */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="16" strokeOpacity="0.2" />
      <path
        d="M200 60 V340 M60 200 H340 M100 100 L300 300 M100 300 L300 100"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      <circle cx="200" cy="200" r="60" fill="#008035" />
    </svg>
  );
}
