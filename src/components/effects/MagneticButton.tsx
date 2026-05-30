import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={reduced ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={cn(className)}
    >
      {children}
    </motion.button>
  );
}
