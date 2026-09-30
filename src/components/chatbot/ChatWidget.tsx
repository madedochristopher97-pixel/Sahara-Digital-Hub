'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  X,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  MessageSquare,
  Globe,
  Smartphone,
  Cpu,
  Palette,
  MapPin,
  Clock,
  FileText,
} from 'lucide-react';
import { brandTokens } from '@/lib/tokens';

interface Message {
  id: string;
  sender: 'bot' | 'user' | 'system';
  text: string;
  timestamp: string;
  link?: { href: string; label: string };
  isEscalationPrompt?: boolean;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnreadAlert, setHasUnreadAlert] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  // Escalation state
  const [isEscalating, setIsEscalating] = useState(false);
  const [escalationSubmitted, setEscalationSubmitted] = useState(false);
  const [escalationForm, setEscalationForm] = useState({
    name: '',
    email: '',
    phone: '',
    brief: '',
  });

  const idCounter = useRef(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Habari! I am the Sahara Hub virtual assistant. Ask me anything about our software engineering, brand craft, M-Pesa integrations, quotation process, or our Nairobi studio.',
      timestamp: 'Just now',
    },
  ]);

  // Dynamic suggestion chips based on last interaction
  const [activeSuggestions, setActiveSuggestions] = useState<string[]>([
    'Request a Project Quotation',
    'Web Applications & Systems',
    'Mobile Apps (iOS & Android)',
    'M-Pesa Daraja STK Push',
    'Branding & Packaging',
    'Where is your Nairobi office?',
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  // Sensitive keywords that trigger direct founder escalation
  const sensitiveKeywords = [
    'negotiat',
    'discount',
    'contract',
    'nda',
    'complaint',
    'sue',
    'legal',
    'dispute',
    'founder',
    'ceo',
    'director',
    'partnership',
    'equity',
  ];

  // Comprehensive Realtime Response Engine
  const generateResponse = (rawQuery: string): { replyText: string; replyLink?: { href: string; label: string }; nextSuggestions: string[] } => {
    const q = rawQuery.toLowerCase();

    // 1. Quotation & Pricing
    if (
      q.includes('quote') ||
      q.includes('quotation') ||
      q.includes('price') ||
      q.includes('pricing') ||
      q.includes('cost') ||
      q.includes('how much') ||
      q.includes('budget') ||
      q.includes('rate') ||
      q.includes('fee') ||
      q.includes('rfq') ||
      q.includes('proposal')
    ) {
      return {
        replyText:
          'We operate on an itemized, milestone-based quotation model rather than arbitrary fixed prices. Every project is scoped according to your exact creative and technical deliverables, with 100% intellectual property ownership and zero surprise invoices. You can configure your scope and receive a formal quotation within 24 business hours.',
        replyLink: { href: '/pricing#quote', label: 'Submit Request for Quotation (RFQ)' },
        nextSuggestions: [
          'What are typical project timelines?',
          'Do you build Web Applications?',
          'Chat directly with Founder',
        ],
      };
    }

    // 2. M-Pesa & Payment Gateways
    if (
      q.includes('m-pesa') ||
      q.includes('mpesa') ||
      q.includes('daraja') ||
      q.includes('stk') ||
      q.includes('paybill') ||
      q.includes('till') ||
      q.includes('safaricom') ||
      q.includes('payment') ||
      q.includes('pesapal')
    ) {
      return {
        replyText:
          'Yes! We are specialists in Safaricom Daraja API integration. We build Lipa na M-Pesa Online STK Push, C2B Paybill validation and confirmation webhooks, automated B2C payout disbursements, and automated accounting reconciliation with bank ledgers.',
        replyLink: { href: '/services/software', label: 'Explore Systems & APIs' },
        nextSuggestions: [
          'Request an M-Pesa Project Quote',
          'See Savannah FinPay Case Study',
          'What tech stack do you use?',
        ],
      };
    }

    // 3. Web Applications & Frontend
    if (
      q.includes('web app') ||
      q.includes('website') ||
      q.includes('next.js') ||
      q.includes('nextjs') ||
      q.includes('frontend') ||
      q.includes('portal') ||
      q.includes('dashboard') ||
      q.includes('landing page')
    ) {
      return {
        replyText:
          'We engineer ultra-fast modern Web Applications using Next.js App Router, TypeScript, and Tailwind CSS. All platforms achieve 90+ Lighthouse performance scores, mobile-first responsive interfaces, and strict accessibility standards built for Kenyan and global networks.',
        replyLink: { href: '/services/software', label: 'Explore Web Applications' },
        nextSuggestions: [
          'Request a Web Application Quote',
          'Do you build mobile apps too?',
          'What about Backend Systems?',
        ],
      };
    }

    // 4. Mobile Apps (iOS & Android)
    if (
      q.includes('mobile') ||
      q.includes('ios') ||
      q.includes('android') ||
      q.includes('react native') ||
      q.includes('flutter') ||
      q.includes('phone app') ||
      q.includes('app store') ||
      q.includes('play store')
    ) {
      return {
        replyText:
          'We build cross-platform Mobile Applications for iOS and Android using React Native. Our apps feature offline data synchronization with local SQLite caching, biometric authentication, push notifications, and hardware sensor integrations designed for African mobile connectivity.',
        replyLink: { href: '/services/software', label: 'Explore Mobile Capabilities' },
        nextSuggestions: [
          'Request a Mobile App Quote',
          'See Twiga Fleet Case Study',
          'How long does a mobile app take?',
        ],
      };
    }

    // 5. Backend Systems & APIs
    if (
      q.includes('system') ||
      q.includes('backend') ||
      q.includes('api') ||
      q.includes('database') ||
      q.includes('postgres') ||
      q.includes('sql') ||
      q.includes('server') ||
      q.includes('microservice') ||
      q.includes('cloud')
    ) {
      return {
        replyText:
          'Our Systems engineering covers resilient REST & GraphQL APIs, relational PostgreSQL architectures, role-based access control (RBAC), and cloud infrastructure. We design backend systems for data integrity, sub-second latency, and seamless horizontal scale.',
        replyLink: { href: '/services/software', label: 'Explore Systems Architecture' },
        nextSuggestions: [
          'Request a Systems Quote',
          'Can you integrate M-Pesa Daraja?',
          'Who owns the source code?',
        ],
      };
    }

    // 6. UI/UX Design & Prototypes
    if (
      q.includes('ui') ||
      q.includes('ux') ||
      q.includes('figma') ||
      q.includes('wireframe') ||
      q.includes('prototype') ||
      q.includes('user interface') ||
      q.includes('user experience')
    ) {
      return {
        replyText:
          'We design human-centered UI/UX systems in Figma. Every project includes interactive clickable prototypes, documented design tokens, and user flow architectures tested against real user behavior before code is written.',
        replyLink: { href: '/services', label: 'Explore UI/UX Capabilities' },
        nextSuggestions: [
          'Request UI/UX Design Quote',
          'Do you also do development?',
          'See Past Case Studies',
        ],
      };
    }

    // 7. Branding & Logo Design
    if (
      q.includes('brand') ||
      q.includes('logo') ||
      q.includes('identity') ||
      q.includes('rebrand') ||
      q.includes('style guide') ||
      q.includes('typography')
    ) {
      return {
        replyText:
          'Our Branding practice sculpts distinctive visual identities: primary marks, responsive logos, color hierarchies, custom typography pairings, and comprehensive 40+ page master brand manuals that command commercial authority across East Africa.',
        replyLink: { href: '/services/branding', label: 'Explore Branding Practice' },
        nextSuggestions: [
          'Request a Branding Quote',
          'Do you design Packaging too?',
          'See Mara Reserve Coffee Work',
        ],
      };
    }

    // 8. Packaging, Print & Billboards (OOH)
    if (
      q.includes('packag') ||
      q.includes('print') ||
      q.includes('dieline') ||
      q.includes('box') ||
      q.includes('label') ||
      q.includes('pouch') ||
      q.includes('billboard') ||
      q.includes('ooh') ||
      q.includes('outdoor') ||
      q.includes('merch') ||
      q.includes('t-shirt')
    ) {
      return {
        replyText:
          'We deliver shelf-ready retail packaging dielines, luxury offset printing (spot UV, metallic foil, textured stocks), custom corporate merchandise, and high-impact highway billboard (OOH) specs engineered for Nairobi glance-time recall.',
        replyLink: { href: '/services/branding', label: 'Explore Packaging & Print' },
        nextSuggestions: [
          'Request Packaging Quotation',
          'See Mara Reserve Packaging',
          'Where is your Nairobi office?',
        ],
      };
    }

    // 9. Timelines & Methodology
    if (
      q.includes('timeline') ||
      q.includes('how long') ||
      q.includes('duration') ||
      q.includes('process') ||
      q.includes('weeks') ||
      q.includes('turnaround') ||
      q.includes('sprint')
    ) {
      return {
        replyText:
          'Our Starter Sprints deliver within 3–4 weeks. Comprehensive brand repositioning or full-stack software platforms typically take 6–12 weeks. We work in structured agile sprints with bi-weekly clickable review builds so you see steady, measurable progress.',
        replyLink: { href: '/about#process', label: 'See our 4-phase methodology' },
        nextSuggestions: [
          'Request a Sprint Quotation',
          'Who owns the source code?',
          'Do you offer ongoing SLAs?',
        ],
      };
    }

    // 10. Location, In-Person Meetings & Nairobi Office
    if (
      q.includes('where') ||
      q.includes('location') ||
      q.includes('office') ||
      q.includes('nairobi') ||
      q.includes('meet') ||
      q.includes('visit') ||
      q.includes('address') ||
      q.includes('in person')
    ) {
      return {
        replyText:
          'Our studio is located at Aqua Plaza, Muranga Road in Nairobi, Kenya. We welcome in-person discovery meetings over Kenyan coffee, as well as hybrid video conferences via Google Meet.',
        replyLink: { href: '/contact', label: 'Schedule an in-person meeting' },
        nextSuggestions: [
          'Chat on WhatsApp with Founder',
          'Request a Project Quotation',
          'What services do you offer?',
        ],
      };
    }

    // 11. Intellectual Property & Code Ownership
    if (
      q.includes('own') ||
      q.includes('ip') ||
      q.includes('copyright') ||
      q.includes('source code') ||
      q.includes('rights') ||
      q.includes('license')
    ) {
      return {
        replyText:
          'You own 100% of the code, vector assets, and brand design upon settlement of project milestones. We do not hold intellectual property hostage or impose restrictive licensing terms.',
        replyLink: { href: '/pricing#faq', label: 'Review Commercial Terms' },
        nextSuggestions: [
          'Request a Project Quotation',
          'What are your payment milestones?',
          'See Past Case Studies',
        ],
      };
    }

    // 12. Case Studies & Portfolio
    if (
      q.includes('work') ||
      q.includes('portfolio') ||
      q.includes('case stud') ||
      q.includes('example') ||
      q.includes('client') ||
      q.includes('past work')
    ) {
      return {
        replyText:
          'Our portfolio includes Mara Reserve Coffee (FMCG packaging & identity), Twiga Fleet Logistics (dispatch platform & mobile app), Savannah FinPay (FinTech portal & Daraja M-Pesa), Boma Living, and AfriHealth Diagnostics.',
        replyLink: { href: '/work', label: 'View All Case Studies' },
        nextSuggestions: [
          'Request a Project Quotation',
          'Do you build Web Applications?',
          'Where is your office located?',
        ],
      };
    }

    // 13. Direct Contact / WhatsApp
    if (
      q.includes('contact') ||
      q.includes('whatsapp') ||
      q.includes('phone') ||
      q.includes('call') ||
      q.includes('email') ||
      q.includes('reach') ||
      q.includes('speak')
    ) {
      return {
        replyText:
          `You can reach us at ${brandTokens.agency.email}, call ${brandTokens.agency.phone}, or chat directly with our studio leadership on WhatsApp for an immediate response during EAT business hours.`,
        replyLink: { href: brandTokens.agency.whatsappUrl, label: 'Open WhatsApp Direct Chat' },
        nextSuggestions: [
          'Request a Project Quotation',
          'Where is your Nairobi office?',
          'View Case Studies',
        ],
      };
    }

    // 14. Friendly Greetings & Conversational
    if (
      q === 'hi' ||
      q === 'hello' ||
      q === 'hey' ||
      q === 'habari' ||
      q === 'sasa' ||
      q === 'jambo' ||
      q === 'mambo' ||
      q.startsWith('hi ') ||
      q.startsWith('hello ') ||
      q.startsWith('habari ')
    ) {
      return {
        replyText:
          'Habari! Welcome to Sahara Digital Hub. We are a Nairobi-based branding & software studio. How can I help you today? Would you like to request a quotation, explore our capabilities, or discuss a specific project?',
        replyLink: { href: '/services', label: 'Explore All Capabilities' },
        nextSuggestions: [
          'Request a Project Quotation',
          'Web Applications & Systems',
          'Mobile Apps (iOS & Android)',
          'Branding & Packaging',
        ],
      };
    }

    // Fallback: Smart Studio Summary with Scope CTA
    return {
      replyText:
        'Sahara Digital Hub is a Nairobi studio unifying Brand Craft (visual identities, packaging, billboards) and Software Engineering (Next.js web apps, mobile apps, M-Pesa Daraja APIs). Tell me a little about your project or request a quotation below.',
      replyLink: { href: '/pricing#quote', label: 'Request a Project Quotation' },
      nextSuggestions: [
        'Request a Project Quotation',
        'Web Applications & Systems',
        'Branding & Packaging',
        'Connect with Founder on WhatsApp',
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: Message = {
      id: `user-${idCounter.current++}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    const lower = text.toLowerCase();
    const isSensitive = sensitiveKeywords.some((word) => lower.includes(word));

    setTimeout(() => {
      setIsTyping(false);

      if (isSensitive) {
        // Trigger Escalation Protocol
        setIsEscalating(true);
        const botResponse: Message = {
          id: `bot-${idCounter.current++}`,
          sender: 'bot',
          text: 'This inquiry touches on commercial negotiations, executive terms, or strategic leadership. I am routing this directly to the Founder & CEO of Sahara Digital Hub.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isEscalationPrompt: true,
        };
        setMessages((prev) => [...prev, botResponse]);
        setActiveSuggestions([
          'Submit Contact Info for Founder',
          'Chat on WhatsApp Directly',
          'Request Standard Quotation',
        ]);
        return;
      }

      // Generate contextual response
      const { replyText, replyLink, nextSuggestions } = generateResponse(text);

      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        link: replyLink,
      };

      setMessages((prev) => [...prev, botResponse]);
      setActiveSuggestions(nextSuggestions);
    }, 450);
  };

  const handleEscalationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!escalationForm.name || (!escalationForm.email && !escalationForm.phone)) return;

    console.log('[Escalation Dispatched to Founder]', escalationForm);

    setEscalationSubmitted(true);
    setIsEscalating(false);

    const confirmationMessage: Message = {
      id: `sys-${idCounter.current++}`,
      sender: 'system',
      text: `Direct handoff confirmed for ${escalationForm.name}. A notification has been dispatched to the Founder & CEO. You will be contacted via WhatsApp/Email shortly.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, confirmationMessage]);
    setActiveSuggestions([
      'Request a Project Quotation',
      'View Past Case Studies',
      'Chat on WhatsApp',
    ]);
  };

  return (
    <aside aria-label="Sahara Digital Hub Assistant" className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0.8, opacity: 0 }}
            animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
            exit={shouldReduceMotion ? {} : { scale: 0.8, opacity: 0 }}
            className="relative"
          >
            {hasUnreadAlert && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008035] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#008035]"></span>
              </span>
            )}

            <button
              type="button"
              onClick={() => {
                setIsOpen(true);
                setHasUnreadAlert(false);
              }}
              className="flex items-center gap-2.5 px-4 py-3 bg-black text-[#FFFDF6] rounded-full shadow-2xl hover:bg-[#1a1a1a] border border-white/20 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008035] cursor-pointer"
              aria-label="Open Sahara Hub Virtual Assistant"
            >
              <div className="w-7 h-7 rounded-full bg-[#008035] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-left leading-tight hidden sm:block pr-1">
                <p className="text-xs font-bold text-white tracking-wide">Ask Sahara</p>
                <p className="text-[10px] text-white/60">Active in Nairobi</p>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16, scale: 0.95 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#FFFDF6] dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header with WhatsApp Quick Link */}
            <div className="bg-black text-[#FFFDF6] px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#008035] flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">Sahara Hub Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/70">
                    <span className="w-2 h-2 rounded-full bg-[#008035] animate-pulse" />
                    <span>Nairobi EAT · Live Knowledge</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={brandTokens.agency.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full text-white/70 hover:text-[#25D366] hover:bg-white/10 transition-colors"
                  title="Switch to WhatsApp Direct Line"
                  aria-label="WhatsApp Direct Line"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm bg-[#FFFDF6] dark:bg-[#121212]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed text-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#008035] text-white rounded-br-xs shadow-xs'
                        : msg.sender === 'system'
                        ? 'bg-[#008035]/15 text-[#008035] border border-[#008035]/30 rounded-lg text-xs font-semibold'
                        : 'bg-[#F6F3E9] text-black dark:bg-[#1C1C1E] dark:text-white border border-black/5 dark:border-white/10 rounded-bl-xs shadow-2xs'
                    }`}
                  >
                    {msg.sender === 'system' && (
                      <div className="flex items-center gap-1.5 mb-1 text-[#008035]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="font-bold uppercase tracking-wider text-[10px]">
                          Executive Escalation
                        </span>
                      </div>
                    )}
                    <p className="leading-relaxed">{msg.text}</p>

                    {msg.link && (
                      <div className="mt-2.5 pt-2 border-t border-black/10 dark:border-white/10">
                        <Link
                          href={msg.link.href}
                          onClick={() => {
                            if (!msg.link?.href.startsWith('http')) {
                              setIsOpen(false);
                            }
                          }}
                          target={msg.link.href.startsWith('http') ? '_blank' : undefined}
                          rel={msg.link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#008035] hover:underline"
                        >
                          <span>{msg.link.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-[#595854] dark:text-[#A1A1AA] mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 bg-[#F6F3E9] dark:bg-[#1C1C1E] rounded-2xl w-fit border border-black/5 dark:border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#008035] animate-bounce" />
                  <span
                    className="w-2 h-2 rounded-full bg-[#008035] animate-bounce"
                    style={{ animationDelay: '0.15s' }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-[#008035] animate-bounce"
                    style={{ animationDelay: '0.3s' }}
                  />
                </div>
              )}

              {/* In-Thread Founder Escalation Form */}
              {isEscalating && !escalationSubmitted && (
                <div className="bg-white dark:bg-[#18181B] border-2 border-[#008035] rounded-2xl p-4 shadow-md space-y-3 mt-2">
                  <div className="flex items-center gap-2 text-black dark:text-white">
                    <ShieldAlert className="w-4 h-4 text-[#008035]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                      Direct Leadership Escalation
                    </h4>
                  </div>
                  <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">
                    Leave your contact details to connect directly with our founder:
                  </p>

                  <form onSubmit={handleEscalationSubmit} className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={escalationForm.name}
                      onChange={(e) =>
                        setEscalationForm({ ...escalationForm, name: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 bg-[#F6F3E9] dark:bg-[#202024] text-black dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-[#008035]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={escalationForm.email}
                      onChange={(e) =>
                        setEscalationForm({ ...escalationForm, email: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 bg-[#F6F3E9] dark:bg-[#202024] text-black dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-[#008035]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp (+254...)"
                      value={escalationForm.phone}
                      onChange={(e) =>
                        setEscalationForm({ ...escalationForm, phone: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 bg-[#F6F3E9] dark:bg-[#202024] text-black dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-[#008035]"
                    />
                    <textarea
                      placeholder="Topic summary or scope overview..."
                      rows={2}
                      value={escalationForm.brief}
                      onChange={(e) =>
                        setEscalationForm({ ...escalationForm, brief: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 bg-[#F6F3E9] dark:bg-[#202024] text-black dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-[#008035] resize-none"
                    />

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="submit"
                        className="flex-1 py-2 px-3 bg-[#008035] text-white text-xs font-semibold rounded-lg hover:bg-[#006e2e] transition-colors cursor-pointer"
                      >
                        Notify Founder
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEscalating(false)}
                        className="py-2 px-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white text-xs font-semibold rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Realtime Dynamic Prompt Suggestions */}
            <div className="px-3 py-2 bg-[#F6F3E9] dark:bg-[#161616] border-t border-black/5 dark:border-white/10 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5 shrink-0">
              {activeSuggestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-[#202024] text-black dark:text-white border border-black/10 dark:border-white/10 hover:border-[#008035] hover:text-[#008035] transition-colors shrink-0 cursor-pointer shadow-2xs"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white dark:bg-[#121212] border-t border-black/10 dark:border-white/10 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask about quotation, systems, apps, branding..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 text-xs px-3.5 py-2.5 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-full border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-full bg-[#008035] text-white flex items-center justify-center hover:bg-[#006e2e] disabled:opacity-40 disabled:pointer-events-none transition-colors shrink-0 cursor-pointer shadow-xs"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
