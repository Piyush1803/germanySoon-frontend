import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="w-full py-16 px-4 bg-white flex flex-col items-center justify-center mb-8 shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center drop-shadow mb-4 bg-gradient-to-r from-purple-700 via-purple-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Get Started: Your Guide to Ausbildung & Life in Germany
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-purple-900 text-center max-w-2xl mx-auto"
        >
          Discover how you can move to Germany, join the Ausbildung program, and unlock amazing study and job opportunities. Your new adventure begins here!
        </motion.p>
      </div>

      <div className="flex-1 w-full px-2 md:px-0">
        <div className="max-w-5xl mx-auto space-y-10">
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/90 rounded-2xl shadow-xl p-8 border-l-8 border-purple-400"
          >
            <h2 className="text-2xl font-bold text-purple-800 mb-2 flex items-center gap-2">
              <span role="img" aria-label="book">📚</span> What is the Ausbildung Program?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The <span className="font-semibold text-purple-700">Ausbildung</span> is a unique vocational training program in Germany that combines classroom learning with hands-on work experience. It’s an excellent pathway for international students and young professionals to gain practical skills, earn a recognized qualification, and start a rewarding career in Germany.
            </p>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/90 rounded-2xl shadow-xl p-8 border-l-8 border-yellow-400"
          >
            <h2 className="text-2xl font-bold text-yellow-700 mb-2 flex items-center gap-2">
              <span role="img" aria-label="airplane">✈️</span> How Can a Student Move to Germany?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Moving to Germany as a student involves several key steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li><span className="font-semibold">Research & Choose a Program:</span> Find the Ausbildung or university program that fits your interests and career goals.</li>
              <li><span className="font-semibold">Apply for Admission:</span> Submit your application to the chosen institution or training company.</li>
              <li><span className="font-semibold">Secure a Visa:</span> Apply for a German student or Ausbildung visa with your admission letter and required documents.</li>
              <li><span className="font-semibold">Arrange Accommodation:</span> Look for student housing or shared apartments in your new city.</li>
              <li><span className="font-semibold">Prepare for Arrival:</span> Book your flight, pack essentials, and get ready for a new adventure!</li>
            </ul>
          </motion.section>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/90 rounded-2xl shadow-xl p-8 border-l-8 border-gray-500"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span role="img" aria-label="briefcase">💼</span> Study & Job Opportunities in Germany
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Germany offers a wealth of opportunities for students and young professionals:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li><span className="font-semibold">World-Class Education:</span> Access top-ranked universities and vocational schools with affordable tuition.</li>
              <li><span className="font-semibold">Part-Time Jobs:</span> Students can work part-time during their studies to gain experience and support themselves financially.</li>
              <li><span className="font-semibold">Post-Graduation Careers:</span> After completing your Ausbildung or degree, you can apply for jobs in your field and even obtain a work visa to stay in Germany.</li>
              <li><span className="font-semibold">Cultural Experience:</span> Enjoy a vibrant, multicultural environment and make lifelong friends from around the world.</li>
            </ul>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <span className="inline-block bg-gradient-to-r from-purple-400 via-yellow-300 to-purple-700 text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
              Ready to start your journey? Explore Ausbildung, study, and career options in Germany today!
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
