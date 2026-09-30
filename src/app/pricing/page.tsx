import React from 'react';
import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pricingTiers, pricingFaqs } from '@/data/pricing';
import { GuidedQuoteForm } from '@/components/pricing/GuidedQuoteForm';
import { PricingAssistantCard } from '@/components/pricing/PricingAssistantCard';
import { Check, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing & Guided Project Calculator — Predictable Scopes in Nairobi',
  description:
    'Transparent pricing frameworks for branding overhauls, Next.js web applications, and mobile systems in Kenya. Explore Starter, Growth, and Custom tiers.',
};

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 sm:space-y-32">
      {/* 1. Page Header & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="green">
            <span className="w-2 h-2 rounded-full bg-[#008035] mr-1" />
            Transparent Commercial Engagements
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Predictable investment tiers.{' '}
            <span className="italic font-normal text-[#008035]">Fixed-scope accountability.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
            We don’t believe in surprise hourly invoices or opaque billing. Every engagement is
            anchored in clear milestone deliverables, strict warranties, and 100% intellectual
            property ownership from day one.
          </p>
        </div>

        {/* Philosophy Card */}
        <div className="mt-12 bg-white dark:bg-[#18181B] rounded-[24px] p-6 sm:p-10 border border-black/10 dark:border-white/10 shadow-xs max-w-4xl space-y-4">
          <h2 className="font-display font-bold text-xl text-black dark:text-white">
            Why Our Pricing Reflects Value & Complexity (Not Hourly Guesswork)
          </h2>
          <p className="text-base text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
            A branding overhaul for a single-product venture in Nairobi has vastly different
            commercial stakes and regulatory requirements than a multi-branch payments portal
            processing Safaricom Daraja webhooks. Our packages below reflect real-world scope
            clusters that deliver maximum return on investment.
          </p>
        </div>
      </section>

      {/* 2. Package Tiers Grid */}
      <section className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Curated Packages"
            plainLine="Three Standard Paths."
            accentLine="Tailored to Growth Stage."
            subhead="Compare deliverables across our three core engagement models below."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.id}
                as="article"
                variant="white"
                padding="lg"
                hoverEffect
                className={`flex flex-col justify-between relative ${
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
                    <p className="font-display font-extrabold text-3xl sm:text-4xl text-black dark:text-white">
                      {tier.priceKes}
                    </p>
                    <p className="text-xs text-[#595854] dark:text-[#A1A1AA] mt-1 font-medium">
                      {tier.priceUsd} · {tier.turnaround}
                    </p>
                  </div>

                  {/* Branding Inclusions */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#008035]">
                      Brand & Creative Inclusions:
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
                      Software & Engineering Inclusions:
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
                    30–60 Day Post-Launch Warranty Included
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Guided Interactive Scope Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GuidedQuoteForm />
      </section>

      {/* 4. Pricing FAQs & Chat Assistant Prompt */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              kicker="Investment Transparency"
              plainLine="Commercial FAQs."
              accentLine="Answers to Key Questions."
              subhead="Everything you need to know about milestone contracts, intellectual property, and African payment support."
            />

            {/* Chatbot CTA Client Card */}
            <PricingAssistantCard />
          </div>

          <div className="lg:col-span-7 space-y-4">
            {pricingFaqs.map((faq, idx) => (
              <Card
                key={idx}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
