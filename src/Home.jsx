import React, { useRef } from 'react';

const ScrollToCurrentPage = () => {
  const currentSectionRef = useRef(null);

  const scrollToCurrentSection = () => {
    currentSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <button 
        onClick={scrollToCurrentSection} 
      >
        Scroll to Current Section
      </button>

      {/* <div className="h-screen" /> */}

      <div 
        ref={home}
      >
        {/* <h2 className="text-2xl font-semibold">Current Section</h2>
        <p>This is the section you scrolled to!</p> */}
      </div>
    </div>
  );
};

export default ScrollToCurrentPage;
