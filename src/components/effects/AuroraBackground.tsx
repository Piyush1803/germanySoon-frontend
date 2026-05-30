import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute inset-0 mesh-bg opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-1/2 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-gold/15 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[90px]"
        aria-hidden
      />
      {children}
    </div>
  );
}
