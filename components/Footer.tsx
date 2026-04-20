import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { FaroLogoIcon } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="text-faro-400">
              <FaroLogoIcon className="w-10 h-10" />
            </div>
            <span className="text-xl font-serif font-bold text-slate-200 uppercase tracking-widest">Grupo Faro</span>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0 text-sm">
            <a href="#" className="hover:text-faro-400 transition-colors">Inicio</a>
            <a href="#" className="hover:text-faro-400 transition-colors">Nosotros</a>
            <a href="#" className="hover:text-faro-400 transition-colors">Servicios</a>
            <a href="#" className="hover:text-faro-400 transition-colors">Privacidad</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-faro-600 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-faro-600 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-faro-600 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Grupo Faro. Todos los derechos reservados.</p>
          <p className="mt-2">Las imágenes utilizadas son referenciales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;