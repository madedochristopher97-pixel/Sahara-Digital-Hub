# Sahara Digital Hub — Official Marketing Platform

A high-performance marketing website and self-serve credibility engine for **Sahara Digital Hub**, a Nairobi-based digital marketing, branding, and software engineering agency relaunching in 2026 after being dormant since 2024.

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Brand System & Design Tokens

| Property | Value | Role |
| :--- | :--- | :--- |
| **Primary Accent** | `#008035` | Vibrant Kenya Forest Green |
| **Ink** | `#000000` | Deepest Black for typography & contrast |
| **Paper** | `#FFFDF6` | Warm off-white paper base (not sterile pure `#FFFFFF`) |
| **Surface** | `#F6F3E9` | Subtle warm grey/cream for secondary card layers |
| **Spacing Grid** | 8px Grid | `8px`, `16px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px` |
| **Border Radii** | `20px` & `9999px` | Rounded-2xl cards with soft shadows; pill-shaped buttons |
| **Display Font (Placeholder)** | Space Grotesk (600/700) | Stand-in for *Grain* |
| **Body & UI Font** | Urbanist | Google Fonts via `next/font/google` |

> **Brand Rule Followed:** Green `#008035` and Black `#000000` serve as the two accent moves and are never used at full saturation on the same component. All animations respect `prefers-reduced-motion`.

---

## 📂 Swapping in Real Assets

### 1. Dropping in the Real Logo SVG / PNG
The studio logo assets are already copied into `public/brand/`:
- `public/brand/Group.svg` (Vector SVG mark)
- `public/brand/Sahara Logo@2x.png` (High-resolution raster logo)

In [`src/components/brand/Logo.tsx`](file:///c:/Users/user/OneDrive/Desktop/Sahara%20Hub/src/components/brand/Logo.tsx):
- By default, `Logo` renders the canonical placeholder mark (green circle with black dot + uppercase wordmark).
- To switch to the real SVG mark across the entire site without any layout shifts, simply pass `useSvgAsset={true}` or set the default in `Logo.tsx`:
```tsx
// src/components/brand/Logo.tsx
export function Logo({
  variant = 'lockup',
  inverted = false,
  useSvgAsset = true, // <-- Toggle to true to use /brand/Group.svg
}: LogoProps)
```

### 2. Dropping in the Real "Grain" Font Files
When the official **Grain** (Bold/Extrabold) font files are delivered:
1. Place the font files (`Grain-Bold.woff2`, `Grain-Extrabold.woff2`) into `public/fonts/`.
2. In [`src/app/layout.tsx`](file:///c:/Users/user/OneDrive/Desktop/Sahara%20Hub/src/app/layout.tsx), replace the Google Font `Space_Grotesk` import with `next/font/local`:
```tsx
import localFont from 'next/font/local';

const grainFont = localFont({
  src: [
    { path: '../../public/fonts/Grain-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Grain-Extrabold.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-space-grotesk', // Keep variable name or update to --font-grain
  display: 'swap',
});
```
Because the entire codebase references `var(--font-display)` via [`src/app/globals.css`](file:///c:/Users/user/OneDrive/Desktop/Sahara%20Hub/src/app/globals.css) and `font-display`, **zero component edits are required**.

---

## 🤖 AI Chatbot & Escalation Integration Points

The site includes a floating, non-blocking AI assistant widget (`src/components/chatbot/ChatWidget.tsx`):
- **Knowledge Base:** Answers queries on services, Nairobi delivery timelines, pricing guidance, and case studies.
- **Sensitive Topic Escalation:** Automatically detects sensitive inquiries (negotiations, contracts, complaints, requests for the founder/CEO), pauses automated answers, and transitions to an executive handoff form.
- **Backend Wiring Location:**
  - File: [`src/components/chatbot/ChatWidget.tsx`](file:///c:/Users/user/OneDrive/Desktop/Sahara%20Hub/src/components/chatbot/ChatWidget.tsx#L182-L198)
  - Look for the comment `BACKEND INTEGRATION POINT: Connect your LLM API (OpenAI/Anthropic/Gemini) or WhatsApp webhook here.`

---

## 🗺️ Information Architecture & Routes

| Route | Purpose | Status |
| :--- | :--- | :--- |
| `/` | **Home**: Hero (kicker, plain + green italic headline, overlapping cards), Trust Strip, Services overview, Why Sahara, 3 Featured Case Studies, Verified Testimonial Slots, Pricing Teaser, FAQ, Green CTA Banner. | ✅ Production Ready |
| `/about` | **About**: Founding story, 2024 pause, 2026 relaunch, mission, 4 core principles, leadership slots (`[FOUNDER & CREATIVE DIRECTOR]`, etc.), 4-phase delivery cadence. | ✅ Production Ready |
| `/services/branding` | **Branding & Creative**: Visual identity, brand guidelines, packaging dielines, billboards/OOH, offset print, merch, 3-phase process, pricing hints. | ✅ Production Ready |
| `/services/software` | **Software Development**: Next.js 14 App Router, backend APIs, mobile apps (iOS/Android), M-Pesa Daraja payment automation, SLAs. | ✅ Production Ready |
| `/work` | **Portfolio**: Filter bar (All / Branding / Software) and 6 authentic Kenyan case studies. | ✅ Production Ready |
| `/work/[slug]` | **Case Study Detail**: Pre-rendered static pages for all 6 case studies with Challenge, Approach, Itemized Deliverables, Metrics, and Stakeholder Quotes. | ✅ Production Ready |
| `/pricing` | **Pricing & Calculator**: Explanation of scope-based pricing, 3 package tiers (Starter, Growth, Custom), interactive **Guided Scope Architect** form, and FAQs. | ✅ Production Ready |
| `/contact` | **Contact**: Briefing form, direct WhatsApp line, office telephone, email, and Nairobi headquarters map. | ✅ Production Ready |
| `/blog` | **Editorial Dispatches**: Upcoming Q3 2026 editorial essays preview. | ✅ Clean v1 Stub |
| `/careers` | **Careers & Talent**: Talent roster intake for Nairobi specialists. | ✅ Clean v1 Stub |

---

## 🛠️ Local Development & Build

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Validating & Building for Production
```bash
npm run build
```

### Deploying to Vercel
The project is zero-config ready for Vercel deployment:
```bash
npx vercel
```
