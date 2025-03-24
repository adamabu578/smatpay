import React from "react";
// import ServiceCard from "../ServiceCard";
import WhiteServiceCard from "../WhiteServiceCard";
import electricity from "../../assets/electricity.png";
import data from "../../assets/mobile-data.png";
import tv from "../../assets/smart-tv.png";
import airtime from "../../assets/touch.png";
const Service = () => {
  return (
    <div  className="mx-2 bg-[#E6ECFD] lg:w-[full] lg:h-[
1600px] ">
      <div className="text-center  ">
        <h3 className="text-[#1B1F23] font-semibold weight-400 text-[40px] pt-4 mb-2">Our Services</h3>
        <p className="text-[20px] mb-8">
          Our comprehensive suite of services encompasses seamless VTU
          transactions
        </p>
        <div className="flex flex-col mx-6 lg:flex lg:flex-row ">
          <div className="flex flex-col  mx-auto gap-8 mb-10  lg:flex lg:flex-col">
       {/* <ServiceCard title="Airtime Top-up" details="Now, topping up your mobile airtime has never been easier – whether you're on the go or at home. Say goodbye to the hassle of searching for physical recharge cards or dealing with complex codes"/> */}
       <WhiteServiceCard   
  
       image={airtime}  title="Electricity Bill" details="Our user-friendly interface allows you to effortlessly access and pay your electricity bills, putting the power of hassle-free transactions in your hands." />
       <WhiteServiceCard   image={electricity}  title="Electricity Bill" details="Our user-friendly interface allows you to effortlessly access and pay your electricity bills, putting the power of hassle-free transactions in your hands." />  
      </div>
      <div className="flex flex-col  mx-auto gap-8 mb-4">
       <WhiteServiceCard image={data} title="Data Bundle" details="Experience the convenience of instant data top-ups with Billslink, your go-to VTU and bill payment platform."/> 
      <WhiteServiceCard image={tv} title="TV Subscription" details="Our platform seamlessly integrates TV subscription services, allowing you to effortlessly renew and manage your subscriptions with a few clicks."/> 
      </div>
    </div>
      </div>
      
        {/* <div className="bg-[#FFFFFF] rounded-md w-full h-60 px-4">
          <h3 className="font-semibold font-[#1B1F23] mt-4">
            Data Bundle Top-up
          </h3>
          <p
            className="font-[#1B1F23] font-
Eina01-Regular"
          >
            Experience the convenience of instant data top-ups with Smatpay,
            your go-to VTU and bill payment platform.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-md w-full h-60 px-4 mx-4">
          <h3 className="font-semibold font-[#1B1F23] mt-4">
            Electricity Bill
          </h3>
          <p
            className="font-[#1B1F23] font-
Eina01-Regular"
          >
            Our user-friendly interface allows you to effortlessly access and
            pay your electricity bills, putting the power of hassle-free
            transactions in your hands.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-md w-full h-60 px-4 mx-4">
          <h3 className="font-semibold mt-4">TV Subscription</h3>
          <p
            className="font-
Eina01-Regular "
          >
            Our platform seamlessly integrates TV subscription services,
            allowing you to effortlessly renew and manage your subscriptions
            with a few clicks.
          </p>
        </div> */}
      </div>
  );
};

export default Service;
