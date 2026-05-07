import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const VisualWorks = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].visual;

  return (
    <section className="py-40 px-8 md:px-24 border-t border-white/5 bg-off-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">{t.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {t.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 group"
            >
              <div className="aspect-[4/5] bg-warm-gray overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold tracking-tighter">{item.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{item.concept}</p>
                <div className="flex gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">{item.tools}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
