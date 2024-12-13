import React from 'react'

const ChooseCard = ({title, subTitle}) => {
  return (
    <div className="items-center justify-center w-[300px] min-h-[250px] lg:w-[400px] lg:min-h-[300px] gap-4">
      <div className="bg-[#F0F1F2] p-4 m-7 rounded-md  mx-auto items-center">
         <h3 className="mb-2 font-
Eina01-SemiBold text-[24px]">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-4">
          {/* <img
            src={bills}
          className="rounded-[50%] w-[30px]"
          /> */}
           <p className="text-[15px] font- 
Eina01-Regular">
          {subTitle}
          </p> 
        </div>
      </div>
    </div>
  )
}

export default ChooseCard
