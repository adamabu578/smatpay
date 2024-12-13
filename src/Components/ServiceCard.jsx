import React from "react";
import home from "../assets/homescreen.png"

const ServiceCard = () => {
  return (
    <div className="  gap-4  text-sm mt-5 justify-center items-center">
      <div className="bg-purple-950  rounded-md w-[300px] h-[250px] p-6 relative lg:w-[400px] lg:h-[300px] lg:rounded-xl md:w-[300px] md:h-[200px]">
        <h1
          className="font-Eina01-SemiBold text-[#FFFFFF]  text-[20px] lg:text-[20px]"
        >
          Airtime Top-up
        </h1>
        <p
          className="text-[#FFFFFF] font-
Eina01-Regular text-[14px] mt-2 lg:text-[18px]"
        >
          Now, topping up your mobile airtime has never been easier – whether
          you're on the go or at home. Say goodbye to the hassle of searching
          for physical recharge cards or dealing with complex codes
        </p>
        <img src={home}  className="absolute bottom-100 left-40 w-[120px] h-[75px] lg:w-[135px] lg:h-[140px]"/>
      </div>
    
    </div>
  );
};

export default ServiceCard;
