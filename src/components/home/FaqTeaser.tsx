'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { pricingFaqs } from '@/data/pricing';
import { MessageSquare, Sparkles, HelpCircle } from 'lucide-react';

export function FaqTeaser() {
  const topFaqs = pricingFaqs.slice(0, 3);

  return (
    <section className="py-20 sm:py-28" aria-labelledby="faq-teaser-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading and Chatbot Prompt */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              kicker="Common Inquiries"
              plainLine="Clear Answers."
              accentLine="Zero Ambiguity."
              subhead="Have questions about intellectual property ownership, milestone payments, or Kenyan API integrations?"
              align="left"
            />

            {/* Chatbot Prompt Card */}
            <Card variant="surface" padding="md" className="space-y-4 border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#008035] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-black dark:text-white">
                    Prefer an Instant Answer?
                  </h4>
                  <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">
                    Our AI assistant is active 24/7 on this site
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                Ask our virtual assistant about custom scopes, M-Pesa Daraja timelines, or request
                a direct escalation to the founder.
              </p>

              <div className="pt-2">
                <Button
                  onClick={() => {
                    // Triggers the chat assistant open
                    const chatButton = document.querySelector(
                      'button[aria-label="Open Sahara Hub Virtual Assistant"]'
                    ) as HTMLButtonElement | null;
                    if (chatButton) {
                      chatButton.click();
                    }
                  }}
                  variant="primary"
                  size="sm"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Ask Sahara Assistant Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column: FAQ Accordion / Cards */}
          <div className="lg:col-span-7 space-y-4">
            {topFaqs.map((faq, idx) => (
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

            <div className="pt-4 flex items-center justify-between text-xs text-[#595854] dark:text-[#A1A1AA] px-2">
              <span>Looking for more detailed technical specifications?</span>
              <Link
                href="/pricing#faq"
                className="font-bold text-[#008035] hover:underline"
              >
                Read all FAQs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
