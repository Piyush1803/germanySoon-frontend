import Home from "./pages/Home";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import AppointmentModal from "./components/AppointmentModal";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full">
      {!isHome && <Navbar onBookClick={openModal} />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About onBookClick={openModal} />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
      {isModalOpen && <AppointmentModal closeModal={closeModal} />}
      <Footer />
    </div>
  );
}


export default App;
