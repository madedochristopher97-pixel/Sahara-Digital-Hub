import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/chatbot/ChatWidget';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { InitialPreloader } from '@/components/ui/InitialPreloader';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { GoogleAnalytics } from '@/components/ui/GoogleAnalytics';

/**
 * Typography System (100% Locally Sourced)
 * Display font: Grain (Local OTF in public/fonts/)
 * Body font: Urbanist (Local TTF variable in public/fonts/)
 */
const grain = localFont({
  src: [
    {
      path: '../../public/fonts/grain-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grain-regularitalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/grain-semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grain-semibolditalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/grain-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grain-bolditalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/grain-extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/grain-extrabolditalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/grain-black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-grain',
  display: 'swap',
});

const urbanist = localFont({
  src: [
    {
      path: '../../public/fonts/Urbanist-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Urbanist-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saharadigital.co.ke'),
  title: {
    default: 'Sahara Digital Hub — Branding & Software Agency in Nairobi, Kenya',
    template: '%s | Sahara Digital Hub',
  },
  description:
    'Sahara Digital Hub is a Nairobi-based branding and software studio relaunching in 2026. We pair market-defining visual identity and packaging with high-performance Next.js software and M-Pesa integrations.',
  keywords: [
    'digital marketing agency Nairobi',
    'branding agency Kenya',
    'software development company Nairobi',
    'packaging design Nairobi',
    'Next.js development Kenya',
    'M-Pesa Daraja API integration',
    'graphic design agency Kenya',
    'corporate rebrand East Africa',
  ],
  authors: [{ name: 'Sahara Digital Hub' }],
  creator: 'Sahara Digital Hub',
  publisher: 'Sahara Digital Hub',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://saharadigital.co.ke',
    siteName: 'Sahara Digital Hub',
    title: 'Sahara Digital Hub — Branding & Software for Market Leaders',
    description:
      'Kenyan digital marketing and software engineering studio relaunching in 2026. Visual identity, packaging, OOH, and full-stack software.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahara Digital Hub — Nairobi Branding & Software',
    description: 'High-conviction branding and software development in Nairobi, Kenya.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${grain.variable} ${urbanist.variable} h-full scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-body bg-[#FFFDF6] dark:bg-black text-black dark:text-white selection:bg-[#008035] selection:text-white transition-colors duration-200"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Initial Website Preloader with Sahara Branded Kinetic Typography */}
          <InitialPreloader />

          {/* Skip to Main Content Link for A11y */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md focus:shadow-lg"
          >
            Skip to main content
          </a>

          {/* Global Semantic Header with Notch Navbar */}
          <Header />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1 flex flex-col pt-16" tabIndex={-1}>
            {children}
          </main>

          {/* Global Semantic Footer */}
          <Footer />

          {/* Global Floating AI Assistant Widget */}
          <ChatWidget />

          {/* Cookie consent banner (gates any optional analytics/marketing scripts) */}
          <CookieConsent />
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
