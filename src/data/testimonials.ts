export interface Testimonial {
  id: string;
  isPlaceholder: true;
  quote: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  industry: string;
  projectType: string;
  year: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    isPlaceholder: true,
    quote:
      '[CLIENT VERIFICATION SLOT: "Sahara Digital Hub took our brand from a fragmented concept to a cohesive, market-defining presence across Kenya. The transition to our new website and packaging unlocked our biggest enterprise retail contracts to date."]',
    clientName: '[CLIENT FOUNDER NAME]',
    clientRole: '[CHIEF EXECUTIVE OFFICER]',
    companyName: '[SPECIALTY COFFEE & FMCG BRAND]',
    industry: 'Retail & Agribusiness',
    projectType: 'Branding & Packaging Overhaul',
    year: '2025',
  },
  {
    id: 'test-2',
    isPlaceholder: true,
    quote:
      '[CLIENT VERIFICATION SLOT: "Finding an agency in Nairobi that truly understands backend API resilience and clean design at the same time is rare. Twiga’s dispatch turnaround dropped significantly within 60 days of launch."]',
    clientName: '[HEAD OF PRODUCT / COO]',
    clientRole: '[VP OF OPERATIONS]',
    companyName: '[REGIONAL LOGISTICS FLEET]',
    industry: 'Freight & Supply Chain',
    projectType: 'Full-Stack Dispatch Platform & Mobile App',
    year: '2026',
  },
  {
    id: 'test-3',
    isPlaceholder: true,
    quote:
      '[CLIENT VERIFICATION SLOT: "The team’s mastery of Safaricom Daraja API integration combined with an institutional FinTech identity gave our enterprise merchants the confidence to process millions daily through our gateway."]',
    clientName: '[MANAGING DIRECTOR / CO-FOUNDER]',
    clientRole: '[CHIEF TECHNOLOGY OFFICER]',
    companyName: '[EAST AFRICAN PAYMENTS PROVIDER]',
    industry: 'FinTech & Commerce',
    projectType: 'Brand Identity & Web Portal',
    year: '2025',
  },
];
