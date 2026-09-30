import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { softwarePillar } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import {
  Globe,
  Server,
  Smartphone,
  ShoppingBag,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Terminal,
} from 'lucide-react';
import { CardTopRightImage } from '@/components/ui/CardTopRightImage';

export const metadata: Metadata = {
  title: 'Software Development Services — Next.js, Mobile Apps & M-Pesa APIs Nairobi',
  description:
    'Full-stack Next.js web applications, mobile apps (iOS & Android), high-availability backend microservices, and Safaricom Daraja M-Pesa automated integrations.',
};

export default function SoftwareServicesPage() {
  const softwareWork = caseStudies.filter(
    (c) => c.category === 'software' || c.category === 'both'
  );

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#008035]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#008035]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#008035]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#008035]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#008035]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#008035]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#008035]" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-24 sm:space-y-32">
      {/* 1. Header & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="black">
            <span className="w-2 h-2 rounded-full bg-[#008035] mr-1" />
            Software Engineering Practice
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Resilient digital platforms{' '}
            <span className="italic font-normal text-[#008035]">built for scale and conversion.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
            {softwarePillar.subhead}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Button href="/pricing?tier=growth#quote" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Request a Software Quote
            </Button>
            <Button href="#services-list" variant="secondary">
              Explore Tech Stack & Capabilities
            </Button>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="mt-12 bg-white dark:bg-[#121212] rounded-[24px] p-6 sm:p-10 border border-black/10 dark:border-white/10 shadow-xs max-w-4xl space-y-3">
          <h2 className="font-display font-bold text-xl text-black dark:text-white">Engineering Philosophy</h2>
          <p className="text-base text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
            {softwarePillar.overview}
          </p>
        </div>
      </section>

      {/* 2. Comprehensive Service List */}
      <section id="services-list" className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Six Core Capabilities"
            plainLine="Modern Full-Stack Engineering."
            accentLine="Zero Lag, Zero Downtime."
            subhead="Engineered on Next.js 14+, TypeScript, Tailwind CSS, PostgreSQL, and resilient African payment webhooks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwarePillar.services.map((item) => (
              <Card
                key={item.id}
                variant="white"
                padding="md"
                hoverEffect
                className="flex flex-col justify-between space-y-6 border-black/10 dark:border-white/10 relative overflow-hidden group"
              >
                {item.image && (
                  <CardTopRightImage
                    src={item.image}
                    alt={item.title}
                    accentGlow="dark"
                    variant="capability"
                  />
                )}

                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                    {getServiceIcon(item.icon)}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-black dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#008035] font-semibold mt-0.5">
                      {item.shortDesc}
                    </p>
                  </div>

                  <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-2 relative z-10">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/70 dark:text-white/70">
                    Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#595854] dark:text-[#A1A1AA]">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008035] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The 4-Phase Engineering Cadence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          kicker="Engineering Lifecycle"
          plainLine="Discover → Build → Launch → Support."
          accentLine="Sprint-Based Delivery with Strict Testing."
          subhead="Continuous staging previews, automated TypeScript validation, and 30-day post-launch hyper-care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softwarePillar.process.map((step) => (
            <Card
              key={step.step}
              variant="white"
              padding="lg"
              className="space-y-4 border-black/10 dark:border-white/10 relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-[#008035]">
                  {step.step}
                </span>
                <span className="text-xs font-mono text-[#595854] dark:text-[#A1A1AA] flex items-center gap-1 bg-[#F6F3E9] dark:bg-[#1E1E22] px-2.5 py-1 rounded-full border border-black/5 dark:border-white/10">
                  <Calendar className="w-3 h-3 text-[#008035]" />
                  {step.duration}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-black dark:text-white">
                {step.title}
              </h3>

              <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Sample Software Work */}
      <section className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              kicker="Production Platforms"
              plainLine="Featured Engineering Projects."
              accentLine="Serving Thousands Daily."
              subhead="From high-speed dispatch systems to automated FinTech reconciliation engines."
            />
            <Button href="/work" variant="secondary">
              See All Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwareWork.map((study) => (
              <Card
                key={study.slug}
                as="article"
                variant="white"
                padding="none"
                hoverEffect
                className="flex flex-col justify-between overflow-hidden border-black/10 dark:border-white/10"
              >
                <div className="p-6 bg-black text-white flex flex-col justify-between h-44">
                  <Badge variant="surface" size="sm" className="bg-white/10 text-white border-white/20">
                    {study.categoryLabel}
                  </Badge>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {study.client}
                    </h3>
                    <p className="text-xs text-white/60">{study.location}</p>
                  </div>
                  <p className="text-xs font-bold text-[#008035]">
                    {study.results[0].metric} {study.results[0].label}
                  </p>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-[#595854] dark:text-[#A1A1AA] line-clamp-3 leading-relaxed">
                    {study.shortSummary}
                  </p>
                  <Link
                    href={`/work/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white hover:text-[#008035] dark:hover:text-[#008035] transition-colors"
                  >
                    <span>Inspect System Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#008035] text-[#FFFDF6] rounded-[24px] p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <Badge variant="surface" size="sm" className="bg-white/10 text-white border-white/20">
              Software Scope Guidance
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {softwarePillar.pricingHint}
            </h2>
            <p className="text-white/80 text-sm">
              From MVP web portals to cross-platform mobile apps with M-Pesa Daraja payment gateways.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-4">
            <Button href="/pricing#quote" size="lg" variant="dark" icon={<ArrowRight className="w-4 h-4" />}>
              Configure Software Scope
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
