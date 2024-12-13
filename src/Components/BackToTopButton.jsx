
import React, {useState, useEffect} from 'react';
import scroll from "../assets/up-arrow.png";
// import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setBackToTopButton(true)
        } else {
            setBackToTopButton(false)
        }
    });
    
    }, []);

    const scrollUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }

    return (
    // <div>{BackToTopButton && (<FaAngleDoubleUp  onClick={scrollUp} /> )}</div>
    <div> {BackToTopButton && ( <button  onClick={scrollUp} className="fixed bottom-10 right-0 z-50 rounded-lg bg-purple-500 flex items-center justify-center p-2 h-[50px] w-[50px] "  ><img src={scroll} className='w-[20px]' /></button>)}</div>
    // <div>  
    //     <button  onClick={scrollUp} className="fixed top-0 right-0 z-50 rounded-lg bg-purple-500 flex items-center justify-center p-2 h-[50px] w-[50px] "  ><img src={scroll} className='w-[20px]' /></button>
    // </div>
    )
}


export default BackToTopButton;