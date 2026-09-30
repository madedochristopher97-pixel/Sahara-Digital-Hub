'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, MessageSquare } from 'lucide-react';

export function PricingAssistantCard() {
  const handleOpenChat = () => {
    const chatButton = document.querySelector(
      'button[aria-label="Open Sahara Hub Virtual Assistant"]'
    ) as HTMLButtonElement | null;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <Card variant="surface" padding="md" className="space-y-4 border-black/10 dark:border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#008035] text-white flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-display font-bold text-base text-black dark:text-white">
            Need Custom Negotiation?
          </h4>
          <p className="text-xs text-[#595854] dark:text-[#A1A1AA]">
            Use the Sahara Assistant for instant answers
          </p>
        </div>
      </div>

      <p className="text-xs text-[#595854] dark:text-[#A1A1AA] leading-relaxed">
        Our chatbot can clarify technical details or escalate you directly to the founder
        for specialized non-disclosure agreements and enterprise retainer inquiries.
      </p>

      <div className="pt-1">
        <Button
          onClick={handleOpenChat}
          variant="primary"
          size="sm"
          icon={<MessageSquare className="w-4 h-4" />}
        >
          Chat with Our Assistant Instead
        </Button>
      </div>
    </Card>
  );
}
