import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home", id: "#home" },
  { name: "Services", href: "#services", id: "#services" },
  { name: "Why Germany", href: "#why-germany", id: "#why-germany" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navigation.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-background/80 py-3 shadow-elegant backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-4"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            <a href="#home" className="group flex items-center gap-3" aria-label="Germany Soon home">
              <div className="relative overflow-hidden rounded-xl bg-white p-1.5 shadow-card ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
                <img src={logo} alt="" className="h-10 w-auto sm:h-11" />
              </div>
              <span
                className={cn(
                  "font-display text-lg font-bold tracking-tight transition-colors sm:text-xl",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                Germany Soon
              </span>
            </a>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white",
                    activeSection === item.id && (scrolled ? "text-foreground" : "text-white")
                  )}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <MagneticButton
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-button transition-shadow hover:shadow-glow"
              >
                Book Consultation
              </MagneticButton>
            </div>

            <button
              type="button"
              className={cn(
                "rounded-lg p-2 md:hidden",
                scrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8" aria-label="Mobile navigation">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-2xl font-semibold text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button
                size="lg"
                variant="consultation"
                className="mt-4 rounded-xl px-8"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Book Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen && <AppointmentModal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
