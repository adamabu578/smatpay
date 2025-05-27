
import React, { useState } from "react";
import hamburg from "../assets/hampay.png";
import left from "../assets/blue.png";
import { Link } from "react-router-dom";

const NewNavbar = ({ setScroll, home, service, faq, contact, agent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-950 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl">
          <img src={hamburg} className="w-[70px] h-[50px] rounded-md" alt="Logo" />
        </div>
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
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-4 mx-auto w-full`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 mx-auto">
            <li
              onClick={() => setScroll(home)}
              className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]"
            >
              Home
            </li>
            <li
              onClick={() => setScroll(service)}
              className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]"
            >
              Service
            </li>
            <li
              onClick={() => setScroll(agent)}
              className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]"
            >
              Agent
            </li>
            <li
              onClick={() => setScroll(faq)}
              className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]"
            >
              Faqs
            </li>
            <li
              onClick={() => setScroll(contact)}
              className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]"
            >
              Contact
            </li>
          
          </ul>
      
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/login"
                className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/Sign-up"
                className="cursor-pointer text-white py-2 px-4 hover:text-[#38c5ca]"
              >
                Sign-up
              </Link>
            </li>
            <li>
            <a
              href="https://downloads.smatpay.live/smatpay.apk" // Change this to your actual file path or external link
              download
              className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-white hover:text-[#38c5ca] transition-all"
            >
              Download Now
            </a>
          </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;