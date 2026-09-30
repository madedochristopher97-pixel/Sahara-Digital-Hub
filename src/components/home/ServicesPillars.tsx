import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { brandingPillar, softwarePillar } from '@/data/services';
import {
  Sparkles,
  Code2,
  ArrowRight,
  Palette,
  BookOpen,
  Package,
  Tv,
  Globe,
  Server,
  Smartphone,
  Cpu,
} from 'lucide-react';
import { CardTopRightImage } from '@/components/ui/CardTopRightImage';

export function ServicesPillars() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Heading */}
        <SectionHeading
          kicker="Core Offerings"
          plainLine="Two Disciplines."
          accentLine="One Unified Commercial Standard."
          subhead="We eliminate the friction between creative agencies and technical software consultancies. Explore our two specialized practices below."
        />

        {/* The Two Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pillar 1: Branding & Creative */}
          <Card
            as="article"
            variant="white"
            padding="lg"
            hoverEffect
            className="flex flex-col justify-between relative overflow-hidden group border-black/10 dark:border-white/10"
          >
            {/* Top-Right Ambient Imagery with Fade-Out */}
            <CardTopRightImage
              src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Artisanal typography and branding design craft"
              accentGlow="green"
              variant="pillar"
            />

            {/* Top Accent Dot */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#008035]/10 text-[#008035] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008035] bg-[#008035]/10 px-3 py-1 rounded-full">
                  Brand Practice
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight">
                  {brandingPillar.title}
                </h3>
                <p className="text-[#595854] dark:text-[#A1A1AA] text-sm sm:text-base leading-relaxed mt-2 font-body">
                  {brandingPillar.overview}
                </p>
              </div>

              {/* Service List Preview */}
              <div className="space-y-3 pt-2 border-t border-black/5 dark:border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-black/70 dark:text-white/70">
                  Key Capabilities:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-black dark:text-white">
                  <li className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>Visual Identity & Logos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>Brand Guidelines Manuals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>Retail Packaging & Labels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>Billboards & Outdoor Media</span>
                  </li>
                </ul>
              </div>

              {/* Process highlights */}
              <div className="bg-[#F6F3E9] dark:bg-[#1E1E22] p-4 rounded-xl text-xs space-y-1">
                <span className="font-bold text-black dark:text-white">3-Phase Brand Cadence:</span>
                <p className="text-[#595854] dark:text-[#A1A1AA]">
                  Discover & Strategy → Design & Refinement → Asset Delivery & Documentation.
                </p>
              </div>
            </div>

            {/* Pillar CTA */}
            <div className="pt-8 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between relative z-10">
              <div>
                <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">Engagement</p>
                <p className="font-display font-bold text-base sm:text-lg text-black dark:text-white">Tailored to Scope</p>
              </div>
              <Button href="/services/branding" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Branding
              </Button>
            </div>
          </Card>

          {/* Pillar 2: Software Development */}
          <Card
            as="article"
            variant="white"
            padding="lg"
            hoverEffect
            className="flex flex-col justify-between relative overflow-hidden group border-black/10 dark:border-white/10"
          >
            {/* Top-Right Ambient Imagery with Fade-Out */}
            <CardTopRightImage
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="High-performance code architecture and engineering"
              accentGlow="dark"
              variant="pillar"
            />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white text-[#FFFDF6] dark:text-black flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">
                  Engineering Practice
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight">
                  {softwarePillar.title}
                </h3>
                <p className="text-[#595854] dark:text-[#A1A1AA] text-sm sm:text-base leading-relaxed mt-2 font-body">
                  {softwarePillar.overview}
                </p>
              </div>

              {/* Service List Preview */}
              <div className="space-y-3 pt-2 border-t border-black/5 dark:border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-black/70 dark:text-white/70">
                  Key Capabilities:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-black dark:text-white">
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>Next.js Web Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>Backend APIs & PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>Mobile Apps (iOS & Android)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#008035] shrink-0" />
                    <span>M-Pesa Daraja STK Push</span>
                  </li>
                </ul>
              </div>

              {/* Process highlights */}
              <div className="bg-[#F6F3E9] dark:bg-[#1E1E22] p-4 rounded-xl text-xs space-y-1">
                <span className="font-bold text-black dark:text-white">4-Phase Engineering Cadence:</span>
                <p className="text-[#595854] dark:text-[#A1A1AA]">
                  Specification → Agile Sprints → Launch & DNS Cutover → Hyper-Care SLA.
                </p>
              </div>
            </div>

            {/* Pillar CTA */}
            <div className="pt-8 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between relative z-10">
              <div>
                <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">Engagement</p>
                <p className="font-display font-bold text-base sm:text-lg text-black dark:text-white">Tailored to Scope</p>
              </div>
              <Button href="/services/software" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Software
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
