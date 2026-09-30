/**
 * Sahara Digital Hub Design Tokens & Brand System
 * Colors, Typography, Spacing, and Agency Metadata
 */

export const brandTokens = {
  colors: {
    green: {
      primary: '#008035', // Primary accent
      hover: '#006e2e',
      light: 'rgba(0, 128, 53, 0.08)',
      glow: 'rgba(0, 128, 53, 0.16)',
    },
    black: {
      ink: '#000000', // Ink
      soft: '#1A1A1A',
      muted: '#595854',
    },
    paper: {
      base: '#FFFDF6', // Warm white paper, not sterile #ffffff
      surface: '#F6F3E9',
      card: '#FFFFFF',
      border: 'rgba(0, 0, 0, 0.08)',
    },
  },
  typography: {
    display: 'var(--font-display)', // Grain placeholder: Space Grotesk
    body: 'var(--font-body)', // Urbanist
  },
  spacing: {
    // 8px grid system
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    8: '64px',
    10: '80px',
    12: '96px',
    16: '128px',
  },
  radii: {
    card: '20px',
    badge: '9999px',
    pill: '9999px',
  },
  agency: {
    name: 'Sahara Digital Hub',
    tagline: 'Branding & Software for Market Leaders',
    location: 'Nairobi, Kenya',
    address: 'Aqua Plaza, Muranga Road, Nairobi, Kenya',
    foundedYear: 2021,
    dormantYear: 2024,
    relaunchYear: 2026,
    email: 'hello@saharadigital.co.ke',
    phone: '+254 700 000 000',
    whatsapp: '254700000000',
    whatsappUrl: 'https://wa.me/254700000000?text=Hello%20Sahara%20Digital%20Hub,%20I%20would%20like%20to%20inquire%20about%20a%20project.',
    socials: {
      linkedin: 'https://linkedin.com/company/sahara-digital-hub',
      twitter: 'https://twitter.com/saharadigitalhub',
      instagram: 'https://instagram.com/saharadigitalhub',
      github: 'https://github.com/sahara-digital-hub',
    },
  },
} as const;

export default brandTokens;
