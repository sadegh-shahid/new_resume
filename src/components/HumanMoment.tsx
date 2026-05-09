import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const HumanMoment = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].humanMoment;

  return (
    <section className="section-silent border-t border-white/[0.04] py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
       

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Subtle handwritten-style accent */}
          <div className="absolute -top-8 -left-4 w-16 h-[1px] bg-amber-500/20 rotate-12" />
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light italic">
            {t.quote}
          </p>
          
          {t.attribution && (
            <p className="mt-6 text-xs text-white/30 tracking-widest uppercase">
              {t.attribution}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
});
