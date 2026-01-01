import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { SkillsGrid } from './components/SkillsGrid';
import { Timeline } from './components/Timeline';
import { ProjectsGrid } from './components/ProjectsGrid';
import { GitHubSection } from './components/GitHubSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import Aurora from './components/Aurora';

export function App() {
  return (
    <div className="min-h-screen bg-[#000814] text-slate-400 selection:bg-blue-500/30 selection:text-white relative">
      
      {/* Aurora Background Layer */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden pointer-events-none">
        <Aurora
          colorStops={['#000814', '#1e3a8a', '#60a5fa']} // Deep Midnight, Royal Blue, Sky Blue
          speed={1.5} 
          amplitude={1.5}
          blend={0.4}
        />
        {/* Is gradient se animation smoothly About section se pehle khatam ho jayegi */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000814]" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10">
        <Navbar />
        <main>
          {/* Ensure Hero has bg-transparent or no background */}
          <Hero /> 
          
          <div className="bg-[#000814] relative">
            <About />
            <TechStack />
            <SkillsGrid />
            <Timeline />
            <ProjectsGrid />
            <GitHubSection />
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}