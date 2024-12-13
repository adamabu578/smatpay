import React from 'react'
import  bill from "../../assets/phonebill.png";
import Button from "../Button/Button";

const Agents = () => {
  return (
    <div ref={Agents} className='w-full h-[400px] lg:w-full  mt-60 lg:mt-0  '>
    <div className="w-[350px] h-[350px] rounded-md bg-purple-950  lg:w-[1450px] lg:h-[550px] py-5 mx-5 ">
        <div className="flex flex-col  lg:mt-20 lg:flex lg:flex-row items-center">
            <img src={bill} className="w-[100px] h-[70px]  left-30  lg:w-[280px] lg:h-[320px] lg:left-40 lg:mt-20 " />
            
            <div className="mx-auto lg:mx-auto">
            <h2 className="text-[#FFFFFF] text-[18px] font-semibold mt-10  lg:mt-20 lg:text-[30px] mx-5 ">Become a Smatpay Agent</h2>
             <p className="text-[#FFFFFF]  font-
Eina01-Regular  lg:mt-10 text-[10px] lg:text-[15px] mx-5">As a Smatpay agent, you'll be part of a dynamic platform that empowers you to offer VTU and bill payment services to<br/> your community.Enjoy the benefits of a simple onboarding process, competitive commissions, and access to a wide<br/> range of services.Become a valued partner in the smatpay network by joining us as an agent and unlock a world of <br/> opportunities in financial services.</p>
            <div className='mt-10'>

             <Button background="#FFFFFF" color="#7978FF"/>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}


export default Agents