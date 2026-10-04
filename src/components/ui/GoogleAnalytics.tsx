'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { getCookieConsent } from '@/components/ui/CookieConsent';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Loads Google Analytics only after the visitor accepts cookies.
 * Renders nothing if NEXT_PUBLIC_GA_ID is not set or consent is not granted.
 */
export function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getCookieConsent() === 'accepted');
    const onChange = (e: Event) => setAllowed((e as CustomEvent).detail === 'accepted');
    window.addEventListener('sahara-cookie-consent-change', onChange);
    return () => window.removeEventListener('sahara-cookie-consent-change', onChange);
  }, []);

  if (!GA_ID || !allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
