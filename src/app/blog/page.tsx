import React from 'react';
import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dispatches & Insights — Sahara Digital Hub Nairobi',
  description: 'Editorial essays on African brand architecture, Next.js engineering, and digital market leadership.',
};

export default function BlogStubPage() {
  return (
    <div className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card variant="surface" padding="lg" className="max-w-3xl mx-auto border-black/10 dark:border-white/10 text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-[#008035]/10 text-[#008035] flex items-center justify-center mx-auto">
          <BookOpen className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <Badge variant="surface" size="md">
            Studio Dispatches · Coming Q3 2026
          </Badge>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white">
            Sahara Editorial Dispatches
          </h1>
          <p className="text-base text-[#595854] dark:text-[#A1A1AA] max-w-lg mx-auto leading-relaxed">
            Following our 2026 relaunch, we are preparing in-depth field essays documenting
            packaging design across Kenyan supermarkets, M-Pesa Daraja failure modes, and Next.js
            optimizations for East African mobile networks.
          </p>
        </div>

        <div className="p-4 bg-white dark:bg-[#1A1A1D] rounded-xl border border-black/10 dark:border-white/10 max-w-md mx-auto text-xs text-[#595854] dark:text-[#A1A1AA]">
          <p className="font-bold text-black dark:text-white mb-1">Upcoming Editorial Releases:</p>
          <ul className="space-y-1 text-left list-disc list-inside">
            <li>The Anatomy of High-Glance Billboard Design on Uhuru Highway</li>
            <li>Hardening Safaricom M-Pesa Webhooks in Next.js 14</li>
            <li>Why 80% of African Startup Rebrands Fail in Packaging</li>
          </ul>
        </div>

        <div className="pt-2 flex justify-center gap-4">
          <Button href="/work" variant="primary">
            Explore Current Case Studies
          </Button>
          <Button href="/" variant="secondary">
            Return Home
          </Button>
        </div>
      </Card>
    </div>
  );
}
