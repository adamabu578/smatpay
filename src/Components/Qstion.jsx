import React from 'react'
import Arrow from "../assets/arrow.png"

const Qstion = () => {
  return (
    <div className="py-10 text-center w-full animate-fade-in-up">
      <a href='#contact' className='inline-flex justify-center items-center gap-4 text-purple-600 dark:text-primary-light font-bold text-lg md:text-xl py-4 px-8 rounded-full bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group'>
        Still have questions? Get in touch with us
        <img src={Arrow} className='w-5 group-hover:translate-x-1 transition-transform' alt="Arrow Right" />
      </a>
    </div>
  )
}

export default Qstion
