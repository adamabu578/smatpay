import React from "react";
import group from "../../assets/Group3.png";
import space from "../../assets/getimg.png";
import groupimg from "../../assets/Group2.png"
import person from "../../assets/profile.png"

const GetStarted = () => {
  return (
    <div className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 w-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:justify-between">
          <div className="flex-1 w-full animate-fade-in-up">
            <div className="mb-12">
              <span className="text-secondary dark:text-secondary-light font-bold tracking-widest uppercase text-sm bg-secondary/10 dark:bg-secondary/20 px-4 py-2 rounded-full inline-block mb-4">How it works</span>
              <h1 className="font-extrabold text-4xl lg:text-5xl text-neutral-dark dark:text-white tracking-tight leading-tight">
                <span className="text-primary dark:text-primary-light">3 Simple Ways</span> to <br />
                Get Started with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary-light dark:to-purple-400">Smatpay</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                We’ve made it seamlessly easy to onboard on the Smatpay App
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full max-w-2xl">
              {/* Step 1 */}
              <div className="glass-card flex items-start gap-6 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-secondary/10 flex items-center justify-center p-3">
                  <img src={group} className="w-full h-full object-contain" alt="Download Icon" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-neutral-dark dark:text-white mb-2">Download & Install the App</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-snug">
                    Go to your app store, search and download the “Smatpay” app, then install it.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-card flex items-start gap-6 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center p-3">
                  <img src={person} className="w-full h-full object-contain" alt="Profile Icon" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-neutral-dark dark:text-white mb-2">Sign-up on the Smatpay App</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-snug">
                    Open the app and follow the quick sign-up process. It’s free and easy.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-card flex items-start gap-6 p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-500/10 flex items-center justify-center p-3">
                  <img src={groupimg} className="w-full h-full object-contain" alt="Wallet Icon" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-neutral-dark dark:text-white mb-2">Fund Wallet and Pay Bills</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-snug">
                    Add funds to your account wallet and start paying your bills.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <img src={space} className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="Get connected mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
