import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { ProjectDetails } from './pages/ProjectDetails';
import { ExperiencePage } from './pages/ExperiencePage'; // Naya page import kiya

function HashScrollHandler() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Agar hash (#) maujood hai (e.g., #experience)
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150); // Thoda extra delay taake page render ho jaye
      }
    } else {
      // Agar simple route change hai (e.g., detail page par jana) to top par scroll kare
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

export function App() {
  return (
    <Router>
      <HashScrollHandler />
      <div className="min-h-screen bg-[#000814] text-slate-400 selection:bg-blue-500/30 selection:text-white relative">
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={
            <>
              <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden pointer-events-none">
                <Aurora colorStops={['#000814', '#1e3a8a', '#60a5fa']} speed={1.5} amplitude={1.5} blend={0.4} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000814]" />
              </div>
              
              <div className="relative z-10">
                <Navbar />
                <main>
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
            </>
          } />

          {/* Project Detail Route */}
          <Route path="/project/:id" element={<ProjectDetails />} />

          {/* Experience Detail Route - NEW */}
          <Route path="/experience/:id" element={<ExperiencePage />} />
          
        </Routes>
      </div>
    </Router>
  );
}