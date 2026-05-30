import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { Spotlight } from "@/components/effects/Spotlight";
import { Euro, Award, Globe, TrendingUp, Shield, Coffee } from "lucide-react";
import educationImage from "@/assets/education-lifestyle.jpg";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Award,
    title: "World-Class Education",
    description:
      "Top-ranked universities with cutting-edge research and industry connections",
  },
  {
    icon: Euro,
    title: "Affordable Tuition",
    description:
      "Low or no tuition fees at public universities, making quality education accessible",
  },
  {
    icon: TrendingUp,
    title: "Strong Economy",
    description:
      "Europe's largest economy with abundant job opportunities in all sectors",
  },
  {
    icon: Globe,
    title: "Cultural Diversity",
    description:
      "Multicultural society with welcoming communities and international exposure",
  },
  {
    icon: Shield,
    title: "Social Security",
    description:
      "Excellent healthcare, social benefits, and quality of life standards",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Emphasis on work-life balance with generous vacation time and flexible schedules",
  },
];

const stats = [
  { number: "83M", label: "Population" },
  { number: "€46K", label: "Average Salary" },
  { number: "400+", label: "Universities" },
  { number: "4th", label: "Global Economy" },
];

const WhyGermany = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="why-germany" className="section-padding relative overflow-hidden bg-muted/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Destination"
          title="Why Choose Germany?"
          highlight="Germany?"
          description="Discover why Germany is the perfect destination for your education, career, and life goals."
        />

        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={imageRef} className="relative overflow-hidden rounded-3xl shadow-elegant">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/40 to-transparent" />
            <img
              src={educationImage}
              alt="Students in Germany"
              className="h-[420px] w-full object-cover lg:h-[520px]"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl glass-panel p-5">
              <p className="font-display text-lg font-semibold text-foreground">
                Study. Work. Thrive.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Europe&apos;s hub for vocational excellence and innovation.
              </p>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Spotlight className="h-full rounded-2xl">
                  <div className="flex h-full gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-shadow hover:shadow-card">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Spotlight>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="rounded-3xl border border-border/50 bg-card/80 p-8 shadow-card backdrop-blur-sm md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGermany;
