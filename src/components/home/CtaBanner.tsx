'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { brandTokens } from '@/lib/tokens';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/Parallax';

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20" aria-label="Project Kickoff Call to Action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Green Background Banner with Black Button */}
          <div className="bg-[#008035] text-[#FFFDF6] rounded-[24px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Subtle Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-black/20 text-[#FFFDF6] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Accepting New Client Intake for 2026</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to redefine your market position? Let&apos;s build something enduring.
              </h2>

              <p className="text-white/90 text-base sm:text-lg font-body leading-relaxed max-w-2xl">
                Whether you need an institutional brand identity overhaul, high-volume retail packaging,
                or a custom Next.js web application with Safaricom Daraja payments — our team is ready.
              </p>

              {/* Black Button on Green Background */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href="/pricing#quote"
                  size="lg"
                  variant="dark"
                  icon={<ArrowRight className="w-5 h-5 text-white" />}
                >
                  Request a Project Quotation
                </Button>

                <a
                  href={brandTokens.agency.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-white/40 text-white hover:bg-white hover:text-black transition-all duration-200 text-sm font-semibold tracking-wide"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/80">
                <span>📍 Nairobi, Kenya (EAT timezone)</span>
                <span>⚡ Itemized quotation provided within 24 hours</span>
                <span>🔒 Strict mutual NDA on request</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
