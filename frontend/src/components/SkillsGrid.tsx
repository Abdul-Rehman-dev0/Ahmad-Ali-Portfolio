import React, { Children, lazy } from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, CreditCard, Cloud, Zap, Database, Smartphone, Layers } from 'lucide-react';
const skills = [{
  title: 'API Development',
  description: 'RESTful & GraphQL APIs with robust error handling and validation.',
  icon: Server
}, {
  title: 'Authentication',
  description: 'Secure auth flows using JWT, OAuth, and role-based access control.',
  icon: Shield
}, {
  title: 'Payment Systems',
  description: 'Integration with Stripe, PayPal, and local payment gateways.',
  icon: CreditCard
}, {
  title: 'Cloud Infrastructure',
  description: 'Scalable deployment on AWS, Vercel, and container orchestration.',
  icon: Cloud
}, {
  title: 'Performance',
  description: 'Optimization for Core Web Vitals, caching strategies, and lazy loading.',
  icon: Zap
}, {
  title: 'State Management',
  description: 'Complex state handling with Redux, Zustand, and Context API.',
  icon: Database
}, {
  title: 'Mobile Integration',
  description: 'Cross-platform mobile apps using React Native and WebViews.',
  icon: Smartphone
}, {
  title: 'Serverless',
  description: 'Event-driven architecture using AWS Lambda and Edge Functions.',
  icon: Layers
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
export function SkillsGrid() {
  return <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Expertise
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-slate-400 max-w-2xl mx-auto">
            Deep understanding of the entire web development spectrum, from
            database design to pixel-perfect UIs.
          </motion.p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true,
        margin: '-100px'
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => <motion.div key={index} variants={item} whileHover={{
          scale: 1.02,
          y: -5
        }} className="group p-6 rounded-card bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:bg-slate-800/50 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}