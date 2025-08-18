import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Germany", href: "#why-germany" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "University Admission", href: "#services" },
    { name: "Career Guidance", href: "#services" },
    { name: "Visa Assistance", href: "#services" },
    { name: "Accommodation", href: "#services" },
    { name: "Lifestyle Integration", href: "#services" },
    { name: "Community Support", href: "#services" }
  ];

  const resources = [
    { name: "Student Guide", href: "#blog" },
    { name: "Visa Requirements", href: "#blog" },
    { name: "Cost Calculator", href: "#tools" },
    { name: "University Rankings", href: "#blog" },
    { name: "Language Learning", href: "#blog" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <footer className="bg-[#2C3E50] text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FFC107] rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold">GermanyPath</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for studying, working, and living in Germany.
              We provide comprehensive support to make your German dream a reality.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#FFC107]" />
                <span>Friedrichstraße 123, Berlin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#FFC107]" />
                <span>+49 30 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#FFC107]" />
                <span>info@germanypath.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-[#FFC107] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-[#FFC107] transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-primary-foreground/80 hover:text-[#FFC107] transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <h4 className="font-medium">Stay Updated</h4>
              <p className="text-xs text-primary-foreground/80">
                Get the latest updates and tips for your German journey.
              </p>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg px-4 py-2"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <span>© 2024 GermanyPath. All rights reserved.</span>
            <a href="#privacy" className="hover:text-[#FFC107] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#FFC107] transition-colors">
              Terms of Service
            </a>
          </div>

          <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#FFC107]" />
            <span>for students worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
