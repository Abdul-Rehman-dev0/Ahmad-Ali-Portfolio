import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
export function WorkPreviewGallery() {
  const previews = [{
    title: 'Analytics Dashboard',
    type: 'Web App'
  }, {
    title: 'Mobile Interface',
    type: 'iOS / Android'
  }, {
    title: 'Admin Panel',
    type: 'Internal Tool'
  }, {
    title: 'User Profile',
    type: 'Component'
  }, {
    title: 'Data Visualization',
    type: 'Chart Library'
  }, {
    title: 'Settings Module',
    type: 'Configuration'
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {previews.map((item, index) => <motion.div key={index} className="group relative aspect-video bg-navy-light border border-white/5 rounded-xl overflow-hidden cursor-pointer" initial={{
      opacity: 0,
      scale: 0.95
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: true
    }} transition={{
      delay: index * 0.1
    }} whileHover={{
      scale: 1.02
    }}>
          {/* Placeholder Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
            <ImageIcon className="w-8 h-8 text-gray-600 mb-2 group-hover:text-electric-blue transition-colors" />
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
              {item.title}
            </span>
            <span className="text-xs text-gray-600 mt-1">{item.type}</span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-blue/30 rounded-xl transition-colors duration-300" />
        </motion.div>)}
    </div>;
}