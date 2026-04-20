import React from 'react';
import { BookOpen, Users, Building2, Lightbulb } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Psychoeducation: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const areas = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Instituciones y Organizaciones",
      description: "Desarrollamos programas a medida para empresas y centros educativos, enfocados en la prevención y promoción de la salud mental en entornos laborales y académicos."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Talleres y Capacitaciones",
      description: "Realizamos instancias grupales de aprendizaje sobre manejo del estrés, habilidades relacionales, crianza y bienestar emocional para diversos públicos."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Convenios de Atención",
      description: "Establecemos alianzas estratégicas con organizaciones para facilitar el acceso a atención clínica de calidad para sus colaboradores o miembros."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Prevención en Salud Mental",
      description: "Diseñamos campañas y materiales informativos para sensibilizar y entregar herramientas prácticas que favorezcan el cuidado de la salud mental comunitaria."
    }
  ];

  return (
    <section 
      id="psychoeducation" 
      ref={ref}
      className={`py-24 bg-faro-50 transition-all duration-300 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <span className="text-faro-600 font-semibold text-sm uppercase tracking-wide">Organizaciones y Comunidad</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">
              Psicoeducación y <span className="text-faro-600">Vínculo con organizaciones y la Comunidad</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              En Grupo Faro creemos que la salud mental se construye en los distintos espacios interpersonales. 
              Por eso, extendemos nuestra labor a través de programas preventivos y educativos 
              diseñados para fortalecer el bienestar en diversos contextos sociales y organizacionales.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-faro-700 text-white rounded-full font-medium hover:bg-faro-800 transition-colors shadow-lg shadow-faro-700/30"
              >
                Consultar por Convenios
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-faro-100 hover:shadow-md transition-shadow"
              >
                <div className="text-faro-600 mb-4">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psychoeducation;
