import React from "react";
import group from "../../assets/Group3.png";
import space from "../../assets/mockup.png";
import groupimg from "../../assets/Group2.png"
import person from "../../assets/profile.png"
const GetStarted = () => {
  return (
    <div className="bg-[#FFFFFF] mt-10 ">
     
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:justify-between">
        <div className="bg- w-full">
          <div className="">
            <h1 className="font-bold font-Eina01-Bold text-3xl mx-8">
              Here are
              <span className="text-[#7978FF] font-Bold  "> 3 Simple Ways</span> to
              Get Started with
              <span className="text-[#7978FF] "> Smatpay</span>
            </h1>
            <p className="mx-8 text-[
20px]">
              We’ve made it seamlessly easy to onboard <br/>on the Smatpay App
            </p>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="w-[300px] h-[150px] bg-[#F0F1F2] flex items-center mx-6 mt-4 lg:w-[644px] lg:h-[148px]">
              <div className="w-[2rem] rounded-[20%] lg:w-[3rem] lg:rounded-[50%]">
                <img src={group} />
              </div>
              <div className=" font-famly:Eina01-SemiBold ">
                <h3 className="font-semibold text-[20px] lg:text-[28px]"> Download & Install the App</h3>
                <p className="text-[15px] lg:text-[20px]">
                  Go to your app store, search and download the <br/>“Smatpay” app, then
                  install it.
                </p>
              </div>
            </div>
            <div className="w-[300px] h-[150px] bg-[#F0F1F2] flex items-center mx-6 mt-4 lg:w-[644px] lg:h-[148px]:">
              <div className="w-[2rem] rounded-[20%] lg:w-[3rem] lg:rounded-[50%]">
                <img src={person} />
              </div>
              <div className=" font-famly:Eina01-SemiBold">
                <h3 className="font-semibold text-[20px] lg:text-[28px]"> Sign-up on the Smatpay App</h3>
                <p className="text-[15px] lg:text-[20px]">
                  Go to your app store, search and download the <br/>“Smatpay” app, then
                Open the app and <br/>follow the quick sign-up process. It’s free and easy.
                </p>
              </div>
            </div>
            <div className="w-[300px] h-[150px] bg-[#F0F1F2] flex items-center mx-6 px-4 mt-4 lg:w-[644px] lg:h-[148px]">
              <div className="w-[2rem] rounded-[20%] lg:rounded-[50%]">
                <img src={groupimg} />
              </div>
              <div className=" font-famly:Eina01-SemiBold">
                <h3 className="font-semibold text-[20px] lg:text-[28px] ">Fund Wallet and Pay Bills</h3>
                <p className="text-[15px] lg:text-[20px]">
                Add funds to your account wallet and start paying your bills.
                </p>
              </div>
            </div>
          
          </div>
        </div>

        <div className="flex flex-col w-[300px] h-[100px] lg:w-full lg:flex lg:flex-row lg:items-center">
          <img
            src={space}
           className="w-[100] h-[80] lg:w-[623px] lg:h-[676px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
