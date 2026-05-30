import { Spotlight } from "@/components/effects/Spotlight";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Nursing Ausbildung, Munich",
    quote:
      "Germany Soon guided me from language prep to employer matching. I landed my apprenticeship contract within months.",
  },
  {
    name: "Ahmed Hassan",
    role: "IT Ausbildung, Berlin",
    quote:
      "The visa and documentation support was flawless. Every step was explained clearly — I never felt lost.",
  },
  {
    name: "Maria Schmidt",
    role: "Hospitality Ausbildung, Hamburg",
    quote:
      "From consultation to arrival support, the team stayed with me. Premium service at every stage of the journey.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-background">
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Success Stories"
          title="Trusted by Students Worldwide"
          highlight="Students"
          description="Real journeys from learners who turned their Germany dreams into reality with our end-to-end guidance."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Spotlight className="h-full rounded-2xl">
                <article className="glass-panel flex h-full flex-col rounded-2xl p-8 shadow-card transition-shadow duration-300 hover:shadow-elegant">
                  <Quote className="mb-4 h-8 w-8 text-brand-gold/60" aria-hidden />
                  <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-border/50 pt-6">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </footer>
                </article>
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
