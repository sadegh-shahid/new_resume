import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;

  return (
    <section id="about" className="py-40 px-6 max-w-4xl mx-auto border-t border-white/[0.04] section-quiet">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl"
      >
        <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-24 text-white">
          {t.title}
        </h2>

        <div className="space-y-20 text-[1.1rem] leading-[2.2] text-white/70 font-light">
          {t.paragraphs?.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Signature Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/[0.04] text-xs tracking-widest text-white/30"
        >
          {t.location}
        </motion.div>
      </motion.div>
    </section>
  );
});
