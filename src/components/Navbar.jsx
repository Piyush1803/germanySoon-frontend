import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-30 flex items-center justify-between py-4 px-6 bg-black/40 text-white">
      {/* Logo */}
      <img
        className="w-36 h-16 object-contain cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
        <NavLink to="/" className="group">
          <li className="py-1 hover:text-orange-400 transition-colors">HOME</li>
          <hr className="border-none h-0.5 bg-orange-400 w-3/5 mx-auto hidden group-hover:block" />
        </NavLink>
        <NavLink to="/about" className="group">
          <li className="py-1 hover:text-orange-400 transition-colors">ABOUT US</li>
          <hr className="border-none h-0.5 bg-orange-400 w-3/5 mx-auto hidden group-hover:block" />
        </NavLink>
      </ul>

      {/* Book Appointment Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-orange-500 text-white px-6 py-2 rounded-full font-light hidden md:block hover:bg-orange-600 transition-colors"
      >
        BOOK APPOINTMENT
      </button>

      {/* Modal */}
      {isModalOpen && <AppointmentModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Navbar;
