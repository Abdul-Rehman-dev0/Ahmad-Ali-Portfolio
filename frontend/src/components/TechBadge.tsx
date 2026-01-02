import React from 'react';
import { motion } from 'framer-motion';
interface TechBadgeProps {
  children: ReactNode;
  delay?: number;
}
export function TechBadge({
  children,
  delay = 0
}: TechBadgeProps) {
  return <motion.div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-light border border-white/10 text-electric-blue text-sm font-medium shadow-sm backdrop-blur-sm" initial={{
    opacity: 0,
    y: 10
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.4,
    delay
  }}>
      {children}
    </motion.div>;
}