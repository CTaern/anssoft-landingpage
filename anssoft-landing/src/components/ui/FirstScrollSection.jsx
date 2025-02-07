import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function FirstScrollSection() {

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      t("firstScrollSection.technologyInfrastructures"),
      t("firstScrollSection.customWebApplications"),
      t("firstScrollSection.advancedMobileSolutions"),
    ],
    [t]
  );
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const adjustScrollSpeed = () => {
      const zoomFactor = window.devicePixelRatio;
      document.documentElement.style.setProperty('--zoom-factor', zoomFactor);
    };



    /**
     * handleScroll
     * - Checks the current scroll position of the window.
     * - If scrolled more than 200 pixels, updates state and triggers a fade/scale animation.
     * - Otherwise, resets the animation to the default state.
     */
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
        controls.start({ opacity: 0, scale: 0.95, y: "5%", transition: { duration: 0.8 } });
      } else {
        setIsScrolled(false);
        controls.start({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } });
      }
    };
    


    // Set up an interval to rotate titles when the animated text is not hovered.
    let titleChangeInterval;
    if (!isHovered) {
      titleChangeInterval = setInterval(() => {
        setTitleNumber((prev) => (prev + 1) % titles.length);
      }, 3000);
    }

    window.addEventListener('resize', adjustScrollSpeed);
    window.addEventListener('scroll', handleScroll);


    // Call adjustScrollSpeed immediately to set the initial zoom factor.
    adjustScrollSpeed();


    // Cleanup: Remove event listeners and clear the interval on component unmount.
    return () => {
      window.removeEventListener('resize', adjustScrollSpeed);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(titleChangeInterval);
    };
  }, [controls, titles.length, isHovered]);

  return (
    <motion.div
      className={`flex flex-col items-center justify-center min-h-[100vh] px-4 sm:px-6 md:px-12 lg:px-24 transition-all duration-700 ${isScrolled ? "bg-gray-900" : "bg-black"}`}
    >
      {/* Text Content */}
      <motion.div
        animate={controls}
        className="text-white text-center max-w-5xl w-full transition-all duration-700"
      >
        <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-bold italic leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">

          {/* Animated Text Block */}
          {i18n.language === "tr" ? (
            <>
              <span className="block">{t("firstScrollSection.forTheFuture")}</span>
              <span
                className="block h-[60px] sm:h-[75px] relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)} // Add focus event for keyboard navigation
                onBlur={() => setIsHovered(false)} // Add blur event for keyboard navigation
                role="button" // Add role for accessibility
                tabIndex={0} // Make it focusable
              >
                <motion.span
                  key={titleNumber}
                  className="relative text-2xl sm:text-3xl md:text-5xl font-bold italic leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  {titles[titleNumber]}
                </motion.span>
              </span>
              <span className="block">{t("firstScrollSection.building")}</span>
            </>
          ) : (
            <>
              <span className="block">{t("firstScrollSection.building")}</span>
              <span
                className="block h-[60px] sm:h-[75px] relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)} // Add focus event for keyboard navigation
                onBlur={() => setIsHovered(false)} // Add blur event for keyboard navigation
                role="button" // Add role for accessibility
                tabIndex={0} // Make it focusable
              >
                <motion.span
                  key={titleNumber}
                  className="relative text-2xl sm:text-3xl md:text-5xl font-bold italic leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  {titles[titleNumber]}
                </motion.span>
              </span>
              <span className="block">{t("firstScrollSection.forTheFuture")}</span>
            </>
          )}
        </h1>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-12 w-full max-w-6xl"
      >
        {/* Card 1 */}
        <div className="bg-white-900 rounded-xl p-4 sm:p-6 shadow-lg shadow-gray-500/50 text-center border border-gray-800">
          <h3 className="font-semibold mb-4 text-xl sm:text-2xl font-bold italic leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{t("firstScrollSection.aboutANSSOFT")}</h3>
          <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">{t("firstScrollSection.learnScalableSolutions")}</p>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold transition hover:bg-gray-300 text-sm sm:text-base"
            onClick={() => navigate('/about')}>
            {t("firstScrollSection.learnMore")}
          </button>
        </div>

        {/* Card 2 - Custom Integrations */}
        <div className="bg-white-700 rounded-xl p-4 sm:p-6 shadow-lg shadow-gray-500/50 flex flex-col items-center justify-center text-center border border-gray-800">
          <h3 className="font-semibold mb-4 text-xl sm:text-2xl font-bold italic leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{t("firstScrollSection.customIntegrations")}</h3>
          <div className="h-20 w-20 sm:h-24 sm:w-24 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-black font-bold text-2xl">+</span>
          </div>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base">{t("firstScrollSection.apiIntegration")}</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white-900 rounded-xl p-4 sm:p-6 shadow-lg shadow-gray-500/50 text-center border border-gray-800">
          <h3 className="font-semibold mb-4 text-xl sm:text-2xl font-bold italic leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{t("firstScrollSection.analytics")}</h3>
          <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">{t("firstScrollSection.dataDrivenDecisions")}</p>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold transition hover:bg-gray-300 text-sm sm:text-base"
            onClick={() => navigate('/services')}>
            {t("firstScrollSection.learnMore")}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}