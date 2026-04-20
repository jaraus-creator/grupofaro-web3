import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-24 bg-faro-900 text-white transition-all duration-300 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Estamos aquí para escucharte
              </h2>
              <p className="text-faro-100 text-lg leading-relaxed">
                Si buscas orientación o quieres agendar una hora, no dudes en escribirnos. 
                Nuestro equipo de recepción te guiará con el profesional más adecuado para ti.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-faro-800 rounded-lg">
                  <MapPin className="text-faro-300" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Consulta Online y Presencial</h4>
                  <p className="text-faro-200">(ubicación dependiente del profesional)</p>
                  <p className="text-faro-200">Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-faro-800 rounded-lg">
                  <Mail className="text-faro-300" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Correo Electrónico</h4>
                  <p className="text-faro-200">contactogrupofaro@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-faro-800 rounded-lg">
                  <Phone className="text-faro-300" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Teléfono / WhatsApp</h4>
                  <p className="text-faro-200">+56 9 93317706</p>
                  <p className="text-xs text-faro-400 mt-1">Lunes a Viernes 09:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Nombre</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-faro-500 focus:border-transparent outline-none bg-slate-50" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-600 mb-1">Teléfono</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-faro-500 focus:border-transparent outline-none bg-slate-50" placeholder="+56 9..." />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Correo Electrónico</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-faro-500 focus:border-transparent outline-none bg-slate-50" placeholder="tucorreo@ejemplo.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-600 mb-1">Motivo de consulta</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-faro-500 focus:border-transparent outline-none bg-slate-50">
                  <option value="">Selecciona una opción</option>
                  <option value="consulta">Agendar primera consulta</option>
                  <option value="duda">Pregunta general</option>
                  <option value="online">Consulta Presencial u Online</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1">Mensaje</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-faro-500 focus:border-transparent outline-none bg-slate-50" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button type="submit" className="w-full bg-faro-600 text-white font-bold py-4 rounded-lg hover:bg-faro-700 transition-colors shadow-lg shadow-faro-600/20">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;