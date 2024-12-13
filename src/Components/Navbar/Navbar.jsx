import React, { useState } from "react";
import { useRef } from "react";
import {Link} from "react-scroll";
import smatpaylogo from "../../assets/logo1.png";
import arrow from "../../assets/arrow-right.png";

function Navbar() {
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
      className="flex items-center justify-around  h-24 bg-[#7978FF] " >
      <div className="mx-5 w-10 ">
        <img src={smatpaylogo} alt="" />
      </div>
      <ul className="flex gap-4 items-center  px-10 text-[#FFFF] font-[Eina01-SemiBold] ">
        <li onClick={() => scrollToSection(home) } className="cursor-pointer link">home</li>
        <li onClick={() => scrollToSection(service) } className="cursor-pointer link">service</li>
        <li onClick={() => scrollToSection(Agent) } className="cursor-pointer link">Agent</li>
        <li onClick={() => scrollToSection(faqs) } className="cursor-pointer link">faqs</li>
        <li onClick={() => scrollToSection(contact) } className="cursor-pointer link">contact</li>
      </ul>
      <button className="flex ml-2 bg-[#FFFFFF] rounded-md w-20rem h-10 px-4">
        <span className=" bg-[#FFFFFF] flex items-center gap-1 text-center text-[#7978ff] mt-1">
          Download App
          <img src={arrow} alt="arrow-right" className=" w-5 h-25 mt-1 " />
        </span>
      </button>
    </nav>
  );
}

export default Navbar;

