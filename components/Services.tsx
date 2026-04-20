import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { User, Monitor, Users, Brain, Heart, ClipboardCheck, BookOpen, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ReactNode> = {
  'User': <User className="w-6 h-6" />,
  'Monitor': <Monitor className="w-6 h-6" />,
  'Users': <Users className="w-6 h-6" />,
  'Brain': <Brain className="w-6 h-6" />,
  'Heart': <Heart className="w-6 h-6" />,
  'ClipboardCheck': <ClipboardCheck className="w-6 h-6" />,
  'BookOpen': <BookOpen className="w-6 h-6" />,
};

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id="approach" 
      ref={ref}
      className={`py-24 bg-white transition-all duration-300 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="container mx-auto px-6">
        {/* Nuestro Enfoque Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-8">
            Nuestro Enfoque Clínico
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              En Grupo Faro comprendemos la salud mental como un proceso que integra bienestar, desarrollo personal y la capacidad de afrontar la vida de manera flexible y significativa, no solo como la ausencia de malestar.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden space-y-6"
                >
                  <p>
                    Comprendemos a la persona desde una mirada biopsicosocial, donde lo biológico, lo psicológico y lo sociocultural interactúan en la construcción tanto del malestar como del bienestar. Estos procesos se configuran en la historia personal, los vínculos significativos, el contexto actual y los recursos que cada individuo ha desarrollado para afrontar su experiencia.
                  </p>
                  <p>
                    Nuestro sello es un abordaje integral adaptado a las necesidades de cada persona, combinando rigor clínico con calidez humana.
                  </p>
                  <p>
                    Nuestra red clínica integra profesionales especializados en diversos enfoques —psicoanálisis relacional, perspectiva sistémica, terapia cognitivo-conductual y aportes contemporáneos de las neurociencias— articulados de manera complementaria para ofrecer una comprensión profunda, flexible y ajustada a cada caso.
                  </p>
                  <p>
                    Nuestro trabajo terapéutico se orienta a crear un espacio seguro, reflexivo y transformador, donde sea posible aliviar el malestar, fortalecer recursos internos, ampliar la comprensión de sí mismo y promover cambios sostenibles en la forma de vivir, sentir y vincularse con otros y con el entorno.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center space-x-2 text-faro-700 font-semibold hover:text-faro-800 transition-colors mt-4 group"
            >
              <span>{isExpanded ? 'Leer menos' : 'Leer más'}</span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        </div>

        {/* Nuestros Servicios Section */}
        <div id="services" className="pt-8 border-t border-slate-100 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
              Nuestros Servicios
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="group p-6 bg-sand-50 rounded-2xl border border-transparent hover:border-faro-100 hover:bg-faro-50/50 transition-all duration-300 hover:shadow-lg hover:shadow-faro-100/30 flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[250px]"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-faro-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-faro-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.iconName === 'BookOpen' && (
                  <a 
                    href="#psychoeducation"
                    className="mt-auto inline-flex items-center text-xs font-bold text-faro-700 hover:text-faro-900 transition-colors"
                  >
                    Conocer más
                    <ChevronRight className="ml-1 w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-slate-600 leading-relaxed italic text-sm border-l-4 border-faro-200 pl-6 text-left">
              Trabajamos en procesos de psicodiagnóstico y psicoterapeuticos en una amplia diversidad de temáticas, incluyendo ansiedad, depresión, estrés y burnout, trauma y experiencias adversas, dificultades en la regulación emocional, crisis vitales, duelos, conflictos vinculares, problemáticas de pareja y familia, dificultades en la identidad y autoestima, así como procesos propios de la adolescencia, la crianza y las transiciones del ciclo vital, entre otras, ampliando a través de nuestra red de derivación especializada hacia otras áreas específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;