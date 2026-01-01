import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [{
  company: 'TechFlow Solutions',
  role: 'Senior Full Stack Developer',
  period: '2021 - Present',
  description: 'Leading a team of 5 developers building enterprise SaaS products. Architected microservices using Node.js and Kubernetes.',
  tech: ['React', 'Node.js', 'AWS', 'Docker']
}, {
  company: 'Creative Digital Agency',
  role: 'Full Stack Developer',
  period: '2019 - 2021',
  description: 'Developed custom e-commerce solutions and high-performance marketing sites for global brands.',
  tech: ['Next.js', 'Shopify', 'GraphQL', 'PostgreSQL']
}, {
  company: 'StartUp Inc',
  role: 'Junior Developer',
  period: '2018 - 2019',
  description: 'Collaborated on the MVP launch of a fintech mobile application. Implemented secure authentication flows.',
  tech: ['React Native', 'Firebase', 'Redux']
}];

export function Timeline() {
  return <section id="experience" className="py-24 bg-slate-900/20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2 ml-4 md:ml-0" />

          <div className="space-y-12">
            {experiences.map((exp, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            delay: index * 0.2
          }} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center ml-4 md:ml-0 z-10">
                  <div className="w-3 h-3 bg-primary rounded-full relative">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0">
                  {/* Yahan md:text-left hamesha rakha gaya hai */}
                  <div className={`p-6 rounded-card-lg bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 md:text-left`}>
                    
                    {/* Items ko hamesha start (left) par align kiya gaya hai */}
                    <div className={`flex items-center gap-2 mb-2 text-primary text-sm font-medium md:justify-start`}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className={`flex items-center gap-2 text-slate-400 mb-4 md:justify-start`}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 md:justify-start`}>
                      {exp.tech.map(t => <span key={t} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {t}
                        </span>)}
                    </div>
                  </div>
                </div>

                {/* Empty Space for Layout Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}