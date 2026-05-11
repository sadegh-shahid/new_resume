import { memo } from "react";
import { motion } from "motion/react";
import { Language, portfolioData } from "../data";

export const HumanMoment = memo(({ lang }: { lang: Language }) => {
  const quote = portfolioData[lang].humanMoment.quote;

  return (
    <section className="py-[40vh] px-6">
      <div className="max-w-3xl mx-auto border-y border-white/[0.08] py-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-section-title font-serif italic text-center text-[#F3F1EB] leading-relaxed"
        >
          "{quote}"
        </motion.p>
      </div>
    </section>
  );
});
