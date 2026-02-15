import React from 'react'
import Arrow from "../assets/arrow.png"

const Qstion = () => {
  return (
    <div>
      <a href='' className='text-purple-950 dark:text-primary-light font-medium flex justify-center gap-4 items-center mb-20'>Still have questions? Get in touch with us <span><img src={Arrow} className='w-[20px]' /></span></a>
    </div>
  )
}

export default Qstion
