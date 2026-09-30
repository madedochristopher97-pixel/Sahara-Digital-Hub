'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  X,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

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
      text: "Habari! I am the Sahara Hub assistant. Ask me anything about our services, typical timelines, pricing direction, or our Nairobi-based delivery process.",
      timestamp: 'Just now',
    },
  ]);

  const quickQuestions = [
    'What are typical project timelines?',
    'Rough pricing for web development?',
    'Do you support M-Pesa Daraja?',
    'How do branding sprints work?',
    'Connect me directly with the founder',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  // Sensitive keywords that trigger founder escalation
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
        return;
      }

      // Context-aware automated responses
      let replyText =
        'Thank you for asking. Our team provides specialized branding & creative and full-stack software development tailored for East African market leaders.';
      let replyLink: { href: string; label: string } | undefined = undefined;

      if (lower.includes('timeline') || lower.includes('how long') || lower.includes('duration')) {
        replyText =
          'Our Starter Sprints typically deliver in 3–4 weeks. Complete branding overhauls or custom web/mobile platforms take 6–12 weeks, broken into structured weekly review milestones.';
        replyLink = { href: '/about#process', label: 'View our 4-phase process' };
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('budget')) {
        replyText =
          'Every engagement is custom-scoped around your exact commercial goals and technical deliverables. We prioritize transparent milestone proposals with zero surprise invoices.';
        replyLink = { href: '/contact', label: 'Request a tailored proposal' };
      } else if (lower.includes('m-pesa') || lower.includes('daraja') || lower.includes('payment') || lower.includes('safaricom')) {
        replyText =
          'Yes, absolutely. We build hardened Safaricom Daraja API integrations including Lipa na M-Pesa Online STK Push, C2B Paybill validation/confirmation webhooks, and automated B2C bulk disbursements.';
        replyLink = { href: '/services/software', label: 'See software capabilities' };
      } else if (lower.includes('brand') || lower.includes('logo') || lower.includes('packaging')) {
        replyText =
          'Our branding practice covers complete visual identity systems, typography, master brand books, packaging dielines, and outdoor OOH billboard creative for maximum glance recall.';
        replyLink = { href: '/services/branding', label: 'View branding services' };
      } else if (lower.includes('work') || lower.includes('portfolio') || lower.includes('case stud')) {
        replyText =
          'You can review our featured case studies including Mara Reserve Coffee, Twiga Fleet Logistics, and Savannah FinPay right in our portfolio.';
        replyLink = { href: '/work', label: 'Browse case studies' };
      } else {
        replyText =
          "We're a 100% Nairobi-based studio pairing modern Next.js/TypeScript engineering with bespoke brand craft. Would you like to review our capabilities or start a scoped discovery inquiry?";
        replyLink = { href: '/contact', label: 'Start a project inquiry' };
      }

      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        link: replyLink,
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 650);
  };

  const handleEscalationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!escalationForm.name || (!escalationForm.email && !escalationForm.phone)) return;

    /**
     * =========================================================================
     * BACKEND INTEGRATION POINT:
     * Connect your LLM API (OpenAI/Anthropic/Gemini) or WhatsApp webhook here.
     * Example:
     * await fetch('/api/escalate-to-founder', {
     *   method: 'POST',
     *   body: JSON.stringify({ ...escalationForm, chatHistory: messages })
     * });
     * =========================================================================
     */
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
            className="w-[calc(100vw-32px)] sm:w-[400px] h-[540px] max-h-[85vh] bg-[#FFFDF6] dark:bg-[#121212] border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black text-[#FFFDF6] px-5 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#008035] flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">Sahara Hub Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/70">
                    <span className="w-2 h-2 rounded-full bg-[#008035] animate-pulse" />
                    <span>Nairobi EAT · Self-Serve Knowledge</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
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
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm bg-[#FFFDF6] dark:bg-[#121212]">
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
                        ? 'bg-black text-[#FFFDF6] dark:bg-white dark:text-black rounded-br-xs'
                        : msg.sender === 'system'
                        ? 'bg-[#008035]/15 text-[#008035] border border-[#008035]/30 rounded-lg text-xs font-semibold'
                        : 'bg-[#F6F3E9] text-black dark:bg-[#1C1C1E] dark:text-white border border-black/5 dark:border-white/10 rounded-bl-xs'
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
                    <p>{msg.text}</p>

                    {msg.link && (
                      <div className="mt-2.5 pt-2 border-t border-black/10 dark:border-white/10">
                        <Link
                          href={msg.link.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#008035] hover:underline"
                        >
                          <span>{msg.link.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-[#595854] dark:text-[#A1A1AA] mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}

              {/* Typing State */}
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

              {/* Escalation Form In-Thread */}
              {isEscalating && !escalationSubmitted && (
                <div className="bg-white dark:bg-[#18181B] border-2 border-[#008035] rounded-2xl p-4 shadow-md space-y-3 mt-2">
                  <div className="flex items-center gap-2 text-black dark:text-white">
                    <ShieldAlert className="w-4 h-4 text-[#008035]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                      Direct Leadership Handoff
                    </h4>
                  </div>
                  <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">
                    Provide your contact info to receive an executive response from our founder:
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
                      placeholder="Topic or requirement summary..."
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

            {/* Quick Prompt Pills */}
            <div className="px-3 py-2 bg-[#F6F3E9] dark:bg-[#161616] border-t border-black/5 dark:border-white/10 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5 shrink-0">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-[#202024] text-black dark:text-white border border-black/10 dark:border-white/10 hover:border-[#008035] hover:text-[#008035] transition-colors shrink-0 cursor-pointer"
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
                  placeholder="Ask a question or request founder..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 text-xs px-3.5 py-2.5 bg-[#F6F3E9] dark:bg-[#1C1C1E] text-black dark:text-white rounded-full border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#008035]"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-40 disabled:pointer-events-none transition-colors shrink-0 cursor-pointer"
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
