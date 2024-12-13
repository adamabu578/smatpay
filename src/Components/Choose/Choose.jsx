import React from "react";
import Card from "../Card/Card";
import ChooseCard from "../ChooseCard";

const Choose = () => {
  return (
   <div className="flex flex-col items-center justify-center lg:justify-normal text-center w-full mt-4">
     <h1 className="font-bold font-Eina01-Bold ">
          <span className="text-[#000000] text-[48px]">Why Choose <span className="text-purple-950">SMATPAY</span></span>
       </h1>
      <p className="text-[20px] font-Eina01-Regular">Your top payment platform with reliable user-service experience</p>
       {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4  "> */}
    <div className="flex flex-col md:grid grid-cols-2 gap-10 mt-4 md:px-auto mx-4">
         <Card />
          <ChooseCard title="Seamless Transaction" subTitle="At SmatPay, we prioritize delivering a seamless transaction experience that sets us apart. Our platform is meticulously designed to ensure that every transaction, whether it's a VTU top-up or a bill payment, is executed effortlessly. From a user-friendly interface to a streamlined process."/>
          <ChooseCard title="Swift and Secure" subTitle="Our platform is engineered to ensure rapid transactions without compromising on safety. With cutting-edge technology and robust security measures in place, we guarantee that your financial information remains confidential and protected. Enjoy the efficiency of swift transactions on SmatPay."/>
          <ChooseCard title="User-Friendly Excellence" subTitle="Navigating through our intuitive interface is designed to be effortless, ensuring that users of all backgrounds can easily access and utilize our services. Choose SmatPay for a user-friendly experience that combines efficiency with ease, redefining how you manage your VTU and bills payments."/>
      </div>
   </div>
  );
 };

 export default Choose;

