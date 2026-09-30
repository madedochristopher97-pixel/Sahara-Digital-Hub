'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { caseStudies } from '@/data/caseStudies';
import { ArrowRight, TrendingUp, Sparkles, Code2 } from 'lucide-react';
import { MetricCounter } from '@/components/ui/StatsCounter';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'software'>('all');

  const filteredStudies = caseStudies.filter((study) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'branding') return study.category === 'branding' || study.category === 'both';
    if (activeFilter === 'software') return study.category === 'software' || study.category === 'both';
    return true;
  });

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="green">
            <span className="w-2 h-2 rounded-full bg-[#008035] mr-1" />
            Proof of Work · 2021 — 2026
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Case studies that prove the value of{' '}
            <span className="italic font-normal text-[#008035]">craft and engineering.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
            We don’t produce conceptual mockups that never launch. Every case study below represents
            a living commercial system or retail packaging presence active in East Africa.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="pt-10 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-black text-[#FFFDF6] dark:bg-white dark:text-black shadow-sm'
                : 'bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            All Disciplines ({caseStudies.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('branding')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'branding'
                ? 'bg-[#008035] text-[#FFFDF6] shadow-sm'
                : 'bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Branding & Packaging</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('software')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'software'
                ? 'bg-black text-[#FFFDF6] dark:bg-white dark:text-black shadow-sm'
                : 'bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Software Development</span>
          </button>
        </div>
      </section>

      {/* 2. Case Study Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <Card
              key={study.slug}
              as="article"
              variant="white"
              padding="none"
              hoverEffect
              className="flex flex-col justify-between overflow-hidden group border-black/10 dark:border-white/10"
            >
              {/* Graphic Mockup Preview with Real Contextual Photography */}
              <div className="relative h-60 p-6 flex flex-col justify-between border-b border-black/10 dark:border-white/10 overflow-hidden bg-black">
                {/* Contextual Case Study Photography */}
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 z-0" />

                {/* Top Meta Bar */}
                <div className="flex items-center justify-between z-10 relative">
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

                {/* Stylized Client Card Preview */}
                <div className="relative my-auto z-10">
                  <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/20 bg-white/95 dark:bg-[#18181B]/95 backdrop-blur-md text-black dark:text-white shadow-md max-w-xs group-hover:scale-102 transition-transform">
                    <p className="font-display font-bold text-base truncate">{study.client}</p>
                    <p className="text-[11px] text-[#595854] dark:text-[#A1A1AA] mt-0.5">
                      {study.location} · {study.timeline}
                    </p>
                  </div>
                </div>

                {/* Primary Metric Highlight */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#4ADE80] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 w-fit z-10 shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">
                    <MetricCounter metric={study.results[0].metric} margin="0px" /> {study.results[0].label}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h2 className="font-display font-bold text-xl text-black dark:text-white group-hover:text-[#008035] transition-colors leading-snug">
                    {study.title}
                  </h2>
                  <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed line-clamp-3">
                    {study.shortSummary}
                  </p>
                </div>

                {/* Highlights & Link */}
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
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#008035] text-[#FFFDF6] rounded-[24px] p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Have a similar commercial challenge?
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              We provide fixed-scope proposals within 48 hours of our discovery alignment.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-4">
            <Button href="/pricing#quote" size="lg" variant="dark" icon={<ArrowRight className="w-4 h-4" />}>
              Get a Scoped Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
