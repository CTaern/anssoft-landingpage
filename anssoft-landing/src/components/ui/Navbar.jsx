'use client';
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState for handling mobile menu state
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  }

  return (
    <nav className="absolute top-0 m-auto w-full flex items-center justify-between p-4 bg-black/[0.8] text-white z-20">
      {/* Logo */}
      <div className="text-1xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">
        ANSSOFT
      </div>

      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black/[0.8] md:bg-transparent p-4 md:p-0`}
      >
        <li className="text-1xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:underline cursor-pointer">
          <Link to="/" className="hover:underline block py-2 md:py-0">
            {t("navbar.homepage")}
          </Link>
        </li>
        <li className="text-1xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:underline cursor-pointer">
          <Link to="/about" className="hover:underline block py-2 md:py-0">
            {t("navbar.about")}
          </Link>
        </li>
        <li className="text-1xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:underline cursor-pointer">
          <Link to="/services" className="hover:underline block py-2 md:py-0">
            {t("navbar.services")}
          </Link>
        </li>
        <li className="text-1xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:underline cursor-pointer">
          <Link to="/products" className="hover:underline block py-2 md:py-0">
            {t("navbar.products")}
          </Link>
        </li>
        <li className="text-1xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:underline cursor-pointer">
          <Link to="/contact" className="hover:underline block py-2 md:py-0">
            {t("navbar.contact")}
          </Link>
        </li>
        {/* Login Button */}
        <li className="text-1xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 hover:underline cursor-pointer">
          <Link to="/login" className="hover:underline block py-2 md:py-0">
            {t("navbar.login")}
          </Link>
        </li>
        {/*Language Switcher*/}
        <li className="text-1xl md:text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 cursor-pointer">
          <button onClick={toggleLanguage} className="hover:underline block py-2 md:py-0">
            {i18n.language === "en" ? "🇹🇷" : "🇬🇧"}
          </button>
        </li> 
      </ul>
    </nav>
  );
}