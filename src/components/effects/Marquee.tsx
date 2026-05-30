import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}

const speedMap = {
  slow: "[animation-duration:60s]",
  normal: "[animation-duration:40s]",
  fast: "[animation-duration:25s]",
};

export function Marquee({
  children,
  className,
  reverse = false,
  speed = "normal",
}: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 gap-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          speedMap[speed]
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
