import React from 'react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { aboutData } from '@/data/about';
import { Layers, ShieldCheck, Zap, Handshake } from 'lucide-react';

export function WhySahara() {
  const icons = [
    <Layers key="1" className="w-6 h-6 text-[#008035]" />,
    <Zap key="2" className="w-6 h-6 text-[#008035]" />,
    <ShieldCheck key="3" className="w-6 h-6 text-[#008035]" />,
    <Handshake key="4" className="w-6 h-6 text-[#008035]" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F6F3E9] dark:bg-[#121212] border-y border-black/[0.06] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <SectionHeading
          kicker="Why Sahara Hub"
          plainLine="Engineered for Kenyan Realities."
          accentLine="Tested Against Commercial Stakes."
          subhead="We don't build generic template sites or fluffy presentations. We build durable digital instruments and brand identities that thrive in real market competition."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.principles.map((item, idx) => (
            <Card
              key={item.number}
              variant="white"
              padding="md"
              hoverEffect
              className="flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#008035]/10 flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-xs font-bold text-black/40 dark:text-white/40">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-black dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed font-body">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-[#008035]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008035]" />
                <span>Sahara Standard</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
