import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, Layers, ArrowRight } from 'lucide-react';
export function ArchitectureDiagram() {
  const nodes = [{
    id: 'client',
    label: 'Client (Next.js)',
    icon: Globe,
    color: 'text-blue-400'
  }, {
    id: 'lb',
    label: 'Load Balancer',
    icon: Layers,
    color: 'text-purple-400'
  }, {
    id: 'api',
    label: 'API Gateway',
    icon: Server,
    color: 'text-green-400'
  }, {
    id: 'cache',
    label: 'Redis Cache',
    icon: Layers,
    color: 'text-red-400'
  }, {
    id: 'db',
    label: 'PostgreSQL',
    icon: Database,
    color: 'text-yellow-400'
  }];
  return <div className="w-full bg-navy-light/30 border border-white/5 rounded-2xl p-8 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -z-10" />

        {nodes.map((node, index) => <Fragment key={node.id}>
            <motion.div className="relative z-10 flex flex-col items-center gap-3 bg-navy p-4 rounded-xl border border-white/10 min-w-[140px]" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <div className={`p-3 rounded-full bg-white/5 ${node.color}`}>
                <node.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-gray-300 text-center">
                {node.label}
              </span>
            </motion.div>

            {index < nodes.length - 1 && <motion.div className="md:hidden" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          delay: index * 0.1 + 0.05
        }}>
                <ArrowRight className="w-5 h-5 text-gray-600 rotate-90" />
              </motion.div>}
            {index < nodes.length - 1 && <motion.div className="hidden md:block absolute" style={{
          left: `${(index + 1) * 20}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }} initial={{
          opacity: 0,
          scale: 0
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: index * 0.1 + 0.05
        }}>
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </motion.div>}
          </Fragment>)}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400 border-t border-white/5 pt-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span>Microservices Architecture</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span>Event-Driven Updates</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <span>99.9% Availability</span>
        </div>
      </div>
    </div>;
}