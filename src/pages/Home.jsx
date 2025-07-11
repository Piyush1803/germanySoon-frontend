import React, { useEffect, useState } from "react";
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AppointmentModal from "../components/AppointmentModal";
import { useLocation, useNavigate } from "react-router-dom";

// Hero Slider Content
const slides = [
  {
    title: "Ausbildung Program",
    desc: "Begin your career in Germany with expert training and support.",
    image: assets.Six,
    bg: "bg-yellow-100",
  },
  {
    title: "Career Opportunities",
    desc: "Explore job opportunities tailored for you with top employers.",
    image: assets.Seven,
    bg: "bg-blue-100",
  },
  {
    title: "Study in Germany",
    desc: "Unlock your potential with world-class education opportunities.",
    image: assets.Eight,
    bg: "bg-red-100",
  },
];

// About Me Section
const aboutMeData = [
  {
    image: assets.First,
    title: "How I Came to Germany",
    description:
      "I worked in finance in India before deciding to move to Germany for new experiences and growth. With guidance from a consultancy, I took the leap—and it’s been the best decision of my life.",
  },
  {
    image: assets.Second,
    title: "My Personal Experience",
    description:
      "Adapting to Germany was challenging at first due to language and cultural differences. But over time, I embraced the change, made friends, and found a new sense of belonging.",
  },
  {
    image: assets.Third,
    title: "Management Trainee Journey",
    description:
      "I began as a management trainee at a 4-star hotel. It was a great experience—friendly coworkers, a lively environment, and plenty of opportunities to grow professionally.",
  },
  {
    image: assets.Four,
    title: "Part-Time Work Opportunities",
    description:
      "Germany offers many part-time job options. These roles not only helped me financially but also allowed me to build local experience and gain new skills along the way.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paymentStatus = queryParams.get("payment");
    if (paymentStatus === "success") {
      alert("✅ Payment successful! Your appointment is booked.");
      // Remove the query param from the URL after showing the alert
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden w-full">
      {/* 🎥 Video Banner with Navbar */}
      <div className="relative w-full overflow-hidden h-[80vh] sm:h-[100vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient Overlay for contrast */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/70" />

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero Text */}
        <div className="relative z-30 flex flex-col justify-center items-center text-white h-full text-center px-4 mt-0 md:mt-[-40px]">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            Start Your Journey to Germany
          </motion.h1>
          <motion.p
            className="text-xl mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            Explore Ausbildung, Career & Study Options
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-700 via-purple-900 to-gray-900 text-white font-semibold rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:brightness-110"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            onClick={() => setIsModalOpen(true)}
          >
            Book Appointment
          </motion.button>
        </div>
      </div>
      {/* Extra space below video banner */}
      <div className="mb-12" />

      {/* ✅ Modal Render */}
      {isModalOpen && (
        <AppointmentModal closeModal={() => setIsModalOpen(false)} />
      )}

      {/* Spacer */}
      <div className="h-12 bg-white" />

      {/* Hero Slider Section */}
      <div className="relative w-full h-[500px] overflow-hidden z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={
              index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0 }
            }
            transition={{ duration: 0.8 }}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 sm:px-6 ${slide.bg
              } rounded-xl shadow-md ${index === currentSlide ? "z-10" : "z-0"}`}
          >
            <div className="w-1/2 pl-8 space-y-4">
              <h1 className="text-5xl font-extrabold drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                {slide.desc}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow hover:bg-orange-600"
                onClick={() => navigate('/getstarted')}
              >
                Get Started
              </motion.button>
            </div>
            <div className="w-1/2 flex justify-center items-center pr-4 sm:pr-10">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-h-[480px] object-contain rounded-xl"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🌐 Social Links */}
      <motion.div
        {...fadeInUp}
        className="flex justify-center gap-8 mt-20 text-2xl"
      >
        {[
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/who.rahul.sharma?igsh=NGxiaWV5cHJ1dnNr",
            color: "hover:text-pink-500",
          },
          {
            icon: <FaEnvelope />,
            link: "mailto:rahulsharmadl22@gmail.com",
            color: "hover:text-blue-400",
          },
          {
            icon: <FaYoutube />,
            link: "https://youtube.com/@whorahulsharma?si=2MRrQS1_eiE9H1cj",
            color: "hover:text-red-600",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${social.color}`}
          >
            {social.icon}
          </a>
        ))}
      </motion.div>

      {/* About Me Section */}
      <div className="mt-24 w-full bg-gradient-to-r from-gray-50 to-gray-100 p-8">
        <motion.h2
          {...fadeInUp}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          About Me
        </motion.h2>
        <div className="space-y-20">
          {aboutMeData.map((item, index) => {
            const borderColors = [
              "border-red-400",
              "border-blue-400",
              "border-green-400",
              "border-yellow-400",
            ];
            const titleHoverColors = [
              "hover:text-red-500",
              "hover:text-blue-500",
              "hover:text-green-500",
              "hover:text-yellow-500",
            ];

            const borderColor = borderColors[index % borderColors.length];
            const titleHoverColor =
              titleHoverColors[index % titleHoverColors.length];

            const imgMotion = {
              initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.7 },
              viewport: { once: true },
            };
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                <motion.img
                  {...imgMotion}
                  src={item.image}
                  alt={item.title}
                  className={`w-full md:w-2/3 lg:w-3/4 xl:w-2/3 h-96 object-cover rounded-2xl shadow-lg border-4 ${borderColor}`}
                />
                <motion.div {...fadeInUp} className="w-full md:w-1/2 group">
                  <h3
                    className={`text-2xl font-bold text-gray-800 mb-4 transition duration-300 transform group-hover:scale-105 ${titleHoverColor}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-all duration-300 transform group-hover:scale-105">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
