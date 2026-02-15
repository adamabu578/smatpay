import React from "react";
// import Card from "../Card/Card"; 
import ChooseCard from "../ChooseCard";
import { CheckCircle, Shield, Zap, UserCheck } from "lucide-react"; // Assuming lucide-react is installed as seen in HamburgerMenu

const Choose = () => {
   const chooseData = [
      {
         title: "Pay bills on the go",
         subTitle: "Experience unparalleled convenience with SmatPay's 'Pay Bills on the Go' feature, allowing you to effortlessly manage and settle your bills anytime, anywhere. Enjoy the freedom to stay on top of your financial commitments.",
         icon: <CheckCircle className="w-6 h-6" />
      },
      {
         title: "Seamless Transaction",
         subTitle: "At SmatPay, we prioritize delivering a seamless transaction experience that sets us apart. Our platform is meticulously designed to ensure that every transaction, whether it's a VTU top-up or a bill payment, is executed effortlessly.",
         icon: <Zap className="w-6 h-6" />
      },
      {
         title: "Swift and Secure",
         subTitle: "Our platform is engineered to ensure rapid transactions without compromising on safety. With cutting-edge technology and robust security measures in place, we guarantee that your financial information remains confidential and protected.",
         icon: <Shield className="w-6 h-6" />
      },
      {
         title: "User-Friendly Excellence",
         subTitle: "Navigating through our intuitive interface is designed to be effortless, ensuring that users of all backgrounds can easily access and utilize our services. Choose SmatPay for a user-friendly experience.",
         icon: <UserCheck className="w-6 h-6" />
      }
   ];

   return (
      <div className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-secondary dark:text-secondary-light font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
               <h1 className="text-3xl lg:text-4xl font-bold text-neutral-dark dark:text-white mt-2 mb-4">
                  Why Choose <span className="text-primary dark:text-primary-light">SMATPAY</span>
               </h1>
               <p className="text-lg text-gray-600 dark:text-gray-300">
                  Your top payment platform with reliable user-service experience
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
               {chooseData.map((item, index) => (
                  <ChooseCard
                     key={index}
                     title={item.title}
                     subTitle={item.subTitle}
                     icon={item.icon}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Choose;

