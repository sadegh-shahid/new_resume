import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Quote } from 'lucide-react';

export const Testimonials = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].testimonials;

  return (
    <section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10 relative" aria-labelledby="testimonials-heading">
      <div className="absolute top-10 left-6 rtl:left-auto rtl:right-6 text-[clamp(6rem,12vw,10rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none font-serif z-0" aria-hidden="true">
        {lang === 'fa' ? '۰۵' : '05'}
      </div>
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
            id="testimonials-heading" 
            className="text-4xl md:text-6xl font-light tracking-tighter mb-12"
          >
            {t.title}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {(t as any).stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 border border-white/5 rounded-2xl p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-amber-500 mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/5"
            >
              <Quote className="text-amber-500/30 mb-6" size={40} aria-hidden="true" />
              <p className={`text-white/90 text-lg md:text-xl font-light mb-8 flex-grow italic ${lang === 'en' ? 'leading-relaxed' : 'leading-[2.2] tracking-normal'}`}>
                "{item.text}"
              </p>
              
              <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 mb-8">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-amber-500/60 mb-1">{lang === 'en' ? 'Result' : 'نتیجه'}</span>
                <p className="text-white/80 text-sm font-medium">{(item as any).result}</p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-serif text-xl border border-white/20" aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-white/50 text-xs uppercase tracking-widest">{(item as any).role} &middot; {(item as any).company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
