import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, ExternalLink, Calendar, User, Target, 
  TrendingUp, CheckCircle2, Code2, Zap, Layers, ArrowLeft 
} from 'lucide-react';
import { projectsData } from '../components/ProjectsGrid'; 
import { Footer } from '../components/Footer';

export function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center font-bold tracking-wider uppercase">Project Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-[#000814] text-gray-100 font-sans">
      
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[#000814]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link 
            to="/projects" 
            className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
          >
            <div className="p-1 rounded-lg bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white">
              Back to Portfolio
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-4">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">Ahmad Ali</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          
          {/* Hero Section */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="mb-24"
          >
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="flex-1 space-y-8">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105 active:scale-95">
                    <ExternalLink size={18} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                  <a href="#" className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/30">
                    <Github size={18} />
                    <span className="font-medium">View Code</span>
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.2, duration: 0.6 }} 
                className="flex-1 w-full max-w-lg"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5 group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            </div>
          </motion.header>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { icon: Calendar, label: 'Duration', value: project.duration, color: 'blue' },
              { icon: User, label: 'Role', value: project.role, color: 'purple' },
              { icon: Target, label: 'Status', value: project.status, color: 'green' },
              { icon: TrendingUp, label: 'Users', value: project.users, color: 'orange' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 + idx * 0.1 }} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <stat.icon size={20} className={`text-${stat.color}-400 mb-3 transition-transform duration-300 group-hover:scale-110`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5 }} 
              className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-blue-500/20 transition-colors duration-500"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{project.overview}</p>
                <p>{project.overviewSecondary}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Key Objectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.objectives.map((objective, idx) => (
                    <div key={idx} className="flex items-start space-x-2 group">
                      <CheckCircle2 size={18} className="text-green-400 mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" />
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Role Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-purple-500/20 transition-colors duration-500"
            >
              <div className="flex items-center space-x-2 mb-6">
                <User size={20} className="text-blue-400" />
                <h2 className="text-2xl font-bold text-white">My Role</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">{project.role}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Executing core development and managing system architecture.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {project.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start group">
                        <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">•</span>
                        <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mb-24">
            <div className="flex items-center space-x-2 mb-6">
              <Code2 size={20} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/5">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 hover:scale-105 cursor-default">
                    <div className="font-semibold text-white text-sm mb-1">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Features Grid */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mb-24">
            <div className="flex items-center space-x-2 mb-6">
              <Zap size={20} className="text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
                  <div className={`w-2 h-2 rounded-full bg-blue-400 mb-4 shadow-[0_0_8px_rgba(96,165,250,0.6)] group-hover:scale-150 transition-transform`}></div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Impact Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mb-24">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp size={20} className="text-green-400" />
              <h2 className="text-2xl font-bold text-white">Impact & Results</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.impact.map((result, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                  <div className="text-sm font-semibold text-gray-300 mb-1">{result.label}</div>
                  <div className="text-xs text-gray-500">{result.desc}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Architecture Section */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mb-24">
            <div className="flex items-center space-x-2 mb-6">
              <Layers size={20} className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">System Architecture</h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-indigo-500/20 transition-colors duration-500">
              <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
                <div className="w-full bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 text-center font-semibold text-white hover:bg-blue-500/20 transition-colors cursor-default">
                  Client ({project.architecture.client})
                </div>
                <div className="text-gray-600 font-mono text-xs animate-bounce">↓ Data Flow ↓</div>
                <div className="w-full bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center font-semibold text-white hover:bg-purple-500/20 transition-colors cursor-default">
                  Server ({project.architecture.server})
                </div>
                <div className="text-gray-600 font-mono text-xs animate-pulse">↓ ↓</div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center text-sm font-semibold text-white hover:bg-green-500/20 transition-colors cursor-default">
                    {project.architecture.db1}
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-center text-sm font-semibold text-white hover:bg-orange-500/20 transition-colors cursor-default">
                    {project.architecture.db2}
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {project.architecture.metrics.map((m, i) => (
                  <div key={i} className="group">
                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{m.value}</div>
                    <div className="text-xs text-gray-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

        </div>
        <Footer />
      </main>
    </div>
  );
}