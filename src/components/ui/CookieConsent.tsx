'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'sahara-cookie-consent';
const OPEN_EVENT = 'sahara-cookie-settings';
const CHANGE_EVENT = 'sahara-cookie-consent-change';

export type ConsentChoice = 'accepted' | 'rejected';

/** Returns the stored choice, or null if the visitor has not decided yet. */
export function getCookieConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="mt-2 px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-semibold"
    >
      Cookie settings
    </button>
  );
}

/**
 * Consent banner. Any future analytics/marketing script should only load when
 * getCookieConsent() === 'accepted' (listen for CHANGE_EVENT to react live).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choose = (choice: ConsentChoice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Storage unavailable; the choice applies to this page view only.
    }
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: choice }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[60] p-5 rounded-xl border border-black/10 dark:border-white/10 bg-[#FFFDF6] dark:bg-[#111] text-black dark:text-white shadow-xl space-y-3"
    >
      <p className="text-sm leading-relaxed">
        We use essential storage to run this site, and optional analytics and marketing cookies only if you
        agree. See our{' '}
        <Link href="/cookies" className="underline">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose('rejected')}
          className="flex-1 px-4 py-2 rounded-md border border-black/20 dark:border-white/20 text-sm font-semibold"
        >
          Reject optional
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="flex-1 px-4 py-2 rounded-md bg-[#008035] text-white text-sm font-semibold"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
