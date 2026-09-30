'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

/**
 * Parallax wrapper that translates children along Y axis as user scrolls.
 * Respects prefers-reduced-motion for accessibility.
 */
export function Parallax({ children, offset = 40, className, ...props }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-offset, offset]
  );

  return (
    <div ref={ref} className={cn('relative', className)} {...props}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

export interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  offset?: number;
}

/**
 * Editorial Parallax Image container that moves slightly inside its masked container
 */
export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  offset = 24,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-offset, offset]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [1.08, 1.04, 1.08]
  );

  return (
    <div ref={ref} className={cn('relative overflow-hidden', containerClassName)}>
      <motion.div style={{ y, scale }} className="w-full h-full relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={cn('w-full h-full object-cover object-center', className)}
        />
      </motion.div>
    </div>
  );
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

/**
 * Accessible Scroll-driven element reveal with reduced-motion fallback
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
