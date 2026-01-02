import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}
export function ProjectCard({
  title,
  description,
  tags,
  index
}: ProjectCardProps) {
  return <motion.div className="group relative bg-gradient-to-br from-navy-light to-[#111633] border border-white/5 p-6 rounded-2xl overflow-hidden" initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} whileHover={{
    y: -5,
    transition: {
      duration: 0.2
    }
  }}>
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="text-electric-blue w-6 h-6" />
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
          {title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map(tag => <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-navy border border-white/10 text-gray-300">
            {tag}
          </span>)}
      </div>
    </motion.div>;
}