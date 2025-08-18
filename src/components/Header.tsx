import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal"; // Import modal

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Germany", href: "#why-germany" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#FFC107] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-[#FFC107]">Germany Soon</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-[#FFC107] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-[#FFC107] hover:bg-[#e6ac00] text-black font-semibold px-4 py-2 rounded-lg shadow-md"
                onClick={() => setIsModalOpen(true)} // open modal
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 pt-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-[#FFC107] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#FFC107] hover:bg-[#e6ac00] text-black font-semibold px-4 py-2 rounded-lg shadow-md"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsModalOpen(true); // open modal from mobile
                    }}
                  >
                    Book Consultation
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Appointment Modal */}
      {isModalOpen && <AppointmentModal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
