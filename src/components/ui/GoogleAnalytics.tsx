'use client';

import { useEffect, useSyncExternalStore } from 'react';
import Script from 'next/script';
import { getCookieConsent, subscribeToCookieConsent } from '@/components/ui/CookieConsent';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Expires every Google Analytics cookie (_ga, _ga_<ID>, _gid, _gat…) we can reach. */
function clearGaCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => /^_ga($|_)|^_gid$|^_gat/.test(name));
  if (names.length === 0) return;

  // GA writes cookies on the registrable domain (e.g. .example.co.ke), so try
  // every parent domain of the current host. Browsers ignore public suffixes.
  const labels = location.hostname.split('.');
  const domains = [undefined as string | undefined];
  for (let i = 0; i < labels.length - 1; i++) domains.push(`.${labels.slice(i).join('.')}`);

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${
        domain ? `; domain=${domain}` : ''
      }; SameSite=Lax`;
    }
  }
}

/**
 * Loads Google Analytics only after the visitor accepts cookies.
 * Renders nothing if NEXT_PUBLIC_GA_ID is not set or consent is not granted.
 * If consent is withdrawn, tracking stops immediately and GA cookies are removed.
 */
export function GoogleAnalytics() {
  // Server snapshot is null, so nothing is rendered until the client knows the choice.
  const consent = useSyncExternalStore(subscribeToCookieConsent, getCookieConsent, () => null);

  useEffect(() => {
    if (!GA_ID) return;
    // Official GA opt-out switch: stops an already-loaded gtag.js from sending hits.
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = consent !== 'accepted';
    if (consent === 'rejected') clearGaCookies();
  }, [consent]);

  if (!GA_ID || consent !== 'accepted') return null;

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
