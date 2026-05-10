import { memo, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { portfolioData, Language } from '../data';

export const HumanMoment = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].humanMoment;
  const isFa = lang === "fa";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const words = t.quote.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 overflow-hidden border-t border-b border-white/[0.08] relative py-0"
    >
      <div className="max-w-5xl mx-auto text-center" ref={ref}>
        {/* Decorative horizontal line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-[1px] bg-amber-500/30 mx-auto mb-12 origin-center"
        />

        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`text-[clamp(1.5rem,4vw,3.5rem)] font-light text-white/80 tracking-tight ${isFa ? 'leading-[1.6] tracking-normal' : 'leading-[1.3]'}`}
        >
          {words.map((word, idx) => (
            <span key={idx} className="inline-block mr-[0.25em] last:mr-0">
              <motion.span
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
});
