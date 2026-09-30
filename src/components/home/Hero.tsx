'use client';

import React, { useRef, useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WaveGridBackground } from '@/components/ui/WaveGridBackground';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { theme, resolvedTheme } = useTheme();
  const mounted = useIsClient();
  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  // Cube grid dynamic styling:
  // Light mode: Clean white cubes with Sahara signature brand green peaks (#008035)
  // Dark mode: Deep charcoal cubes with glowing emerald green peaks (#00e050)
  const colorBase = isDark ? '#141416' : '#ffffff';
  const colorHigh = isDark ? '#00e050' : '#008035';

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 70]
  );
  const bgParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 35]
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    shouldReduceMotion ? [1, 1, 1] : [1, 0.85, 0.3]
  );

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-12 sm:pt-20 lg:pt-28 pb-20 sm:pb-28 lg:pb-36 flex items-center justify-center min-h-[85vh]"
    >
      {/* Interactive 3D Wave Grid Background with Parallax Depth */}
      <motion.div style={{ y: bgParallaxY }} className="absolute inset-0 w-full h-full z-0">
        <WaveGridBackground
          colorBase={colorBase}
          colorHigh={colorHigh}
          autoAnimate={!shouldReduceMotion}
          className="w-full h-full"
        />
        {/* Soft edge blend for smooth integration with notch header and trust strip */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF6]/60 via-transparent to-[#FFFDF6] dark:from-black/60 dark:via-transparent dark:to-[#0A0A0A] pointer-events-none" />
      </motion.div>

      <motion.div
        style={{ y: heroParallaxY, opacity: heroOpacity }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center pointer-events-none"
      >
        {/* Kicker Line */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-6 pointer-events-auto"
        >
          <Badge variant="green" size="md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008035] animate-pulse" />
            Relaunching 2026 · Nairobi, Kenya
          </Badge>
          <span className="text-xs text-[#595854] dark:text-[#A1A1AA] font-medium hidden sm:inline">
            Branding & Creative + Software Engineering
          </span>
        </motion.div>

        {/* Two-Line Headline with Grain Bold (weight 700) */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hero-headline font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-black dark:text-white max-w-4xl mx-auto tracking-tight select-none"
        >
          One team designs it.
          <br />
          <span className="italic font-normal text-[#008035]">
            The same team builds it.
          </span>
        </motion.h1>

        {/* Crisp Two-Line Subhead */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hero-subhead text-base sm:text-lg md:text-xl text-[#595854] dark:text-[#A1A1AA] max-w-2xl mx-auto mt-6 leading-relaxed select-none"
        >
          Nairobi-based visual identity and full-stack software under one roof.
          <br className="hidden sm:inline" />
          {' '}No agency handoffs, no compromise between craft and code.
        </motion.p>

        {/* Truthful Delivery Promise Proof Line */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-black/85 dark:text-white/85 font-medium bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 px-4 py-2 rounded-full pointer-events-auto shadow-xs"
        >
          <span className="flex items-center gap-1.5 text-[#008035] font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#008035]" />
            Delivery Promise:
          </span>
          <span>Weekly clickable review builds</span>
          <span className="text-black/25 dark:text-white/25 hidden sm:inline">·</span>
          <span>Direct senior collaboration</span>
          <span className="text-black/25 dark:text-white/25 hidden sm:inline">·</span>
          <span>100% IP ownership</span>
        </motion.div>

        {/* Dual CTAs */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 pointer-events-auto"
        >
          <Button href="/contact" size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
            Tell us what you&apos;re building
          </Button>
          <Button href="/services" size="lg" variant="secondary">
            Explore Capabilities
          </Button>
        </motion.div>

        {/* Credibility highlights */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-[#595854] dark:text-[#A1A1AA] border-t border-black/10 dark:border-white/10 max-w-xl mx-auto select-none"
        >
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#008035]" />
            Fixed-Scope Milestones
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#008035]" />
            M-Pesa & Bank API Specialists
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Zap className="w-4 h-4 text-[#008035]" />
            Lighthouse 90+ Web Standards
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
