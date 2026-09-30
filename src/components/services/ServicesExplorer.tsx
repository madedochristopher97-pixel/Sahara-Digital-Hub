'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { allServices, brandingPillar, softwarePillar, ServiceItem } from '@/data/services';
import {
  Palette,
  BookOpen,
  Layout,
  Printer,
  Tv,
  Package,
  Shirt,
  Globe,
  Server,
  Smartphone,
  ShoppingBag,
  Cpu,
  ShieldCheck,
  Sparkles,
  Code2,
  ArrowRight,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { CardTopRightImage } from '@/components/ui/CardTopRightImage';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/Parallax';

export function ServicesExplorer() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'branding' | 'software'>('all');
  const shouldReduceMotion = useReducedMotion();

  const filteredServices = allServices.filter((service) => {
    if (selectedFilter === 'all') return true;
    return service.category === selectedFilter;
  });

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
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#008035]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#008035]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#008035]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-[#008035]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#008035]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#008035]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#008035]" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl space-y-6">
            <Badge variant="green" size="md">
              <span className="w-2 h-2 rounded-full bg-[#008035] mr-1.5 animate-pulse" />
              Unified Studio Capabilities
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
              Design systems and digital software{' '}
              <span className="italic font-normal text-[#008035]">engineered under one roof.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
              We eliminate the gap between marketing agencies and engineering consultancies.
              Explore our full breadth of branding, graphic, and software development capabilities below.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/pricing#quote" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Custom Quotation
              </Button>
              <Button href="/work" variant="secondary">
                View Past Case Studies
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Practice Pillars Summary Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Branding Track Summary */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-6 sm:p-8 border border-black/10 dark:border-white/10 shadow-xs flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <CardTopRightImage
                src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Branding craft"
                accentGlow="green"
                variant="pillar"
              />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#008035]/10 text-[#008035] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008035]">
                    Branding & Creative
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl text-black dark:text-white">
                  {brandingPillar.headline}
                </h2>
                <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                  {brandingPillar.subhead}
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between relative z-10">
                <span className="text-xs font-mono text-[#008035] font-semibold">
                  7 Core Capabilities
                </span>
                <Link
                  href="/services/branding"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white hover:text-[#008035] transition-colors"
                >
                  <span>Explore Branding Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Software Track Summary */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white dark:bg-[#18181B] rounded-[24px] p-6 sm:p-8 border border-black/10 dark:border-white/10 shadow-xs flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <CardTopRightImage
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software engineering"
                accentGlow="dark"
                variant="pillar"
              />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                    Software Development
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl text-black dark:text-white">
                  {softwarePillar.headline}
                </h2>
                <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                  {softwarePillar.subhead}
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between relative z-10">
                <span className="text-xs font-mono text-[#008035] font-semibold">
                  7 Core Capabilities
                </span>
                <Link
                  href="/services/software"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white hover:text-[#008035] transition-colors"
                >
                  <span>Explore Software Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Master Services Catalog with Filter Tabs */}
      <section id="catalog" className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              kicker="Complete Service Directory"
              plainLine="Our Capabilities."
              accentLine="Categorized by Discipline."
              subhead="Toggle between disciplines or inspect all 14 active studio capabilities."
            />

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-[#1E1E22] p-1.5 rounded-2xl border border-black/10 dark:border-white/10 shadow-xs">
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-[#008035] text-white shadow-xs'
                    : 'text-[#595854] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white'
                }`}
              >
                All Capabilities ({allServices.length})
              </button>

              <button
                type="button"
                onClick={() => setSelectedFilter('branding')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedFilter === 'branding'
                    ? 'bg-[#008035] text-white shadow-xs'
                    : 'text-[#595854] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Branding ({brandingPillar.services.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedFilter('software')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedFilter === 'software'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-xs'
                    : 'text-[#595854] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Software Dev ({softwarePillar.services.length})</span>
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            <AnimatePresence>
              {filteredServices.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col"
                >
                  <Card
                    variant="white"
                    padding="md"
                    hoverEffect
                    className="flex-1 flex flex-col justify-between space-y-6 border-black/10 dark:border-white/10 relative overflow-hidden group"
                  >
                    {/* Top Right Atmospheric Image */}
                    <CardTopRightImage
                      src={item.image}
                      alt={item.title}
                      accentGlow={item.category === 'branding' ? 'green' : 'dark'}
                      variant="capability"
                    />

                    <div className="space-y-4 relative z-10">
                      {/* Top Bar: Icon + Category Tag */}
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            item.category === 'branding'
                              ? 'bg-[#008035]/10 text-[#008035]'
                              : 'bg-black/5 dark:bg-white/10 text-black dark:text-white'
                          }`}
                        >
                          {getServiceIcon(item.icon)}
                        </div>

                        {/* Category Badge Tag as requested */}
                        <Badge
                          variant={item.category === 'branding' ? 'green' : 'surface'}
                          size="sm"
                        >
                          {item.category === 'branding' ? (
                            <span className="flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#008035]" />
                              Branding Category
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Code2 className="w-3 h-3" />
                              Software Development
                            </span>
                          )}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-xl text-black dark:text-white leading-snug group-hover:text-[#008035] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#008035] font-semibold mt-1">
                          {item.shortDesc}
                        </p>
                      </div>

                      <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-2 relative z-10">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-black/70 dark:text-white/70">
                        Typical Deliverables:
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

                    {/* Action Footer */}
                    <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between relative z-10">
                      <Link
                        href={`/pricing?service=${encodeURIComponent(item.title)}#quote`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008035] hover:text-[#006e2e] transition-colors"
                      >
                        <span>Request a Quotation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={item.category === 'branding' ? '/services/branding' : '/services/software'}
                        className="text-[11px] text-[#595854] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white transition-colors"
                      >
                        Learn more
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Bottom Quotation Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#008035] text-[#FFFDF6] rounded-[24px] p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-xl">
              <Badge variant="surface" size="sm" className="bg-white/10 text-white border-white/20">
                Transparent Scoping
              </Badge>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Need a tailored quotation for your project?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Whether you need a complete branding architecture, high-performance Next.js web application,
                or mobile app with M-Pesa automated payments, our leadership will prepare an itemized scope within 24 hours.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-4">
              <Button href="/pricing#quote" size="lg" variant="dark" icon={<ArrowRight className="w-4 h-4" />}>
                Request Project Quotation
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Speak to our Team
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
