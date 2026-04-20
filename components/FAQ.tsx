import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={ref}
      className={`py-24 bg-sand-50 transition-all duration-300 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-faro-600 font-semibold text-sm uppercase tracking-wide">Preguntas Frecuentes</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-2">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-faro-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-faro-600 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;