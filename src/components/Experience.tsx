import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';
import { ChevronDown } from 'lucide-react';

export const Experience = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].experience;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const isEn = lang === 'en';

  return (
    <section id="experience" className="py-48 px-8 md:px-24 lg:px-32 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl font-light tracking-tight mb-12 ${isEn ? 'font-serif italic' : ''}`}
            >
              {t.title}
            </motion.h2>
            <div className="h-px w-24 bg-[#8C9475]/30 mb-8" />
            <p className="text-white/20 text-xs uppercase tracking-[0.3em] font-medium">
              {lang === 'en' ? 'Professional Narrative' : 'روایت حرفه‌ای'}
            </p>
          </div>

          <div className="md:col-span-8 flex flex-col border-t border-white/5">
            {t.items.map((item, index) => {
              const isExpanded = expandedId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-b border-white/5 py-16 group cursor-pointer transition-all duration-700"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex flex-col md:grid md:grid-cols-8 items-baseline gap-8">
                     <div className="md:col-span-2">
                        <span className="text-[#8C9475] text-xs font-mono opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                        <span className="ml-4 text-white/20 text-xs uppercase tracking-widest">{item.date}</span>
                     </div>

                     <div className="md:col-span-5">
                        <h3 className={`text-3xl md:text-5xl font-light text-white/40 group-hover:text-white transition-all duration-500 ${isEn ? 'font-serif' : ''}`}>{item.role}</h3>
                        <span className="text-sm uppercase tracking-widest text-[#8C9475]/40 group-hover:text-[#8C9475] transition-colors mt-4 block">{item.company}</span>
                     </div>

                     <div className="md:col-span-1 flex justify-end">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: isExpanded ? 45 : 0 }}
                            className="text-white/10 group-hover:text-[#8C9475] transition-colors"
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-6 bg-current" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-px bg-current" />
                          </motion.div>
                        </div>
                     </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="md:grid md:grid-cols-8 mt-12">
                           <div className="md:col-start-3 md:col-span-6">
                              <p className="text-white/50 leading-relaxed font-light text-lg italic border-l border-[#8C9475]/20 pl-8 rtl:border-l-0 rtl:border-r rtl:pr-8">
                                {item.description}
                              </p>
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
});
