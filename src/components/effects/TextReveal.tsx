import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  highlight?: string;
  as?: "h1" | "h2" | "h3" | "p";
}

export function TextReveal({
  text,
  className,
  highlight,
  as: Tag = "h2",
}: TextRevealProps) {
  const reduced = usePrefersReducedMotion();

  if (highlight && text.includes(highlight)) {
    const [before, after] = text.split(highlight);
    return (
      <Tag className={cn("text-balance", className)}>
        {before}
        <span className="gradient-text">{highlight}</span>
        {after}
      </Tag>
    );
  }

  if (reduced) {
    return <Tag className={cn("text-balance", className)}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <Tag className={cn("text-balance", className)} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
