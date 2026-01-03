import React, { ReactNode } from 'react';
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
  return (
    <motion.div 
      // Animations
      initial={{ opacity: 0, x: 20 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true, margin: '-50px' }} 
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: 'easeOut' 
      }}
      // Hover Effect
      whileHover={{ y: -5 }}
      
      className={`
        /* Default State: Pehle se thoda light aur transparent */
        bg-white/[0.03] border border-white/10 
        p-6 md:p-8 rounded-2xl backdrop-blur-md 
        transition-all duration-300 ease-in-out
        
        /* Hover State: Blue border aur subtle glow */
        hover:border-blue-500/50 
        hover:bg-blue-500/[0.02]
        hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]
        
        ${className}
      `}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center gap-3 group">
        {/* Left Indicator - Hover pe glow karega */}
        <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
        {title}
      </h3>
      
      <div className="text-gray-300/90 leading-relaxed font-normal">
        {children}
      </div>
    </motion.div>
  );
}