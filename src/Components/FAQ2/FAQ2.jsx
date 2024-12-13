import React, { useState } from 'react';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqs = [
    {
      'question': 'Why Should I use SmatPay?',
      'answer': 'SmatPay emerges as the optimal choice for your financial transactions, seamlessly combining efficiency, security, and user-friendly excellence. With SmatPay, you gain access to a comprehensive platform that simplifies VTU top-ups and bill payments, ensuring a hassle-free experience at every step.'
    },
    {
      'question': 'How secure is SmatPay?',
      'answer': 'SmatPay prioritizes your security with state-of-the-art encryption and robust security measures to ensure that your financial information is protected. Our platform is designed to provide you with peace of mind during every transaction.'
    },
    {
      'question': 'What services does SmatPay offer?',
      'answer': 'SmatPay offers a wide range of services including VTU top-ups, bill payments, and more. Our platform is designed to make your financial transactions as convenient as possible.'
    },
    {
     'question': 'How can I get started with SmatPay?',
      'answer': 'Getting started with SmatPay is easy. Simply sign up on our website or app, and you can start using our services right away. Our user-friendly interface will guide you through the process.'
    },
    {
      'question': 'Are there any fees for using SmatPay?',
      'answer': 'SmatPay offers competitive pricing with minimal fees for transactions. You can check our website for a detailed breakdown of any applicable fees.'
    },
    {
      'question': 'Are there any fees for using SmatPay?',
      'answer': 'SmatPay offers competitive pricing with minimal fees for transactions. You can check our website for a detailed breakdown of any applicable fees.'
    },
    {
      'question': 'What customer support options are available?',
      'answer': 'SmatPay provides multiple customer support options including email, live chat, and a comprehensive help center. Our team is ready to assist you with any questions or issues.'
    },
    
  
  ];

  return (
    <div className="w-full max-w-xl p-6 mx-auto mt-10">
      {/* <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2> */}
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-2 border-[#7978FF] pb-4 rounded-md px-4 ">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={() => toggle(i)} 
            >
              <h3 className="text-[18px] font-bold text-[#1B1F23]">{faq.question}</h3>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            {selected === i && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FAQ;
