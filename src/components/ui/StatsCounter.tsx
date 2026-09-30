"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, type UseInViewOptions } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatsCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  margin?: UseInViewOptions["margin"];
}

export default function StatsCounter({
  value,
  duration = 1.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  margin = "0px",
}: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export { StatsCounter };

/**
 * Parses metric strings like "+142%", "50+", "99.4%", "< 1.2s", "KES 480M+", "4x"
 * into structured props for StatsCounter.
 */
export function parseMetricToCounterProps(metric: string): StatsCounterProps | null {
  const match = metric.match(/^([^\d.-]*)([-+]?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];
  const value = parseFloat(numStr);
  if (isNaN(value)) return null;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, value, suffix, decimals };
}

/**
 * MetricCounter wraps StatsCounter for arbitrary metric strings,
 * falling back gracefully if no number is found.
 */
export function MetricCounter({
  metric,
  duration = 1.5,
  className,
  margin = "0px",
}: {
  metric: string;
  duration?: number;
  className?: string;
  margin?: UseInViewOptions["margin"];
}) {
  const parsed = parseMetricToCounterProps(metric);
  if (!parsed) return <span className={cn("tabular-nums", className)}>{metric}</span>;
  return (
    <StatsCounter
      value={parsed.value}
      duration={duration}
      prefix={parsed.prefix}
      suffix={parsed.suffix}
      decimals={parsed.decimals}
      className={className}
      margin={margin}
    />
  );
}

