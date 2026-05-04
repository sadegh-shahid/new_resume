import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Quote } from 'lucide-react';

export function Testimonials({ lang }: { lang: Language }) {
  const t = portfolioData[lang].testimonials;

  return (
    <section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10" aria-labelledby="testimonials-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 id="testimonials-heading" className="text-4xl md:text-6xl font-light tracking-tighter mb-16">{t.title}</h2>

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
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-serif text-xl border border-white/20" aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-white/50 text-sm uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
