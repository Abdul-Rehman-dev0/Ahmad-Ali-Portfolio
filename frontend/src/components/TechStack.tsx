import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Layout, Smartphone, Cloud, Terminal, GitBranch, Globe, BoxIcon, Layers } from 'lucide-react';

const technologies = [
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: BoxIcon },
  { name: 'TailwindCSS', icon: Layout },
  { name: 'GraphQL', icon: Layers },
  { name: 'Python', icon: Terminal },
  { name: 'Git', icon: GitBranch },
  { name: 'React Native', icon: Smartphone }
];

export function TechStack() {
  return (
    <section className="py-20 bg-background overflow-hidden border-y border-slate-800/50 relative">
      <div className="absolute inset-0 bg-primary/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-2xl font-semibold text-slate-200">
          Powered by Modern Tech Stack
        </h2>
      </div>

      {/* Main Wrapper */}
<div className="relative flex overflow-hidden group">
  <div 
    className="animate-scroll flex space-x-8 py-4 min-w-full"
    style={{ animationDuration: '10s' }} 
  >
    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
      <div 
        key={`${tech.name}-${index}`} 
        className="flex-shrink-0 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm text-slate-300 hover:text-white hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-default"
      >
        <tech.icon size={20} className="text-primary" />
        <span className="font-medium whitespace-nowrap">{tech.name}</span>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}