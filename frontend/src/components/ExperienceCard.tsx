import React from 'react';
import { motion } from 'framer-motion';
interface ExperienceCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}
export function ExperienceCard({
  title,
  children,
  className = '',
  delay = 0
}: ExperienceCardProps) {
  return <motion.div className={`bg-navy-light/50 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm ${className}`} initial={{
    opacity: 0,
    x: 20
  }} whileInView={{
    opacity: 1,
    x: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.5,
    delay,
    ease: 'easeOut'
  }}>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-electric-blue rounded-full inline-block"></span>
        {title}
      </h3>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </motion.div>;
}