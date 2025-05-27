import React from "react";

const WhiteServiceCard = ({ title, details, image }) => {
  return (
    <div>
      <div
        className="bg-[#FFFFFF] rounded-md w-[300px] h-[250px] p-4 relative lg:w-[400px] lg:h-[300px] shadow-lg "
      >
        {/* Image on top */}
        <img
          src={image}
          alt="Service"
          className="w-[70px] h-[100px] mx-auto lg:w-[70px] lg:h-[100px]"
        />

        <h1 className="font-Eina01-SemiBold text-[#1B1F23] mt-2 text-[20px] lg:text-[28px] lg:mt-4">
          {title}
        </h1>

        <p className="text-[#1B1F23] font-Eina01-Regular text-[14px] lg:text-[16px] mt-2 lg:mt-4">
          {details}
        </p>
      </div>
    </div>
  );
};

export default WhiteServiceCard;
