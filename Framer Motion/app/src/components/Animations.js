import React from 'react'
import {motion} from "framer-motion";

export default function Animations() {
  return (
    <div>
        <motion.p initial={{backgroundColor: "green"}} animate={{backgroundColor:"red",scale:0.4}} transition={{duration: 3,delay: 1,ease: 'easeInOut'}}>
            I am a Animation
        </motion.p>
    </div>
  )
}
