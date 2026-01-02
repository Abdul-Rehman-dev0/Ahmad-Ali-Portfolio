import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }} 
      
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/40 backdrop-blur-md border-b border-slate-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-slate-100 tracking-tight">
          Ahmad<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1) ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
              onClick={() => setActiveSection(link.href.substring(1))}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span 
                  layoutId="activeSection" 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }} 
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-slate-800/50 md:hidden"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-lg font-medium ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-slate-400'}`} 
                onClick={() => {
                  setActiveSection(link.href.substring(1));
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}