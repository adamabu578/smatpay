import React from 'react'
import googleicon from "../../assets/Google-logo.png"
import play from "../../assets/Google_play.png"
import wallet from "../../assets/screen-wallet.png"

const Billing = () => {
  return (
    <div className="py-20 lg:py-32 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#E6ECFD] to-indigo-50 dark:from-indigo-950 dark:to-gray-900 w-full rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative border border-white/50 dark:border-gray-800">

        {/* Glow decoration */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/20 dark:bg-primary/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

        <div className="flex-1 p-10 lg:p-20 flex flex-col justify-center relative z-10 animate-fade-in-up">
          <p className="text-primary dark:text-primary-light font-bold text-sm tracking-widest uppercase mb-4 bg-primary/10 w-max px-4 py-2 rounded-full">
            Download The Smatpay App
          </p>
          <h1 className="font-extrabold text-4xl lg:text-5xl text-neutral-dark dark:text-white tracking-tight leading-tight mb-8">
            Join The New Billing & VTU Platform For <span className="text-primary dark:text-primary-light">Seamless Transactions</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/smatpay.apk" className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl rounded-xl w-max bg-white/50 p-1">
              <img src={googleicon} className="h-14 w-auto object-contain rounded-lg" alt="Get it on Google Play" />
            </a>
            <a href="/smatpay.apk" className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl rounded-xl w-max bg-white/50 p-1">
              <img src={play} className="h-14 w-auto object-contain rounded-lg" alt="Download on the App Store" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-end items-end relative overflow-hidden animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] pt-10 px-8 lg:px-0 lg:pt-20">
          <img src={wallet} className="w-full max-w-[400px] lg:max-w-none lg:w-[120%] h-auto object-cover object-left-top drop-shadow-2xl translate-x-0 lg:translate-x-12 translate-y-12 lg:translate-y-24" alt="Wallet Screen" />
        </div>
      </div>
    </div>
  )
}

export default Billing
