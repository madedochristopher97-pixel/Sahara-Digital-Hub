export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  icon: string;
  image?: string;
}

export interface ServicePillar {
  slug: string;
  title: string;
  badge: string;
  headline: string;
  subhead: string;
  overview: string;
  services: ServiceItem[];
  process: {
    step: string;
    title: string;
    duration: string;
    description: string;
  }[];
  pricingHint: string;
}

export const brandingPillar: ServicePillar = {
  slug: 'branding',
  title: 'Branding & Creative',
  badge: 'Creative Practice',
  headline: 'Distinctive visual identities engineered to command market authority.',
  subhead:
    'From bold corporate identities and design systems to tactile packaging and high-impact outdoor media across Kenya and East Africa.',
  overview:
    'Great branding is not cosmetic decoration; it is commercial positioning made visible. We sculpt identities that position your business ahead of competitors, inspire team pride, and earn customer trust at first glance.',
  services: [
    {
      id: 'visual-identity',
      title: 'Visual Identity & Logo Design',
      shortDesc: 'Enduring logos, mark systems, color palettes, and typographic hierarchies.',
      description:
        'A comprehensive design system that communicates your core value proposition across digital, spatial, and physical touchpoints.',
      deliverables: ['Primary & Secondary Marks', 'Monochrome & Responsive Variations', 'Color Architecture & Contrast Scales', 'Custom Typography Pairing'],
      icon: 'Palette',
      image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines & Design Systems',
      shortDesc: 'Actionable brand books that keep every internal team and vendor aligned.',
      description:
        'Clear rules for logo usage, editorial voice, spacing ratios, icon libraries, and co-branding applications so your brand never degrades.',
      deliverables: ['Master Brand Manual (PDF + Digital)', 'Asset Library & File Kits', 'Tone of Voice Guide', 'Do’s & Don’ts Usage Directives'],
      icon: 'BookOpen',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design & Marketing Collateral',
      shortDesc: 'Pitch decks, social templates, corporate reports, and investor decks.',
      description:
        'Polished design collateral that turns complex business narratives into crisp, conversion-focused executive presentations.',
      deliverables: ['Keynote & PowerPoint Pitch Decks', 'Annual Reports & Whitepapers', 'Social Media Design Kits', 'Sales One-Pagers & Fact Sheets'],
      icon: 'Layout',
      image: 'https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'print-bulk',
      title: 'Print & Bulk Printing',
      shortDesc: 'Premium corporate stationery, offset runs, and certified high-volume prints.',
      description:
        'Precision offset and digital production in Nairobi. Spot UV, foil stamping, textured stocks, and certified color accuracy.',
      deliverables: ['Luxury Business Cards', 'Letterheads & Presentation Folders', 'Product Catalogues & Brochures', 'Direct Mail & Event Collateral'],
      icon: 'Printer',
      image: 'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'billboards-ooh',
      title: 'Billboards & Out-of-Home (OOH)',
      shortDesc: 'Highway gantries, digital LED displays, bridge banners, and spatial signage.',
      description:
        'High-impact outdoor creative optimized for driver glance time, ambient lighting conditions, and maximum recall across Nairobi corridors.',
      deliverables: ['Static & Digital Billboard Specs', 'Site Survey & Sightline Optimization', 'Retail Fascias & Architectural Signage', 'Transit & Fleet Vehicle Graphics'],
      icon: 'Tv',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'packaging',
      title: 'Packaging Design',
      shortDesc: 'Shelf-ready retail packaging, dielines, labels, and eco-friendly boxes.',
      description:
        'Consumer packaging engineered for supermarket visibility, structural integrity, regulatory compliance, and tactile shelf appeal.',
      deliverables: ['Custom Dielines & Structural Mockups', 'Label Artwork & Regulatory Typography', 'FMCG Boxes, Pouches & Bottles', 'Production-Ready Vector Files'],
      icon: 'Package',
      image: 'https://images.pexels.com/photos/7319328/pexels-photo-7319328.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'merch-printing',
      title: 'Merch & Custom Apparel Printing',
      shortDesc: 'Screen printing, direct-to-garment, and embroidered corporate merchandise.',
      description:
        'Wearable company pride. Premium cotton tees, heavyweight hoodies, branded notebooks, and sustainable swag that employees actually keep.',
      deliverables: ['Screen Printed T-Shirts & Polos', 'Embroidery Digitizing & Execution', 'Executive Notebooks & Pens', 'Corporate Welcome Swag Boxes'],
      icon: 'Shirt',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Discover & Align',
      duration: 'Week 1',
      description: 'Stakeholder interviews, competitive landscape audit in East Africa, customer persona synthesis, and strategic moodboarding.',
    },
    {
      step: '02',
      title: 'Design & Iterate',
      duration: 'Weeks 2–3',
      description: 'Translating strategy into 2–3 distinct creative directions, testing in real-world contexts, and refining typography and color matrices.',
    },
    {
      step: '03',
      title: 'Deliver & Document',
      duration: 'Week 4',
      description: 'Final vector asset export, packaging dielines verification, brand guidelines manual publication, and handoff workshop.',
    },
  ],
  pricingHint: 'Branding engagements are tailored to your commercial scope — from agile startup identities to multi-market brand overhauls.',
};

