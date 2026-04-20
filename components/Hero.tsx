import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-slate-100">
        <img 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Grupo de personas en un ambiente tranquilo y acogedor" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand-50/95 via-sand-50/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-faro-100 text-faro-800 text-xs font-semibold tracking-wide uppercase">
            Salud Mental Integral
          </div>
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
            Red de profesionales especialistas en prevención y promoción de <span className="text-faro-600">salud mental</span>
          </h1>
          <div className="text-lg text-slate-800 md:w-3/4 leading-relaxed font-medium">
            <p>
              Ofrecemos atención psicoterapéutica especializada presencial y online, generando espacios seguros para abordar procesos individuales de pareja o familia.
            </p>
            <p className="mt-6 text-xl font-serif font-semibold text-faro-700">
              Una ruta segura hacia tu bienestar
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-faro-700 text-white rounded-full font-medium hover:bg-faro-800 transition-colors shadow-lg shadow-faro-700/30"
            >
              Contactar Especialista
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-sm"
            >
              Conocer Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;