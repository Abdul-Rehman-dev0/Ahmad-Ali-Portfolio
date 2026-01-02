import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

// Data ko export kar rahe hain taake detail page ise read kar sake
export const experiences = [
  {
    id: 'techflow',
    company: 'TechFlow Solutions',
    role: 'Senior Full Stack Developer',
    period: '2021 - Present',
    description: 'Leading a team of 5 developers building enterprise SaaS products. Architected microservices using Node.js and Kubernetes.',
    fullOverview: 'Spearheaded the modernization of legacy systems while leading a team of 5 developers. Focused on scalable architecture, developer experience, and delivering high-performance web applications for enterprise clients. Responsible for technical strategy and cloud infrastructure migration.',
    tech: ['React', 'Node.js', 'AWS', 'Docker'],
    metrics: [
      { label: 'Performance', value: '+40%' },
      { label: 'Active Users', value: '500K' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Cost Savings', value: '$12k/mo' }
    ]
  },
  {
    id: 'creative-digital',
    company: 'Creative Digital Agency',
    role: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed custom e-commerce solutions and high-performance marketing sites for global brands.',
    fullOverview: 'Designed and implemented complex e-commerce engines from scratch. Focused on sub-second page loads and seamless payment integrations for high-traffic retail brands.',
    tech: ['Next.js', 'Shopify', 'GraphQL', 'PostgreSQL'],
    metrics: [
      { label: 'Conversion', value: '+25%' },
      { label: 'Load Time', value: '-1.5s' },
      { label: 'SEO Score', value: '98/100' },
      { label: 'Transactions', value: '1M+' }
    ]
  },
  {
    id: 'startup-inc',
    company: 'StartUp Inc',
    role: 'Junior Developer',
    period: '2018 - 2019',
    description: 'Collaborated on the MVP launch of a fintech mobile application. Implemented secure authentication flows.',
    fullOverview: 'Joined as one of the first engineers to build a revolutionary fintech app. Contributed to the core wallet logic and secure user onboarding flows.',
    tech: ['React Native', 'Firebase', 'Redux'],
    metrics: [
      { label: 'App Installs', value: '50K+' },
      { label: 'Security', value: '100%' },
      { label: 'API Speed', value: '120ms' },
      { label: 'Retension', value: '65%' }
    ]
  }
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 bg-slate-900/20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:-translate-x-1/2 ml-4 md:ml-0" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: '-100px' }} 
                transition={{ delay: index * 0.2 }} 
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center ml-4 md:ml-0 z-10">
                  <div className="w-3 h-3 bg-blue-500 rounded-full relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                <div className="flex-1 ml-12 md:ml-0">
                  <Link to={`/experience/${exp.id}`}>
                    <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center gap-2 mb-2 text-blue-400 text-sm font-medium">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-slate-400 mb-4">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                          <span key={t} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}