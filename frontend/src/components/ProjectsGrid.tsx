import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
const projects = [{
  title: 'E-commerce Platform',
  description: 'A full-featured online store with real-time inventory, Stripe payments, and admin dashboard.',
  tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
  image: 'bg-gradient-to-br from-blue-900 to-slate-900',
  features: ['Real-time inventory', 'Secure checkout', 'Admin dashboard'],
  links: {
    demo: '',
    github: '#'
  }
}, {
  title: 'Task Management App',
  description: 'Collaborative project management tool with real-time updates and team workspaces.',
  tags: ['React', 'Firebase', 'Redux', 'DnD'],
  image: 'bg-gradient-to-br from-emerald-900 to-slate-900',
  features: ['Drag & drop', 'Team collaboration', 'Real-time sync'],
  links: {
    demo: '#',
    github: '#'
  }
}, {
  title: 'AI Content Generator',
  description: 'SaaS application leveraging OpenAI API to generate marketing copy and blog posts.',
  tags: ['TypeScript', 'OpenAI', 'Next.js', 'Prisma'],
  image: 'bg-gradient-to-br from-purple-900 to-slate-900',
  features: ['AI Integration', 'Subscription billing', 'History tracking'],
  links: {
    demo: '#',
    github: '#'
  }
}];
export function ProjectsGrid() {
  return <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </motion.h2>
            <p className="text-slate-400 max-w-xl">
              A selection of projects that demonstrate my ability to solve
              complex problems with code.
            </p>
          </div>
          <a href="#" className="text-primary hover:text-white transition-colors flex items-center gap-2 group">
            View Github{' '}
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group relative rounded-card-lg overflow-hidden border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-500">
              {/* Project Preview Placeholder */}
              <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500" />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.links.demo} className="p-3 rounded-full bg-primary text-white hover:scale-110 transition-transform shadow-glow" title="View Live">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.links.github} className="p-3 rounded-full bg-slate-800 text-white hover:scale-110 transition-transform border border-slate-700" title="View Code">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => <li key={i} className="flex items-center text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>)}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => <span key={tag} className="px-2 py-1 text-xs rounded bg-slate-800/50 text-slate-300 border border-slate-700/50">
                      {tag}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}