import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Globe, Layout, Database, 
  Terminal, ShieldCheck, Zap, Box, 
  Cloud, Container, Settings, BoxSelect, 
  Binary, Workflow, Server, Brackets
} from 'lucide-react';

interface TechBadgeProps {
  children: string;
  delay?: number;
}

export function TechBadge({ children, delay = 0 }: TechBadgeProps) {
  
  // Advanced Icon Mapping with larger default size (20)
  const getIcon = (name: string) => {
    const tech = name.toLowerCase();
    const iconSize = 20;
    
    // Cloud & DevOps
    if (tech.includes('aws') || tech.includes('cloud') || tech.includes('azure')) 
      return <Cloud size={iconSize} className="text-sky-400" />;
    if (tech.includes('docker') || tech.includes('container') || tech.includes('kubernetes') || tech.includes('k8s')) 
      return <Container size={iconSize} className="text-blue-500" />;
    if (tech.includes('jenkins') || tech.includes('cicd') || tech.includes('workflow')) 
      return <Workflow size={iconSize} className="text-orange-500" />;
    
    // Backend & Infrastructure
    if (tech.includes('node') || tech.includes('backend') || tech.includes('express')) 
      return <Server size={iconSize} className="text-green-500" />;
    if (tech.includes('linux') || tech.includes('terminal') || tech.includes('bash') || tech.includes('shell')) 
      return <Terminal size={iconSize} className="text-gray-300" />;
    if (tech.includes('sql') || tech.includes('db') || tech.includes('mongo') || tech.includes('redis')) 
      return <Database size={iconSize} className="text-indigo-400" />;
    
    // Frontend & Languages
    if (tech.includes('react') || tech.includes('frontend') || tech.includes('next')) 
      return <Layout size={iconSize} className="text-cyan-400" />;
    if (tech.includes('js') || tech.includes('javascript') || tech.includes('ts') || tech.includes('typescript')) 
      return <Binary size={iconSize} className="text-yellow-400" />;
    if (tech.includes('python') || tech.includes('java') || tech.includes('c++') || tech.includes('ruby')) 
      return <Code2 size={iconSize} className="text-blue-400" />;
    if (tech.includes('html') || tech.includes('css') || tech.includes('tailwind')) 
      return <Brackets size={iconSize} className="text-pink-400" />;
    
    // General Engineering
    if (tech.includes('api') || tech.includes('rest') || tech.includes('graphql')) 
      return <Globe size={iconSize} className="text-emerald-400" />;
    if (tech.includes('git') || tech.includes('github') || tech.includes('gitlab')) 
      return <BoxSelect size={iconSize} className="text-orange-600" />;
    if (tech.includes('auth') || tech.includes('security') || tech.includes('jwt')) 
      return <ShieldCheck size={iconSize} className="text-red-400" />;
    if (tech.includes('testing') || tech.includes('jest') || tech.includes('qa')) 
      return <Settings size={iconSize} className="text-amber-400" />;
    
    return <Box size={iconSize} className="text-gray-400" />; 
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="
        inline-flex items-center gap-4 
        /* Increased Size: Larger padding and text */
        px-6 py-3.5 rounded-2xl 
        bg-white/[0.04] border border-white/10 
        text-gray-100 text-[15px] font-bold
        backdrop-blur-md shadow-xl
        
        /* Hover Settings */
        hover:bg-blue-500/[0.05]
        hover:border-blue-500/50 
        hover:shadow-[0_10px_25px_-10px_rgba(59,130,246,0.3)]
        
        transition-all duration-300 cursor-default group
      "
    >
      <span className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        {getIcon(children)}
      </span>
      <span className="tracking-wide antialiased">
        {children}
      </span>
    </motion.div>
  );
}