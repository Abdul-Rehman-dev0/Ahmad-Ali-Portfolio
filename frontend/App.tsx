import React, { memo } from 'react';
import { Github, ExternalLink, Calendar, User, Target, TrendingUp, CheckCircle2, Code2, Zap, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
export function App() {
  return <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.header initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mb-24">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  Neural Canvas
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  A next-generation visualization tool for neural network
                  architectures with real-time collaboration and GPU-accelerated
                  rendering.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105">
                  <ExternalLink size={18} />
                  <span className="font-medium">Live Demo</span>
                </a>
                <a href="#" className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/10">
                  <Github size={18} />
                  <span className="font-medium">View Code</span>
                </a>
              </div>
            </div>

            {/* Project Image */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="flex-1 w-full max-w-lg">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/40">
                <img src="/Container.png" alt="Neural Canvas Interface" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Stats Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[{
          icon: Calendar,
          label: 'Duration',
          value: '6 months',
          color: 'blue'
        }, {
          icon: User,
          label: 'Role',
          value: 'Lead Dev',
          color: 'purple'
        }, {
          icon: Target,
          label: 'Status',
          value: 'Live',
          color: 'green'
        }, {
          icon: TrendingUp,
          label: 'Users',
          value: '2.5K+',
          color: 'orange'
        }].map((stat, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4 + idx * 0.1
        }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <stat.icon size={20} className={`text-${stat.color}-400 mb-3`} />
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>)}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Overview - Spans 2 columns */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Neural Canvas emerged from a critical need in the machine
                learning workflow: the gap between conceptual architecture
                design and actual implementation. Data scientists were spending
                hours translating whiteboard sketches into code, often
                introducing errors in the process.
              </p>
              <p>
                This platform provides an intuitive visual interface where teams
                can collaboratively design neural network architectures,
                validate them in real-time, and export production-ready code for
                PyTorch or TensorFlow with a single click.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">
                Key Objectives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Reduce development time by 80%', 'Enable real-time collaboration', 'Instant architecture validation', 'Multi-framework support'].map((objective, idx) => <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-400">{objective}</span>
                  </div>)}
              </div>
            </div>
          </motion.div>

          {/* Role Card */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <div className="flex items-center space-x-2 mb-6">
              <User size={20} className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">My Role</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Lead Full-Stack Developer
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Led a team of 4 developers through the entire product
                  lifecycle, from concept to production.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {['Technical architecture', 'WebGL rendering engine', 'Real-time sync system', 'Code generation pipeline'].map((item, idx) => <li key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }} className="mb-24">
          <div className="flex items-center space-x-2 mb-6">
            <Code2 size={20} className="text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[{
              name: 'React',
              category: 'Frontend'
            }, {
              name: 'TypeScript',
              category: 'Language'
            }, {
              name: 'Three.js',
              category: 'Graphics'
            }, {
              name: 'WebGL',
              category: 'Graphics'
            }, {
              name: 'Node.js',
              category: 'Backend'
            }, {
              name: 'WebSocket',
              category: 'Real-time'
            }, {
              name: 'Redis',
              category: 'Cache'
            }, {
              name: 'PostgreSQL',
              category: 'Database'
            }, {
              name: 'Docker',
              category: 'DevOps'
            }, {
              name: 'Tailwind',
              category: 'Styling'
            }].map((tech, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.8 + idx * 0.05
            }} className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
                  <div className="font-semibold text-white text-sm mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.9
      }} className="mb-24">
          <div className="flex items-center space-x-2 mb-6">
            <Zap size={20} className="text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            title: 'Real-time Collaboration',
            desc: 'WebSocket-based synchronization with conflict resolution.',
            color: 'blue'
          }, {
            title: 'GPU Acceleration',
            desc: 'WebGL pipeline optimized for 60fps performance.',
            color: 'purple'
          }, {
            title: 'Smart Code Export',
            desc: 'Export to PyTorch and TensorFlow with validation.',
            color: 'green'
          }, {
            title: 'Version Control',
            desc: 'Git-like branching with visual diff viewer.',
            color: 'orange'
          }, {
            title: 'Architecture Templates',
            desc: 'Pre-built templates for common architectures.',
            color: 'pink'
          }, {
            title: 'Performance Analytics',
            desc: 'Real-time model parameters and memory estimation.',
            color: 'cyan'
          }].map((feature, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1.0 + idx * 0.1
          }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-10 h-10 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                  <div className={`w-2 h-2 rounded-full bg-${feature.color}-400`}></div>
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>)}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1.1
      }} className="mb-24">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp size={20} className="text-green-400" />
            <h2 className="text-2xl font-bold text-white">Impact & Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            label: 'Time Saved',
            value: '82%',
            desc: 'Faster development'
          }, {
            label: 'Active Users',
            value: '2,500+',
            desc: 'ML engineers'
          }, {
            label: 'Models Created',
            value: '15K+',
            desc: 'Architectures'
          }, {
            label: 'Code Accuracy',
            value: '98.7%',
            desc: 'Validation rate'
          }].map((result, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 1.2 + idx * 0.1
          }} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {result.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">
                  {result.label}
                </div>
                <div className="text-xs text-gray-500">{result.desc}</div>
              </motion.div>)}
          </div>
        </motion.section>

        {/* Architecture Diagram */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1.3
      }} className="mb-24">
          <div className="flex items-center space-x-2 mb-6">
            <Layers size={20} className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">
              System Architecture
            </h2>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
              <div className="w-full bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center shadow-lg shadow-blue-500/5">
                <span className="text-white font-semibold">
                  Client (React + WebGL)
                </span>
              </div>
              <div className="text-gray-600">↓ WebSocket ↓</div>
              <div className="w-full bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center shadow-lg shadow-purple-500/5">
                <span className="text-white font-semibold">
                  Server (Node.js)
                </span>
              </div>
              <div className="text-gray-600">↓ ↓</div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center shadow-lg shadow-green-500/5">
                  <span className="text-white font-semibold text-sm">
                    Redis
                  </span>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-center shadow-lg shadow-orange-500/5">
                  <span className="text-white font-semibold text-sm">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-1">24ms</div>
                <div className="text-xs text-gray-500">Avg Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">5K/s</div>
                <div className="text-xs text-gray-500">Throughput</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.4
      }} className="text-center text-gray-600 text-sm">
          <p>© 2024 Portfolio. Built with React & TypeScript.</p>
        </motion.footer>
      </div>
    </div>;
}