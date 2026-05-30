import { Marquee } from "@/components/effects/Marquee";
import { GraduationCap, Building2, Globe2, Award, BookOpen, Plane } from "lucide-react";

const partners = [
  { icon: GraduationCap, label: "Ausbildung Programs" },
  { icon: Building2, label: "German Employers" },
  { icon: Globe2, label: "Global Students" },
  { icon: Award, label: "Certified Guidance" },
  { icon: BookOpen, label: "Language Training" },
  { icon: Plane, label: "Relocation Support" },
];

export function TrustMarquee() {
  return (
    <section className="border-y border-border/60 bg-muted/40 py-8" aria-label="Trusted services">
      <Marquee speed="slow">
        {partners.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 rounded-full border border-border/50 bg-card/80 px-6 py-3 shadow-sm backdrop-blur-sm"
          >
            <Icon className="h-5 w-5 text-brand-gold" aria-hidden />
            <span className="whitespace-nowrap text-sm font-semibold text-foreground/80">
              {label}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
