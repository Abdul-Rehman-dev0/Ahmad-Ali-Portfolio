import React from 'react';
import { motion } from 'framer-motion';
interface TimelineHeroProps {
  company: string;
  role: string;
  period: string;
}
export function TimelineHero({
  company,
  role,
  period
}: TimelineHeroProps) {
  return <section className="relative py-24 md:py-40 px-6 md:px-0 mb-16">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-6">
            <h2 className="text-electric-blue text-xl md:text-2xl font-semibold tracking-wide uppercase">
              {role}
            </h2>
            <span className="hidden md:block w-px h-8 bg-gray-700"></span>
            <p className="text-gray-400 text-lg font-light">{period}</p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
            {company}
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            Built scalable web & mobile applications with end-to-end ownership.
            Specialized in high-performance architecture and developer
            experience.
          </p>
        </motion.div>

        {/* Animated Gradient Line */}
        <div className="h-1.5 w-full bg-navy-light rounded-full overflow-hidden relative mt-16">
          <motion.div className="absolute top-0 left-0 h-full bg-gradient-to-r from-electric-blue via-purple-500 to-electric-blue bg-[length:200%_100%]" initial={{
          width: 0
        }} animate={{
          width: '100%',
          backgroundPosition: ['0% 0%', '100% 0%']
        }} transition={{
          width: {
            duration: 1.2,
            ease: 'easeInOut',
            delay: 0.2
          },
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }
        }} />
        </div>
      </div>
    </section>;
}