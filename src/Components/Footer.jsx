import React from 'react'
import logo from "../assets/pay.png"
import book from "../assets/fb-icon.png"
import wings from "../assets/bird.png"
import snap from "../assets/camera.png"
import media from "../assets/link.png"
import dash from "../assets/line.png"



const Footer = () => {
  return (
    <div className='bg-[#1B1F23] w-[300px] h-[800px] mt-20 lg:w-full lg:h-[400px]' >
      <div className='w-[50px] h-[30px]  lg:w-[70px] lg:h-[47px]'>
        <img src={logo} className='mx-5 pt-20 lg:mx-20'/>
        </div>
      <div className='flex flex-col justify-center items-center lg:flex lg:flex-row'>
        
        <div className='flex flex-col items-center gap-4 justify-center px-10 mt-10 '>

          <h1 className=' text-[20px] text-[#FFFFFF] '>Services</h1>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Airtime Top-up</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Data Bundles</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Utility Bill Payments</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Education Bill Payment</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>TV subscriptions</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>User Gifting</a>
        </div>
        <div className='flex flex-col items-center gap-4 justify-center mx-10 px-10 mb-5 '>
          <h1 className=' text-[20px] text-[#FFFFFF]'>Company</h1>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>About Us</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>FAQs</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Contact info</a>
        </div>
        <div className='flex flex-col items-center gap-4 justify-center mx-10 px-10 mb-5'>
          <h1 className=' text-[20px] text-[#FFFFFF]'>Legal</h1>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Privacy Policy</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Terms & Conditions</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Security</a>
        </div>
        <div className='flex flex-col items-center gap-4 justify-center mx-10 px-10 mb-10'>
          <div className='flex gap-2'>
        <a href='facebook' className='text-[#7978ff]   '><img src={book} className='w-[30px]'/></a>
        <a href='facebook' className='text-[#7978ff]   w-[30px]'><img src={wings} className='w-[30px]'/></a>
        <a href='facebook' className='text-[#7978ff]   w-[30px]'><img src={snap} className='w-[30px]'/></a>
        <a href='facebook' className='text-[#7978ff]   w-[30px]'><img src={media} className='w-[30px]'/></a>
        
        </div>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>Email@smatpay.com</a>
          <a href='#' className='text-[#FFFFFF] text-sm hover:text-[#38c5ca]'>+234 123 456 7890</a>
        </div>
       

      </div>
      <div>
        <img src={dash} className='bg-[#7978FF] w-[40px]'/>
        <p className='text-white px-7 lg:py-3 text-center'>&copy; 2024 SmatPay. All rights reserved.<br/>Designed By Adamu</p>
      </div>
    </div>
  )
}

export default Footer
