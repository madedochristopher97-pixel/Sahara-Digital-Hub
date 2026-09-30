"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface KineticTextLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  subtitle?: string;
  showBrandSubtitle?: boolean;
}

/**
 * Sahara Kinetic Text Loader
 * Blends the kinetic bouncing typography animation with Sahara Digital Hub's
 * signature emerald green (#008035 / #4ADE80) brand accents, glowing dot pulse,
 * and accessibility reduced-motion support.
 */
export function KineticTextLoader({ 
  className, 
  text = "Loading", 
  subtitle = "Sahara Digital Hub · Nairobi",
  showBrandSubtitle = true,
  ...props 
}: KineticTextLoaderProps) {
  const letters = text.split("");

  return (
    <div 
      className={cn("relative flex flex-col items-center justify-center select-none", className)} 
      style={{ fontFamily: "'Roboto', var(--font-urbanist), sans-serif" }}
      {...props}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
        
        @keyframes ktl-dotMove {
          0%, 100% { transform: rotate(180deg) translate(-80px, -10px) rotate(-180deg); }
          50% { transform: rotate(0deg) translate(-81px, 10px) rotate(0deg); }
        }
        @keyframes ktl-letterStretch {
          0%, 100% { transform: scale(1, 0.35); transform-origin: 100% 75%; }
          8%, 28% { transform: scale(1, 1.4); transform-origin: 100% 67%; }
          37% { transform: scale(1, 0.875); transform-origin: 100% 75%; }
          46% { transform: scale(1, 1.03); transform-origin: 100% 75%; }
          50%, 97% { transform: scale(1); transform-origin: 100% 75%; }
        }
        @keyframes ktl-l-bounce {
          0%, 45%, 70%, 100% { transform: scaleY(1.11); }
          49% { transform: scaleY(0.31); }
          50% { transform: scaleY(0.16); }
          53% { transform: scaleY(0.63); }
          60% { transform: scaleY(1.275); }
          68% { transform: scaleY(1.04); }
        }

        /* Accessibility: Respect preferred reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .ktl-dot-animated {
            animation: none !important;
            transform: translate(-80px, -10px) !important;
          }
          .ktl-l-animated,
          .ktl-i-animated {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
      
      <div className="relative scale-75 sm:scale-90 md:scale-100 flex flex-col items-center">
        {/* Subtle Sahara emerald ambient glow behind typography */}
        <div 
          className="absolute -inset-10 bg-radial from-[#008035]/15 via-[#008035]/5 to-transparent blur-2xl pointer-events-none rounded-full dark:from-[#4ADE80]/15" 
          aria-hidden="true" 
        />

        {/* The moving dot — Sahara Emerald Brand Green with soft glow */}
        <div 
          className="ktl-dot-animated absolute z-10 top-[40px] left-[85px] w-[7px] h-[7px] bg-[#008035] dark:bg-[#4ADE80] shadow-[0_0_10px_rgba(0,128,53,0.8)] dark:shadow-[0_0_14px_rgba(74,222,128,0.9)] rounded-full transition-colors"
          style={{ animation: "ktl-dotMove 1800ms cubic-bezier(0.25,0.25,0.75,0.75) infinite" }}
          aria-hidden="true"
        />
        
        {/* Animated Word */}
        <p 
          className="relative m-0 whitespace-nowrap text-[3.75rem] font-light text-black dark:text-[#F3F4F6] tracking-wide" 
          aria-label={text}
        >
          {letters.map((char, index) => {
            // First letter bounce animation (typically 'L' in "Loading")
            if (index === 0 && char.toUpperCase() === 'L') {
              return (
                <span 
                  key={index} 
                  className="ktl-l-animated inline-block relative tracking-[8px] transform origin-[100%_70%] text-black dark:text-white"
                  style={{ animation: "ktl-l-bounce 1800ms cubic-bezier(0.25,0.25,0.75,0.75) infinite" }}
                >
                  {char}
                </span>
              );
            }
            
            // Dotless 'ı' stretch animation matching the moving dot (index 4 in "Loading")
            if (index === 4 && char.toLowerCase() === 'i') {
              return (
                <span 
                  key={index} 
                  className="ktl-i-animated inline-block relative tracking-[8px] transform origin-[100%_70%] text-[#008035] dark:text-[#4ADE80] transition-colors"
                  style={{ animation: "ktl-letterStretch 1800ms cubic-bezier(0.25,0.23,0.73,0.75) infinite" }}
                >
                  {char === 'i' ? 'ı' : char}
                </span>
              );
            }

            return (
              <span key={index} className="inline-block relative tracking-[8px]">
                {char}
              </span>
            );
          })}
        </p>

        {/* Sahara Brand Subtitle & Live Status */}
        {showBrandSubtitle && (
          <div className="mt-8 flex items-center justify-center gap-2.5 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008035] dark:bg-[#4ADE80] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#595854] dark:text-[#A1A1AA] font-medium">
              {subtitle}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default KineticTextLoader;
