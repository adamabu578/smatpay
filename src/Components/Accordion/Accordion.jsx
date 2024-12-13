import React, { useState} from 'react'
import plus from "../../assets/add.png"
import dash from "../../assets/minus.png"

const Accordion = ({ title, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='py-2 '>
      <button onClick={() => setAccordionOpen(!accordionOpen) } className='flex justify-between w-full'>
        <span className='text-[#FFFFFF] text-[28px] font-semibold mx-auto'>{title}</span>
        {accordionOpen ? <span><img src={dash} className='w-[30px]'/></span> : <span className=''><img src={plus} className='w-[30px]'/></span>}
        
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden text-[20px] text-[#FFFFFF]">
            {answer}
        </div>
      </div>
    </div>
    
  )
}

export default Accordion
