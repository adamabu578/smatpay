import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import smatpaylogo from "../assets/logo1.png"; // Assuming this exists based on Navbar.jsx, if not fallback to text or check assets
import { useTheme } from "../Context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ setScroll, home, service, faq, contact, agent }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", ref: home },
    { name: "Service", ref: service },
    { name: "Agent", ref: agent },
    { name: "FAQs", ref: faq },
    { name: "Contact", ref: contact },
  ];

  const handleLinkClick = (ref) => {
    setIsOpen(false);
    if (setScroll && ref) {
      setScroll(ref);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-gray-700"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleLinkClick(home)}>
            <img src={smatpaylogo} alt="SmatPay" className="h-12 w-auto rounded-lg" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.ref)}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-neutral-dark dark:text-white" : "text-neutral-dark dark:text-white"
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={20} className="text-yellow-400" /> : <FiMoon size={20} className="text-gray-600 dark:text-gray-300" />}
            </button>
            <Link
              to="/login"
              className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-neutral-dark dark:text-white" : "text-neutral-dark dark:text-white"
                }`}
            >
              Login
            </Link>
            <Link
              to="/Sign-Up"
              className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
            >
              Sign Up
            </Link>
            <a
              href="/smatpay.apk"
              download
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-primary/20 text-primary text-sm font-medium hover:bg-primary/5 transition-all"
            >
              <Download size={16} />
              <span>App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-white hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl md:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "0px", height: "100vh" }} // Full screen
      >
        <div className="flex flex-col h-full pt-28 px-6 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.ref)}
              className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-purple-600 text-left"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium text-gray-800 dark:text-white">Appearance</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <FiSun size={24} className="text-yellow-400" /> : <FiMoon size={24} className="text-gray-600 dark:text-gray-300" />}
            </button>
          </div>
          <hr className="border-gray-200 dark:border-gray-700" />
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-gray-800 dark:text-white hover:text-purple-600"
          >
            Login
          </Link>
          <Link
            to="/Sign-Up"
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium text-purple-600 hover:text-purple-700"
          >
            Create Account
          </Link>
          <a
            href="/smatpay.apk"
            download
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center w-full px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all shadow-lg"
          >
            <Download className="mr-2" size={20} />
            Download App
          </a>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;