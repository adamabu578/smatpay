import React from 'react'
import FAQ from '../FAQ2/FAQ2'

const Faqs = () => {
  return (
    <div className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary dark:text-primary-light font-bold tracking-widest uppercase text-sm bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full inline-block mb-4">Support</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-neutral-dark dark:text-white mt-2 mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Want to know more about our services? Our FAQs section is here to help you with useful information about us.</p>
        </div>
        <FAQ />
      </div>
    </div>
  )
}

export default Faqs
