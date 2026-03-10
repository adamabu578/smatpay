import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ end, suffix = "", duration = 2000, start = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTimestamp = null;
    let animationFrame;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we end up exactly on the final number
      }
    };
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return <span>{count}{suffix}</span>;
};

const TypewriterText = ({ text, speed = 50, start = false }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, start]);

  return <span className="whitespace-pre-line">{displayedText}</span>;
};

const Rating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full relative py-16 lg:py-24 my-10 overflow-hidden text-white shadow-xl">
      {/* Dynamic colorful background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-secondary -z-20" />
      <div className="absolute inset-0 bg-black/10 dark:bg-black/40 -z-10 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="flex-1 md:border-r border-white/20 pr-0 md:pr-8 animate-fade-in-up">
          <p className="text-xl md:text-2xl font-light leading-relaxed h-[150px] md:h-auto">
            <TypewriterText text="Trusted by more than" start={isVisible} speed={40} /><br />
            <span className="font-extrabold text-4xl md:text-5xl text-white drop-shadow-md tracking-tight">
              <AnimatedCounter end={1000} suffix="+" start={isVisible} duration={2000} />
            </span> <br />
            <TypewriterText text="users across the country" start={isVisible} speed={40} />
          </p>
        </div>

        <div className="flex-1 flex justify-center flex-col items-center animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
          <div className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-2">
            <AnimatedCounter end={1} suffix="K" start={isVisible} duration={2000} />
          </div>
          <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest h-12 flex items-center">
            <TypewriterText text="Ratings" start={isVisible} />
          </div>
        </div>

        <div className="flex-1 flex justify-center flex-col items-center md:border-l border-white/20 pl-0 md:pl-8 animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <div className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-2">
            <AnimatedCounter end={20} suffix="K" start={isVisible} duration={2000} />
          </div>
          <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest text-center h-12 flex items-center">
            <TypewriterText text="Successful&#10;Transactions" start={isVisible} />
          </div>
        </div>

        <div className="flex-1 flex justify-center flex-col items-center md:border-l border-white/20 pl-0 md:pl-8 animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
          <div className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-2">
            <AnimatedCounter end={90} suffix="%" start={isVisible} duration={2000} />
          </div>
          <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest text-center h-12 flex items-center">
            <TypewriterText text="Satisfied&#10;Clients" start={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
