'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ArrowUpRight,
  Home,
  User,
  Sparkles,
  Layers,
  CreditCard,
  Menu,
  X,
  Sun,
  Moon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NotchNavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  items?: {
    left: NavItem[];
    right: NavItem[];
  };
  ctaLabel?: string;
  ctaHref?: string;
}

// Helper component for navigation links
const NavLink = ({
  href,
  icon: Icon,
  label,
  isActive,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive?: boolean;
}) => (
  <Link
    href={href}
    className={cn(
      'group flex items-center gap-1.5 text-xs lg:text-sm font-medium transition-colors whitespace-nowrap py-1 px-2 rounded-full',
      isActive
        ? 'text-[#008035] bg-[#008035]/10 font-semibold'
        : 'text-foreground/75 hover:text-foreground hover:bg-foreground/5'
    )}
  >
    <Icon className={cn('w-3.5 h-3.5 lg:w-4 lg:h-4 transition-opacity', isActive ? 'opacity-100 text-[#008035]' : 'opacity-70 group-hover:opacity-100')} />
    <span>{label}</span>
  </Link>
);

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// Theme Toggle for Mobile Drawer
const MobileThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-foreground/5 transition-colors text-foreground/70 hover:text-foreground cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-[#ffc53d]" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export function NotchNavbar({
  className,
  logo,
  items,
  ctaLabel = 'Start a Project',
  ctaHref = '/contact',
  ...props
}: NotchNavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Close mobile drawer on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Default Sahara Digital Hub navigation links
  const navItems = items || {
    left: [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Services', href: '/services/branding', icon: Sparkles },
      { label: 'Work', href: '/work', icon: Layers },
    ],
    right: [
      { label: 'Pricing', href: '/pricing', icon: CreditCard },
      { label: 'About', href: '/about', icon: User },
      { label: 'Contact', href: '/contact', icon: ArrowUpRight },
    ],
  };

  return (
    <>
      <header
        role="banner"
        className={cn('fixed top-0 inset-x-0 z-50 h-16 flex px-0 pointer-events-auto', className)}
        {...props}
      >
        {/* Left Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[#FFFDF6] dark:bg-[#0A0A0A] z-20 relative min-w-0 transition-colors">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeWidth={0.5}
              className="text-foreground"
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeWidth={0.5}
              className="text-foreground"
            />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          {/* Left Slice (Corner Curve) */}
          <div className="w-[50px] h-full relative shrink-0">
            {/* Notch Background Geometry */}
            <div
              className="absolute inset-0 bg-[#FFFDF6] dark:bg-[#0A0A0A] transition-colors"
              style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }}
            />
            {/* Architectural Outline Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path
                d="M0 39.5 C25 39.5 25 63.5 50 63.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.08}
                strokeWidth={0.5}
                className="text-foreground"
              />
              <path
                d="M0 36.5 C25 36.5 25 60.5 50 60.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.08}
                strokeWidth={0.5}
                className="text-foreground"
              />
            </svg>
          </div>

          {/* Center Slice (Flexible Content Area) */}
          <div className="flex-1 h-full relative min-w-0 -ml-px">
            {/* Background & Lines Layer */}
            <div className="absolute inset-0 bg-[#FFFDF6] dark:bg-[#0A0A0A] transition-colors">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <line
                  x1="0"
                  y1="63.5"
                  x2="100%"
                  y2="63.5"
                  stroke="currentColor"
                  strokeOpacity={0.08}
                  strokeWidth={0.5}
                  className="text-foreground"
                />
                <line
                  x1="0"
                  y1="60.5"
                  x2="100%"
                  y2="60.5"
                  stroke="currentColor"
                  strokeOpacity={0.08}
                  strokeWidth={0.5}
                  className="text-foreground"
                />
              </svg>
            </div>

            {/* Content Layer */}
            <div className="relative w-full h-full flex items-end justify-between pb-2 px-3 sm:px-4 md:px-6 gap-2 sm:gap-4">
              {/* Desktop Left Nav */}
              <nav aria-label="Primary Navigation Left" className="hidden md:flex gap-2 lg:gap-5 mb-1 shrink-0">
                {navItems.left.map((item) => (
                  <NavLink
                    key={item.label}
                    {...item}
                    isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                  />
                ))}
              </nav>

              {/* Mobile Menu Button (Left) */}
              <button
                type="button"
                className="md:hidden mb-1 p-1 text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Logo (Center) */}
              <div className="flex justify-center shrink-0 mx-2 md:mx-4 mb-0.5">
                {logo || (
                  <Link
                    href="/"
                    className="flex items-center justify-center relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008035] rounded-lg"
                    aria-label="Sahara Digital Hub Home"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/brand/Group.svg"
                      alt="Sahara Digital Hub"
                      className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105 dark:brightness-0 dark:invert"
                    />
                  </Link>
                )}
              </div>

              {/* Desktop Right Nav */}
              <nav aria-label="Primary Navigation Right" className="hidden md:flex gap-2 lg:gap-4 items-center shrink-0 mb-1">
                {navItems.right.map((item) => (
                  <NavLink
                    key={item.label}
                    {...item}
                    isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                  />
                ))}

                <div className="flex gap-2 lg:gap-3 pl-2 sm:pl-3 border-l border-foreground/10 shrink-0 items-center">
                  <ThemeToggle />
                  <Link
                    href={ctaHref}
                    className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-white bg-[#008035] hover:bg-[#006e2e] rounded-full transition-all shadow-xs hover:shadow-sm whitespace-nowrap"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </nav>

              {/* Mobile Right Actions */}
              <div className="md:hidden flex items-center gap-1 mb-1">
                <MobileThemeToggle />
              </div>
            </div>
          </div>

          {/* Right Slice (Corner Curve) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            {/* Notch Background Geometry */}
            <div
              className="absolute inset-0 bg-[#FFFDF6] dark:bg-[#0A0A0A] transition-colors"
              style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }}
            />
            {/* Architectural Outline Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path
                d="M0 63.5 C25 63.5 25 39.5 50 39.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.08}
                strokeWidth={0.5}
                className="text-foreground"
              />
              <path
                d="M0 60.5 C25 60.5 25 36.5 50 36.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.08}
                strokeWidth={0.5}
                className="text-foreground"
              />
            </svg>
          </div>
        </div>

        {/* Right Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[#FFFDF6] dark:bg-[#0A0A0A] z-20 relative min-w-0 -ml-px transition-colors">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeWidth={0.5}
              className="text-foreground"
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeWidth={0.5}
              className="text-foreground"
            />
          </svg>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#FFFDF6] dark:bg-[#0A0A0A] border-b border-foreground/10 p-5 md:hidden shadow-xl"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
              {[...navItems.left, ...navItems.right].map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-xl transition-colors font-medium',
                      isActive
                        ? 'bg-[#008035]/10 text-[#008035] font-semibold'
                        : 'text-foreground/80 hover:bg-foreground/5 hover:text-foreground'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className={cn('w-5 h-5', isActive ? 'text-[#008035]' : 'opacity-70')} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="h-px bg-foreground/10 my-2" />

              <Link
                href={ctaHref}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#008035] hover:bg-[#006e2e] text-white font-semibold transition-colors shadow-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
