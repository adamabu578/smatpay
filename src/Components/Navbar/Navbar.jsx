import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import smatpaylogo from "../../assets/logo1.png";
import arrow from "../../assets/arrow-right.png";
import { useTheme } from "../../Context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const home = useRef(null);
  const service = useRef(null);
  const Agent = useRef(null);
  const faqs = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop || 0,
      behavior: 'smooth',
    })
    setIsOpen(false);
  }

  return (
    <nav
      className="flex items-center justify-between lg:justify-around h-20 lg:h-24 bg-white lg:bg-[#7978FF] dark:bg-gray-900 transition-colors duration-300 sticky top-0 z-50 shadow-md px-4 lg:px-0" >

      <div className="flex items-center">
        <div className="w-10 lg:mx-5">
          <img src={smatpaylogo} alt="Smatpay Logo" className="rounded-lg shadow-sm" />
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 items-center px-10 text-white font-[Eina01-SemiBold]">
        <li onClick={() => scrollToSection(home)} className="cursor-pointer text-sm hover:text-accent-cream transition-colors uppercase tracking-wider">home</li>
        <li onClick={() => scrollToSection(service)} className="cursor-pointer text-sm hover:text-accent-cream transition-colors uppercase tracking-wider">service</li>
        <li onClick={() => scrollToSection(Agent)} className="cursor-pointer text-sm hover:text-accent-cream transition-colors uppercase tracking-wider">Agent</li>
        <li onClick={() => scrollToSection(faqs)} className="cursor-pointer text-sm hover:text-accent-cream transition-colors uppercase tracking-wider">faqs</li>
        <li onClick={() => scrollToSection(contact)} className="cursor-pointer text-sm hover:text-accent-cream transition-colors uppercase tracking-wider">contact</li>
      </ul>

      <div className="flex items-center gap-3 lg:gap-4">
        {/* Theme Toggle - Now visible on both desktop and mobile */}
        <button
          onClick={toggleTheme}
          className="flex p-2 rounded-full bg-gray-100 dark:bg-white/10 lg:bg-white/20 hover:bg-gray-200 lg:hover:bg-white/30 text-gray-600 dark:text-white lg:text-white transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {/* Download Button - Hidden on small mobile if needed, or kept */}
        <button className="hidden sm:flex bg-[#7978ff] lg:bg-white rounded-md h-9 lg:h-10 px-4 hover:shadow-lg transition-all items-center gap-2">
          <span className="text-white lg:text-[#7978ff] text-xs lg:text-sm font-semibold">
            Download
          </span>
          <img src={arrow} alt="" className="w-4 lg:w-5 invert lg:invert-0" />
        </button>

        {/* Hamburger Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-600 dark:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px' }}>
        <ul className="flex flex-col items-center gap-8 pt-10 text-gray-800 dark:text-white font-[Eina01-SemiBold]">
          <li onClick={() => scrollToSection(home)} className="text-lg cursor-pointer hover:text-[#7978ff] transition-colors uppercase">home</li>
          <li onClick={() => scrollToSection(service)} className="text-lg cursor-pointer hover:text-[#7978ff] transition-colors uppercase">service</li>
          <li onClick={() => scrollToSection(Agent)} className="text-lg cursor-pointer hover:text-[#7978ff] transition-colors uppercase">Agent</li>
          <li onClick={() => scrollToSection(faqs)} className="text-lg cursor-pointer hover:text-[#7978ff] transition-colors uppercase">faqs</li>
          <li onClick={() => scrollToSection(contact)} className="text-lg cursor-pointer hover:text-[#7978ff] transition-colors uppercase">contact</li>
          <li className="mt-4">
            <button className="flex bg-[#7978ff] text-white rounded-md px-8 py-3 font-semibold shadow-md active:scale-95 transition-transform">
              Download App
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

