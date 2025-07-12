import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import { motion } from 'framer-motion';

const Navbar = ({ onBookClick }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.div
      className={`flex items-center justify-between py-6 mb-5 text-base relative ${isHome ? 'bg-transparent' : 'bg-white shadow'} transition-colors`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
    >
      <img
        className="w-36 h-14 object-contain cursor-pointer ml-6 md:w-44 md:h-20 md:ml-10"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Nav */}
      <ul className={`hidden md:flex items-start gap-5 font-medium ${isHome ? '' : 'text-black'}`}>
        <NavLink to="/" className="group">
          <li className={`py-1 ${isHome ? 'text-white hover:text-purple-300' : 'text-black hover:text-purple-700'} transition-colors`}>HOME
            <span className="block h-0.5 bg-purple-600 w-3/5 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
          </li>
        </NavLink>
        <NavLink to="/about" className="group">
          <li className={`py-1 ${isHome ? 'text-white hover:text-purple-300' : 'text-black hover:text-purple-700'} transition-colors`}>ABOUT US
            <span className="block h-0.5 bg-purple-600 w-3/5 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
          </li>
        </NavLink>
      </ul>

      {/* Desktop Button */}
      <button
        onClick={onBookClick}
        className={`px-8 py-3 rounded-full font-semibold border-2 hidden md:flex items-center gap-2 mr-6 md:mr-10 transition-colors
          ${isHome ? 'bg-gray-700 text-white border-white hover:bg-gray-900' : 'bg-white text-black border-black hover:bg-gray-100'}`}
      >
        <img src={assets.book_appointment_icon} alt="Book" className="w-5 h-5 inline-block align-middle mr-1 -ml-2" />
        <span className="text-sm font-semibold align-middle"> BOOK APPOINTMENT</span>
      </button>

      
    </motion.div>
  );
};

export default Navbar;