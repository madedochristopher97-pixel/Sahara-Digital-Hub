export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  industry: string;
  projectType: string;
  year: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Sahara Digital Hub took our brand from a fragmented concept to a cohesive, market-defining presence across Kenya. The transition to our new website and packaging unlocked our biggest enterprise retail contracts to date.',
    clientName: 'David Kariuki',
    clientRole: 'Founder & Head Roaster',
    companyName: 'Mara Reserve Coffee Roasters',
    industry: 'Specialty Coffee & FMCG',
    projectType: 'Brand Identity & Packaging Overhaul',
    year: '2025',
    rating: 5,
    initials: 'DK',
    avatarColor: 'from-[#008035] to-[#005a25]',
  },
  {
    id: 'test-2',
    quote:
      'Finding an engineering team in Nairobi that truly understands backend system resilience and clean, modern design at the same time is rare. Twiga’s dispatch turnaround dropped significantly within 60 days of launch.',
    clientName: 'Wanjiru Mwangi',
    clientRole: 'VP of Operations',
    companyName: 'Twiga Fleet Logistics',
    industry: 'Freight & Supply Chain',
    projectType: 'Dispatch Platform & Mobile App',
    year: '2026',
    rating: 5,
    initials: 'WM',
    avatarColor: 'from-[#1E1E22] to-[#333338]',
  },
  {
    id: 'test-3',
    quote:
      'The team’s mastery of Safaricom Daraja API integration combined with an institutional FinTech identity gave our enterprise merchants the confidence to process millions daily through our gateway.',
    clientName: 'Kevin Otieno',
    clientRole: 'Chief Technology Officer',
    companyName: 'Savannah FinPay',
    industry: 'FinTech & Payments',
    projectType: 'Brand Identity & Merchant Portal',
    year: '2025',
    rating: 5,
    initials: 'KO',
    avatarColor: 'from-[#008035] to-[#141416]',
  },
];
