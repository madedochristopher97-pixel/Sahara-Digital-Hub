'use client';

import { useSyncExternalStore } from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

/**
 * Global Lenis smooth scrolling. Falls back to native scrolling for visitors who
 * prefer reduced motion. Add `data-lenis-prevent` to nested scrollable elements.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: !reduceMotion, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
