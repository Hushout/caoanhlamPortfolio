"use client"
import React from 'react'
import { motion } from "framer-motion"
import { FaReact } from 'react-icons/fa'

export default function ReactIconAnimation() {
    return (
        <motion.div
            animate={{
                rotate: [0, 360],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <FaReact size={100}/>
        </motion.div>
    )
}
