// HamburgerMenu.jsx
import React, { useRef, useState } from "react";
import hamburg from "../assets/hampay.png"
import left from "../assets/blue.png"



const NewNavbar = ({setScroll, home, service, faq, contact, agent}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-950 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl"><img src={hamburg} className="w-[70px] h-[50px] rounded-md"/></div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
             <svg
              className="w-20 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg> 
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full `}>
          <ul className="flex flex-col md:flex-row md:space-x-4 mx-auto">
            {/* <li className="text-white py-2 px-4 hover:text-[#38c5ca]">Home</li>
            <li className="text-white py-2 px-4 hover:text-[#38c5ca]">Our Services</li>
            <li className="text-white py-2 px-4 hover:text-[#38c5ca]">Become an agent</li>
            <li className="text-white py-2 px-4 hover:text-[#38c5ca]">FAQ</li>
            <li className="text-white py-2 px-4 hover:text-[#38c5ca]">Contact Us</li> */}
            <li onClick={() => setScroll(home) } className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]">Home</li>
            <li onClick={() => setScroll(service) } className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]">Service</li>
            <li onClick={() => setScroll(agent) } className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]">Agent</li>
            <li onClick={() => setScroll(faq) } className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]">Faqs</li>
            <li onClick={() => setScroll(contact) } className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]">Contact</li>
          
          </ul>
          <button className="flex items-center gap-2 bg-[#FFFFFF] rounded-md px-2 py-2 ">
            <p className="text-[#7978ff] text-sm lg:text-lg">
              Download App
            </p>
              <img src={left} alt="arrow-right" className=" w-[10px]  lg:w-[20px] " />
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default NewNavbar;
