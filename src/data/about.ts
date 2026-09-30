export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  linkedinPlaceholder: string;
}

export const aboutData = {
  story: {
    foundedYear: '2021',
    dormantYear: '2024',
    relaunchYear: '2026',
    kicker: 'The Sahara Story',
    headline: 'Rooted in Nairobi. Built to bridge world-class brand craft and resilient code.',
    paragraphs: [
      'Sahara Digital Hub was originally established in Nairobi to eliminate a frustrating trade-off in the East African market: creative agencies that produce beautiful brand books but write fragile, outdated code — and software houses that engineer robust backends wrapped in uninspiring, clunky interfaces.',
      'In early 2024, the studio paused public commercial intake to conduct an internal retooling. We audited our delivery methodology, refined our technical architecture around modern Next.js and distributed cloud systems, and solidified our partnerships with certified industrial print and packaging houses across Nairobi.',
      'In 2026, Sahara Digital Hub relaunched with intentional clarity. We are a boutique, high-conviction team that pairs high-impact visual identity and packaging design with full-stack software development. We build the public face of market leaders and the mission-critical software behind them.',
    ],
  },
  mission: {
    statement:
      'To build market-defining African brands and resilient digital infrastructure that perform flawlessly under real-world commercial conditions.',
  },
  principles: [
    {
      number: '01',
      title: 'Unified Brand & Code',
      description:
        'We do not treat identity and engineering as separate silos. Your software is your most active brand ambassador, and your visual system informs every user interaction in the codebase.',
    },
    {
      number: '02',
      title: 'Zero Bloat, High Velocity',
      description:
        'We don’t believe in 100-page presentations that gather dust or complex software that crashes on intermittent Kenyan cellular networks. We prioritize lean, production-ready output.',
    },
    {
      number: '03',
      title: 'Pragmatic African Reality',
      description:
        'We design for the way business actually gets done in Nairobi and East Africa: mobile-first, bandwidth-conscious, WhatsApp-integrated, and backed by robust M-Pesa automated workflows.',
    },
    {
      number: '04',
      title: 'Radical Transparency & IP Ownership',
      description:
        'Direct founder accountability, no intermediary account managers, zero proprietary lock-in. You own 100% of your source code and vector source files upon project completion.',
    },
  ],
  team: [
    {
      id: 'founder-cd',
      name: '[FOUNDER & CREATIVE DIRECTOR]',
      role: 'Creative Direction & Brand Architecture',
      badge: 'Leadership',
      bio: 'Leading creative strategy, typographic systems, and spatial brand touchpoints. Overseeing visual cohesion across physical and digital media.',
      linkedinPlaceholder: 'https://linkedin.com/company/sahara-digital-hub',
    },
    {
      id: 'lead-engineer',
      name: '[HEAD OF ENGINEERING]',
      role: 'Full-Stack Architecture & Cloud Systems',
      badge: 'Engineering',
      bio: 'Directing Next.js frontend performance, PostgreSQL/API backends, and M-Pesa Daraja payment integration pipelines.',
      linkedinPlaceholder: 'https://linkedin.com/company/sahara-digital-hub',
    },
    {
      id: 'brand-designer',
      name: '[SENIOR BRAND & PACKAGING DESIGNER]',
      role: 'Visual Identity & Print Production',
      badge: 'Creative',
      bio: 'Specializing in shelf-ready packaging dielines, large-format OOH outdoor creative, and precision offset print execution.',
      linkedinPlaceholder: 'https://linkedin.com/company/sahara-digital-hub',
    },
    {
      id: 'client-success',
      name: '[CLIENT SUCCESS & DELIVERY LEAD]',
      role: 'Project Operations & Quality Assurance',
      badge: 'Operations',
      bio: 'Managing sprint milestones, QA release cycles, and post-launch SLA maintenance agreements.',
      linkedinPlaceholder: 'https://linkedin.com/company/sahara-digital-hub',
    },
  ] as TeamMember[],
  howWeWork: [
    {
      phase: 'Phase 01',
      title: 'Diagnostic & Scope Alignment',
      timeline: 'Days 1–7',
      description:
        'We audit your current market footprint, competitor positioning in Nairobi, and technical debt. We agree on unambiguous commercial objectives and fixed milestones.',
    },
    {
      phase: 'Phase 02',
      title: 'Creative Direction & Technical Architecture',
      timeline: 'Weeks 2–3',
      description:
        'We present concrete design directions and system schemas. For software, we define database models and API contracts before writing code.',
    },
    {
      phase: 'Phase 03',
      title: 'Agile Execution & Staging Builds',
      timeline: 'Weeks 4–7',
      description:
        'Rapid weekly sprints with clickable staging previews. You test the real interface and review physical print mockups long before launch.',
    },
    {
      phase: 'Phase 04',
      title: 'Deployment, Training & Hyper-Care',
      timeline: 'Week 8+',
      description:
        'Production cutover, DNS routing, Lighthouse audits, brand asset handover, and a 30 to 60-day hyper-care monitoring period.',
    },
  ],
};
