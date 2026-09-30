'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { brandTokens } from '@/lib/tokens';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Branding & Creative',
    budgetRange: 'KES 250,000 – KES 650,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    /**
     * =========================================================================
     * BACKEND INTEGRATION POINT:
     * Connect your contact form email dispatch (Resend/SendGrid) or CRM webhook here.
     * Example:
     * await fetch('/api/contact', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formData)
     * });
     * =========================================================================
     */
    console.log('[Direct Contact Inquiry Logged]', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 sm:py-20 space-y-20 sm:space-y-28">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Badge variant="green">
            <span className="w-2 h-2 rounded-full bg-[#008035] mr-1" />
            Direct Studio Intake · Nairobi
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Start a project.{' '}
            <span className="italic font-normal text-[#008035]">Direct founder accountability.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#595854] dark:text-[#A1A1AA] font-body leading-relaxed">
            Reach out to our Nairobi team. We review every commercial inquiry with rigor and respond
            within 24 business hours with honest scope alignment.
          </p>
        </div>
      </section>

      {/* 2. Form & Direct Channels Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Direct Channels & Studio Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl text-black dark:text-white">Direct Channels</h2>
              <p className="text-sm text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                Need immediate response or want to send files directly? Use our official channels below.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* WhatsApp Direct */}
              <a
                href={brandTokens.agency.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#008035]/10 border border-[#008035]/30 hover:border-[#008035] flex items-center justify-between transition-all group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#008035] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-black dark:text-white">
                      WhatsApp Business Line
                    </p>
                    <p className="text-xs text-[#008035] font-semibold">
                      Fastest response for quick questions
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#008035] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${brandTokens.agency.email}`}
                className="p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 flex items-center justify-between transition-all group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F6F3E9] dark:bg-[#27272A] text-black dark:text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-black dark:text-white">Official Email</p>
                    <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">{brandTokens.agency.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black dark:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${brandTokens.agency.phone}`}
                className="p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 flex items-center justify-between transition-all group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F6F3E9] dark:bg-[#27272A] text-black dark:text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-black dark:text-white">Office Telephone</p>
                    <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">{brandTokens.agency.phone}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black dark:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Nairobi Studio Card & Stylized Map */}
            <Card variant="surface" padding="md" className="space-y-4 border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008035]" />
                <h3 className="font-display font-bold text-base text-black dark:text-white">
                  Nairobi Headquarters
                </h3>
              </div>

              <p className="text-xs text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
                Aqua Plaza, Muranga Road
                <br />
                Nairobi, Kenya
              </p>

              <div className="flex items-center gap-2 text-xs text-[#595854] dark:text-[#A1A1AA] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#008035]" />
                <span>Operating Hours: Monday – Friday, 8:30 AM – 5:30 PM EAT</span>
              </div>

              {/* Embedded Stylized Map Card */}
              <div className="h-44 bg-white dark:bg-[#1E1E22] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden relative flex flex-col items-center justify-center text-center p-4">
                <div className="w-8 h-8 rounded-full bg-[#008035] text-white flex items-center justify-center font-bold text-xs mb-2">
                  📍
                </div>
                <p className="font-display font-bold text-xs text-black dark:text-white">Aqua Plaza, Muranga Road</p>
                <p className="text-[10px] text-[#595854] dark:text-[#A1A1AA]">Nairobi, Kenya</p>

                <a
                  href="https://maps.google.com/?q=Aqua+Plaza+Muranga+Road+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[11px] font-bold text-[#008035] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card variant="white" padding="lg" className="border border-black/10 dark:border-white/10 shadow-xl space-y-6">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#008035]/10 text-[#008035] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-black dark:text-white">
                    Inquiry Received, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#595854] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have logged your project brief and will follow up
                    at <strong className="text-black dark:text-white">{formData.email}</strong> or via WhatsApp
                    within 24 business hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-display font-bold text-2xl text-black dark:text-white">
                      Project Briefing Form
                    </h2>
                    <p className="text-xs text-[#595854] dark:text-[#A1A1AA] mt-1">
                      Share your goals and we will schedule an executive discovery call.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Kamau"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.co.ke"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                        Phone / WhatsApp (+254...) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                        Primary Interest *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
                      >
                        <option value="Branding & Creative" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">Branding & Creative</option>
                        <option value="Software Development" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">Software Development</option>
                        <option value="Full-Stack (Brand + Software)" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">
                          Full-Stack (Brand + Software)
                        </option>
                        <option value="Packaging & OOH Outdoor" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">Packaging & OOH Outdoor</option>
                        <option value="Enterprise / Retainer SLA" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">Enterprise / Retainer SLA</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                      Approximate Budget Bracket
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
                    >
                      <option value="KES 250,000 – KES 650,000 (Starter)" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">
                        KES 250,000 – KES 650,000 (Starter)
                      </option>
                      <option value="KES 650,000 – KES 1,500,000 (Growth)" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">
                        KES 650,000 – KES 1,500,000 (Growth)
                      </option>
                      <option value="KES 1,500,000 – KES 3,000,000 (Scale)" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">
                        KES 1,500,000 – KES 3,000,000 (Scale)
                      </option>
                      <option value="KES 3,000,000+ (Enterprise)" className="bg-[#FFFDF6] dark:bg-[#1E1E22] text-black dark:text-white">KES 3,000,000+ (Enterprise)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your organization, existing challenges, target timeline, and what success looks like..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-sm p-4 bg-[#F6F3E9] dark:bg-[#1E1E22] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Sending Brief...' : 'Send Project Inquiry'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-[#595854] dark:text-[#A1A1AA] flex items-center gap-1.5 pt-2">
                    <ShieldCheck className="w-4 h-4 text-[#008035]" />
                    <span>
                      All inquiries protected by strict commercial confidentiality. Never shared.
                    </span>
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
