import React from "react";
import Google from "../../assets/Google_play.png";
import App from "../../assets/App_Store.png";
import smart from "../../assets/smatpay-mockup.png";
import wallet from "../../assets/wallet.gif";
import Navbar from "../Navbar/Navbar";
import HamburgerMenu from "../HamburgerMenu";

const Hero = () => {
  return (
    <div className="relative w-full bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 dark:bg-secondary/5 rounded-bl-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:pt-20 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">

            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-dark dark:text-white leading-tight mt-12 lg:mt-0">
              Manage and Pay <br />
              <span className="text-primary dark:text-primary-light">All Your Bills,</span> <br />
              From One Place!
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Your Trusted VTU and Bill Payment Platform for Quick
              Seamless Transactions, Anywhere, Anytime!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <a href="/smatpay.apk" className="hover:opacity-80 transition-opacity">
                <img src={Google} className="h-14 w-auto" alt="Download on Google Play" />
              </a>
              <a href="/smatpay.apk" className="hover:opacity-80 transition-opacity">
                <img src={App} className="h-14 w-auto" alt="Download on App Store" />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative">
            <div className="relative z-10 mx-auto w-full max-w-[500px]">
              <img
                src={smart}
                alt="SmatPay App Mockup"
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Element - Optional if you have wallet gif or similar */}
              {/* <img src={wallet} className="absolute -bottom-10 -left-10 w-24 h-24 animate-bounce hover:animate-none" alt="Wallet" /> */}
            </div>
            {/* Decorative circle behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/30 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
