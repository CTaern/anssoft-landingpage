import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/**
 * AboutPage Component
 * - Renders the About page with hero, mission & vision, core values, and a call-to-action.
 * - Displays a modal popup for contacting when the call-to-action button is clicked.
 */

const AboutPage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Array of core values to be displayed in the "Why Choose Us" section.
  const coreValues = [
    {
      id: 1,
      title: t("about.coreValues.innovation"),
      desc: t("about.coreValues.innovationDesc"),
      icon: "💡",
      color: "from-purple-500 to-blue-500",
      stat: t("about.coreValues.innovationStat"),
    },
    {
      id: 2,
      title: t("about.coreValues.reliability"),
      desc: t("about.coreValues.reliabilityDesc"),
      icon: "🔒",
      color: "from-green-500 to-teal-500",
      stat: t("about.coreValues.reliabilityStat"),
    },
    {
      id: 3,
      title: t("about.coreValues.security"),
      desc: t("about.coreValues.securityDesc"),
      icon: "🛡️",
      color: "from-red-500 to-pink-500",
      stat: t("about.coreValues.securityStat"),
    },
    {
      id: 4,
      title: t("about.coreValues.performance"),
      desc: t("about.coreValues.performanceDesc"),
      icon: "🚀",
      color: "from-yellow-500 to-orange-500",
      stat: t("about.coreValues.performanceStat"),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto text-center py-16 px-4 sm:px-8 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {t("about.heading")}
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          {t("about.description")}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {t("about.missionTitle")}
          </h2>
          <p className="text-gray-400 mt-4">
            {t("about.missionDesc")}
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {t("about.visionTitle")}
          </h2>
          <p className="text-gray-400 mt-4">
            {t("about.visionDesc")}
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
          {t("about.whyChooseUs")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {coreValues.map((value) => (
            <motion.div
              key={value.id}
              className="relative p-6 rounded-xl text-center shadow-lg shadow-indigo-500/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * value.id }}
              viewport={{ once: true }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div className="text-4xl mb-4">{value.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold">{value.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mt-3">{value.desc}</p>

              {/* Stat */}
              <p className="text-sm text-gray-400 mt-2">{value.stat}</p>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-3xl mx-auto py-16 text-center px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {t("about.joinUs")}
        </h2>
        <p className="text-gray-400 mt-4">
          {t("about.ctaText")}
        </p>
        <button
          className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          onClick={() => setIsModalOpen(true)}
        >
          {t("about.contactUs")}
        </button>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-black">{t("about.getInTouch")}</h3>
            <input
              type="text"
              placeholder={t("about.yourName")}
              className="border p-2 w-full mt-4 rounded-lg"
            />
            <input
              type="email"
              placeholder={t("about.yourEmail")}
              className="border p-2 w-full mt-4 rounded-lg"
            />
            <textarea
              placeholder={t("about.yourMessage")}
              className="border p-2 w-full mt-4 rounded-lg"
              rows="4"
            ></textarea>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setIsModalOpen(false)}
            >
              📩 {t("about.sendMessage")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;