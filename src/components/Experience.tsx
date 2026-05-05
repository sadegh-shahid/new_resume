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

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light tracking-tighter"
          >
            {t.title}
          </motion.h2>
          <p className="text-white/50 text-lg mt-2 max-w-2xl">{t.summary}</p>
        </div>

        <div className="flex flex-col relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {t.items.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-6"
              >
                {/* Timeline marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/50 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-amber-500/50 group-hover:bg-amber-500/10 cursor-pointer" onClick={() => toggleExpand(item.id)}>
                  <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-amber-500 transition-colors" />
                </div>
                
                {/* Content card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer text-left rtl:text-right" onClick={() => toggleExpand(item.id)}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm uppercase tracking-wider text-amber-500/80 font-mono">{item.date}</span>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="text-white/50">
                      <ChevronDown size={18} aria-hidden="true" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-light mb-1 text-white">{item.role}</h3>
                  <span className="text-lg font-medium text-white/50 block mb-4">{item.company}</span>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 leading-relaxed text-sm md:text-base border-t border-white/10 pt-4 mt-2">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
});
