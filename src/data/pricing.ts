export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  recommended?: boolean;
  tagline: string;
  quoteType: string;
  quoteScope: string;
  period: string;
  turnaround: string;
  idealFor: string;
  brandingInclusions: string[];
  softwareInclusions: string[];
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Sprint',
    badge: 'Foundation Scope',
    tagline: 'Rapid, disciplined execution for early-stage companies and focused product launches.',
    quoteType: 'Custom Quotation',
    quoteScope: 'Scoped on Request',
    period: 'milestone-based sprint',
    turnaround: '3–4 Weeks',
    idealFor: 'Early-stage ventures, pre-seed startups, and established firms launching a single initiative.',
    brandingInclusions: [
      'Primary logo & mark system (vector & web assets)',
      'Essential typography & curated color palette',
      'One-page mini brand style guide (PDF)',
      'Primary stationery (business cards & letterhead)',
      'Social media starter avatar & header kit',
    ],
    softwareInclusions: [
      'High-converting 4–6 page modern marketing website',
      'Next.js App Router with 90+ Lighthouse score',
      'Contact & inquiry form with instant notifications',
      'Mobile-first responsive optimization',
      'Standard technical SEO & Google Analytics setup',
      '30-day post-launch technical warranty',
    ],
    ctaLabel: 'Request Starter Quotation',
  },
  {
    id: 'growth',
    name: 'Growth Scale',
    badge: 'Most Requested',
    recommended: true,
    tagline: 'End-to-end brand repositioning and custom full-stack software built for revenue acceleration.',
    quoteType: 'Custom Quotation',
    quoteScope: 'Tailored to Scope',
    period: 'milestone-based sprint',
    turnaround: '6–8 Weeks',
    idealFor: 'Growing companies scaling revenue, expanding across East Africa, or undergoing institutional rebrands.',
    brandingInclusions: [
      'Complete master brand identity & sub-brand lockups',
      'Exhaustive 40+ page brand guidelines manual',
      'Custom packaging, labels, or corporate merch system',
      'Outdoor OOH billboard / vehicle branding specs',
      'Comprehensive marketing collateral & pitch deck design',
      'Typography licenses & handoff asset library',
    ],
    softwareInclusions: [
      'Custom full-stack web application or portal',
      'M-Pesa Daraja API & multi-currency payment integration',
      'User authentication & protected client portal',
      'Headless CMS or dynamic blog/content engine',
      'Automated transactional emails & SMS notifications',
      'Performance load testing & security hardening',
      '60-day hyper-care support with direct team channel',
    ],
    ctaLabel: 'Request Growth Quotation',
  },
  {
    id: 'custom',
    name: 'Enterprise / Custom',
    badge: 'Dedicated Squad',
    tagline: 'Dedicated multi-disciplinary squads for complex architectures, mobile apps, and enterprise systems.',
    quoteType: 'Bespoke Quotation',
    quoteScope: 'Dedicated Scope or Retainer',
    period: 'milestone or monthly retainer',
    turnaround: '8–16+ Weeks',
    idealFor: 'FinTechs, regional logistics providers, healthcare networks, and multi-market corporations.',
    brandingInclusions: [
      'Multi-territory brand architecture & naming strategy',
      'Complete environmental signage & retail space guidelines',
      'Omnichannel design system for cross-functional teams',
      'Ongoing creative direction & campaign design',
      'Brand asset management system setup',
    ],
    softwareInclusions: [
      'Cross-platform iOS & Android mobile apps (React Native)',
      'High-throughput microservices & event-driven APIs',
      'Custom ERP, inventory, and accounting integrations',
      'Enterprise SLA (99.9% uptime & 2-hour emergency response)',
      'Kenyan Data Protection Act compliance verification',
      'Dedicated Slack/Teams engineering channel',
    ],
    ctaLabel: 'Request Enterprise Quotation',
  },
];

export const pricingFaqs = [
  {
    question: 'How do I request a quotation for our project?',
    answer:
      'Simply submit your requirements through our Request for Quotation (RFQ) form below, or reach out to our team via WhatsApp. Our leadership will review your specifications, map out the required milestones, and send an itemized quotation within 24 business hours.',
  },
  {
    question: 'Why does Sahara Hub operate on a quotation model instead of fixed prices?',
    answer:
      'We do not believe in arbitrary price sheets or hidden hourly markups. Every business has unique architectural and commercial demands — an M-Pesa automated merchant portal reconciling thousands of transactions has very different complexity than a focused startup website. Our quotation model ensures you receive a precise, milestone-based proposal tailored exactly to your scope.',
  },
  {
    question: 'How do milestone payments work once a quotation is accepted?',
    answer:
      'We work on structured milestone payments to protect both parties: typically 40% initial deposit on project kick-off, 30% upon approval of design prototypes / architecture, and 30% upon final deployment and testing sign-off. We accept M-Pesa Paybill, Kenyan bank EFT/RTGS, and international wire transfers.',
  },
  {
    question: 'Who owns the intellectual property and code?',
    answer:
      'You do — 100%. Upon settlement of the final milestone payment, full ownership of all source code, vector files, design assets, and copyright transfers completely to your organization with zero licensing strings attached.',
  },
  {
    question: 'Do you offer monthly maintenance and retainer agreements?',
    answer:
      'Yes. Following the initial warranty period, most of our clients transition to a monthly retainer covering continuous software enhancements, server monitoring, security patches, SLA response times, and ongoing creative collateral.',
  },
  {
    question: 'Can you include Safaricom M-Pesa Daraja integration in our quotation?',
    answer:
      'Absolutely. M-Pesa is foundational to digital commerce in Kenya. We integrate STK Push (Lipa na M-Pesa Online), C2B paybill validation and confirmation webhooks, and B2C bulk payout disbursements with robust idempotency and automated failover.',
  },
];
