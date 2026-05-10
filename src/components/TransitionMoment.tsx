import { memo } from "react";
import { motion } from "motion/react";
import { Language } from "../data";

export const TransitionMoment = memo(({ lang }: { lang: Language }) => {
  const isFa = lang === "fa";
  const quote = isFa
    ? "«جزئیات صرفاً جزئیات نیستند. آن‌ها دیزاین را می‌سازند.»"
    : "The details are not the details. They make the design.";
  const author = isFa ? "— چارلز ایمز" : "— Charles Eames";

  return (
    <section className="w-full py-32 md:py-48 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <blockquote className={`text-3xl md:text-5xl font-light text-[#F3F1EB]/80 leading-snug ${!isFa ? 'tracking-[-0.02em]' : ''}`}>
            {quote}
          </blockquote>
          {!isFa && (
             <p className="mt-8 text-white/40 text-xs uppercase tracking-widest">
              {author}
            </p>
          )}
          {isFa && (
             <p className="mt-8 text-white/40 text-sm font-light">
              {author}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
});
