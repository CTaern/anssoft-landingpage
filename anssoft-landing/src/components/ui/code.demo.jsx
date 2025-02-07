'use client';

import { useState, useEffect } from 'react';
import { SplineScene } from "./splite.jsx";
import { Navbar } from "./Navbar.jsx";
import { FirstContent } from "./FirstContent";
import { FirstScrollSection } from "./FirstScrollSection.jsx";
import { SecondScrollSection } from "./SecondScrollSection.jsx";
import { ThirdScrollSection } from './ThirdScrollSection.jsx';
import { FooterSection } from './Footer.jsx';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * SplineSceneBasic Component
 * - Manages a full-screen multi-section layout with scroll-based navigation.
 * - Listens to scroll and wheel events to update the current section and URL path.
 * - Renders different content components based on the current section.
 */

export function SplineSceneBasic() {
  // State variable to track the current section (e.g., "first", "second", etc.)
  const [currentSection, setCurrentSection] = useState("first");
  // Get the current URL location and navigate function from react-router-dom
  const location = useLocation();
  const navigate = useNavigate();

  // Map sections to paths and vice versa
  const pathToSection = {
    "/": "first",
    "/whatarewe": "second",
    "/whatwedo": "third",
    "/solutions": "fourth",
    "/contact": "footer",
  };
  // Mapping from section identifiers to URL paths.
  const sectionToPath = {
    "first": "/",
    "second": "/whatarewe",
    "third": "/whatwedo",
    "fourth": "/solutions",
    "footer": "/contact",
  };

  // Debounce function to delay scroll events
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  /**
   * handleWheel:
   * - Debounced handler for the wheel event.
   * - Determines scroll direction and updates the current section accordingly.
   */
  const handleWheel = debounce((event) => {
    const deltaY = event.deltaY;

    if (deltaY > 0) {
      // Scroll down
      if (currentSection === "first") setCurrentSection("second");
      else if (currentSection === "second") setCurrentSection("third");
      else if (currentSection === "third") setCurrentSection("fourth");
      else if (currentSection === "fourth") setCurrentSection("footer");
    } else if (deltaY < 0) {
      // Scroll up
      if (currentSection === "footer") setCurrentSection("fourth");
      else if (currentSection === "fourth") setCurrentSection("third");
      else if (currentSection === "third") setCurrentSection("second");
      else if (currentSection === "second") setCurrentSection("first");
    }
  }, 150); // 150ms delay

  // Sync section with URL path
  /**
   * useEffect to synchronize the current section with the URL path.
   * - Updates currentSection state whenever the location.pathname changes.
   */
  useEffect(() => {
    setCurrentSection(pathToSection[location.pathname] || "first");
  }, [location.pathname]);

  // Handle scroll events for section detection with debounce
  /**
   * useEffect to handle scroll events for section detection.
   * - Checks the vertical scroll position (window.scrollY) to determine which section is in view.
   * - Navigates to the corresponding URL path if it differs from the current one.
   */
  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY;
      let newSection = "first";

      if (scrollY > 500) newSection = "second";
      if (scrollY > 1000) newSection = "third";
      if (scrollY > 1500) newSection = "fourth";
      if (scrollY > 2000) newSection = "footer";

      if (location.pathname !== sectionToPath[newSection]) {
        navigate(sectionToPath[newSection], { replace: true });
      }
    }, 300); // 300ms delay

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location, navigate]);

  // Add wheel event listener for section navigation
  /**
   * useEffect to add the wheel event listener for section navigation.
   * - Attaches the debounced handleWheel function to the window's wheel event.
   */
  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  return (
    <div className="w-screen h-screen bg-black/[0.96] relative overflow-hidden">
      <div className='relative min-w-[70vh] min-h-[100vh] bg-black z-0'>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="max-w-[1440px] w-full mx-auto flex h-full relative justify-center items-center">
          <motion.div
            className="flex relative z-10 px-4 sm:px-8 md:px-16 lg:px-24"
            key={currentSection}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          >
            {currentSection === "first" && <FirstContent />}
            {currentSection === "second" && <FirstScrollSection />}
            {currentSection === "third" && <SecondScrollSection />}
            {currentSection === "fourth" && <ThirdScrollSection />}
            {currentSection === "footer" && <FooterSection />}
          </motion.div>

          {/* Conditionally Render SplineScene (Prevents Reappearance) */}
          {currentSection === "first" && (
            <div className="flex-1 h-full flex justify-center items-center w-full h-[80vh] md:h-[90vh]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}