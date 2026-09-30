import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonialsData } from '@/data/testimonials';
import { Quote, Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/Parallax';

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFDF6] dark:bg-[#0A0A0A]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Centered Section Heading */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <SectionHeading
              align="center"
              kicker="Client Endorsements"
              plainLine="Trusted by Commercial Leaders."
              accentLine="Validated Across East Africa."
              subhead="From specialty agribusiness brands to regional logistics fleets and FinTech portals, see what our partners say about working with Sahara Digital Hub."
            />
          </div>
        </ScrollReveal>

        {/* Stylish Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonialsData.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.1}>
              <Card
                as="article"
                variant="white"
                padding="lg"
                hoverEffect
                className="h-full flex flex-col justify-between space-y-6 border border-black/10 dark:border-white/10 relative overflow-hidden group shadow-xs hover:shadow-xl hover:border-[#008035]/40 transition-all duration-300 rounded-[24px]"
              >
                {/* Top Subtle Gradient Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#008035]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Top Bar: 5-Star Rating & Year */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B] stroke-none" />
                    ))}
                  </div>

                  <span className="text-xs font-mono font-medium text-[#595854] dark:text-[#A1A1AA] bg-[#F6F3E9] dark:bg-[#1E1E22] px-2.5 py-0.5 rounded-full border border-black/5 dark:border-white/10">
                    {item.year}
                  </span>
                </div>

                {/* Quote Body with Stylized Quote Icon */}
                <div className="space-y-3 relative z-10 flex-1">
                  <Quote className="w-8 h-8 text-[#008035]/25 -mb-1 transform -scale-x-100" />
                  <blockquote className="text-sm sm:text-base text-black/90 dark:text-white/90 font-body leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Stylish Author Block */}
                <div className="pt-5 border-t border-black/5 dark:border-white/10 space-y-3 relative z-10">
                  <div className="flex items-center gap-3.5">
                    {/* Monogram Avatar */}
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.avatarColor} text-white flex items-center justify-center font-display font-bold text-sm shadow-xs shrink-0 ring-2 ring-black/5 dark:ring-white/10`}
                    >
                      {item.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display font-bold text-base text-black dark:text-white truncate">
                          {item.clientName}
                        </h4>
                        <span title="Verified Client" className="inline-flex">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#008035] shrink-0" />
                        </span>
                      </div>
                      <p className="text-xs text-[#595854] dark:text-[#A1A1AA] truncate">
                        {item.clientRole}
                      </p>
                      <p className="text-xs font-semibold text-[#008035] truncate mt-0.5">
                        {item.companyName}
                      </p>
                    </div>
                  </div>

                  {/* Scope Pill */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#595854] dark:text-[#A1A1AA] bg-[#F6F3E9] dark:bg-[#1E1E22] px-3 py-1.5 rounded-xl border border-black/5 dark:border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#008035] shrink-0" />
                    <span className="truncate">
                      <strong>Scope:</strong> {item.projectType}
                    </span>
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
