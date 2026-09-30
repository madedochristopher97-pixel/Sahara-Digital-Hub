'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check, Sparkles, Code2, Layers, Send, CheckCircle2 } from 'lucide-react';

export function GuidedQuoteForm() {
  const [projectCategory, setProjectCategory] = useState<'branding' | 'software' | 'both'>('both');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Visual Identity & Logo',
    'Next.js Web Application',
    'M-Pesa Daraja Payment API',
  ]);
  const [budgetRange, setBudgetRange] = useState<string>('KES 650,000 – KES 1,500,000 ($5k–$12k)');
  const [timeline, setTimeline] = useState<string>('4–8 Weeks (Standard Sprint)');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const brandingServices = [
    'Visual Identity & Logo',
    'Brand Guidelines Manual',
    'Packaging Design & Dielines',
    'Billboards & Outdoor Media',
    'Corporate Collateral & Print',
  ];

  const softwareServices = [
    'Next.js Web Application',
    'Mobile App (iOS/Android)',
    'M-Pesa Daraja Payment API',
    'Backend Microservices & DB',
    'SLA Maintenance & Support',
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    /**
     * =========================================================================
     * BACKEND INTEGRATION POINT:
     * Connect your quote submission endpoint or Resend / SendGrid / WhatsApp webhook here.
     * Example:
     * await fetch('/api/quote', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({
     *     projectCategory,
     *     selectedServices,
     *     budgetRange,
     *     timeline,
     *     ...formData,
     *     createdAt: new Date().toISOString()
     *   })
     * });
     * =========================================================================
     */
    console.log('[Quote Request Dispatched]', {
      projectCategory,
      selectedServices,
      budgetRange,
      timeline,
      formData,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <Card
        id="quote-success"
        variant="white"
        padding="lg"
        className="border-2 border-[#008035] shadow-xl text-center space-y-6 max-w-2xl mx-auto"
      >
        <div className="w-16 h-16 rounded-full bg-[#008035]/10 text-[#008035] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <Badge variant="green" size="md">
            Quote Scope Captured
          </Badge>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
            Asante, {formData.name}!
          </h3>
          <p className="text-sm sm:text-base text-[#595854] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
            Your project specification has been logged. Our leadership team in Nairobi will review
            your parameters and send a tailored scope estimate to{' '}
            <strong className="text-black dark:text-white">{formData.email}</strong> within 24 business hours.
          </p>
        </div>

        <div className="p-4 bg-[#F6F3E9] dark:bg-[#1E1E22] rounded-xl text-xs text-left max-w-md mx-auto space-y-1.5 text-[#595854] dark:text-[#A1A1AA]">
          <p>
            <strong className="text-black dark:text-white">Category:</strong> {projectCategory.toUpperCase()}
          </p>
          <p>
            <strong className="text-black dark:text-white">Budget Bracket:</strong> {budgetRange}
          </p>
          <p>
            <strong className="text-black dark:text-white">Timeline:</strong> {timeline}
          </p>
          <p>
            <strong className="text-black dark:text-white">Services:</strong> {selectedServices.join(', ')}
          </p>
        </div>

        <div className="pt-2">
          <Button
            onClick={() => setSubmitted(false)}
            variant="secondary"
            size="sm"
          >
            Configure Another Project Scope
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card
      id="quote"
      as="section"
      variant="white"
      padding="lg"
      className="border border-black/10 dark:border-white/10 shadow-xl max-w-4xl mx-auto space-y-8"
    >
      <div className="space-y-2">
        <Badge variant="green" size="md">
          Step-by-Step Scope Architect
        </Badge>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-black dark:text-white">
          Configure Your Project Parameters
        </h2>
        <p className="text-sm text-[#595854] dark:text-[#A1A1AA]">
          Select your requirements below to receive a realistic, fixed-milestone cost proposal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: Project Category */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white block">
            1. Select Engagement Track
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setProjectCategory('branding')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                projectCategory === 'branding'
                  ? 'border-[#008035] bg-[#008035]/5 ring-1 ring-[#008035]'
                  : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 bg-white dark:bg-[#1C1C1E]'
              }`}
            >
              <Sparkles className="w-5 h-5 text-[#008035] mb-2" />
              <p className="font-display font-bold text-sm text-black dark:text-white">Branding & Creative</p>
              <p className="text-xs text-[#595854] dark:text-[#A1A1AA] mt-1">Identity, packaging & OOH</p>
            </button>

            <button
              type="button"
              onClick={() => setProjectCategory('software')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                projectCategory === 'software'
                  ? 'border-black dark:border-white bg-black/5 dark:bg-white/10 ring-1 ring-black dark:ring-white'
                  : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 bg-white dark:bg-[#1C1C1E]'
              }`}
            >
              <Code2 className="w-5 h-5 text-black dark:text-white mb-2" />
              <p className="font-display font-bold text-sm text-black dark:text-white">Software Engineering</p>
              <p className="text-xs text-[#595854] dark:text-[#A1A1AA] mt-1">Next.js, mobile & APIs</p>
            </button>

            <button
              type="button"
              onClick={() => setProjectCategory('both')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                projectCategory === 'both'
                  ? 'border-[#008035] bg-[#008035]/10 ring-2 ring-[#008035]'
                  : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 bg-white dark:bg-[#1C1C1E]'
              }`}
            >
              <Layers className="w-5 h-5 text-[#008035] mb-2" />
              <p className="font-display font-bold text-sm text-black dark:text-white">Full-Stack Unified</p>
              <p className="text-xs text-[#595854] dark:text-[#A1A1AA] mt-1">Brand + Software Combined</p>
            </button>
          </div>
        </div>

        {/* Step 2: Specific Services Needed */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white block">
            2. Scope Inclusions (Check all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(projectCategory === 'branding' || projectCategory === 'both'
              ? brandingServices
              : []
            ).map((srv) => {
              const active = selectedServices.includes(srv);
              return (
                <button
                  type="button"
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`p-3 rounded-lg border text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    active
                      ? 'border-[#008035] bg-[#008035]/10 text-black dark:text-white'
                      : 'border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1E] text-[#595854] dark:text-[#A1A1AA] hover:border-black/30 dark:hover:border-white/30'
                  }`}
                >
                  <span>{srv}</span>
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      active ? 'bg-[#008035] text-white' : 'border border-black/20 dark:border-white/20'
                    }`}
                  >
                    {active && <Check className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}

            {(projectCategory === 'software' || projectCategory === 'both'
              ? softwareServices
              : []
            ).map((srv) => {
              const active = selectedServices.includes(srv);
              return (
                <button
                  type="button"
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`p-3 rounded-lg border text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    active
                      ? 'border-black dark:border-white bg-black/5 dark:bg-white/10 text-black dark:text-white'
                      : 'border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1E] text-[#595854] dark:text-[#A1A1AA] hover:border-black/30 dark:hover:border-white/30'
                  }`}
                >
                  <span>{srv}</span>
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      active ? 'bg-black text-white dark:bg-white dark:text-black' : 'border border-black/20 dark:border-white/20'
                    }`}
                  >
                    {active && <Check className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Budget Range & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white block">
              3. Anticipated Budget Range
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-xl border border-black/15 dark:border-white/15 focus:outline-none focus:ring-2 focus:ring-[#008035] font-body"
            >
              <option value="KES 250,000 – KES 500,000 ($1.9k–$3.9k)">
                KES 250,000 – KES 500,000 ($1.9k–$3.9k)
              </option>
              <option value="KES 650,000 – KES 1,500,000 ($5k–$12k)">
                KES 650,000 – KES 1,500,000 ($5k–$12k)
              </option>
              <option value="KES 1,500,000 – KES 3,000,000 ($12k–$24k)">
                KES 1,500,000 – KES 3,000,000 ($12k–$24k)
              </option>
              <option value="KES 3,000,000+ ($24k+ Enterprise Scope)">
                KES 3,000,000+ ($24k+ Enterprise Scope)
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white block">
              4. Target Launch Window
            </label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-xl border border-black/15 dark:border-white/15 focus:outline-none focus:ring-2 focus:ring-[#008035] font-body"
            >
              <option value="Immediate Sprint (Within 3–4 Weeks)">
                Immediate Sprint (Within 3–4 Weeks)
              </option>
              <option value="4–8 Weeks (Standard Sprint)">
                4–8 Weeks (Standard Sprint)
              </option>
              <option value="2–3 Months (Comprehensive Build)">
                2–3 Months (Comprehensive Build)
              </option>
              <option value="Flexible / Phased Roadmap">
                Flexible / Phased Roadmap
              </option>
            </select>
          </div>
        </div>

        {/* Step 4: Contact Details */}
        <div className="space-y-4 pt-4 border-t border-black/10 dark:border-white/10">
          <label className="text-xs font-bold uppercase tracking-wider text-black dark:text-white block">
            5. Where Should We Send Your Scope Estimate?
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
            />
            <input
              type="text"
              placeholder="Company or Brand Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
            />
            <input
              type="email"
              required
              placeholder="Work Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
            />
            <input
              type="tel"
              required
              placeholder="Phone or WhatsApp Number (+254...) *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-sm px-4 py-3 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
            />
          </div>

          <textarea
            placeholder="Brief overview of project goals, existing assets, or specific requirements..."
            rows={3}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className="w-full text-sm p-4 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035] resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            size="lg"
            variant="primary"
            disabled={isSubmitting}
            icon={<Send className="w-4 h-4" />}
          >
            {isSubmitting ? 'Calculating Scope...' : 'Submit Guided Scope Request'}
          </Button>
          <span className="text-xs text-[#595854] dark:text-[#A1A1AA]">
            ⚡ Response within 24 hours · Strict non-disclosure honored
          </span>
        </div>
      </form>
    </Card>
  );
}
