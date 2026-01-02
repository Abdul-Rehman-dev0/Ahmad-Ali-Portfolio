import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github } from 'lucide-react';
export function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <section id="home" className="relative bg-transparent min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

    {/* Cursor Glow */}
    <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300" style={{
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05), transparent 80%)`
    }} />

    {/* Animated Blobs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-30" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-30" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
        <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
          Available for Hire
        </span>
      </motion.div>

      <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        Ahmad Ali
        <span className="block text-white text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 mt-2">
          Full Stack Developer
        </span>
      </motion.h1>

      <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Building scalable web & mobile apps with modern frameworks and
        cloud-ready backends. Specialized in React, Node.js, and cloud
        architecture.
      </motion.p>

      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#projects" className="group relative px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden transition-all hover:shadow-glow hover:scale-105 active:scale-95 w-full sm:w-auto">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative flex items-center justify-center gap-2">
            View Projects <ArrowRight size={18} />
          </span>
        </a>

        <a
          href="/Ahmad_Ali_CV.pdf"
          download="Ahmad_Ali_Resume.pdf"
          className="group px-8 py-4 bg-slate-900 text-white font-medium rounded-full border border-slate-800 transition-all hover:bg-slate-800 hover:border-slate-700 hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <Download size={18} /> Download Resume
        </a>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    {/* <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-xs text-slate-500 uppercase tracking-widest">
        Scroll
      </span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
    </motion.div> */}
  </section>;
}