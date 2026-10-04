import type { Metadata } from 'next';
import Link from 'next/link';
import { brandTokens } from '@/lib/tokens';
import { CookieSettingsButton } from '@/components/ui/CookieConsent';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Sahara Digital Hub uses cookies and similar technologies, and how to manage your choices.',
  alternates: { canonical: '/cookies' },
};

const h2 = 'font-display font-bold text-xl text-black dark:text-white';
const strong = 'text-black dark:text-white';

export default function CookiePolicyPage() {
  return (
    <div className="py-20 sm:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
      <header className="space-y-2">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white">Cookie Policy</h1>
        <p className="text-sm">Last updated: 4 October 2026</p>
      </header>

      <section className="space-y-2">
        <h2 className={h2}>What are cookies?</h2>
        <p>
          Cookies and similar technologies (such as local storage) are small pieces of data stored on your
          device when you visit a website. They help a site work, remember your preferences, and understand
          how it is used.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2}>What we use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className={strong}>Strictly necessary:</strong> storing your cookie choice and your
            light/dark theme preference. These do not need consent.
          </li>
          <li>
            <strong className={strong}>Analytics (optional):</strong> we use Google Analytics 4, provided by
            Google, to understand which pages are visited and how visitors find and use the site. It sets
            the cookies <code>_ga</code> and <code>_ga_*</code> (up to two years) and only loads after you
            choose &ldquo;Accept all&rdquo;. It records pages viewed, approximate location, device and
            browser type, and referring site. We have IP anonymisation switched on. Google may process this
            data on servers outside Kenya.
          </li>
          <li>
            <strong className={strong}>Marketing (optional):</strong> if we use advertising or retargeting
            pixels, they will only run after you accept.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2}>Managing your choices</h2>
        <p>
          You can change or withdraw your consent at any time using the button below. If you withdraw
          consent, analytics stops straight away and we remove the Google Analytics cookies from your
          browser. You can also block or delete cookies in your browser settings. Blocking necessary
          storage may affect site features.
        </p>
        <CookieSettingsButton />
      </section>

      <section className="space-y-2">
        <h2 className={h2}>Contact</h2>
        <p>
          Questions? Email{' '}
          <a className="underline" href={`mailto:${brandTokens.agency.email}`}>
            {brandTokens.agency.email}
          </a>
          . See also our{' '}
          <Link className="underline" href="/privacy">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
