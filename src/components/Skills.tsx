import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const Skills = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].skills;

  return (
    <section id="skills" className="py-40 px-8 md:px-24 border-t border-white/5 bg-off-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">{t.title}</h2>
          <p className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1.1]">
            A technical mind with a cinematic lens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {t.categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/20 border-b border-white/5 pb-4">
                {category.name}
              </h3>
              <div className="flex flex-col gap-4">
                {category.items.split(', ').map((item, idx) => (
                  <span key={idx} className="text-lg font-light text-white/60">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
