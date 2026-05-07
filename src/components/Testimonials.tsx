import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const Testimonials = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].testimonials;

  return (
    <section id="testimonials" className="py-40 px-8 md:px-24 border-t border-white/5 bg-off-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12 items-end mb-32">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">{t.title}</h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
              Trusted by industry leaders in energy and enterprise systems.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex gap-12 lg:justify-end">
            {(t as any).stats.map((stat: any, index: number) => (
              <div key={index}>
                <span className="block text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-12"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 italic">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-1px h-12 bg-white/10" />
                <div>
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    {(item as any).role} / {(item as any).company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
