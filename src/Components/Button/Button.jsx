import React from 'react'
import { Proptypes } from "prop-types"
import arrow from "../../assets/arrow-right1.png"
const Button = ({background, color}) => {

  return (
    <div>
       <span className={`flex ml-2 bg-[${background}] w-[170px] h-[30px] rounded-md px-4 mb-5 lg:w-[242px] lg:h-[64px] `}>
        <span className={`mx-auto flex items-center gap-1  text-[${color}] mt-1 text-[10px] font-family-Eina01-SemiBold lg:text-[16px] `}>
          Download App
          <img src={arrow} alt="arrow-right" className=" w-5 h-25 mt-1 " />
        </span>
      </span> 
    </div>
  )
}


Button.defaultProps = {
  color: "#FFFFFF",
  background: "#0345E6"
}
export default Button
