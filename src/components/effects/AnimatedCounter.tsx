import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
  duration?: number;
}

function parseNumericValue(value: string): {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
} {
  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: value, decimals: 0 };
  }
  const numStr = match[2].replace(/,/g, "");
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix: match[1],
    number: parseFloat(numStr),
    suffix: match[3],
    decimals,
  };
}

export function AnimatedCounter({
  value,
  label,
  className,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = usePrefersReducedMotion();
  const parsed = parseNumericValue(value);
  const [display, setDisplay] = useState(reduced ? parsed.number : 0);

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(parsed.number);
      return;
    }

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parsed.number * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, parsed.number, duration, reduced]);

  const formatted =
    parsed.decimals > 0
      ? display.toFixed(parsed.decimals)
      : Math.round(display).toString();

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="font-display text-3xl font-bold text-brand-gold md:text-5xl">
        {parsed.prefix}
        {formatted}
        {parsed.suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
        {label}
      </div>
    </div>
  );
}
