import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/home', id: 'home' },
  { name: 'About', path: '/about', id: 'about' },
  { name: 'Projects', path: '/projects', id: 'projects' },
  { name: 'Skills', path: '/skills', id: 'skills' },
  { name: 'Experience', path: '/experience', id: 'experience' },
  { name: 'Contact', path: '/contact', id: 'contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const isHomePage = location.pathname === '/' || navLinks.some(link => location.pathname === link.path);
      
      if (isHomePage) {
        let current = activeSection;
        const vh = window.innerHeight;

        navLinks.forEach((link) => {
          const element = document.getElementById(link.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= vh * 0.4 && rect.bottom >= vh * 0.4) {
              current = link.id;
            }
          }
        });

        if (current !== activeSection) {
          setActiveSection(current);
          window.history.replaceState(null, '', current === 'home' ? '/' : `/${current}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, location.pathname]);

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    const isHomePage = location.pathname === '/' || navLinks.some(l => location.pathname === l.path);
    
    if (isHomePage) {
      const element = document.getElementById(link.id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Agar detail page par hain to home par navigate karen
      navigate(link.path);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        isScrolled ? 'bg-[#000814]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-2xl font-bold text-white tracking-tight">
          Ahmad<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              )}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="absolute top-20 left-0 right-0 bg-[#000814]/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} className={`text-lg font-medium ${activeSection === link.id ? 'text-blue-500' : 'text-slate-400'}`} 
                  onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, link); }}>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}