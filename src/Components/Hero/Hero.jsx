import React from "react";
import Google from "../../assets/Google_play.png";
import App from "../../assets/App_Store.png";
import smart from "../../assets/smatpay-mockup.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden pt-20">
      {/* Dynamic Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 dark:bg-primary/20 rounded-full blur-3xl opacity-60 animate-blob pointer-events-none" />
      <div className="absolute top-20 right-40 w-[500px] h-[500px] bg-secondary/30 dark:bg-secondary/20 rounded-full blur-3xl opacity-60 animate-blob [animation-delay:2000ms] pointer-events-none" />
      <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl opacity-60 animate-blob [animation-delay:4000ms] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-neutral-dark dark:text-white leading-tight tracking-tight animate-fade-in-up">
              Manage and Pay <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary-light dark:to-purple-400">All Your Bills,</span> <br />
              From One Place!
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              Your Trusted VTU and Bill Payment Platform for Quick <br className="hidden lg:block" />
              Seamless Transactions, Anywhere, Anytime!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              <a href="/smatpay.apk" className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl rounded-xl">
                <img src={Google} className="h-14 w-auto rounded-xl" alt="Download on Google Play" />
              </a>
              <a href="/smatpay.apk" className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl rounded-xl">
                <img src={App} className="h-14 w-auto rounded-xl" alt="Download on App Store" />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative mt-12 lg:mt-0 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="relative z-10 mx-auto w-full max-w-[500px] xl:max-w-[580px] animate-float">
              <img
                src={smart}
                alt="SmatPay App Mockup"
                className="w-full h-auto drop-shadow-[0_25px_35px_rgba(91,79,168,0.25)] dark:drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
            {/* Decorative circle behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary/5 rounded-full blur-2xl -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
