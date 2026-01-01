import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Globe, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Profile Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm p-2">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                
                <img 
                  src="/santy.jpg" 
                  alt="Ahmad Ali" 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1 }} 
                  transition={{ delay: 0.4 }} 
                  className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Globe size={20} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Based in</p>
                      <p className="text-sm font-semibold text-white">Pakistan</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-medium">Ahmad Ali</span>, a
                passionate Full Stack Developer based in Pakistan. I enjoy
                creating things that live on the internet, whether that be
                websites, applications, or anything in between.
              </p>
              <p>
                My journey in web development started 5 years ago when I decided
                to try editing custom Tumblr themes — turns out hacking together
                HTML & CSS is pretty fun!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at
                an advertising agency, a start-up, and a huge corporation. My
                main focus these days is building accessible, inclusive products
                and digital experiences for a variety of clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary/30 transition-colors">
                <h3 className="text-3xl font-bold text-primary mb-1">5+</h3>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary/30 transition-colors">
                <h3 className="text-3xl font-bold text-primary mb-1">50+</h3>
                <p className="text-sm text-slate-500">Projects Done</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary/30 transition-colors">
                <h3 className="text-3xl font-bold text-primary mb-1">30+</h3>
                <p className="text-sm text-slate-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}