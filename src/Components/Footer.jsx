import React from 'react'
import logo from "../assets/pay.png"
import book from "../assets/fb-icon.png"
import wings from "../assets/bird.png"
import snap from "../assets/camera.png"
import media from "../assets/link.png"
import dash from "../assets/line.png"



const Footer = () => {
  return (
    <footer className='bg-neutral-dark text-white py-16 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>

          {/* Brand / Logo Section */}
          <div className='flex flex-col items-center lg:items-start space-y-4'>
            {/* <img src={logo} className='w-32 h-auto rounded-lg bg-white/10 p-2'/> */}
            <div className="text-2xl font-bold font-display text-white">SmatPay</div>
            <p className="text-gray-400 text-sm text-center lg:text-left">
              Your trusted partner for seamless financial transactions.
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

            <div className='flex gap-4 mt-4'>
              <a href='facebook' className='opacity-80 hover:opacity-100 transition-opacity'><img src={book} className='w-6 h-6' alt="Facebook" /></a>
              <a href='twitter' className='opacity-80 hover:opacity-100 transition-opacity'><img src={wings} className='w-6 h-6' alt="Twitter" /></a>
              <a href='instagram' className='opacity-80 hover:opacity-100 transition-opacity'><img src={snap} className='w-6 h-6' alt="Instagram" /></a>
            </div>
            <div className="pt-4 text-center lg:text-left space-y-1">
              <p className='text-gray-400 text-sm'>smatvtubiltopup@gmail.com</p>
              <p className='text-gray-400 text-sm'>+234 8146704074</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-500 text-sm text-center'>&copy; 2024 SmatPay. All rights reserved.</p>
          {/* <img src={dash} className='w-full max-w-[200px] opacity-20'/> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
