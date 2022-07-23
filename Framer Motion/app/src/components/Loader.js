import React from 'react'
import "./Loader.css";
import {motion, useCycle} from "framer-motion"
const Variant = {
    visible:{
      x: [-20,20],
      y: [0,-30],
      transition:{
        y:{
            yoyo: Infinity,
            duration: 0.25,
            ease: "easeOut"
        },
        x:{
            yoyo: Infinity,
            duration: .5
        }
      }
    },
    animationTwo:{
        y: [0, -40],
        x: 0,
        transition:{
            y:{
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}
export default function Loader() {
  const [animation,cycleAnimation] = useCycle("visible","animationTwo");  
  return (
    <>
        <motion.div className='loader' variants={Variant} animate={animation}>           
        </motion.div>
        <motion.button onClick={()=>{
            cycleAnimation()
        }} drag dragConstraints={{left: 0,top:0,right: 0,bottom:0}} dragElastic={0.8}> 
            Click Me
        </motion.button>
    </>
  )
}
