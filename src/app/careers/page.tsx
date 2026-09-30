import React from 'react';
import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Briefcase } from 'lucide-react';
import { brandTokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Careers & Talent Roster — Sahara Digital Hub Nairobi',
  description: 'Join the Sahara creative and software engineering studio in Nairobi, Kenya.',
};

export default function CareersStubPage() {
  return (
    <div className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card variant="surface" padding="lg" className="max-w-3xl mx-auto border-black/10 dark:border-white/10 text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-black dark:bg-white text-[#FFFDF6] dark:text-black flex items-center justify-center mx-auto">
          <Briefcase className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <Badge variant="green" size="md">
            Talent Pool · Relaunched 2026
          </Badge>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white">
            Build With Us in Nairobi
          </h1>
          <p className="text-base text-[#595854] dark:text-[#A1A1AA] max-w-lg mx-auto leading-relaxed">
            While our core practice chairs are currently staffed, we maintain an active talent
            roster for exceptional Nairobi-based visual identity designers, packaging specialists,
            and senior full-stack TypeScript engineers for project-based sprints.
          </p>
        </div>

        <div className="p-5 bg-white dark:bg-[#1A1A1D] rounded-xl border border-black/10 dark:border-white/10 max-w-md mx-auto text-xs text-left space-y-2">
          <p className="font-bold text-black dark:text-white uppercase tracking-wider text-[11px]">
            Future Roles On Watchlist:
          </p>
          <div className="space-y-1.5 text-[#595854] dark:text-[#A1A1AA]">
            <p className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-1">
              <span>Packaging & Industrial Print Specialist</span>
              <span className="font-semibold text-black dark:text-white">Contract Roster</span>
            </p>
            <p className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-1">
              <span>Senior Next.js / TypeScript Engineer</span>
              <span className="font-semibold text-black dark:text-white">Contract Roster</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Brand Strategist & Copywriter (Nairobi)</span>
              <span className="font-semibold text-black dark:text-white">Contract Roster</span>
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`mailto:${brandTokens.agency.email}?subject=Talent%20Roster%20Inquiry%20-%20Sahara%20Digital%20Hub`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#008035] text-[#FFFDF6] text-sm font-semibold hover:bg-[#006e2e] transition-colors"
          >
            Submit Portfolio to Roster
          </a>
          <Button href="/about" variant="secondary">
            Read Our Studio Story
          </Button>
        </div>
      </Card>
    </div>
  );
}
