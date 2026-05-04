import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { portfolioData, Language } from '../data';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export function Projects({ lang }: { lang: Language }) {
  const t = portfolioData[lang].projects;
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="sticky top-20 z-30 bg-[#0a0a0a]/90 backdrop-blur-md py-4 px-4 -mx-4 rounded-2xl mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light tracking-tighter"
          >
            {t.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {t.items.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                className="group flex flex-col p-8 rounded-3xl bg-white/5 border border-white/5 transition-colors cursor-pointer"
                layoutId={`project-container-${item.id}`}
                onClick={() => { setSelectedProject(item.id); setCurrentImageIndex(0); }}
              >
                <div className="flex justify-between items-start mb-8">
                  <motion.h3 layoutId={`project-title-${item.id}`} className="text-3xl font-light pr-8 rtl:pr-0 rtl:pl-8">{item.name}</motion.h3>
                  <div className="flex gap-2 shrink-0 z-10 relative">
                    <button
                      onClick={(e) => toggleFavorite(e, item.id)}
                      className={`p-3 rounded-full transition-all duration-300 focus:outline-none ${favorites.includes(item.id) ? 'bg-amber-500/10 text-amber-500' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
                      aria-label="Toggle favorite"
                    >
                      <motion.div
                        animate={favorites.includes(item.id) ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart size={20} className={favorites.includes(item.id) ? "fill-amber-500 text-amber-500" : ""} />
                      </motion.div>
                    </button>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm uppercase tracking-widest text-white/50 mb-2">{item.role}</p>
                  
                  <p className="text-white/80 leading-relaxed mb-6 text-left rtl:text-right line-clamp-3">{item.impact}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 rtl:justify-start">
                    {item.stack.map(tech => (
                      <span key={tech} dir="ltr" className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => { setSelectedProject(item.id); setCurrentImageIndex(0); }}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors focus:outline-none focus:text-white"
                  >
                    <span>{item.readMore}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />
            
            {t.items.find(i => i.id === selectedProject) && (() => {
              const item = t.items.find(i => i.id === selectedProject)!;
              return (
                <motion.div
                  layoutId={`project-container-${item.id}`}
                  className="relative w-full max-w-5xl bg-[#111] overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row my-auto max-h-[90vh]"
                >
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-white hover:text-black rounded-full backdrop-blur-md transition-colors"
                    aria-label="Close dialog"
                  >
                    <X size={24} />
                  </button>

                  {/* Image Carousel */}
                  {item.images && item.images.length > 0 && (
                    <div className="w-full md:w-1/2 relative bg-black/50 group/carousel min-h-[300px] md:min-h-full">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentImageIndex}
                          src={item.images[currentImageIndex]}
                          alt={`${item.name} screenshot ${currentImageIndex + 1}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      
                      {item.images.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : item.images.length - 1)); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prev) => (prev < item.images.length - 1 ? prev + 1 : 0)); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 translate-x-4 group-hover/carousel:translate-x-0"
                            aria-label="Next image"
                          >
                            <ChevronRight size={24} />
                          </button>
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {item.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-amber-500 w-6' : 'bg-white/40 hover:bg-white/60'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  <div className={`flex flex-col w-full ${item.images && item.images.length > 0 ? 'md:w-1/2' : ''} p-8 md:p-12 overflow-y-auto`}>
                    <div className="mb-8 pr-12 lg:pr-0 lg:pl-12 rtl:pr-0 rtl:pl-12 rtl:lg:pl-0 rtl:lg:pr-12">
                      <motion.h3 layoutId={`project-title-${item.id}`} className="text-4xl md:text-5xl font-light mb-2">{item.name}</motion.h3>
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-amber-500 text-sm uppercase tracking-widest mt-4 mb-2">{item.role} &middot; {item.year}</motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }} className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 text-left rtl:text-right shadow-inner">
                        <span className="block text-xs uppercase tracking-widest text-amber-500 mb-3">{lang === 'en' ? 'Impact' : 'تأثیر'}</span>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed md:leading-loose">{item.impact}</p>
                      </div>
                      
                      <div className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 text-left rtl:text-right">
                        <span className="block text-xs uppercase tracking-widest text-amber-500 mb-3">{lang === 'en' ? 'Details' : 'جزئیات'}</span>
                        <p className="text-white/70 text-sm md:text-base leading-relaxed md:leading-loose whitespace-pre-wrap">{item.details}</p>
                      </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }} className="pt-6 border-t border-white/10 text-left rtl:text-right">
                      <span className="block text-xs uppercase tracking-widest text-white/40 mb-4">{lang === 'en' ? 'Technologies' : 'فناوری‌ها'}</span>
                      <div className="flex flex-wrap gap-2 rtl:justify-start">
                        {item.stack.map(tech => (
                          <span key={tech} dir="ltr" className="px-4 py-2 text-xs md:text-sm border border-white/20 hover:border-white/40 transition-colors rounded-xl text-white/80 bg-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
