import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { brandTokens } from '@/lib/tokens';
import { ArrowUpRight, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-[#121212] text-[#FFFDF6] border-t border-white/10 pt-16 pb-12 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Blurb */}
          <div className="lg:col-span-4 space-y-5">
            <Logo inverted />
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Sahara Digital Hub is a Nairobi-based branding and software studio relaunching in 2026.
              We build market-defining African brand identities and resilient, high-speed digital
              systems for commercial leaders.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#008035] bg-[#008035]/15 border border-[#008035]/30 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#008035] animate-pulse" />
              <span className="font-semibold text-white">Nairobi, Kenya · Est. 2021 · Relaunched 2026</span>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white/90">
              Services & Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#008035] transition-colors font-medium text-white/80 inline-flex items-center gap-1 group"
                >
                  <span>All Capabilities Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="hover:text-[#008035] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Visual Identity & Logos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="hover:text-[#008035] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Brand Guidelines & Stylebooks</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="hover:text-[#008035] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Retail Packaging & Print Dielines</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software"
                  className="hover:text-[#008035] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Website Design & UI/UX Systems</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software"
                  className="hover:text-[#008035] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Next.js Web Platforms & Apps</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software"
                  className="hover:text-[#008035] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Mobile Applications (iOS & Android)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software"
                  className="hover:text-[#008035] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Backend Systems & M-Pesa APIs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Sitemap */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white/90">
              Studio
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Request a Quotation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Sahara
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Studio
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link
                  href="/blog"
                  className="text-xs text-white/40 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Dispatches / Blog</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded">v1 Stub</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-xs text-white/40 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Careers</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded">v1 Stub</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Nairobi Studio */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white/90">
              Nairobi Office
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#008035] shrink-0 mt-1" />
                <span>
                  Aqua Plaza, Muranga Road
                  <br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#008035] shrink-0" />
                <a
                  href={`mailto:${brandTokens.agency.email}`}
                  className="hover:text-[#008035] transition-colors"
                >
                  {brandTokens.agency.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#008035] shrink-0" />
                <a
                  href={`tel:${brandTokens.agency.phone}`}
                  className="hover:text-[#008035] transition-colors"
                >
                  {brandTokens.agency.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#008035] shrink-0" />
                <a
                  href={brandTokens.agency.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#008035] transition-colors"
                >
                  WhatsApp Direct Line
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-white/40 mb-2">Connect:</p>
              <div className="flex items-center gap-3">
                <a
                  href={brandTokens.agency.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors text-xs"
                  aria-label="Sahara LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href={brandTokens.agency.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors text-xs"
                  aria-label="Sahara X Twitter"
                >
                  Twitter/X
                </a>
                <a
                  href={brandTokens.agency.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors text-xs"
                  aria-label="Sahara Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            &copy; {currentYear} Sahara Digital Hub. All rights reserved. Registered in Kenya.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
            <Link href="/pricing#quote" className="hover:text-white text-[#008035] font-semibold flex items-center gap-1">
              <span>Start a Project</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
