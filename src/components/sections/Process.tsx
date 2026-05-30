import { SectionHeading } from "@/components/effects/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MessageSquare, FileCheck, Languages, Briefcase, Home } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Consultation",
    description: "Understand your goals and assess eligibility for Ausbildung programs.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Documentation",
    description: "Visa, APS, translations, and embassy filing handled with precision.",
  },
  {
    icon: Languages,
    step: "03",
    title: "Language Prep",
    description: "German A1–B2 training aligned with program and visa requirements.",
  },
  {
    icon: Briefcase,
    step: "04",
    title: "Placement",
    description: "Employer matching, interviews, and apprenticeship contract support.",
  },
  {
    icon: Home,
    step: "05",
    title: "Settlement",
    description: "Housing, registration, and on-arrival support after you land.",
  },
];

export function Process() {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      <div className="section-container">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Journey in Five Clear Steps"
          highlight="Five Clear Steps"
          description="A structured pathway from first conversation to thriving in Germany — no guesswork, no gaps."
        />

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-gold/50 via-primary/30 to-transparent lg:block"
            aria-hidden
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {steps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.08}>
                <div className="group relative flex flex-col items-center text-center lg:items-center">
                  <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-gold/30 bg-card shadow-card transition-all duration-300 group-hover:border-brand-gold group-hover:shadow-glow">
                    <item.icon className="h-7 w-7 text-brand-gold" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-accent text-xs font-bold text-accent-foreground shadow-button">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
