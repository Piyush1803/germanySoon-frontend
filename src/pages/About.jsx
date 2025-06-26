import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-10 py-12">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn()}
        className="text-center text-3xl font-bold text-gray-800"
      >
        <p>
          <span className="text-slate-800">ABOUT</span>
          <span className="text-red-500">-US</span>
        </p>
      </motion.div>

      {/* Section 1 */}
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.2)}
          src={assets.Twelve}
          alt="About Us"
          className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.3)}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed">
            Welcome to <strong className="text-slate-800">GermanySoon</strong>: Your Trusted Partner in Career Advising in Germany!
            We understand the challenges individuals face when exploring career opportunities and planning their professional future.
          </p>
          <p className="text-lg leading-relaxed">
            GermanySoon is committed to excellence in career guidance. Whether you're starting an Ausbildung, searching for jobs, or advancing your career — we're here to support you every step of the way.
          </p>
          <h3 className="text-2xl font-semibold text-zinc-800">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            We aim to bridge the gap between aspiring professionals and opportunities in Germany with the right advice and resources for a successful future.
          </p>
        </motion.div>
      </div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.1)}
        className="text-center text-2xl font-bold my-12"
      >
        <p>WHY <span className="text-red-500">CHOOSE US</span></p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white border rounded-2xl p-8 shadow-md hover:bg-black hover:text-white transition-all"
        >
          <h4 className="text-xl font-semibold mb-4">EXPERTISE</h4>
          <p>Professional career guidance to help you navigate Ausbildung and job opportunities in Germany.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white border rounded-2xl p-8 shadow-md hover:bg-red-500 hover:text-black transition-all"
        >
          <h4 className="text-xl font-semibold mb-4">CONNECTIONS</h4>
          <p>Access to a wide network of employers, training institutions, and industry professionals.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white border rounded-2xl p-8 shadow-md hover:bg-yellow-300 hover:text-black transition-all"
        >
          <h4 className="text-xl font-semibold mb-4">GROWTH</h4>
          <p>Personalized support to ensure long-term career success and development.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
