'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { MetricCounter } from '@/components/ui/StatsCounter';
import { ScrollReveal, ParallaxImage } from '@/components/ui/Parallax';

export function FeaturedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-20 sm:py-28" aria-labelledby="featured-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center space-y-5">
            <SectionHeading
              kicker="Selected Work"
              plainLine="Built for Real Market Impact."
              accentLine="Proven Across East Africa."
              subhead="Every case study reflects a real commercial challenge solved through disciplined design systems or custom full-stack engineering."
            />
            <div className="pt-1">
              <Button href="/work" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
                View All Case Studies
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Case Study Preview Cards with Parallax Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {featured.map((study, idx) => (
            <ScrollReveal key={study.slug} delay={idx * 0.1}>
              <Card
                as="article"
                variant="white"
                padding="none"
                hoverEffect
                className="h-full flex flex-col justify-between overflow-hidden group border-black/10 dark:border-white/10"
              >
                {/* Parallax Image Window */}
                <div className="relative h-60 overflow-hidden bg-black flex flex-col justify-between p-6">
                  {/* Contextual Parallax Case Study Photography */}
                  <div className="absolute inset-0 z-0">
                    <ParallaxImage
                      src={study.image}
                      alt={study.title}
                      containerClassName="w-full h-full"
                      className="group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                      offset={20}
                    />
                  </div>

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 z-10 pointer-events-none" />

                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between z-20 relative">
                    <Badge
                      variant={study.category === 'branding' ? 'green' : 'surface'}
                      size="sm"
                      className="shadow-xs backdrop-blur-md"
                    >
                      {study.categoryLabel}
                    </Badge>
                    <span className="text-xs font-mono font-medium text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                      {study.year}
                    </span>
                  </div>

                  {/* Stylized Visual Mockup Graphic */}
                  <div className="relative my-auto z-20">
                    <div className="p-3 bg-white/95 dark:bg-[#18181B]/95 backdrop-blur-md rounded-xl border border-black/10 dark:border-white/20 shadow-md max-w-xs group-hover:scale-102 transition-transform">
                      <p className="font-display font-bold text-sm text-black dark:text-white truncate">
                        {study.client}
                      </p>
                      <p className="text-[11px] text-[#595854] dark:text-[#A1A1AA] mt-0.5">{study.location}</p>
                    </div>
                  </div>

                  {/* Metric pill */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#4ADE80] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 w-fit z-20 shadow-xs">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      <MetricCounter metric={study.results[0].metric} margin="0px" /> {study.results[0].label}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-black dark:text-white group-hover:text-[#008035] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed line-clamp-3 font-body">
                      {study.shortSummary}
                    </p>
                  </div>

                  {/* Highlights tags */}
                  <div className="space-y-4 pt-4 border-t border-black/5 dark:border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {study.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-[#F6F3E9] dark:bg-[#222226] text-black/80 dark:text-white/80 px-2 py-0.5 rounded-full font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-black dark:text-white group-hover:text-[#008035] transition-colors"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
