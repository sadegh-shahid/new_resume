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

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-light tracking-tighter"
          >
            {t.title}
          </motion.h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {t.items.map((item, i) => {
            const isExpanded = expandedId === item.id;
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3, ease: "easeOut" }}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden group"
            >
              <button 
                onClick={() => toggleExpand(item.id)}
                className="w-full text-left rtl:text-right py-8 px-6 md:px-10 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                aria-expanded={isExpanded}
              >
                <h3 className="text-2xl md:text-4xl font-light text-white/80 group-hover:text-white transition-colors">{item.title}</h3>
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="text-white/50 shrink-0 ml-4">
                  <ChevronDown size={24} aria-hidden="true" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-10 pb-8 pt-4 border-t border-white/10 text-white/70">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-2 relative group/tooltip-tools">
                          <div className="flex items-center gap-2 text-amber-500/80 mb-1 cursor-help w-max">
                            <Wrench size={16} aria-hidden="true" />
                            <span className="font-medium">{lang === 'en' ? 'Tools' : 'ابزارها'}</span>
                            <div className="absolute top-8 opacity-0 group-hover/tooltip-tools:opacity-100 transition-opacity bg-black/90 border border-white/20 text-white/90 text-xs py-2 px-3 rounded-lg shadow-xl pointer-events-none z-10 w-max max-w-[200px] left-0 rtl:left-auto rtl:right-0">
                              {lang === 'en' ? 'Software and technologies used to build this.' : 'نرم‌افزارها و تکنولوژی‌های استفاده شده برای ساخت این بخش.'}
                            </div>
                          </div>
                          <p className="text-sm font-mono tracking-wide">{item.tools}</p>
                        </div>
                        
                        <div className="flex flex-col gap-2 relative group/tooltip-concept">
                          <div className="flex items-center gap-2 text-amber-500/80 mb-1 cursor-help w-max">
                            <Lightbulb size={16} aria-hidden="true" />
                            <span className="font-medium">{lang === 'en' ? 'Concept' : 'مفهوم'}</span>
                            <div className="absolute top-8 opacity-0 group-hover/tooltip-concept:opacity-100 transition-opacity bg-black/90 border border-white/20 text-white/90 text-xs py-2 px-3 rounded-lg shadow-xl pointer-events-none z-10 w-max max-w-[200px] left-0 rtl:left-auto rtl:right-0">
                              {lang === 'en' ? 'The core idea and reasoning behind the design.' : 'ایده اصلی و دلیل پیش‌زمینه این طراحی.'}
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed">{item.concept}</p>
                        </div>
                        
                        <div className="flex flex-col gap-2 relative group/tooltip-impact">
                          <div className="flex items-center gap-2 text-amber-500/80 mb-1 cursor-help w-max">
                            <Target size={16} aria-hidden="true" />
                            <span className="font-medium">{lang === 'en' ? 'Impact' : 'تأثیر'}</span>
                            <div className="absolute top-8 opacity-0 group-hover/tooltip-impact:opacity-100 transition-opacity bg-black/90 border border-white/20 text-white/90 text-xs py-2 px-3 rounded-lg shadow-xl pointer-events-none z-10 w-max max-w-[200px] left-0 rtl:left-auto rtl:right-0">
                              {lang === 'en' ? 'The result and value generated by this work.' : 'نتیجه و ارزشی که این کار ایجاد کرد.'}
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed">{item.impact}</p>
                        </div>
                      </div>

                      {/* Image Thumbnail Showcase */}
                      {('images' in item) && Array.isArray((item as any).images) && (
                        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                          {(item as any).images.map((img: string, idx: number) => (
                            <img 
                              key={idx} 
                              src={img} 
                              alt={`${item.title} preview ${idx + 1}`} 
                              className="w-[280px] h-[180px] object-cover rounded-xl snap-center shrink-0 border border-white/10"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                            />
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-8 flex justify-end">
                        <button
                          onClick={() => setExpandedId(null)}
                          className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 hover:border-white/30 focus:outline-none"
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
