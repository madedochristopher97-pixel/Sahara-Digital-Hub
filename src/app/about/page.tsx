import React from 'react';
import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { aboutData } from '@/data/about';
import { ArrowRight, Compass, ShieldCheck, Zap, Layers, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Our Studio — Story, Principles & Leadership',
  description:
    'Learn about Sahara Digital Hub: founded in 2021 in Nairobi, restructured in 2024, and relaunched in 2026 to deliver unified branding and resilient software.',
};

export default function AboutPage() {
  const principleIcons = [
    <Layers key="1" className="w-5 h-5 text-[#008035]" />,
    <Zap key="2" className="w-5 h-5 text-[#008035]" />,
    <Compass key="3" className="w-5 h-5 text-[#008035]" />,
    <ShieldCheck key="4" className="w-5 h-5 text-[#008035]" />,
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 sm:space-y-32">
      {/* 1. Hero & Studio Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="green">
            <span className="w-2 h-2 rounded-full bg-[#008035] animate-pulse" />
            Nairobi Studio · Est. 2021 · Relaunched 2026
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Rooted in Nairobi. Built to bridge{' '}
            <span className="italic font-normal text-[#008035]">craft and code.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
            {aboutData.mission.statement}
          </p>
        </div>

        {/* The Evolution Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <Card variant="surface" padding="md" className="space-y-3 border-black/10 dark:border-white/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#595854] dark:text-[#A1A1AA]">
              <span>ORIGIN</span>
              <span className="font-bold text-black dark:text-white">2021</span>
            </div>
            <h2 className="font-display font-bold text-lg text-black dark:text-white">Founded in Nairobi</h2>
            <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
              Established to serve the emerging generation of high-growth Kenyan startups and
              institutions seeking bolder, internationally competitive design standards.
            </p>
          </Card>

          <Card variant="surface" padding="md" className="space-y-3 border-black/10 dark:border-white/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#595854] dark:text-[#A1A1AA]">
              <span>TRANSITION</span>
              <span className="font-bold text-black dark:text-white">2024</span>
            </div>
            <h2 className="font-display font-bold text-lg text-black dark:text-white">Internal Retooling</h2>
            <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
              Paused public intake to overhaul engineering stacks around Next.js, solidify industrial
              packaging partnerships, and design our proprietary delivery framework.
            </p>
          </Card>

          <Card variant="white" padding="md" className="space-y-3 border-2 border-[#008035] shadow-md">
            <div className="flex items-center justify-between text-xs font-mono text-[#008035]">
              <span className="font-bold">NEW ERA</span>
              <span className="font-bold">2026</span>
            </div>
            <h2 className="font-display font-bold text-lg text-black dark:text-white">Strategic Relaunch</h2>
            <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
              Relaunched with disciplined conviction: combining high-recall brand identities with
              bulletproof full-stack software and automated Kenyan payment architectures.
            </p>
          </Card>
        </div>

        {/* Narrative Deep Dive */}
        <div className="mt-16 bg-white dark:bg-[#121212] rounded-[24px] p-8 sm:p-12 border border-black/10 dark:border-white/10 shadow-sm space-y-6 max-w-4xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
            Why We Refuse the Conventional Agency Division
          </h2>
          <div className="space-y-4 text-base text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
            {aboutData.story.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Principles */}
      <section className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Operating Principles"
            plainLine="How We Think."
            accentLine="How We Deliver."
            subhead="Four foundational rules that protect the quality of our work and guarantee high return on investment for our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.principles.map((item, idx) => (
              <Card
                key={item.number}
                variant="white"
                padding="lg"
                hoverEffect
                className="space-y-4 border-black/10 dark:border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#008035]/10 flex items-center justify-center">
                    {principleIcons[idx]}
                  </div>
                  <span className="font-mono text-sm font-bold text-[#008035]">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-black dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership & Team Slots (Strictly marked placeholders) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            kicker="Studio Leadership"
            plainLine="Craft-Led Direction."
            accentLine="Direct Executive Accountability."
            subhead="Every project at Sahara is spearheaded directly by practice leads — no juniors learning on your budget."
          />
          <Badge variant="outline" size="md">
            Practice Leadership Roster
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.team.map((member) => (
            <Card
              key={member.id}
              as="article"
              variant="white"
              padding="md"
              hoverEffect
              className="flex flex-col justify-between space-y-4 border-black/10 dark:border-white/10"
            >
              <div className="space-y-3">
                {/* Avatar Placeholder Frame */}
                <div className="h-44 bg-[#F6F3E9] dark:bg-[#1C1C1F] rounded-xl border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-[#008035]/10 text-[#008035] flex items-center justify-center font-display font-bold text-lg mb-2">
                    SDH
                  </div>
                  <span className="text-[11px] font-mono text-[#595854] dark:text-[#A1A1AA] uppercase tracking-wider">
                    {member.badge} Slot
                  </span>
                </div>

                <div className="space-y-1">
                  <Badge variant="surface" size="sm">
                    {member.badge}
                  </Badge>
                  <h3 className="font-display font-bold text-base text-black dark:text-white pt-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#008035]">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-black/5 dark:border-white/10 text-xs text-[#595854] dark:text-[#A1A1AA] flex items-center justify-between">
                <span>Direct Lead</span>
                <span className="text-[#008035] font-semibold">Nairobi Team</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Process Timeline (How We Work) */}
      <section id="process" className="bg-[#F6F3E9] dark:bg-[#121212] py-20 border-y border-black/[0.06] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            kicker="Our Delivery Cadence"
            plainLine="How We Work."
            accentLine="Four Phases from Vision to Production."
            subhead="A disciplined schedule built on weekly deliverables, staging feedback loops, and zero surprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.howWeWork.map((step, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="md"
                className="space-y-4 border-black/10 dark:border-white/10 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008035] bg-[#008035]/10 px-2.5 py-1 rounded-full">
                    {step.phase}
                  </span>
                  <span className="text-xs font-mono text-[#595854] dark:text-[#A1A1AA] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#008035]" />
                    {step.timeline}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-black dark:text-white leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA into /contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-[#FFFDF6] rounded-[24px] p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Want to see how our team would approach your project?
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              Book a no-obligation 30-minute discovery call with our leadership team in Nairobi.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-4">
            <Button href="/contact" size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Start a Conversation
            </Button>
            <Button href="/work" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-black">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
