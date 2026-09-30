export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: 'branding' | 'software' | 'both';
  categoryLabel: string;
  year: string;
  location: string;
  timeline: string;
  image: string;
  shortSummary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  results: {
    metric: string;
    label: string;
  }[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  highlights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mara-reserve-coffee',
    title: 'Heritage single-origin packaging and retail identity for Nairobi specialty roasters',
    client: 'Mara Reserve Coffee Roasters',
    category: 'branding',
    categoryLabel: 'Branding & Packaging',
    year: '2025',
    location: 'Nairobi & Nyeri, Kenya',
    timeline: '8 Weeks',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortSummary:
      'A complete visual identity and shelf-ready retail packaging architecture that boosted export inquiries and won supermarket placement across Nairobi.',
    challenge:
      'Mara Reserve was sourcing world-class Mount Kenya microlots, but their existing packaging blended in with generic bulk commodity beans. They lacked unified retail presence, brand guidelines, and distinctive export packaging required by upscale distributors in Nairobi, Dubai, and London.',
    approach:
      'We engineered an artisanal identity anchored in topographic contour lines of Mount Kenya and rich earth tones. We designed foil-stamped, biodegradable coffee pouches with tactile textures and modular sticker systems for seasonal harvests, paired with large-format outdoor posters along major Nairobi coffee shop routes.',
    deliverables: [
      'Primary Brand Mark & Monogram',
      'Biodegradable Retail Pouches (250g & 1kg)',
      'Modular Harvest Origin Label System',
      'Brand Guidelines Manual & Color System',
      'OOH Billboard & In-Store Banner Graphics',
      'Custom Barista Merchandise & Aprons',
    ],
    results: [
      { metric: '+142%', label: 'Direct-to-consumer online sales' },
      { metric: '18', label: 'High-end retail outlets secured' },
      { metric: '3', label: 'International distribution contracts' },
    ],
    quote: {
      text: 'Sahara gave us an identity that looks at home on the shelves of Harrods and Westgate alike. Our wholesale partners immediately recognized the quality shift.',
      author: 'David Kariuki',
      role: 'Founder & Head of Roasting',
    },
    highlights: ['Mount Kenya topographic motif', 'Biodegradable matte foil finish', 'Bilingual Swahili & English story'],
  },
  {
    slug: 'twiga-fleet-logistics',
    title: 'Real-time dispatch portal and driver companion app for cross-border cargo fleets',
    client: 'Twiga Fleet Logistics',
    category: 'software',
    categoryLabel: 'Software Development',
    year: '2026',
    location: 'Nairobi & Mombasa Corridor',
    timeline: '12 Weeks',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortSummary:
      'A high-performance dispatch web app and offline-capable mobile client streamlining cargo movement across the Northern Corridor.',
    challenge:
      'Twiga was coordinating 80+ freight trucks between Mombasa Port and Kampala using fragmented WhatsApp groups and manual Excel spreadsheets. Fuel disbursements were delayed, proof-of-delivery paper slips went missing, and dispatchers had zero real-time telematics visibility.',
    approach:
      'We designed and deployed a full-stack Next.js dispatch cockpit coupled with a lightweight React Native driver app. The system operates seamlessly during poor cellular reception, incorporates M-Pesa B2C instant automated per-diem disbursements, and captures geostamped digital proof-of-delivery signatures.',
    deliverables: [
      'Next.js 14 Real-Time Dispatch Dashboard',
      'Offline-First Driver Android / iOS Mobile App',
      'Automated M-Pesa B2C Bulk Fuel Disbursement API',
      'Digital Waybill & Signature Capture System',
      'PostgreSQL & Redis Telematics Queue Architecture',
      'SMS Fallback Notification Service',
    ],
    results: [
      { metric: '3.4 hrs', label: 'Average dispatch turnaround reduction' },
      { metric: '99.4%', label: 'Digital proof-of-delivery compliance' },
      { metric: '0', label: 'Lost paper manifests since launch' },
    ],
    quote: {
      text: 'Our operations team went from chaos to calm in two months. Sahara understood the reality of Kenyan mobile connectivity and built software that never fails on the road.',
      author: 'Wanjiru Mwangi',
      role: 'Chief Operating Officer',
    },
    highlights: ['Sub-second M-Pesa disbursement', 'Offline SQLite syncing engine', 'Real-time GPS route heatmaps'],
  },
  {
    slug: 'savannah-finpay',
    title: 'Automated M-Pesa reconciliation engine and merchant portal for East African retail',
    client: 'Savannah FinPay',
    category: 'both',
    categoryLabel: 'Branding & Software',
    year: '2025',
    location: 'Nairobi, Kenya',
    timeline: '14 Weeks',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortSummary:
      'Unified brand identity and an enterprise reconciliation web application processing thousands of daily retail M-Pesa till transactions.',
    challenge:
      'Multi-branch retail businesses in Kenya waste dozens of hours every week manually reconciling M-Pesa paybill numbers against Point of Sale cash receipts. Savannah built a novel reconciliation engine, but lacked a trustworthy brand identity and a modern, high-speed merchant dashboard.',
    approach:
      'Sahara provided an end-to-end transformation: we designed a crisp financial brand identity symbolizing kinetic velocity and security, then built an ultra-fast Next.js merchant portal that automatically matches Daraja API webhooks with bank ledger entries in real time.',
    deliverables: [
      'Complete FinTech Brand Identity & UI Kit',
      'Interactive Next.js Merchant Analytics Portal',
      'Safaricom Daraja API Webhook Processor',
      'Automated PDF Statement & Audit Trail Generator',
      'Role-Based Branch Manager Permissions (RBAC)',
      'Sales Presentation Deck for Enterprise Pitching',
    ],
    results: [
      { metric: 'KES 480M+', label: 'Monthly transaction volume reconciled' },
      { metric: '< 1.2s', label: 'Average settlement verification speed' },
      { metric: '98%', label: 'Reduction in branch accounting discrepancies' },
    ],
    quote: {
      text: 'Having one agency execute both our institutional brand identity and our core merchant portal was a game changer. The speed and quality were unprecedented.',
      author: 'Kevin Otieno',
      role: 'Co-Founder & CEO',
    },
    highlights: ['Micro-settlement webhook queue', 'Multi-tenant bank reconciliation', 'Financial grade encryption'],
  },
  {
    slug: 'boma-living-interiors',
    title: 'Luxury brand identity, architectural lookbook, and spatial signage for modern living',
    client: 'Boma Living Interiors',
    category: 'branding',
    categoryLabel: 'Branding & Creative',
    year: '2025',
    location: 'Karen & Kilimani, Nairobi',
    timeline: '6 Weeks',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortSummary:
      'A refined brand identity and tactile print collateral repositioning a bespoke interior studio to win multimillion-shilling commercial commissions.',
    challenge:
      'Boma Living had designed stunning private residences across Nairobi, but their marketing materials looked amateur compared to the architectural excellence of their work. They needed an identity that resonated with top-tier property developers and international interior clients.',
    approach:
      'We crafted a minimalist identity inspired by mid-century African modernist architecture. We oversaw the production of hardcover tactile lookbooks printed with Italian linen cloth covers and metallic foil stamping, along with sleek brass spatial signage for their Karen showroom.',
    deliverables: [
      'Architectural Monogram & Wordmark',
      'Hardcover Portfolio Lookbook (Offset Print Run)',
      'Custom Showroom Brass Signage Dielines',
      'Editorial Pitch Decks for Property Developers',
      'Luxury Textured Stationery & Business Cards',
      'Digital Case Study Template System',
    ],
    results: [
      { metric: '4x', label: 'Increase in commercial project win rate' },
      { metric: 'KES 85M', label: 'Largest contract secured using new lookbook' },
      { metric: '100%', label: 'Positive feedback from architectural boards' },
    ],
    quote: {
      text: 'The lookbook Sahara designed is a work of art. Clients open it and immediately treat our pricing with respect.',
      author: 'Zainab Hussein',
      role: 'Principal Architect & Founder',
    },
    highlights: ['Bespoke linen bound printing', 'Bespoke typographic rhythm', 'Showroom spatial wayfinding'],
  },
  {
    slug: 'afrihealth-diagnostics',
    title: 'Patient telehealth booking platform and rapid diagnostic lab tracking web app',
    client: 'AfriHealth Diagnostics',
    category: 'software',
    categoryLabel: 'Software Development',
    year: '2026',
    location: 'Nairobi & Kisumu, Kenya',
    timeline: '10 Weeks',
    image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortSummary:
      'A secure HIPAA/Kenyan Data Protection Act compliant web platform enabling instant doctor appointments and automated SMS lab results.',
    challenge:
      'Patients were waiting in crowded clinic lobbies for routine blood tests, with paper lab reports frequently misplaced. AfriHealth needed a frictionless digital portal that worked on low-bandwidth smartphone connections without requiring patients to download heavy apps.',
    approach:
      'We engineered a progressive Next.js web application with a 98 Lighthouse performance score. The platform allows patients to book home phlebotomy visits, pay via M-Pesa STK push, and receive encrypted lab results directly via SMS link with one-time PIN authentication.',
    deliverables: [
      'Accessible Progressive Web App (PWA)',
      'Encrypted Patient Health Portal',
      'Phlebotomist Home Visit Scheduling Matrix',
      'M-Pesa STK Push Automated Checkout Flow',
      'Twilio & Africa’s Talking SMS Gateways',
      'Audit Trail Compliance for Kenyan DPA 2019',
    ],
    results: [
      { metric: '38,000+', label: 'Patient bookings processed' },
      { metric: '45 mins', label: 'Average patient turnaround time saved' },
      { metric: '4.9 / 5', label: 'Patient satisfaction rating' },
    ],
    quote: {
      text: 'Sahara built a healthcare application that is both rock-solid secure and remarkably simple for every grandmother in Kenya to use on her phone.',
      author: 'Dr. Brian Ochieng',
      role: 'Chief Medical Officer',
    },
    highlights: ['Zero-lag mobile interface', 'Automated OTP verification', 'Data Protection Act compliant'],
  },
  {
    slug: 'kilifi-solar-energy',
    title: 'Enterprise rebranding and IoT commercial solar generation dashboard',
    client: 'Kilifi Solar Energy',
    category: 'both',
    categoryLabel: 'Branding & Software',
    year: '2025',
    location: 'Mombasa & Kilifi Coast, Kenya',
    timeline: '14 Weeks',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200',
    shortSummary:
      'Unified clean-tech brand identity and cloud monitoring portal tracking megawatts of commercial solar array generation across Kenyan coastal hotels.',
    challenge:
      'Kilifi Solar was expanding from small residential rooftop installations to megawatts-scale power purchase agreements for luxury coastal resorts. They needed a credible institutional identity to secure international green finance, plus a client dashboard showing live energy savings.',
    approach:
      'We created a sun-inspired geometric brand identity that conveyed engineering rigor. Concurrently, we built an IoT dashboard integrating Modbus solar inverter telemetry to show resort managers their live kilowatt generation, grid offset, and cumulative diesel savings.',
    deliverables: [
      'Corporate Clean-Tech Brand Identity',
      'Real-Time Solar Telemetry Dashboard (Next.js)',
      'Investor Pitch Deck for ESG Green Funds',
      'Fleet Vehicle Decals & Technical Uniforms',
      'Automated Monthly Carbon Credit Reports',
      'Executive Summary Tablet Interface',
    ],
    results: [
      { metric: '14.2 MW', label: 'Solar capacity monitored live' },
      { metric: '$2.8M', label: 'Green infrastructure funding unlocked' },
      { metric: '32%', label: 'Customer retention increase over 12 months' },
    ],
    quote: {
      text: 'The combination of high-end corporate branding and our proprietary telemetry portal transformed how institutional investors perceive us.',
      author: 'Patrick Mutua',
      role: 'Managing Director',
    },
    highlights: ['Live solar inverter telemetry', 'Carbon offset certification pipeline', 'Resilient fleet livery'],
  },
];
