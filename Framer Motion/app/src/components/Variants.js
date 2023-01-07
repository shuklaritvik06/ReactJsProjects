import React,{ useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const myAnimation = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8, 
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};
const buttonVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
  },
  scaleButton: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    },
  },
};
export default function Variants() {
  const [visible,setVisibility] = useState(true);
  setTimeout(()=>{
    setVisibility(false);
  },4000)  
  return (
    <div>
      <motion.div variants={myAnimation} initial="hidden" animate="visible">
        <motion.p variants={childVariants} initial="hidden" animate="visible">
          Variants
        </motion.p>
        <motion.div>
          <ul>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
            <li>Item One</li>
          </ul>
        </motion.div>
        <motion.button variants={buttonVariants} whileHover="visible">
          Click Me
        </motion.button>
        <motion.button variants={buttonVariants} whileHover="scaleButton" w>
          Click Me Again
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {visible && <motion.p exit={{y: -1000}} animate={{backgroundColor: "green"}}>Hello</motion.p>}
      </AnimatePresence>
    </div>
  );
}
