import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pricingTiers } from '@/data/pricing';
import { ArrowRight, Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/Parallax';

export function PricingTeaser() {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F3E9] dark:bg-[#121212] border-y border-black/[0.06] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center space-y-5">
            <SectionHeading
              kicker="Quotation-Based Engagements"
              plainLine="Request a Quotation."
              accentLine="Tailored to Exact Scope."
              subhead="We do not believe in rigid price lists or opaque billing. Every client receives an itemized, milestone-based proposal built strictly around their creative and technical deliverables."
            />
            <div className="pt-1">
              <Button href="/pricing#quote" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Custom Project Quotation
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <ScrollReveal key={tier.id} delay={idx * 0.1}>
              <Card
                as="article"
                variant="white"
                padding="lg"
                hoverEffect
                className={`h-full flex flex-col justify-between relative ${
                  tier.recommended ? 'ring-2 ring-[#008035] shadow-lg' : 'border-black/10 dark:border-white/10'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-2xl text-black dark:text-white">
                      {tier.name}
                    </h3>
                    {tier.badge && (
                      <Badge variant={tier.recommended ? 'green' : 'surface'} size="sm">
                        {tier.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
                    {tier.tagline}
                  </p>

                  <div className="py-3 border-y border-black/5 dark:border-white/10">
                    <p className="font-display font-bold text-xl sm:text-2xl text-black dark:text-white">
                      {tier.quoteType}
                    </p>
                    <p className="text-xs text-[#008035] font-semibold mt-0.5">
                      {tier.quoteScope} · {tier.turnaround}
                    </p>
                  </div>

                  {/* Key Inclusions Preview */}
                  <div className="space-y-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-black/70 dark:text-white/70">
                      Key Scope Deliverables:
                    </p>
                    <ul className="space-y-2 text-xs text-[#595854] dark:text-[#A1A1AA]">
                      {tier.softwareInclusions.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#008035] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {tier.brandingInclusions.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#008035] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-black/10 dark:border-white/10">
                  <Button
                    href={`/pricing?tier=${tier.id}#quote`}
                    variant={tier.recommended ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
