import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { experiences } from '../components/Timeline';

// Components imports
import { TimelineHero } from '../components/TimelineHero';
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

  if (!exp) {
    return (
      <div className="min-h-screen bg-[#000814] flex items-center justify-center text-white p-20 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <Link to="/experience" className="text-blue-500 hover:underline">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000814] text-gray-200 flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[#000814]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/experience"
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

      <main className="flex-grow pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <TimelineHero company={exp.company} role={exp.role} period={exp.period} />

          {/* Main Timeline Wrapper */}
          <div className="relative pb-24 mt-20 md:max-w-6xl mx-auto">
            
            {/* 1. Vertical Line - Starts from the middle of the first dot */}
            <div className="absolute left-[165px] top-[25px] bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent hidden md:block z-0" />

            <div className="space-y-28">
              {[
                { num: '01', label: 'Overview', content: (
                  <ExperienceCard title="Role Overview">
                    <p className="text-lg text-gray-300 leading-relaxed">{exp.fullOverview}</p>
                  </ExperienceCard>
                )},
                { num: '02', label: 'Impact', content: (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/10 p-5 rounded-xl hover:border-blue-500/30 transition-all">
                        <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )},
                { num: '03', label: 'Tech Stack', content: (
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((t, i) => (
                      <TechBadge key={t} delay={i * 0.05}>{t}</TechBadge>
                    ))}
                  </div>
                )},
                { num: '04', label: 'Architecture', content: (
                  <div className="bg-slate-900/20 border border-white/5 rounded-2xl p-4 md:p-6 w-full">
                    <ArchitectureDiagram data={exp.architecture} />
                  </div>
                )}
              ].map((item, index) => (
                <section key={index} className="relative grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 md:gap-12 items-start">
                  
                  {/* Left Side: Number & Label */}
                  <div className="text-left md:text-right pt-1 pr-4">
                    <span className="text-blue-500 font-mono text-4xl font-black block leading-none mb-2">{item.num}</span>
                    <span className="text-white font-bold uppercase text-[12px] tracking-widest opacity-80">{item.label}</span>
                  </div>

                  {/* Solid Dot exactly on the line */}
                  <div className="hidden md:block absolute left-[165px] top-[25px] -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-2 border-[#000814]" />
                  </div>

                  {/* Right Side: Content */}
                  <div className="w-full pl-4 md:pl-6">
                    {item.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}