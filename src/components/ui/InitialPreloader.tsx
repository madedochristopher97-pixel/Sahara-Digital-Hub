"use client";

import React, { useEffect, useState } from "react";
import { KineticTextLoader } from "./KineticTextLoader";

/**
 * InitialPreloader
 * Displays Sahara's branded KineticTextLoader during initial website
 * startup / hydration before smoothly fading out to reveal the full web UI.
 */
export function InitialPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const displayDuration = prefersReducedMotion ? 200 : 900;

    // Minimum display timer for kinetic typography loop
    const timer = setTimeout(() => {
      setIsFading(true);
      // Wait for CSS transition (500ms) to complete before unmounting from DOM
      const cleanupTimer = setTimeout(() => {
        setIsLoading(false);
      }, 550);
      return () => clearTimeout(cleanupTimer);
    }, displayDuration);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Sahara Digital Hub"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FFFDF6] dark:bg-[#0A0A0A] transition-opacity duration-500 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <KineticTextLoader text="Loading" />
    </div>
  );
}

export default InitialPreloader;