export const softwarePillar: ServicePillar = {
  slug: 'software',
  title: 'Software Development',
  badge: 'Engineering Practice',
  headline: 'Modern, resilient digital platforms built for scale and conversion.',
  subhead:
    'Full-stack web applications, mobile apps, custom APIs, and seamless African payment integrations engineered with Next.js, TypeScript, and modern cloud architecture.',
  overview:
    'Software should never be a sluggish overhead. We build blazing-fast web platforms and mobile applications that load instantly on Kenyan mobile networks, withstand heavy traffic, and automate high-value business operations.',
  services: [
    {
      id: 'website-development',
      title: 'Website Design & Development',
      shortDesc: 'Ultra-fast Next.js websites, headless architectures, and editorial platforms.',
      description:
        'Engineered for 90+ Lighthouse performance scores, instant page transitions, strict accessibility, and measurable organic search visibility.',
      deliverables: ['Next.js App Router Architecture', 'TypeScript & Tailwind CSS Framework', 'Mobile-First Responsive Layouts', 'SEO & Analytics Instrumentation'],
      icon: 'Globe',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'backend-systems',
      title: 'Backend Systems & Scalable APIs',
      shortDesc: 'Resilient microservices, relational databases, and enterprise data models.',
      description:
        'Clean, documented APIs and database schemas designed for data integrity, zero race conditions, and effortless horizontal scalability.',
      deliverables: ['REST & GraphQL API Endpoints', 'PostgreSQL / SQL Architecture', 'Authentication & RBAC Security', 'Cloud Infrastructure as Code'],
      icon: 'Server',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications (iOS & Android)',
      shortDesc: 'High-performance React Native and native mobile experiences.',
      description:
        'Fluid gestures, offline caching for intermittent connectivity, push notifications, and native hardware integration for mobile-first users.',
      deliverables: ['Cross-Platform Codebase (iOS & Android)', 'App Store & Google Play Submissions', 'Offline Data Synchronization', 'Device Hardware Sensors Integration'],
      icon: 'Smartphone',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Digital Storefronts',
      shortDesc: 'Custom checkout funnels, headless Shopify, and inventory synching.',
      description:
        'High-converting checkout flows built with frictionless African payment gateways, order management, and automated shipping calculators.',
      deliverables: ['Headless Storefronts', 'Catalog & Inventory Management', 'Abandoned Cart Recovery Funnels', 'Multi-Currency Support (KES/USD/EUR)'],
      icon: 'ShoppingBag',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'integrations',
      title: 'Integrations & Payment Automation',
      shortDesc: 'M-Pesa Daraja API, Pesapal, Stripe, ERP, and CRM synchronizations.',
      description:
        'Bulletproof webhook handlers, automated payment reconciliation, CRM data pipelines, and ERP bridging to eliminate manual data entry.',
      deliverables: ['M-Pesa STK Push & C2B/B2C Automation', 'Instant Webhook Handlers with Idempotency', 'HubSpot / Salesforce Sync Pipelines', 'Automated Accounting Reconciliation'],
      icon: 'Cpu',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance, Security & Support',
      shortDesc: 'Guaranteed uptime SLAs, vulnerability patching, and continuous enhancements.',
      description:
        'Dedicated monthly engineering support so your critical digital infrastructure remains secure, fast, and constantly evolving with your business.',
      deliverables: ['Guaranteed Response Time SLAs', 'Automated Dependency & Security Patches', 'Real-Time Error Logging & Monitoring', 'Bi-Weekly Feature Sprints'],
      icon: 'ShieldCheck',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Discover & Specify',
      duration: 'Weeks 1–2',
      description: 'Technical architecture design, data flow diagrams, user story mapping, and database schema specification.',
    },
    {
      step: '02',
      title: 'Build & Prototype',
      duration: 'Weeks 3–6',
      description: 'Sprint-based engineering in Next.js/TypeScript, bi-weekly clickable review builds, and continuous integration testing.',
    },
    {
      step: '03',
      title: 'Launch & Verify',
      duration: 'Week 7',
      description: 'End-to-end load testing, security audits, SEO crawl verification, zero-downtime deployment, and DNS cutover.',
    },
    {
      step: '04',
      title: 'Support & Scale',
      duration: 'Ongoing',
      description: 'Hyper-care monitoring for 30 days post-launch, bug-free warranty, and ongoing roadmap engineering support.',
    },
  ],
  pricingHint: 'Software projects are custom-scoped to your technical architecture — from custom web applications to enterprise platforms and mobile systems.',
};
