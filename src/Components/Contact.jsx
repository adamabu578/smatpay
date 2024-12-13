import React from 'react'
import facebook from "../assets/fb-icon.png"
import twitter from "../assets/twitter-icon.png"
import insta from "../assets/instagram.png"
import link from "../assets/linkedin-icon.png"
import laptop from "../assets/laptop-man.png"

const Contact = () => {
  return (
    <div className='flex flex-col w-[310px] h-[600px] mx-auto rounded-md  mt-20 lg:flex lg:flex-row lg:w-[1312px] lg:h-[494px] lg:rounded-md'>
      <div >
        <h1 className='text-[30px] text-purple-950 font-semibold mx-20 lg:mt-8 lg:text-[48px]'>Let’s get in touch</h1>
        <p className='mx-20 text-[18px]'>We'd love to hear from you! Whether you have questions about our<br/> services, need assistance, or want to explore partnership<br/> opportunities, let's get in touch.</p>
        <a href='Email us: help@Smatpay.com' className='text-purple-950 mx-20 mt-5 flex justify-start underline'>Email us: help@Smatpay.com</a>
        <a href='Phone number: +234 123 456 7890 ' className='text-purple-950 mx-20  flex justify-start underline'>Phone number: +234 123 456 7890 </a>
        <div className='flex mx-20 gap-2'>
        <a href='facebook' className='text-[#7978ff]   w-[30px]'><img src={facebook}/></a>
        <a href='facebook' className='text-[#7978ff]   w-[30px]'><img src={twitter}/></a>
        <a href='facebook' className='text-[#7978ff]   w-[30px]'><img src={insta}/></a>
        <a href='facebook' className='text-[#7978ff]   w-[30px]'><img src={link}/></a>
        </div>
        
      </div>
      <div className='mt-4 mx-auto lg:mt-8' >
      <img src={laptop} className='w-[180px] h-[80px] lg:w-[501px] lg:h-[376.82px] rounded-md' />
     
      </div>
    </div>
  )
}

export default Contact;
