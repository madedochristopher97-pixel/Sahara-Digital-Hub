import React from 'react';
import type { Metadata } from 'next';
import { ServicesExplorer } from '@/components/services/ServicesExplorer';

export const metadata: Metadata = {
  title: 'Services & Studio Capabilities — Branding & Software Development Nairobi',
  description:
    'Explore Sahara Digital Hub capabilities across Brand Identity, OOH, Packaging, Modern Next.js Web Development, Mobile Apps (iOS & Android), and M-Pesa APIs.',
};

export default function ServicesPage() {
  return <ServicesExplorer />;
}
