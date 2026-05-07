import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;

  return (
    <section id="about" className="py-40 px-8 md:px-24 border-t border-white/5 bg-off-black">
      <div className="max-w-7xl mx-auto">
        {/* Philosophy Section */}
        <div className="grid grid-cols-12 gap-12 mb-40">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">{t.title}</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight text-white mb-20"
            >
              {t.summary}
            </motion.p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-12 gap-12 mb-40">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">Principles</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
              {(t as any).philosophy.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Areas of Focus - Clean List */}
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">Expertise</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {t.coreFocus.map((focus, i) => (
                <span key={i} className="text-2xl md:text-3xl font-light text-white/20 hover:text-white transition-colors cursor-default">
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
