import React from 'react'
import bill from "../../assets/user-profile.png";

const Agents = () => {
  return (
    <div className='py-20 lg:py-32 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className="bg-white dark:bg-gray-800 w-full rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center border border-gray-100 dark:border-gray-700 shadow-xl relative p-10 lg:p-16 gap-12 lg:gap-20">

        {/* Glow decoration */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

        <div className="flex-1 w-full flex justify-center lg:justify-start relative z-10 animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-primary/30 rounded-full blur-2xl transform scale-110 -z-10" />
            <img src={bill} className="w-[150px] lg:w-[350px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" alt="Agent profile" />
          </div>
        </div>

        <div className="flex-1 w-full mx-auto relative z-10 text-center lg:text-left animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <span className="text-secondary dark:text-secondary-light font-bold tracking-widest uppercase text-sm bg-secondary/10 px-4 py-2 rounded-full inline-block mb-4">Partnership</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-neutral-dark dark:text-white mt-2 mb-6 tracking-tight">Become a Smatpay Agent</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            As a Smatpay agent, you'll be part of a dynamic platform that empowers you to offer VTU and bill payment services to your community. Enjoy the benefits of a simple onboarding process, competitive commissions, and access to a wide range of services.
          </p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-teal-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(160,216,201,0.4)] hover:shadow-[0_12px_25px_rgba(160,216,201,0.6)]">
            Join the Network
          </button>
        </div>
      </div>
    </div>
  )
}

export default Agents