import React from 'react'
import logo from "../assets/pay.png"
import book from "../assets/fb-icon.png"
import wings from "../assets/bird.png"
import snap from "../assets/camera.png"
import media from "../assets/link.png"
import dash from "../assets/line.png"



const Footer = () => {
  return (
    <footer className='bg-neutral-dark dark:bg-[#0f141e] text-white py-20 w-full relative overflow-hidden'>
      {/* Background glow for footer */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>

          {/* Brand / Logo Section */}
          <div className='flex flex-col items-center lg:items-start space-y-6'>
            <div className="text-3xl font-extrabold font-display text-white tracking-tight">SmatPay</div>
            <p className="text-gray-400 text-sm xl:text-base text-center lg:text-left leading-relaxed">
              Your trusted partner for seamless financial transactions, bill payments, and top-ups anytime, anywhere.
            </p>
          </div>

          {/* Services */}
          <div className='flex flex-col items-center lg:items-start space-y-3'>
            <h3 className='text-lg font-bold text-secondary mb-2'>Services</h3>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Airtime Top-up</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Data Bundles</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Utility Bill Payments</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Education Bill Payment</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>TV subscriptions</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>User Gifting</a>
          </div>

          {/* Company */}
          <div className='flex flex-col items-center lg:items-start space-y-3'>
            <h3 className='text-lg font-bold text-secondary mb-2'>Company</h3>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>About Us</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>FAQs</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Contact info</a>
          </div>

          {/* Legal & Social */}
          <div className='flex flex-col items-center lg:items-start space-y-3'>
            <h3 className='text-lg font-bold text-secondary mb-2'>Legal</h3>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Privacy Policy</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Terms & Conditions</a>
            <a href='#' className='text-gray-300 hover:text-secondary transition-colors text-sm'>Security</a>

            <div className='flex gap-4 mt-6'>
              <a href='#facebook' className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/50 hover:scale-110 transition-all'><img src={book} className='w-5 h-5 opacity-80' alt="Facebook" /></a>
              <a href='#twitter' className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/50 hover:scale-110 transition-all'><img src={wings} className='w-5 h-5 opacity-80' alt="Twitter" /></a>
              <a href='#instagram' className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/50 hover:scale-110 transition-all'><img src={snap} className='w-5 h-5 opacity-80' alt="Instagram" /></a>
            </div>
            <div className="pt-6 text-center lg:text-left space-y-2">
              <a href="mailto:smatvtubiltopup@gmail.com" className='text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 justify-center lg:justify-start'>&#9993; smatvtubiltopup@gmail.com</a>
              <a href="tel:+2348146704074" className='text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 justify-center lg:justify-start'>&#9742; +234 8146704074</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10 pt-8 flex flex-col items-center gap-4'>
          <p className='text-gray-500 text-sm text-center'>&copy; 2024 SmatPay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
