import React from 'react'

const WhiteServiceCard = ({title, details}) => {
  return (
    <div>
        <div className="bg-[#FFFFFF] rounded-md w-[300px] h-[250px] p-4 relative lg:w-[400px] lg:h-[300px]
        ">
        <h1
          className="font-Eina01-SemiBold text-font-[#1B1F23] mt-4 text-[20px] lg:text-[28px]"
        >
         {title}
        </h1>
        <p
          className="text-font-[#1B1F23] font-
Eina01-Regular text-20 mt-10"
        >{details}
        </p>

    
      </div>
    </div>
  )
}

export default WhiteServiceCard
