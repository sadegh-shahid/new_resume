import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';
import { ChevronDown, Wrench, Lightbulb, Target } from 'lucide-react';

export const VisualWorks = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].visual;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const isEn = lang === 'en';

  return (
    <section className="py-48 px-8 md:px-24 lg:px-32 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-24">
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl font-light tracking-tight ${isEn ? 'font-serif italic' : ''}`}
            >
              {t.title}
            </motion.h2>
            <div className="h-px w-24 bg-[#8C9475]/30 mt-12 mb-8" />
            <p className="text-white/20 text-xs uppercase tracking-[0.3em] font-medium">
              {lang === 'en' ? 'Visual Storytelling' : 'روایت بصری'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-px bg-white/5 border-t border-white/5">
          {t.items.map((item, i) => {
            const isExpanded = expandedId === item.id;
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group overflow-hidden border-b border-white/5"
            >
              <button 
                onClick={() => toggleExpand(item.id)}
                className="w-full text-left rtl:text-right py-12 flex items-center justify-between group-hover:px-4 transition-all duration-500 focus:outline-none"
                aria-expanded={isExpanded}
              >
                <div className="flex items-baseline gap-12">
                  <span className="text-[#8C9475] text-xs font-mono opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <h3 className={`text-3xl md:text-5xl font-light text-white/30 group-hover:text-white transition-all duration-700 ${isEn ? 'font-serif' : ''}`}>{item.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  className="text-white/20 group-hover:text-[#8C9475] transition-colors"
                >
                  <span className="text-4xl font-light">+</span>
                </motion.div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="pb-16 px-4 md:px-12 text-white/70">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-4 flex flex-col gap-8">
                          <div className="flex flex-col gap-3 relative border-l border-white/5 pl-8 rtl:border-l-0 rtl:border-r rtl:pr-8">
                             <span className="text-[10px] uppercase tracking-widest text-[#8C9475] font-semibold opacity-60">{lang === 'en' ? 'Tools' : 'ابزارها'}</span>
                             <p className="text-sm text-white/40 font-light italic">{item.tools}</p>
                          </div>
                          <div className="flex flex-col gap-3 relative border-l border-white/5 pl-8 rtl:border-l-0 rtl:border-r rtl:pr-8">
                             <span className="text-[10px] uppercase tracking-widest text-[#8C9475] font-semibold opacity-60">{lang === 'en' ? 'Concept' : 'مفهوم'}</span>
                             <p className="text-sm leading-relaxed text-white/60 font-light">{item.concept}</p>
                          </div>
                          <div className="flex flex-col gap-3 relative border-l border-white/5 pl-8 rtl:border-l-0 rtl:border-r rtl:pr-8">
                             <span className="text-[10px] uppercase tracking-widest text-[#8C9475] font-semibold opacity-60">{lang === 'en' ? 'Impact' : 'تأثیر'}</span>
                             <p className="text-sm leading-relaxed text-white/60 font-light">{item.impact}</p>
                          </div>
                        </div>

                        <div className="md:col-span-8">
                           {/* Image Showcase */}
                          {('images' in item) && Array.isArray((item as any).images) && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {(item as any).images.map((img: string, idx: number) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.98 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="aspect-video overflow-hidden bg-white/5 grayscale hover:grayscale-0 transition-all duration-700"
                                >
                                  <img
                                    src={img}
                                    alt={`${item.title} preview ${idx + 1}`}
                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-12 flex justify-end">
                        <button
                          onClick={() => setExpandedId(null)}
                          className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] px-6 py-2 border border-white/5 hover:border-[#8C9475] transition-all"
                        >
                          {item.closeBtn}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )})}
        </div>
      </motion.div>
    </section>
  );
});
