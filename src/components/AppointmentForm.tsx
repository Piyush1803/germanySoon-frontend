import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/effects/SectionHeading";
import { Spotlight } from "@/components/effects/Spotlight";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MagneticButton } from "@/components/effects/MagneticButton";
import consultingImage from "@/assets/consulting-office.jpg";
import { cn } from "@/lib/utils";

const helpItems = [
  {
    title: "Quick Responses",
    description: "We reply to your queries within 24 hours.",
  },
  {
    title: "Clear Guidance",
    description: "Understand the booking process step by step.",
  },
  {
    title: "Friendly Support",
    description: "Our team ensures you feel confident and supported.",
  },
];

const QueryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.sheety.co/f87695357a26c709f44cd4ecdaa2e07a/germanySoonQueries/sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheet1: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit query");

      toast({
        title: "Query Submitted!",
        description: "We'll get back to you shortly regarding your appointment.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Sheety API Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="query" className="section-padding relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" aria-hidden />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Have a Query?"
          highlight="Query?"
          description="If you have any questions regarding appointment booking, feel free to reach out. Our team is here to clarify your doubts and assist you."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={consultingImage}
                alt="Consultation discussion"
                className="h-[280px] w-full object-cover sm:h-[320px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 font-display text-lg font-semibold">
                <Calendar className="h-5 w-5 text-brand-gold" />
                How We Help
              </div>
              {helpItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Spotlight className="h-full rounded-3xl">
              <div className="glass-panel h-full rounded-3xl p-6 shadow-elegant sm:p-8">
                <h3 className="font-display text-2xl font-bold">Send Us Your Query</h3>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="rounded-xl border-border/60 bg-background/80"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="rounded-xl border-border/60 bg-background/80"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="rounded-xl border-border/60 bg-background/80"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="rounded-xl border-border/60 bg-background/80"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Question *</Label>
                    <Textarea
                      id="message"
                      placeholder="Write your query here..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="rounded-xl border-border/60 bg-background/80 resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {isSubmitting ? (
                    <div className="space-y-2" aria-busy="true">
                      <Skeleton className="h-12 w-full rounded-xl" />
                    </div>
                  ) : (
                    <MagneticButton
                      type="submit"
                      className={cn(
                        "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent py-4 text-base font-semibold text-accent-foreground shadow-button hover:shadow-glow"
                      )}
                    >
                      <Send className="h-5 w-5" />
                      Submit Query
                    </MagneticButton>
                  )}
                </form>
              </div>
            </Spotlight>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default QueryForm;
