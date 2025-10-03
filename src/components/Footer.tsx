import { Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid container with 3 equal columns and gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-2">
              <img src={logo} alt="Germany Soon Logo" className="h-12 w-auto" />
              <h2 className="text-xl font-semibold">Germany Soon</h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed text-center md:text-left">
              Your pathway to <span className="text-[#FFC107]">Ausbildung in Germany</span>
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center md:items-start md:ml-24">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Mail className="w-4 h-4 text-[#FFC107]" />
              <span>germanysoon0@gmail.com</span>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex flex-col items-center md:items-start md:ml-32">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex items-center gap-5 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/itzz_rahul.sharma?igsh=MWx5YWx4N2oxMnZ4ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFC107] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/your-linkedin-id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFC107] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@whorahulsharma?si=6dj96NdyaHKVI8Xe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFC107] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-xs text-gray-400 mt-6">
          © 2025 Germany Soon. All rights reserved. <br />
          From consultation to settlement — we guide you every step of the way.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
