import React from 'react';
import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pricingTiers, pricingFaqs } from '@/data/pricing';
import { GuidedQuoteForm } from '@/components/pricing/GuidedQuoteForm';
import { PricingAssistantCard } from '@/components/pricing/PricingAssistantCard';
import { Check, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/Parallax';

export const metadata: Metadata = {
  title: 'Request a Project Quotation — Tailored Commercial Scopes in Nairobi',
  description:
    'Transparent, milestone-based quotations for branding overhauls, Next.js web applications, mobile apps, and African payment integrations in Kenya.',
};

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 sm:space-y-32">
      {/* 1. Page Header & Quotation Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl space-y-6">
            <Badge variant="green" size="md">
              <span className="w-2 h-2 rounded-full bg-[#008035] mr-1.5 animate-pulse" />
              Tailored Commercial Engagements
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
              Predictable milestone delivery.{' '}
              <span className="italic font-normal text-[#008035]">Fixed-scope quotations.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
              We do not enforce generic price sheets or opaque hourly billing. Every engagement
              receives a transparent, itemized quotation anchored in clear deliverables, strict warranties,
              and 100% intellectual property ownership from day one.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="#quote" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Custom Quotation
              </Button>
              <Button href="#tiers" variant="secondary">
                Explore Engagement Tracks
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Philosophy Card */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 bg-white dark:bg-[#18181B] rounded-[24px] p-6 sm:p-10 border border-black/10 dark:border-white/10 shadow-xs max-w-4xl space-y-4">
            <h2 className="font-display font-bold text-xl text-black dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#008035]" />
              <span>Why We Operate on a Quotation-First Model</span>
            </h2>
            <p className="text-base text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
              A comprehensive brand overhaul or retail packaging program has vastly different technical
              and regulatory demands than a high-concurrency payments portal processing Safaricom Daraja webhooks.
              By quoting each project based on its exact architecture and creative requirements, we eliminate bloated agency fees
              and ensure you pay strictly for what drives commercial results.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Package Tiers Grid */}
      <section id="tiers" className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Curated Engagement Tracks"
            plainLine="Three Standard Paths."
            accentLine="Quoted to Deliverables."
            subhead="Review what is typically included across our three core engagement models below, then request your custom quotation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <ScrollReveal key={tier.id} delay={idx * 0.1}>
                <Card
                  as="article"
                  variant="white"
                  padding="lg"
                  hoverEffect
                  className={`h-full flex flex-col justify-between relative ${
                    tier.recommended
                      ? 'ring-2 ring-[#008035] shadow-xl'
                      : 'border-black/10 dark:border-white/10'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-2xl text-black dark:text-white">
                          {tier.name}
                        </h3>
                        <p className="text-xs text-[#008035] font-semibold mt-0.5">
                          Ideal for: {tier.idealFor}
                        </p>
                      </div>
                      {tier.badge && (
                        <Badge variant={tier.recommended ? 'green' : 'surface'} size="sm">
                          {tier.badge}
                        </Badge>
                      )}
                    </div>

                    <p className="text-xs text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                      {tier.tagline}
                    </p>

                    <div className="py-4 border-y border-black/5 dark:border-white/10 bg-[#FFFDF6] dark:bg-[#1C1C1E] -mx-6 px-6">
                      <p className="font-display font-extrabold text-2xl sm:text-3xl text-black dark:text-white">
                        {tier.quoteType}
                      </p>
                      <p className="text-xs text-[#008035] mt-1 font-semibold">
                        {tier.quoteScope} · {tier.turnaround}
                      </p>
                    </div>

                    {/* Branding Inclusions */}
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#008035]">
                        Brand & Creative Deliverables:
                      </p>
                      <ul className="space-y-2 text-xs text-[#595854] dark:text-[#A1A1AA]">
                        {tier.brandingInclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#008035] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software Inclusions */}
                    <div className="space-y-2 pt-2 border-t border-black/5 dark:border-white/10">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-black dark:text-white">
                        Software & Engineering Deliverables:
                      </p>
                      <ul className="space-y-2 text-xs text-[#595854] dark:text-[#A1A1AA]">
                        {tier.softwareInclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#008035] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-black/10 dark:border-white/10 space-y-2">
                    <Button
                      href="#quote"
                      variant={tier.recommended ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      {tier.ctaLabel}
                    </Button>
                    <p className="text-[10px] text-center text-[#595854] dark:text-[#A1A1AA]">
                      Detailed Itemized Quotation · 30–60 Day Warranty Included
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Guided Interactive Scope Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <GuidedQuoteForm />
        </ScrollReveal>
      </section>

      {/* 4. Quotation FAQs & Assistant Prompt */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <SectionHeading
                kicker="Commercial Transparency"
                plainLine="Quotation FAQs."
                accentLine="Answers to Key Questions."
                subhead="Everything you need to know about milestone proposals, intellectual property ownership, and African payment support."
              />
            </ScrollReveal>

            {/* Chatbot CTA Client Card */}
            <ScrollReveal delay={0.1}>
              <PricingAssistantCard />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {pricingFaqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <Card
                  variant="white"
                  padding="md"
                  className="space-y-2 border-black/10 dark:border-white/10"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#008035] shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-base text-black dark:text-white">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
