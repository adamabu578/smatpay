import React from "react";
import Google from "../../assets/Google_play.png";
import App from "../../assets/App_Store.png";
import smart from "../../assets/double-screen.png";
import wallet from "../../assets/wallet.gif";
import Navbar from "../Navbar/Navbar";
import HamburgerMenu from "../HamburgerMenu";

const Hero = () => {
  return (
    <div className="relative bg-purple-950 w-full lg:h-[711px]">
      {/* <Navbar /> */}
      {/* <HamburgerMenu /> */}
      <div className="flex flex-col items-center lg:flex-row">
        <div className="text-center lg:text-left mx-6 lg:mx-40">
          <img src={wallet} className="w-40 h-30" />
          <h1 className="text-[28px] lg:text-[40px] xl:text-[54px] font-bold text-[#FFFFFF] font-Eina01-Regular ">
            Manage and Pay All Your Bills,<br></br>From One Place!
          </h1>
          <p className="text-[#FFFFFF] text-[20px] text-lg font-Eina01-Regular my-8 ">
            Your Trusted VTU and Bill Payment Platform for Quick Seamless<br></br>
            Transactions,Anywhere,Anytime!
          </p>
          <div className="mx-8 lg:mx-40 mb-2 flex gap-2 mt-  ">
            <button className="">
              <img src={Google} className="w-[150px] h-[50px]" />
            </button>
            <button>
              <img src={App} className="w-[150px] h-[50px]" />
            </button>
          </div>
        </div>

        <div className="static lg:absolute lg:bottom-0 lg:right-12">
          <img
            src={smart} width={539}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
