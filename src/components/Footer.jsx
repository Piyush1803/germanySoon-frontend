import React from 'react';
import { assets } from '../assets/assets';
import { FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 px-6 md:px-20 py-20 border-t border-gray-200 transition-colors duration-300">
      
      {/* Grid */}
      <div className="grid gap-12 md:gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] items-start">
        
        {/* Logo & Description */}
        <div className="space-y-5">
          <img className="w-56 object-contain" src={assets.logo} alt="GermanySoon Logo" />
          <p className="text-base leading-relaxed max-w-md text-gray-600 font-medium">
            <span className="text-lg font-semibold text-gray-900">GermanySoon</span> is your trusted partner in career advising, specializing in <span className="text-orange-500 font-semibold">Ausbildung programs</span> and job opportunities in Germany. We offer expert guidance and personalized support to help you build a successful future.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900">Company</h3>
          <ul className="space-y-4 text-base font-medium">
            <li>
              <Link to="/" className="hover:text-orange-500 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500 transition duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500 transition duration-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900">Get in Touch</h3>
          <div className="flex gap-6 text-3xl text-gray-500">
            <a href="https://youtube.com/@whorahulsharma?si=2MRrQS1_eiE9H1cj" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 transition-transform hover:scale-110">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/who.rahul.sharma?igsh=NGxiaWV5cHJ1dnNr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="mailto:rahulsharmade22@gmail.com" aria-label="Email" className="hover:text-green-600 transition-transform hover:scale-110">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        © 2025 <span className="font-semibold text-gray-700">GermanySoon</span> – All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
