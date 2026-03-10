import React from 'react'
import facebook from "../assets/fb-icon.png"
import twitter from "../assets/twitter-icon.png"
import insta from "../assets/instagram.png"
import link from "../assets/linkedin-icon.png"
import laptop from "../assets/laptop-man.png"

const Contact = () => {
  return (
    <div className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-[80px] -z-10" />

          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center gap-8 relative z-10">
            <div>
              <span className="text-primary dark:text-primary-light font-bold tracking-widest uppercase text-sm bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full inline-block mb-4">Contact Us</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-neutral-dark dark:text-white mt-4 mb-6 tracking-tight">Let’s get in touch</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
                We'd love to hear from you! Whether you have questions about our services, need assistance, or want to explore partnership opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-base lg:text-lg">
              <a href="mailto:smatvtubilltopup@gmail.com" className="text-neutral-dark dark:text-white font-medium hover:text-primary dark:hover:text-primary-light transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">&#9993;</div>
                smatvtubilltopup@gmail.com
              </a>
              <a href="tel:+2348146704074" className="text-neutral-dark dark:text-white font-medium hover:text-primary dark:hover:text-primary-light transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xl">&#9742;</span>
                </div>
                +234 81 4670 4074
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="#facebook" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all">
                <img src={facebook} alt="Facebook" className="w-6 opacity-80" />
              </a>
              <a href="#twitter" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all">
                <img src={twitter} alt="Twitter" className="w-6 opacity-80" />
              </a>
              <a href="#instagram" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all">
                <img src={insta} alt="Instagram" className="w-6 opacity-80" />
              </a>
              <a href="#linkedin" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all">
                <img src={link} alt="LinkedIn" className="w-6 opacity-80" />
              </a>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] lg:min-h-full w-full">
            <img src={laptop} alt="Laptop man" className="w-full h-full object-cover rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none shadow-[rgba(0,0,0,0.1)_0px_0px_20px_inset]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
