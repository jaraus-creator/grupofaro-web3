import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageCircle, X } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola, soy el asistente virtual de Grupo Faro. ¿En qué puedo orientarte hoy sobre nuestros servicios de psicología?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(inputText);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl mb-4 border border-slate-100 flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-faro-700 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-faro-200" />
              <span className="font-semibold">Asistente Grupo Faro</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-faro-600 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-faro-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-faro-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-faro-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-faro-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu consulta..."
                className="flex-1 px-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-faro-500"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputText.trim()}
                className="p-2 bg-faro-600 text-white rounded-full hover:bg-faro-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-center">
              La IA puede cometer errores. Para emergencias médicas llame al 131.
            </p>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-3 px-6 py-4 rounded-full shadow-xl transition-all duration-300 ${
          isOpen ? 'bg-slate-800 text-white' : 'bg-faro-600 text-white hover:bg-faro-700'
        }`}
      >
        <span className={`${isOpen ? 'hidden' : 'block'} font-medium`}>¿Tienes dudas?</span>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;