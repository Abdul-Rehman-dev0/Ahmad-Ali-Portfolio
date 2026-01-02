import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ExternalLink, Github, Calendar, User, Target, 
  TrendingUp, CheckCircle2, Code2, Zap, Layers 
} from 'lucide-react';
import { projectsData } from '../components/ProjectsGrid';

export function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="text-white p-20 text-center">Project Not Found</div>;

  return (
    <div className="min-h-screen bg-[#000814] text-gray-100">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
          <Link to="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24 text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">{project.title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"><ExternalLink size={18}/> Live Demo</a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"><Github size={18}/> Code</a>
            </div>
          </div>
          <div className={`flex-1 w-full aspect-video rounded-2xl border border-white/10 ${project.bannerClass} flex items-center justify-center text-gray-500 italic shadow-2xl`}>
             Image Placeholder
          </div>
        </motion.header>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { icon: Calendar, label: 'Duration', value: project.duration, color: 'text-blue-400' },
            { icon: User, label: 'Role', value: project.role, color: 'text-purple-400' },
            { icon: Target, label: 'Status', value: project.status, color: 'text-green-400' },
            { icon: TrendingUp, label: 'Users', value: project.users, color: 'text-orange-400' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5">
              <stat.icon size={20} className={`${stat.color} mb-3`} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{project.overview}</p>
              <p className="text-gray-300 leading-relaxed">{project.overviewSecondary}</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-6 text-purple-400"><Code2 size={24}/><h2 className="text-2xl font-bold text-white">Tech Stack</h2></div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                    <div className="text-white font-medium text-sm">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Zap size={20} className="text-yellow-400"/> Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-${f.color}-400`}/>
                    <div><span className="text-white font-semibold block">{f.title}</span>{f.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

       
        <section className="mb-24 bg-white/5 p-12 rounded-3xl border border-white/5">
           <div className="text-center mb-12">
             <Layers size={40} className="mx-auto mb-4 text-indigo-400" />
             <h2 className="text-3xl font-bold text-white">System Architecture</h2>
           </div>
           <div className="flex flex-col items-center gap-6 max-w-sm mx-auto">
              <div className="w-full py-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center text-white font-bold">{project.architecture.client}</div>
              <div className="text-gray-600 font-mono text-xs">WEB SOCKETS / HTTPS</div>
              <div className="w-full py-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center text-white font-bold">{project.architecture.server}</div>
              <div className="grid grid-cols-2 gap-4 w-full pt-4">
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-center text-xs text-white">{project.architecture.db1}</div>
                <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg text-center text-xs text-white">{project.architecture.db2}</div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}