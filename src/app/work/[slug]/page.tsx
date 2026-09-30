import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { caseStudies } from '@/data/caseStudies';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Clock,
  Quote,
} from 'lucide-react';
import { MetricCounter } from '@/components/ui/StatsCounter';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${study.client} — ${study.categoryLabel} Case Study`,
    description: study.shortSummary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const studyIndex = caseStudies.findIndex((s) => s.slug === slug);

  if (studyIndex === -1) {
    notFound();
  }

  const study = caseStudies[studyIndex];
  const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];

  return (
    <article className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* 1. Header & Meta */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-bold text-black/70 dark:text-white/70 hover:text-[#008035] dark:hover:text-[#008035] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>

        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="green" size="md">
              {study.categoryLabel}
            </Badge>
            <span className="text-xs font-mono text-[#595854] dark:text-[#A1A1AA] bg-[#F6F3E9] dark:bg-[#1E1E22] px-3 py-1 rounded-full border border-black/5 dark:border-white/10">
              {study.client}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed pt-2">
            {study.shortSummary}
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#F6F3E9] dark:bg-[#121212] rounded-2xl border border-black/10 dark:border-white/10 mt-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#595854] dark:text-[#A1A1AA]">
              Client
            </p>
            <p className="font-display font-bold text-sm text-black dark:text-white mt-0.5">{study.client}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#595854] dark:text-[#A1A1AA]">
              Location
            </p>
            <p className="font-display font-bold text-sm text-black dark:text-white mt-0.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#008035]" />
              {study.location}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#595854] dark:text-[#A1A1AA]">
              Timeline
            </p>
            <p className="font-display font-bold text-sm text-black dark:text-white mt-0.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#008035]" />
              {study.timeline}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#595854] dark:text-[#A1A1AA]">
              Release Year
            </p>
            <p className="font-display font-bold text-sm text-black dark:text-white mt-0.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#008035]" />
              {study.year}
            </p>
          </div>
        </div>

        {/* Cinematic Case Study Showcase Banner */}
        <div className="relative h-[280px] sm:h-[420px] md:h-[480px] rounded-[24px] overflow-hidden border border-black/10 dark:border-white/10 shadow-lg group mt-8">
          <Image
            src={study.image}
            alt={study.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white z-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#4ADE80] font-bold">
                {study.categoryLabel} Showcase
              </p>
              <p className="font-display font-bold text-xl sm:text-2xl text-white">
                {study.client}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#008035] animate-pulse" />
              <span>Commercial Deployment · {study.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quantified Commercial Results */}
      <section className="bg-black text-[#FFFDF6] py-14 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-[#008035] mb-6">
            Key Performance Indicators & Verified Metrics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.results.map((res, rIdx) => (
              <div key={rIdx} className="space-y-1 border-l-2 border-[#008035] pl-4">
                <p className="font-display font-bold text-3xl sm:text-4xl text-white">
                  <MetricCounter metric={res.metric} />
                </p>
                <p className="text-xs sm:text-sm text-white/70">{res.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Challenge & Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* The Challenge */}
          <Card variant="white" padding="lg" className="space-y-4 border-black/10 dark:border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-full border border-red-200 dark:border-red-900/50">
              The Commercial Challenge
            </span>
            <h2 className="font-display font-bold text-2xl text-black dark:text-white">
              Friction Before Intervention
            </h2>
            <p className="text-base text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
              {study.challenge}
            </p>
          </Card>

          {/* The Approach & Solution */}
          <Card variant="white" padding="lg" className="space-y-4 border-black/10 dark:border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008035] bg-[#008035]/10 px-3 py-1 rounded-full border border-[#008035]/20">
              Sahara Architectural Solution
            </span>
            <h2 className="font-display font-bold text-2xl text-black dark:text-white">
              Disciplined Execution Strategy
            </h2>
            <p className="text-base text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
              {study.approach}
            </p>
          </Card>
        </div>
      </section>

      {/* 4. Complete Deliverables Architecture */}
      <section className="bg-[#F6F3E9] dark:bg-[#121212] py-16 sm:py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008035]">
              Scope Manifest
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
              Shipped Deliverables & Technical Assets
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-[#1A1A1D] rounded-xl border border-black/10 dark:border-white/10 flex items-start gap-3 shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#008035] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-black dark:text-white">{del}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonial & Verification */}
      {study.quote && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card
            variant="surface"
            padding="lg"
            className="max-w-3xl mx-auto border-black/10 dark:border-white/10 space-y-6 relative"
          >
            <Quote className="w-10 h-10 text-[#008035]/30" />
            <blockquote className="text-lg sm:text-xl text-black dark:text-white italic leading-relaxed font-body">
              &quot;{study.quote.text}&quot;
            </blockquote>

            <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-sm text-black dark:text-white">
                  {study.quote.author}
                </p>
                <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">
                  {study.quote.role} · {study.client}
                </p>
              </div>
              <Badge variant="outline" size="sm">
                Verified Stakeholder Slot
              </Badge>
            </div>
          </Card>
        </section>
      )}

      {/* 6. Navigation to Next Project & Inquiry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white dark:bg-[#141416] rounded-2xl border border-black/10 dark:border-white/10">
          <div>
            <p className="text-xs uppercase font-bold text-[#595854] dark:text-[#A1A1AA]">Next Case Study</p>
            <h3 className="font-display font-bold text-lg text-black dark:text-white mt-1">
              {nextStudy.client}
            </h3>
            <p className="text-xs text-[#008035]">{nextStudy.categoryLabel}</p>
          </div>

          <div className="flex items-center gap-4">
            <Button href={`/work/${nextStudy.slug}`} variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
              Read Next Study
            </Button>
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
