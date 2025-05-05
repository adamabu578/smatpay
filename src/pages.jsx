// import React from 'react'
import React, { useRef } from "react";
import Hero from "./Components/Hero/Hero";
import Rating from "./Components/Rating/Rating";
import Choose from "./Components/Choose/Choose";
import Card from "./Components/Card/Card";
import Service from "./Components/Service/Service";
import GetStarted from "./Components/Getstarted/GetStarted";
import Button from "./Components/Button/Button";
import Agents from "./Components/Agents/Agents.jsx";
import Faqs from "./Components/Faqs/Faqs";
import Qstion from "./Components/Qstion.jsx";
import Footer from "./Components/Footer.jsx";
import Billing from "./Components/Billing/Billing.jsx";
import NewNavbar from "./Components/HamburgerMenu.jsx";
import BackToTopButton from "./Components/BackToTopButton.jsx";
import Contact from "./Components/Contact.jsx";





const Pages = () => {
 const home = useRef(null);
  const service = useRef(null);
  const agent = useRef(null);
  const faqs = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: 'smooth',
    })
  }




  return (
<div className="">
      <NewNavbar setScroll={scrollToSection} home={home} service={service} agent={agent} faq={faqs} contact={contact} />
      <Hero />
      <Rating />
      <Choose
        // // title="why choose"
        //  subTitle="Your top payment platform with reliable user-service experience"
      
      />
      <div ref={service}>
        <Service /> 
      </div>
      <GetStarted />
      <Button/>

      <div ref={agent}>
        <Agents/>
      </div>

      <div ref={faqs}>
        <Faqs />
      </div> 

      <div ref={contact}>
        <Contact />
      </div> 
      
      <div className=" p-8">
       
    
        <Qstion/>
        <Billing/>
        {/* <Contact/> */}
        <Footer/>
  
       
      {/* <FooterLine/> */}

      </div>
   
        <BackToTopButton/>
      
      

    </div> 
  )
}

export default Pages