import React from 'react';
import { DIRECTORS, TEAM } from '../constants';
import { Professional } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProfessionalCard: React.FC<{ professional: Professional }> = ({ professional }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  // Encontrar el primer punto para dividir el texto
  const firstPeriodIndex = professional.description.indexOf('.');
  const hasMultipleSentences = firstPeriodIndex !== -1 && firstPeriodIndex < professional.description.length - 1;
  
  const shortDescription = hasMultipleSentences 
    ? professional.description.substring(0, firstPeriodIndex + 1)
    : professional.description;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 max-w-sm mx-auto w-full">
      <div className="aspect-square overflow-hidden relative group">
        <img 
          src={professional.imageUrl} 
          alt={professional.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-medium">Ver perfil completo</span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2">
          <h4 className="text-base font-bold text-slate-800">{professional.name}</h4>
          <span className="text-faro-600 text-xs font-medium block">{professional.role}</span>
        </div>
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {professional.specialty}
        </p>
        <div className="text-slate-600 text-xs">
          <p className="leading-relaxed">
            {isExpanded ? professional.description : shortDescription}
          </p>
          {hasMultipleSentences && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-faro-600 font-semibold mt-1 hover:text-faro-800 transition-colors focus:outline-none flex items-center"
            >
              {isExpanded ? 'Ver menos' : 'Leer más'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="team" 
      ref={ref}
      className={`py-24 bg-sand-50 transition-all duration-300 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-faro-600 font-semibold text-sm uppercase tracking-wide">Nuestro Equipo</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-2">
            Profesionales comprometidos
          </h2>
        </div>

        {/* Directors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-700 mb-8 border-l-4 border-faro-500 pl-4">
            Dirección Clínica
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIRECTORS.map(director => (
              <ProfessionalCard key={director.id} professional={director} />
            ))}
          </div>
        </div>

        {/* Network */}
        {TEAM.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-bold text-slate-700 mb-8 border-l-4 border-faro-300 pl-4">
              Red de Especialistas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM.map(pro => (
                <ProfessionalCard key={pro.id} professional={pro} />
              ))}
            </div>
          </div>
        )}

        {/* Additional Network Info */}
        <div className="mt-16 p-8 bg-white rounded-2xl border border-faro-100 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-slate-600 leading-relaxed">
            Además contamos con una extensa red de profesionales, Psicólogos, Psiquiatras, Terapeutas ocupacionales, y centros especializados para derivación, cuando se requiera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;