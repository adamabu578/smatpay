import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import smatpaylogo from "../../assets/logo1.png";
import arrow from "../../assets/arrow-right.png";
import { useTheme } from "../../Context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const home = useRef(null);
  const service = useRef(null);
  const Agent = useRef(null);
  const faqs = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <nav
      className="flex items-center justify-around h-24 bg-[#7978FF] dark:bg-gray-900 transition-colors duration-300 sticky top-0 z-50 shadow-md" >
      <div className="mx-5 w-10 ">
        <img src={smatpaylogo} alt="" className="rounded-lg" />
      </div>
      <ul className="flex gap-4 items-center px-10 text-white font-[Eina01-SemiBold] hidden lg:flex">
        <li onClick={() => scrollToSection(home)} className="cursor-pointer link hover:text-accent-cream transition-colors">home</li>
        <li onClick={() => scrollToSection(service)} className="cursor-pointer link hover:text-accent-cream transition-colors">service</li>
        <li onClick={() => scrollToSection(Agent)} className="cursor-pointer link hover:text-accent-cream transition-colors">Agent</li>
        <li onClick={() => scrollToSection(faqs)} className="cursor-pointer link hover:text-accent-cream transition-colors">faqs</li>
        <li onClick={() => scrollToSection(contact)} className="cursor-pointer link hover:text-accent-cream transition-colors">contact</li>
      </ul>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <button className="flex ml-2 bg-[#FFFFFF] rounded-md w-20rem h-10 px-4 hover:shadow-lg transition-shadow">
          <span className=" bg-[#FFFFFF] flex items-center gap-1 text-center text-[#7978ff] mt-1 font-semibold">
            Download App
            <img src={arrow} alt="arrow-right" className=" w-5 h-25 mt-1 " />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

