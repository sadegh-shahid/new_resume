import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Quote } from 'lucide-react';

export const Testimonials = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].testimonials;

  const isEn = lang === 'en';

  return (
    <section id="testimonials" className="py-48 px-8 md:px-24 lg:px-32 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-32">
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              id="testimonials-heading"
              className={`text-5xl md:text-7xl font-light tracking-tight mb-12 ${isEn ? 'font-serif italic' : ''}`}
            >
              {t.title}
            </motion.h2>
            <div className="h-px w-24 bg-[#8C9475]/30 mb-8" />
            <p className="text-white/20 text-xs uppercase tracking-[0.3em] font-medium">
              {lang === 'en' ? 'Collaborative Reflections' : 'بازتاب همکاری‌ها'}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8">
            {(t as any).stats.map((stat: any, index: number) => (
              <div
                key={index}
                className="border border-white/5 p-12 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[#8C9475]/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-6xl font-light text-[#8C9475]/60 mb-6">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {t.items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col p-16 border border-white/5 relative group transition-all duration-700 ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}
            >
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#8C9475]/30 transition-all duration-700" />
              
              <div className="text-[#8C9475] mb-12 opacity-20 group-hover:opacity-50 transition-opacity">
                 <Quote size={32} />
              </div>

              <p className={`text-white/40 group-hover:text-white/70 text-xl font-light mb-16 flex-grow transition-colors ${isEn ? 'font-serif italic leading-relaxed' : 'leading-[2.2]'}`}>
                {item.text}
              </p>

              <div className="flex items-center gap-8 border-t border-white/5 pt-12">
                <div className="w-16 h-16 bg-[#0C0C0C] flex items-center justify-center font-serif text-2xl border border-white/10 text-[#8C9475]/40" aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white/80 font-light text-xl mb-2">{item.name}</h3>
                  <p className="text-[#8C9475]/40 text-[10px] uppercase tracking-[0.2em]">{(item as any).role} &middot; {(item as any).company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
