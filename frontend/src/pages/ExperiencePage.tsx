import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Briefcase, CheckCircle, Code2, Database, Globe, Server, Terminal, Zap, Layers, Users } from 'lucide-react';
import { experiences } from '../components/Timeline';

// Components imports (Assuming they exist in your components folder)
import { TimelineHero } from '../components/TimelineHero';
import { TimelineSpine, TimelineNode } from '../components/TimelineSpine';
import { ExperienceCard } from '../components/ExperienceCard';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { TechBadge } from '../components/TechBadge';
import { Footer } from '../components/Footer';

export function ExperiencePage() {
  const { id } = useParams();
  const exp = experiences.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!exp) return <div className="text-white p-20 text-center">Experience Not Found</div>;

  return (
    <div className="min-h-screen bg-[#000814] text-gray-200 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#000814]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link to="/#experience" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Timeline</span>
          </Link>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <TimelineHero company={exp.company} role={exp.role} period={exp.period} />

          <div className="relative pb-24">
            <TimelineSpine />

            <div className="space-y-32">
              {/* 1. Overview Section */}
              <section className="relative grid md:grid-cols-[20%_1fr] gap-8">
                <TimelineNode active />
                <div className="hidden md:block text-right pr-8 pt-2">
                  <span className="text-blue-500 font-mono text-lg font-bold">01</span>
                  <h3 className="text-white font-bold mt-1 tracking-wide uppercase text-xs">Overview</h3>
                </div>
                <ExperienceCard title="Role Overview">
                  <p className="text-lg text-gray-300 leading-relaxed">{exp.fullOverview}</p>
                </ExperienceCard>
              </section>

              {/* 2. Impact Section */}
              <section className="relative grid md:grid-cols-[20%_1fr] gap-8">
                <TimelineNode active />
                <div className="hidden md:block text-right pr-8 pt-2">
                  <span className="text-blue-500 font-mono text-lg font-bold">02</span>
                  <h3 className="text-white font-bold mt-1 tracking-wide uppercase text-xs">Impact</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {exp.metrics.map((metric, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="bg-slate-900/50 border border-white/5 p-6 rounded-xl text-center"
                    >
                      <div className="text-3xl font-bold text-blue-400 mb-2">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* 3. Tech Stack Section */}
              <section className="relative grid md:grid-cols-[20%_1fr] gap-8">
                <TimelineNode active />
                <div className="hidden md:block text-right pr-8 pt-2">
                  <span className="text-blue-500 font-mono text-lg font-bold">03</span>
                  <h3 className="text-white font-bold mt-1 tracking-wide uppercase text-xs">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t, i) => (
                    <TechBadge key={t} delay={i * 0.1}>{t}</TechBadge>
                  ))}
                </div>
              </section>

              {/* 4. Architecture Section */}
              <section className="relative grid md:grid-cols-[20%_1fr] gap-8">
                <TimelineNode active />
                <div className="hidden md:block text-right pr-8 pt-2">
                  <span className="text-blue-500 font-mono text-lg font-bold">04</span>
                  <h3 className="text-white font-bold mt-1 tracking-wide uppercase text-xs">Architecture</h3>
                </div>
                <div className="space-y-6">
                   <ArchitectureDiagram />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}