import React from 'react'
import { motion } from "framer-motion";

export default function Hover() {
  return (
    <motion.div whileHover={{backgroundColor:"red"}} whileDrag={{scale:4}} draggable={true}>Hover</motion.div>
  )
}
