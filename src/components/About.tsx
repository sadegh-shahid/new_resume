import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;

  return (
    <section id="about" className="py-32 px-6 max-w-4xl mx-auto border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h2 className="text-6xl md:text-7xl font-light tracking-tight mb-16 text-white">
          {t.title}
        </h2>

        <div className="space-y-16 text-[1.1rem] leading-[1.85] text-white/80 font-light">
          {t.paragraphs?.map((p, i) => (
            <p key={i}>
              {p}
            </p>
          ))}
        </div>

        {/* Signature Line */}
        <div className="mt-20 pt-8 border-t border-white/10 text-sm tracking-widest text-white/40">
          {t.location}
        </div>
      </motion.div>
    </section>
  );
});
