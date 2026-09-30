import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ServicesPillars } from '@/components/home/ServicesPillars';
import { WhySahara } from '@/components/home/WhySahara';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PricingTeaser } from '@/components/home/PricingTeaser';
import { FaqTeaser } from '@/components/home/FaqTeaser';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Services Overview (Branding vs Software) */}
      <ServicesPillars />

      {/* 4. Why Sahara Hub */}
      <WhySahara />

      {/* 5. Featured Work (3 Case Studies) */}
      <FeaturedWork />

      {/* 6. Client Verification Slots / Testimonials */}
      <TestimonialsSection />

      {/* 7. Pricing Teaser & Scope Direction */}
      <PricingTeaser />

      {/* 8. FAQ Teaser & AI Assistant Integration */}
      <FaqTeaser />

      {/* 9. High-Impact Green CTA Banner */}
      <CtaBanner />
    </>
  );
}
