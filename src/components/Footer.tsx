import { Instagram, Linkedin, Youtube, Mail, ArrowUp } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import logo from "@/assets/logo.png";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/itzz_rahul.sharma?igsh=MWx5YWx4N2oxMnZ4ZA==",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/your-linkedin-id",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@whorahulsharma?si=6dj96NdyaHKVI8Xe",
    label: "YouTube",
  },
];

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Germany", href: "#why-germany" },
  { name: "Contact", href: "#query" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-footer text-white">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-30" aria-hidden />
      <div className="section-container relative z-10 py-16 md:py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Germany Soon Logo"
                  className="h-12 w-auto rounded-lg bg-white p-1"
                />
                <h2 className="font-display text-2xl font-bold">Germany Soon</h2>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Your pathway to{" "}
                <span className="font-semibold text-brand-gold">Ausbildung in Germany</span>.
                From consultation to settlement — we guide you every step of the way.
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-brand-gold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
                Contact
              </h3>
              <a
                href="mailto:germanysoon0@gmail.com"
                className="mt-4 flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand-gold"
              >
                <Mail className="h-4 w-4 text-brand-gold" />
                germanysoon0@gmail.com
              </a>

              <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-white/90">
                Follow Us
              </h3>
              <div className="mt-4 flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-all hover:border-brand-gold/50 hover:bg-brand-gold/10 hover:text-brand-gold"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/50 sm:text-left">
            © {new Date().getFullYear()} Germany Soon. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-brand-gold/40 hover:text-brand-gold"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
