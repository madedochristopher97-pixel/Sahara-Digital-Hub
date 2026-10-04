import type { Metadata } from 'next';
import Link from 'next/link';
import { brandTokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Sahara Digital Hub collects, uses and protects personal data under the Kenya Data Protection Act.',
  alternates: { canonical: '/privacy' },
};

const h2 = 'font-display font-bold text-xl text-black dark:text-white';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 sm:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
      <header className="space-y-2">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-black dark:text-white">Privacy Policy</h1>
        <p className="text-sm">Last updated: 4 October 2026</p>
      </header>

      <section className="space-y-2">
        <h2 className={h2}>Who we are</h2>
        <p>
          Sahara Digital Hub ({brandTokens.agency.address}) is the data controller for personal data collected
          through this website.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2}>Data we collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Details you give us through quote and contact forms or the chat assistant (name, email, phone,
            project details).
          </li>
          <li>
            Technical and usage data (pages visited, approximate location, device and browser type,
            referring site) collected through Google Analytics, only where you have accepted analytics
            cookies. Google acts as our processor for this data and may process it outside Kenya.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2}>How we use it</h2>
        <p>
          To respond to enquiries, prepare quotations, deliver services, improve the website, and meet legal
          obligations. We do not sell personal data.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2}>Your rights</h2>
        <p>
          Under the Kenya Data Protection Act, 2019 you may request access to, correction of, or deletion of
          your personal data, and object to processing. Contact{' '}
          <a className="underline" href={`mailto:${brandTokens.agency.email}`}>
            {brandTokens.agency.email}
          </a>
          . You may also complain to the Office of the Data Protection Commissioner.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2}>Cookies</h2>
        <p>
          See our{' '}
          <Link className="underline" href="/cookies">
            Cookie Policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
