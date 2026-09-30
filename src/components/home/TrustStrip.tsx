import React from 'react';
import { MapPin, MessageSquare, History, CheckCircle } from 'lucide-react';
import StatsCounter from '@/components/ui/StatsCounter';

export function TrustStrip() {
  const stats = [
    {
      label: 'Projects Delivered',
      counter: { value: 50, suffix: '+' },
      note: 'Across Kenya & East Africa',
      icon: <CheckCircle className="w-5 h-5 text-[#008035]" />,
    },
    {
      label: 'Studio Evolution',
      counter: { prefix: '2021 — ', value: 2026 },
      note: 'Est. 2021 · Relaunched 2026',
      icon: <History className="w-5 h-5 text-[#008035]" />,
    },
    {
      label: 'Studio Location',
      counter: { value: 100, suffix: '% Nairobi' },
      note: 'Aqua Plaza, Muranga Road',
      icon: <MapPin className="w-5 h-5 text-[#008035]" />,
    },
    {
      label: 'Self-Serve Scoping',
      counter: { value: 24, suffix: '/7 AI Assistant' },
      note: 'Instant scope & technical clarity',
      icon: <MessageSquare className="w-5 h-5 text-[#008035]" />,
    },
  ];

  return (
    <section
      aria-label="Sahara Trust & Credibility Metrics"
      className="border-y border-black/[0.08] dark:border-white/10 bg-[#F6F3E9] dark:bg-[#121212] py-8 sm:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#008035] transition-colors">
                {stat.icon}
              </div>
              <div>
                <p className="font-display font-bold text-xl sm:text-2xl text-black dark:text-white tracking-tight leading-none">
                  <StatsCounter
                    value={stat.counter.value}
                    prefix={stat.counter.prefix}
                    suffix={stat.counter.suffix}
                    duration={1.6}
                  />
                </p>
                <p className="text-xs font-semibold text-black/90 dark:text-white/90 mt-1">{stat.label}</p>
                <p className="text-[11px] text-[#595854] dark:text-[#A1A1AA] mt-0.5">{stat.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
