import React from 'react';
import { motion } from 'framer-motion';
import { Eye, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const projectsData = [
  {
    id: 'neural-canvas',
    title: 'Neural Canvas',
    description: 'A next-generation visualization tool for neural network architectures with real-time collaboration.',
    image: '/Container.png', 
    bannerClass: 'bg-gradient-to-br from-blue-900/20 to-purple-900/20',
    tags: ['React', 'TypeScript', 'Three.js', 'Node.js'],
    duration: '6 months',
    role: 'Lead Full-Stack Developer',
    status: 'Live',
    users: '2.5K+',
    overview: `Neural Canvas emerged from a critical need in the machine learning workflow: the gap between conceptual architecture design and actual implementation.`,
    overviewSecondary: `This platform provides an intuitive visual interface where teams can collaboratively design neural network architectures.`,
    objectives: ['Reduce development time by 80%', 'Enable real-time collaboration', 'Instant architecture validation', 'Multi-framework support'],
    responsibilities: ['Technical architecture', 'WebGL rendering engine', 'Real-time sync system'],
    techStack: [
      { name: 'React', category: 'Frontend' }, { name: 'Three.js', category: 'Graphics' },
      { name: 'Node.js', category: 'Backend' }, { name: 'WebSocket', category: 'Real-time' }
    ],
    features: [
      { title: 'Real-time Sync', desc: 'WebSocket synchronization.', color: 'blue' },
      { title: 'GPU Rendering', desc: 'WebGL pipeline optimized.', color: 'purple' }
    ],
    impact: [
      { label: 'Time Saved', value: '82%', desc: 'Faster dev' },
      { label: 'Active Users', value: '2,500+', desc: 'ML engineers' }
    ],
    architecture: {
      client: 'React + WebGL', server: 'Node.js', db1: 'Redis', db2: 'PostgreSQL',
      metrics: [{ label: 'Avg Latency', value: '24ms' }, { label: 'Uptime', value: '99.9%' }, { label: 'Throughput', value: '5K/s' }]
    }
  },
  {
    id: 'nexus-shop',
    title: 'Nexus E-Commerce',
    description: 'A high-performance digital marketplace with advanced filtering and secure Stripe integration.',
    image: '/nexus-shop.png',
    bannerClass: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
    tags: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
    duration: '4 months',
    role: 'Full Stack Architect',
    status: 'Live',
    users: '10K+',
    overview: `Nexus Shop was built to handle high-traffic retail events with SSR and Edge Caching.`,
    overviewSecondary: `The core focus was on Page Speed and a frictionless checkout experience.`,
    objectives: ['Mobile-first checkout', 'Inventory sync', 'Dynamic pricing engine', 'Global CDN distribution'],
    responsibilities: ['DB Schema Design', 'Payment Integration', 'Search Optimization'],
    techStack: [
      { name: 'Next.js', category: 'Frontend' }, { name: 'Prisma', category: 'ORM' },
      { name: 'Stripe', category: 'Payments' }, { name: 'PostgreSQL', category: 'Database' }
    ],
    features: [
      { title: 'Smart Search', desc: 'Instant filtering via Algolia.', color: 'emerald' },
      { title: 'Secure Pay', desc: 'Stripe Elements integration.', color: 'blue' }
    ],
    impact: [
      { label: 'Load Speed', value: '0.4s', desc: 'Global average' },
      { label: 'Conversion', value: '+35%', desc: 'Sales increase' }
    ],
    architecture: {
      client: 'Next.js (Edge)', server: 'Serverless', db1: 'Upstash', db2: 'Supabase',
      metrics: [{ label: 'Checkout', value: '12s' }, { label: 'Cache Hit', value: '94%' }, { label: 'API Resp', value: '110ms' }]
    }
  },
  {
    id: 'nova-ai',
    title: 'Nova AI Dashboard',
    description: 'Enterprise SaaS dashboard for managing AI workflows and token usage analytics.',
    image: '/nova-ai.png',
    bannerClass: 'bg-gradient-to-br from-orange-900/20 to-red-900/20',
    tags: ['React', 'FastAPI', 'Docker', 'OpenAI'],
    duration: '3 months',
    role: 'Backend Engineer',
    status: 'Beta',
    users: '500+',
    overview: `Nova AI simplifies the complexity of monitoring multiple LLM deployments.`,
    overviewSecondary: `Tracks token usage and provides automated budget alerts.`,
    objectives: ['Multi-LLM monitoring', 'Cost tracking', 'Prompt versioning', 'API proxying'],
    responsibilities: ['FastAPI Backend', 'Docker Orchestration', 'Analytics Pipeline'],
    techStack: [
      { name: 'React', category: 'Frontend' }, { name: 'FastAPI', category: 'Backend' },
      { name: 'Docker', category: 'DevOps' }, { name: 'MongoDB', category: 'Database' }
    ],
    features: [
      { title: 'Cost Analysis', desc: 'Token cost breakdown.', color: 'orange' },
      { title: 'Model Proxy', desc: 'Unified API for OpenAI/Anthropic.', color: 'red' }
    ],
    impact: [
      { label: 'Cost Saved', value: '25%', desc: 'Optimized usage' },
      { label: 'Latency', value: '-40%', desc: 'Via caching' }
    ],
    architecture: {
      client: 'React UI', server: 'Python FastAPI', db1: 'MongoDB', db2: 'Prometheus',
      metrics: [{ label: 'Proxy Lag', value: '15ms' }, { label: 'Auth Time', value: '45ms' }, { label: 'Data Pull', value: '1.2s' }]
    }
  }
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 bg-[#000814]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-900/40 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col"
            >
              <div className="h-52 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                   <Link to={`/project/${project.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
                     <Eye size={18} /> View Details
                   </Link>
                </div>
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">
                  {project.title} Preview
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.description}</p>

                
                <div className="space-y-2 mb-6">
                  {project.objectives.slice(0, 3).map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] text-slate-300">
                      <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}