import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonialsData } from '@/data/testimonials';
import { Quote, ShieldCheck } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFDF6] dark:bg-[#0A0A0A]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          kicker="Client Feedback"
          plainLine="Accountability in Practice."
          accentLine="Verified Client Review Slots."
          subhead="Following our 2026 relaunch, we maintain transparent client verification slots ready for official testimonial attestations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <Card
              key={item.id}
              as="article"
              variant="white"
              padding="lg"
              hoverEffect
              className="flex flex-col justify-between space-y-6 border-black/10 dark:border-white/10 relative"
            >
              {/* Slot Badge */}
              <div className="flex items-center justify-between">
                <Badge variant="outline" size="sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008035] mr-1" />
                  Client Slot
                </Badge>
                <span className="text-[11px] font-mono text-[#595854] dark:text-[#A1A1AA]">{item.year}</span>
              </div>

              {/* Quote Mark */}
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#008035]/30" />
                <blockquote className="text-sm sm:text-base text-black dark:text-white font-body leading-relaxed italic">
                  {item.quote}
                </blockquote>
              </div>

              {/* Client Info Placeholder */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-1">
                <p className="font-display font-bold text-sm text-black dark:text-white">
                  {item.clientName}
                </p>
                <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">
                  {item.clientRole} · {item.companyName}
                </p>
                <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#008035] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Scope: {item.projectType}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
