import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  /**
 * ServicesPage Component
 * - Displays various service categories along with detailed service cards.
 * - Includes a call-to-action section that opens a modal for contacting.
 */


  const services = [
    {
      category: t("services.webServices"),
      description: t("services.webServicesDesc"),
      services: [
        { title: t("services.webDesign"), desc: t("services.webDesignDesc"), img: "/web1.png" },
        { title: t("services.webDevelopment"), desc: t("services.webDevelopmentDesc"), img: "/web2.png" },
        { title: t("services.eCommerce"), desc: t("services.eCommerceDesc"), img: "/web3.png" },
        { title: t("services.seo"), desc: t("services.seoDesc"), img: "/web4.png" },
      ],
      icon: "🌐", // Replace with an actual icon or SVG
      gradient: "from-purple-500 to-blue-500",
    },
    {
      category: t("services.aiSolutions"),
      description: t("services.aiSolutionsDesc"),
      services: [
        { title: t("services.machineLearning"), desc: t("services.machineLearningDesc"), img: "/ai1.png" },
        { title: t("services.nlp"), desc: t("services.nlpDesc"), img: "/ai2.png" },
        { title: t("services.imageProcessing"), desc: t("services.imageProcessingDesc"), img: "/ai3.png" },
        { title: t("services.automation"), desc: t("services.automationDesc"), img: "/ai4.png" },
        { title: t("services.predictiveAnalytics"), desc: t("services.predictiveAnalyticsDesc"), img: "/ai5.png" },
        { title: t("services.dataAnalytics"), desc: t("services.dataAnalyticsDesc"), img: "/ai6.png" },
      ],
      icon: "🤖", // Replace with an actual icon or SVG
      gradient: "from-green-500 to-teal-500",
    },
    {
      category: t("services.mobileDevelopment"),
      description: t("services.mobileDevelopmentDesc"),
      services: [
        { title: t("services.android"), desc: t("services.androidDesc"), img: "/mobil2.jpg" },
        { title: t("services.ios"), desc: t("services.iosDesc"), img: "/mobil1.jpg" },
        { title: t("services.crossPlatform"), desc: t("services.crossPlatformDesc"), img: "/mobil3.jpg" },
        { title: t("services.uxui"), desc: t("services.uxuiDesc"), img: "/mobil4.jpg" },
        { title: t("services.mobileOptimization"), desc: t("services.mobileOptimizationDesc"), img: "/mobil5.jpg" },
        { title: t("services.mobileGame"), desc: t("services.mobileGameDesc"), img: "/mobil6.jpg" },
      ],
      icon: "📱", // Replace with an actual icon or SVG
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      category: t("services.hardwareSales"),
      description: t("services.hardwareSalesDesc"),
      services: [
        { title: t("services.laptops"), desc: t("services.laptopsDesc"), img: "/pc1.png" },
        { title: t("services.desktopPCs"), desc: t("services.desktopPCsDesc"), img: "/pc2.png" },
        { title: t("services.pcComponents"), desc: t("services.pcComponentsDesc"), img: "/pc3.png" },
      ],
      icon: "💻", // Replace with an actual icon or SVG
      gradient: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-8 mt-8">
        {services.map((section, idx) => (
          <section key={idx} className="mb-16">
            {/* Section Header with Gradient Background */}
            <motion.div
              className="text-center mb-8 p-6 rounded-xl bg-gradient-to-r"
              style={{ background: `linear-gradient(to right, ${section.gradient})` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }} // Animations trigger every time
            >
              <h2 className="text-3xl font-semibold text-white">{section.category}</h2>
              <p className="text-gray-200 mt-2">{section.description}</p>
            </motion.div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }} // Animations trigger every time
                >
                  <div className="bg-gray-300 h-64 flex items-center justify-center">
                    <img src={service.img} alt={service.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-700 mt-3">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-semibold text-white">{t("services.contactUs")}</h2>
          <p className="text-gray-300 mt-4">{t("services.contactDesc")}</p>
          <button
            className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            onClick={() => setIsModalOpen(true)}
          >
            📩{t("services.contactButton")}
          </button>
        </section>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-black">{t("services.getInTouch")}</h3>
            <input type="text" placeholder="Your Name" className="border p-2 w-full mt-4 rounded-lg" />
            <input type="email" placeholder="Your Email" className="border p-2 w-full mt-4 rounded-lg" />
            <textarea placeholder="Your Message" className="border p-2 w-full mt-4 rounded-lg" rows="4"></textarea>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setIsModalOpen(false)}
            >
              📩{t("services.contactButton")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;