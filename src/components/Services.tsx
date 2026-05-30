import { Spotlight } from "@/components/effects/Spotlight";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import {
  GraduationCap,
  Briefcase,
  Home,
  FileText,
  Heart,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: GraduationCap,
    title: "Ausbildung Program Guidance",
    description:
      "End-to-end assistance in choosing the right Ausbildung profession based on your background and goals.",
    features: [
      "Profile Evaluation",
      "Trade & Course Selection",
      "Eligibility Check",
      "Career Planning",
    ],
    featured: true,
  },
  {
    icon: FileText,
    title: "Visa & Documentation Support",
    description:
      "Complete help with visa application, document translation, APS, and embassy filing.",
    features: [
      "Visa Application",
      "APS & Translation",
      "Document Verification",
      "Embassy Appointment Support",
    ],
  },
  {
    icon: Heart,
    title: "German Language Preparation",
    description:
      "Guidance and training for A1 to B2 level to meet Ausbildung and visa requirements.",
    features: [
      "A1–B2 Courses",
      "Exam Registration",
      "Interactive Learning",
      "Certificate Assistance",
    ],
  },
  {
    icon: Briefcase,
    title: "Job Placement & Apprenticeship Matching",
    description:
      "We connect you with Ausbildung employers and help you secure apprenticeship contracts.",
    features: [
      "Employer Coordination",
      "Interview Preparation",
      "Contract Assistance",
      "Industry Guidance",
    ],
  },
  {
    icon: Home,
    title: "Accommodation & Settlement",
    description:
      "Support in finding housing and settling smoothly after arriving in Germany.",
    features: [
      "Student Housing Search",
      "Rental Contracts",
      "Location Guidance",
      "Move-in Assistance",
    ],
  },
  {
    icon: Users,
    title: "On-Arrival & Community Support",
    description:
      "From airport assistance to local registration, we stay with you even after you land in Germany.",
    features: [
      "Airport Pickup Help",
      "Local Registration",
      "Peer Networking",
      "24x7 Support",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <AuroraBackground className="absolute inset-0 bg-background" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Support for Your Ausbildung Journey"
          highlight="Ausbildung Journey"
          description="From program selection and visa processing to language training, placements, and post-arrival support — we guide you at every step."
        />

        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className={cn(service.featured && "md:col-span-2 lg:col-span-1")}
            >
              <Spotlight className="h-full">
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/90 p-6 shadow-card backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-elegant",
                    service.featured &&
                      "lg:row-span-1 lg:bg-gradient-to-br lg:from-card lg:to-brand-gold/5"
                  )}
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold transition-colors group-hover:bg-brand-gold/25">
                      <service.icon className="h-7 w-7" aria-hidden />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border/40 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Spotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
