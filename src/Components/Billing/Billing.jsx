import React from 'react'
import googleicon from "../../assets/Google-logo.png"
import play from "../../assets/Google_play.png"
import wallet from "../../assets/screen-wallet.png"

const Billing = () => {
  return (
    <div className='bg-[#E6ECFD] w-[320px] h-[480px] mx-auto flex flex-col rounded-md  lg:w-[1312px] lg:h-[494px] lg:flex lg:flex-row '>
      <div className=''>
        <p className='text-[#7978ff] font-semibold text-[24px] mx-10 pt-5 px-10 lg:pt-10 '>Download The Smatpay App</p>
        <h1 className='mx-20 font-semibold text-[20px] mt-5 lg:mt-10 lg:text-[30px]'>Join The New Billing & VTU<br/> Platform For Seamless<br/> Transactions</h1>
        <div className="mx-20 mb-2 flex gap-2 mt-5  ">
            <button className="">
              <img src={googleicon} className="w-[100px] h-[50px] lg:w-[150px] lg:h-[50px]"  />
            </button>
            <button>
              <img src={play} className="w-[100px] h-[50px] lg:w-[150px] lg:h-[50px]" />
            </button>
          </div>
      </div>
      <div className="mx-20 mt-10">
          <img
            src={wallet} className='w-[150px] h-[100px] lg:w-[539px] lg:h-[450px]'
          />
        </div>
    </div>
  )
}

export default Billing
