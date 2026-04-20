import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="blog" 
      ref={ref}
      className={`py-24 bg-white transition-all duration-300 ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-faro-600 font-semibold text-sm uppercase tracking-wide">Contenido Educativo</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-2">
              Artículos y Novedades
            </h2>
          </div>
          <a href="#" className="text-faro-600 font-medium hover:text-faro-800 transition-colors">
            Ver todos los artículos &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group cursor-pointer"
              onClick={() => openPost(post)}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-faro-800">
                  {post.category}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-faro-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-block text-faro-600 text-sm font-medium pt-2 group-hover:underline">
                  Leer más
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Modal */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closePost}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              >
                <button 
                  onClick={closePost}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-500 hover:text-faro-600 transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>

                <div className="overflow-y-auto">
                  <div className="relative h-64 md:h-80">
                    <img 
                      src={selectedPost.imageUrl} 
                      alt={selectedPost.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                      <div>
                        <span className="inline-block px-3 py-1 bg-faro-500 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                          {selectedPost.category}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-white">
                          {selectedPost.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 text-slate-400 text-sm mb-8 pb-8 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{selectedPost.date}</span>
                      </div>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <div className="text-faro-600 font-medium">Grupo Faro</div>
                    </div>

                    <div 
                      className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-800 prose-p:text-slate-600 prose-p:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                    
                    <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
                      <button 
                        onClick={closePost}
                        className="px-8 py-3 bg-faro-700 text-white rounded-full font-medium hover:bg-faro-800 transition-colors shadow-lg shadow-faro-700/20"
                      >
                        Cerrar Artículo
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog;