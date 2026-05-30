import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-germany.jpg";
import AppointmentModal from "./AppointmentModal";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { GridPattern } from "@/components/effects/GridPattern";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const reduced = usePrefersReducedMotion();

  const handleSendQuery = () => {
    const formSection = document.getElementById("query");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Germany cityscape"
          className="h-full w-full object-cover scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <GridPattern className="opacity-20" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
        {!reduced && (
          <>
            <motion.div
              className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl"
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-10 bottom-1/4 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
              animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 section-container pb-20 pt-32 text-center text-white sm:pt-36">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <motion.span
            initial={reduced ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-brand-gold" aria-hidden />
            Premium Ausbildung Consultancy
          </motion.span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem]">
            Your Gateway to{" "}
            <span className="gradient-text block sm:inline">Germany</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            Transform your future with world-class education, career opportunities,
            and an exceptional lifestyle in Germany.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              onClick={() => setShowModal(true)}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-button transition-shadow hover:shadow-glow"
            >
              Book Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <button
              type="button"
              onClick={handleSendQuery}
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20"
            >
              Send Query
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            {[
              { value: "500+", label: "Students Guided" },
              { value: "98%", label: "Success Rate" },
              { value: "6+", label: "Core Services" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
              >
                <div className="font-display text-2xl font-bold text-brand-gold sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden>
        <motion.div
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-6 rounded-full border-2 border-white/40 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </div>

      {showModal && <AppointmentModal closeModal={() => setShowModal(false)} />}
    </section>
  );
};

export default Hero;
