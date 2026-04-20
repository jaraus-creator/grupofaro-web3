import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { FaroLogoIcon } from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Height of fixed header plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center space-x-3 group"
        >
          <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-faro-100 text-faro-700' : 'bg-white/20 text-faro-900'}`}>
            <FaroLogoIcon className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-widest leading-none uppercase ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              Grupo Faro
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium hover:text-faro-600 transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2.5 bg-faro-700 hover:bg-faro-800 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-faro-700/20"
          >
            Agendar Hora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 font-medium py-2 hover:text-faro-600"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full text-center py-3 bg-faro-700 text-white rounded-lg font-medium"
          >
            Agendar Hora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;