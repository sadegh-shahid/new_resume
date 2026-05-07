import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';

export const Experience = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].experience;
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-40 px-8 md:px-24 border-t border-white/5 bg-off-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">{t.title}</h2>
          <p className="text-white/50 text-xl font-light">{t.summary}</p>
        </div>

        <div className="flex flex-col">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border-b border-white/5 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-default"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-2 block">{item.date}</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white/60 group-hover:text-white transition-colors duration-500">{item.role}</h3>
              </div>

              <div className="flex-1 md:text-right">
                <span className="text-lg font-light text-white/40 block mb-2">{item.company}</span>
                <p className="text-white/30 text-sm max-w-md md:ml-auto group-hover:text-white/60 transition-colors duration-500">
                  {item.description}
                </p>
              </div>

              {/* Subtle hover background highlight */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div
                    layoutId="exp-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/[0.02] -z-10"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
