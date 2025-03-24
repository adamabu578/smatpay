import React from "react";
import card from "../../assets/card-icon.png";
import bills from "../../assets/bills-icon.png";
import secure from "../../assets/secure-icon.png";
import user from "../../assets/user-icon.png";

const Card = () => {
  return (
    <div className="items-center justify-center w-[300px] min-h-[250px] lg:w-[400px] lg:min-h-[300px] gap-4">
      <div className="bg-[#F0F1F2] p-4 m-7 rounded-md  mx-auto items-center">
         <h3 className="mb-2 font-
Eina01-SemiBold text-[24px]">
          Pay bills on the go
        </h3>
        <div className="flex items-center justify-center gap-4">
          {/* <img
            src={bills}
          className="rounded-[50%] w-[30px]"
          /> */}
           <p className="text-[15px] font- 
Eina01-Regular">
            Experience unparalleled convenience with SmatPay's 'Pay Bills on the
            Go' feature, allowing you to effortlessly manage and settle your
            bills anytime, anywhere. Enjoy the freedom to stay on top of your
            financial commitments without being tied to a desk or burdened by
            paperwork.
          </p> 
        </div>
      </div>
    </div>
  );
};

export default Card;
