import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, Layers, ArrowRight, Zap, Layout, ShieldCheck, Activity } from 'lucide-react';

// Icon mapper function
const getArchitectureIcon = (iconName: string) => {
  const icons: any = {
    globe: Globe,
    server: Server,
    database: Database,
    layers: Layers,
    zap: Zap,
    layout: Layout,
    shield: ShieldCheck
  };
  return icons[iconName.toLowerCase()] || Server; // Default to Server icon
};

interface ArchitectureNode {
  id: string;
  label: string;
  icon: string;
  color: string;
}

interface ArchitectureDiagramProps {
  data?: ArchitectureNode[]; // Data prop add ki
}

export function ArchitectureDiagram({ data = [] }: ArchitectureDiagramProps) {
  // Agar data nahi hai toh khali div ya fallback dikhayein
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative">
        
        {data.map((node, index) => {
          const IconComponent = getArchitectureIcon(node.icon);
          
          return (
            <Fragment key={node.id}>
              <motion.div 
                className="relative z-10 flex flex-col items-center gap-3 bg-white/[0.04] p-4 rounded-xl border border-white/10 min-w-[110px] md:min-w-[130px] backdrop-blur-md transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
              >
                <div className={`p-2.5 rounded-lg bg-white/5 ${node.color} transition-colors duration-300 group-hover:bg-white/10`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-gray-300 tracking-tight text-center group-hover:text-white">
                  {node.label}
                </span>
              </motion.div>

              {index < data.length - 1 && (
                <div className="flex items-center justify-center py-2 md:py-0">
                  <ArrowRight className="w-4 h-4 text-white/20 rotate-90 md:rotate-0" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Footer Metrics */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-[11px] border-t border-white/5 pt-5">
        <div className="flex items-center gap-2 opacity-60">
          <Activity className="w-3 h-3 text-green-500" />
          <span className="font-bold text-gray-400 uppercase tracking-tighter">System Flow</span>
        </div>
      </div>
    </div>
  );
}