import React from 'react'
import Accordion from '../Accordion/Accordion'

const FAQ = () => {
  return (
    <div className="p-4 bg-[#7978FF] w-[250px] rounded-lg lg:w-[1085px]  mx-auto ">
    
      <Accordion title='Why Should I use Smatpay' answer='Smatpay emerges as the optimal choice for your financial transactions, seamlessly combining efficiency, security, and user-friendly excellence. With Billslink, you gain access to a comprehensive platform that simplifies VTU top-ups and bill payments, ensuring a hassle-free experience at every step.'/>
      
      {/* <Accordion title='Do you prefer writing css or Tailwind' answer='i like to use tailwind'/>
    
      <Accordion title='Firebase or superbase?' answer='i like to use supabase'/>  */}
    </div>
  )
}

export default FAQ