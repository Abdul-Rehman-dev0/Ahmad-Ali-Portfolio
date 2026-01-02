import React from 'react';
import { motion } from 'framer-motion';
export function TimelineSpine() {
  return <div className="absolute left-8 md:left-[20%] top-0 bottom-0 w-0.5 bg-navy-light hidden md:block">
      <motion.div className="w-full bg-electric-blue origin-top" initial={{
      height: 0
    }} whileInView={{
      height: '100%'
    }} viewport={{
      once: true
    }} transition={{
      duration: 1.5,
      ease: 'linear'
    }} />
    </div>;
}
interface TimelineNodeProps {
  active?: boolean;
}
export function TimelineNode({
  active = false
}: TimelineNodeProps) {
  return <div className="absolute left-8 md:left-[20%] -translate-x-1/2 flex items-center justify-center z-10">
      <motion.div initial={{
      scale: 0,
      opacity: 0
    }} whileInView={{
      scale: 1,
      opacity: 1
    }} viewport={{
      once: true,
      margin: '-100px'
    }} transition={{
      duration: 0.4,
      type: 'spring'
    }} className={`rounded-full border-4 transition-all duration-500 ${active ? 'w-6 h-6 bg-navy border-electric-blue shadow-[0_0_20px_rgba(0,212,255,0.4)]' : 'w-4 h-4 bg-navy border-gray-700'}`}>
        {active && <motion.div className="w-full h-full bg-electric-blue rounded-full opacity-20" animate={{
        scale: [1, 1.5, 1]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} />}
      </motion.div>
    </div>;
}