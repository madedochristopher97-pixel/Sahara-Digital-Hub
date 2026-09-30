import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CardTopRightImageProps {
  src: string;
  alt?: string;
  className?: string;
  accentGlow?: 'green' | 'dark' | 'none';
  variant?: 'pillar' | 'capability';
}

export function CardTopRightImage({
  src,
  alt = '',
  className,
  accentGlow = 'green',
  variant = 'pillar',
}: CardTopRightImageProps) {
  const isPillar = variant === 'pillar';

  return (
    <div
      className={cn(
        'absolute top-0 right-0 pointer-events-none overflow-hidden select-none z-0 rounded-tr-[20px]',
        isPillar
          ? 'w-72 sm:w-96 md:w-[420px] h-60 sm:h-72 md:h-80'
          : 'w-48 sm:w-60 h-44 sm:h-52',
        className
      )}
      aria-hidden="true"
    >
      {/* High-quality Pexels imagery with fade-out mask on top-right sides */}
      <div
        className="relative w-full h-full"
        style={{
          maskImage:
            'radial-gradient(ellipse 95% 95% at 50% 60%, black 15%, rgba(0,0,0,0.6) 50%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 95% at 50% 60%, black 15%, rgba(0,0,0,0.6) 50%, transparent 80%)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={isPillar ? '(max-width: 768px) 300px, 420px' : '(max-width: 768px) 200px, 260px'}
          className="object-cover object-center opacity-35 dark:opacity-25 group-hover:opacity-55 dark:group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      </div>

      {/* Multi-angle gradients that smoothly fade the image out on the top-right sides and into the card */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/90 dark:to-[#18181B]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#18181B] dark:via-[#18181B]/50 dark:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-[#18181B] dark:via-[#18181B]/70 dark:to-transparent" />

      {/* Subtle brand glow bloom */}
      {accentGlow === 'green' && (
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#008035]/15 dark:bg-[#008035]/20 blur-3xl group-hover:bg-[#008035]/25 transition-colors duration-500" />
      )}
      {accentGlow === 'dark' && (
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-black/10 dark:bg-white/10 blur-3xl group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </div>
  );
}

export default CardTopRightImage;
