import React, { useState,useEffect } from 'react'
import { motion,AnimatePresence } from "framer-motion"

export default function Modal() {
  const [showModal,setShowModal] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true);
    },5000)
  },[setShowModal])
  return (
    <div>
        <AnimatePresence exitBeforeEnter>
          {showModal && <motion.div initial={{opacity: 0}} animate={{opacity:1}} >
            Hello World
          </motion.div>}
          </AnimatePresence>  
    </div>
  )
}
