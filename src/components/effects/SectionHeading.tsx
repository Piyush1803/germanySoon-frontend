import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  const renderTitle = () => {
    if (highlight && title.includes(highlight)) {
      const [before, after] = title.split(highlight);
      return (
        <>
          {before}
          <span className="gradient-text">{highlight}</span>
          {after}
        </>
      );
    }
    return title;
  };

  return (
    <ScrollReveal className={cn("mb-14 md:mb-20 max-w-3xl", alignClass, className)}>
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
