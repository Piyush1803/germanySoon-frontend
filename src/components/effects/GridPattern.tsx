import { cn } from "@/lib/utils";

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.35]",
        className
      )}
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--border) / 0.6) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--border) / 0.6) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)",
      }}
    />
  );
}
