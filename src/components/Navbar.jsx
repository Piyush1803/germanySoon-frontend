import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 mb-5 text-sm relative bg-transparent">
      <img
        className="w-36 h-14 object-contain cursor-pointer ml-6 md:w-44 md:h-20 md:ml-10"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="group">
          <li className="py-1 text-white hover:text-purple-300 transition-colors">HOME
            <span className="block h-0.5 bg-purple-600 w-3/5 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
          </li>
        </NavLink>
        <NavLink to="/about" className="group">
          <li className="py-1 text-white hover:text-purple-300 transition-colors">ABOUT US
            <span className="block h-0.5 bg-purple-600 w-3/5 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
          </li>
        </NavLink>
      </ul>

      {/* Desktop Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gray-700 text-white px-8 py-3 rounded-full font-semibold border-2 border-white hidden md:flex items-center gap-2 hover:bg-gray-900 transition-colors mr-6 md:mr-10"
      >
        <img src={assets.book_appointment_icon} alt="Book" className="w-5 h-5 inline-block align-middle mr-1 -ml-2" />
        <span className="text-sm font-semibold align-middle"> BOOK APPOINTMENT</span>
      </button>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-[1000]" />
          <div className="fixed inset-0 z-[1100] flex items-center justify-center">
            <AppointmentModal closeModal={() => setIsModalOpen(false)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;