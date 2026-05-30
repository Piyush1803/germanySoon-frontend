import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

export function Spotlight({ children, className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setOpacity(0)}
      className={cn("relative overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(45 100% 51% / 0.12), transparent 40%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  );
}
