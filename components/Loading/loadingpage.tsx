'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Loading() {
  return (
    <div className="h-screen bg-gradient-to-br to-white from-gray-300 flex justify-center items-center">
      <div className="flex flex-col items-center gap-0">
        <div className="flex items-center">
          <motion.img
            className="w-20"
            src="/assets/images/logo.png"
            alt="logo of nexus"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.img>
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Start with the image off-screen to the right and invisible
            animate={{ opacity: 1, x: 0 }} // Fade to full opacity and slide to the original position
            transition={{ duration: 1.5 }}
            className="text-2xl  font-semibold font-mono tracking-[0.25em]"
          >
            NEXUS
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="leading-loose flex text-center tracking-[0.85em] font-light text-[10px] ml-6 self-center  "
        >
          Loading
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              repeat: Infinity, // Loop the animation indefinitely
              ease: "easeInOut",
            }}
          >
            ...
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Loading