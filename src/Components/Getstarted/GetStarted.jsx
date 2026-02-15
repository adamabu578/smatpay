import React from "react";
import group from "../../assets/Group3.png";
import space from "../../assets/getimg.png";
import groupimg from "../../assets/Group2.png"
import person from "../../assets/profile.png"
const GetStarted = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-primary/5 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 mt-10 py-10 transition-colors duration-300">

      <div className="flex flex-col lg:flex-row items-center gap-5 lg:justify-between">
        <div className="bg- w-full">
          <div className="">
            <h1 className="font-bold font-Eina01-Bold text-3xl mx-8 dark:text-white">
              Here are
              <span className="text-[#7978FF] dark:text-primary-light font-Bold  "> 3 Simple Ways</span> to
              Get Started with
              <span className="text-[#7978FF] dark:text-primary-light "> Smatpay</span>
            </h1>
            <p className="mx-8 text-[
20px] dark:text-gray-300">
              We’ve made it seamlessly easy to onboard <br />on the Smatpay App
            </p>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="w-[300px] bg-[#F0F1F2] dark:bg-gray-800 dark:text-white transition-colors duration-300 flex items-center mx-6 mt-4 py-6 rounded-lg lg:w-[644px]">
              <div className="w-[2rem] rounded-[20%] lg:w-[3rem] lg:rounded-[50%] shrink-0 ml-4">
                <img src={group} />
              </div>
              <div className="font-famly:Eina01-SemiBold ml-4">
                <h3 className="font-semibold text-[18px] lg:text-[24px] leading-tight mb-2">Download & Install the App</h3>
                <p className="text-[14px] lg:text-[18px] leading-snug pr-4 dark:text-gray-300">
                  Go to your app store, search and download the <br className="hidden lg:block" />
                  “Smatpay” app, then install it.
                </p>
              </div>
            </div>
            <div className="w-[300px] bg-[#F0F1F2] dark:bg-gray-800 dark:text-white transition-colors duration-300 flex items-center mx-6 mt-4 py-6 rounded-lg lg:w-[644px]">
              <div className="w-[2rem] rounded-[20%] lg:w-[3rem] lg:rounded-[50%] shrink-0 ml-4">
                <img src={person} />
              </div>
              <div className="font-famly:Eina01-SemiBold ml-4">
                <h3 className="font-semibold text-[18px] lg:text-[24px] leading-tight mb-2">Sign-up on the Smatpay App</h3>
                <p className="text-[14px] lg:text-[18px] leading-snug pr-4 dark:text-gray-300">
                  Go to your app store, search and download the <br className="hidden lg:block" />
                  “Smatpay” app, then Open the app and <br className="hidden lg:block" />
                  follow the quick sign-up process. It’s free and easy.
                </p>
              </div>
            </div>
            <div className="w-[300px] bg-[#F0F1F2] dark:bg-gray-800 dark:text-white transition-colors duration-300 flex items-center mx-6 px-4 mt-4 py-6 rounded-lg lg:w-[644px]">
              <div className="w-[2rem] rounded-[20%] lg:rounded-[50%] shrink-0">
                <img src={groupimg} />
              </div>
              <div className="font-famly:Eina01-SemiBold ml-4">
                <h3 className="font-semibold text-[18px] lg:text-[24px] leading-tight mb-2">Fund Wallet and Pay Bills</h3>
                <p className="text-[14px] lg:text-[18px] leading-snug dark:text-gray-300">
                  Add funds to your account wallet and start paying your bills.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col w-[300px] h-[100px] lg:w-full lg:flex lg:flex-row lg:items-center">
          <img
            src={space}
            className="w-[100] h-[80] lg:w-[500px] lg:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
