export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === "up" ? 30 : direction === "down" ? -30 : 0, 
        x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "spring", // More natural feel
          stiffness: 100, // Controls the "bounce"
          damping: 15, // Reduces overshoot
          duration: 0.8, // Slightly longer for a smoother transition
          delay: delay,
        },
      },
    };
  };
  





// to use motions

{/* <motion.div
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false , amount: 0.7}}
    ></motion.div> */}

 //motion
    
// import {motion} from 'framer-motion';

// //varients
// import {fadeIn} from '../varients';