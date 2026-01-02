import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
export function NavigationControls() {
  return <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-12 border-t border-white/5">
      <motion.button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group" whileHover={{
      x: -4
    }}>
        <ArrowLeft className="w-5 h-5 group-hover:text-electric-blue transition-colors" />
        <div className="text-left">
          <span className="block text-xs text-gray-500">Previous</span>
          <span className="font-medium">E-Commerce Platform</span>
        </div>
      </motion.button>

      <motion.button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors" whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }}>
        <Grid className="w-4 h-4" />
        Back to Portfolio
      </motion.button>

      <motion.button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group" whileHover={{
      x: 4
    }}>
        <div className="text-right">
          <span className="block text-xs text-gray-500">Next</span>
          <span className="font-medium">FinTech Dashboard</span>
        </div>
        <ArrowRight className="w-5 h-5 group-hover:text-electric-blue transition-colors" />
      </motion.button>
    </div>;
}