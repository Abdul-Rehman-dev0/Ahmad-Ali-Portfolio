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
import { ExperiencePage } from './pages/ExperiencePage';

// Optimized Scroll Logic
function ScrollToPath() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Priority: Agar URL mein hash hai (e.g., /#experience)
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
    }

    // 2. Secondary: Agar path direct section name hai (e.g., /experience)
    const validSections = ['about', 'skills', 'experience', 'projects', 'contact'];
    const currentPath = pathname.replace('/', '');

    if (validSections.includes(currentPath)) {
      const element = document.getElementById(currentPath);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } 
    // 3. Fallback: Agar home par hai aur koi hash nahi toh top par jaye
    else if (pathname === '/' || pathname === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

const HomeLayout = () => (
  <div className="relative z-10">
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <Aurora colorStops={['#000814', '#1e3a8a', '#60a5fa']} speed={1.5} amplitude={1.5} blend={0.4} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000814]" />
    </div>

    <Navbar />
    <main className="relative z-10">
      <section id="home"><Hero /></section>
      <div className="bg-[#000814] relative">
        <section id="about"><About /></section>
        <TechStack />
        <section id="skills"><SkillsGrid /></section>
        <section id="experience"><Timeline /></section>
        <section id="projects"><ProjectsGrid /></section>
        <GitHubSection />
        <section id="contact"><ContactForm /></section>
      </div>
    </main>
    <Footer />
  </div>
);

export function App() {
  return (
    <Router>
      <ScrollToPath />
      <div className="min-h-screen bg-[#000814] text-slate-400 selection:bg-blue-500/30 selection:text-white relative">
        <Routes>
          {['/', '/home', '/about', '/projects', '/skills', '/experience', '/contact'].map((path) => (
            <Route key={path} path={path} element={<HomeLayout />} />
          ))}
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/experience/:id" element={<ExperiencePage />} />
        </Routes>
      </div>
    </Router>
  );
}