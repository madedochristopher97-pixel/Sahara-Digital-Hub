import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandingPillar } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import {
  Palette,
  BookOpen,
  Layout,
  Printer,
  Tv,
  Package,
  Shirt,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { CardTopRightImage } from '@/components/ui/CardTopRightImage';

export const metadata: Metadata = {
  title: 'Branding & Creative Services — Visual Identity, Packaging & OOH Nairobi',
  description:
    'Comprehensive brand identity, retail packaging dielines, large-format billboard advertising (OOH), and commercial offset printing engineered in Nairobi, Kenya.',
};

export default function BrandingServicesPage() {
  const brandingWork = caseStudies.filter(
    (c) => c.category === 'branding' || c.category === 'both'
  );

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#008035]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#008035]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#008035]" />;
      case 'Printer':
        return <Printer className="w-5 h-5 text-[#008035]" />;
      case 'Tv':
        return <Tv className="w-5 h-5 text-[#008035]" />;
      case 'Package':
        return <Package className="w-5 h-5 text-[#008035]" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-[#008035]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#008035]" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-24 sm:space-y-32">
      {/* 1. Header & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="green">
            <span className="w-2 h-2 rounded-full bg-[#008035] mr-1" />
            Branding & Creative Practice
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Visual identities engineered to{' '}
            <span className="italic font-normal text-[#008035]">command market authority.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
            {brandingPillar.subhead}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Button href="/pricing?tier=growth#quote" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Request a Branding Quote
            </Button>
            <Button href="#services-list" variant="secondary">
              Explore Capabilities
            </Button>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="mt-12 bg-white dark:bg-[#121212] rounded-[24px] p-6 sm:p-10 border border-black/10 dark:border-white/10 shadow-xs max-w-4xl space-y-3">
          <h2 className="font-display font-bold text-xl text-black dark:text-white">Commercial Philosophy</h2>
          <p className="text-base text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
            {brandingPillar.overview}
          </p>
        </div>
      </section>

      {/* 2. Comprehensive Service List */}
      <section id="services-list" className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Seven Core Capabilities"
            plainLine="Disciplined Brand Craft."
            accentLine="Every Physical & Digital Touchpoint."
            subhead="From high-visibility highway billboards to tangible packaging and typography systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingPillar.services.map((item) => (
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
                    accentGlow="green"
                    variant="capability"
                  />
                )}

                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#008035]/10 flex items-center justify-center">
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

      {/* 3. The 3-Phase Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          kicker="Our Methodology"
          plainLine="Discover → Design → Deliver."
          accentLine="A Rigorous 4-Week Brand Sprint."
          subhead="No endless revisions or opaque presentations. Clear milestone approvals from strategic brief to vector export."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandingPillar.process.map((step) => (
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

      {/* 4. Sample Branding Work */}
      <section className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <SectionHeading
              align="center"
              kicker="Portfolio Evidence"
              plainLine="Recent Branding Work."
              accentLine="Tested on Real Shelves."
              subhead="Explore visual identity and packaging programs deployed across retail and commercial sectors."
            />
            <div className="pt-1">
              <Button href="/work" variant="secondary">
                See All Case Studies
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandingWork.map((study) => (
              <Card
                key={study.slug}
                as="article"
                variant="white"
                padding="none"
                hoverEffect
                className="flex flex-col justify-between overflow-hidden border-black/10 dark:border-white/10"
              >
                <div className="p-6 bg-[#F6F3E9] dark:bg-[#1A1A1D] border-b border-black/5 dark:border-white/10 flex flex-col justify-between h-44">
                  <Badge variant="green" size="sm">
                    {study.categoryLabel}
                  </Badge>
                  <div>
                    <h3 className="font-display font-bold text-lg text-black dark:text-white">
                      {study.client}
                    </h3>
                    <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">{study.location}</p>
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
                    <span>Inspect Case Study</span>
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
              Branding Scope Guidance
            </Badge>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {brandingPillar.pricingHint}
            </h2>
            <p className="text-white/80 text-sm">
              Ready to scope your brand transformation? Fill out our guided questionnaire or speak
              with our creative leadership.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-4">
            <Button href="/pricing#quote" size="lg" variant="dark" icon={<ArrowRight className="w-4 h-4" />}>
              Configure Branding Scope
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
