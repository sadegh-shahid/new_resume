import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";
import { WordReveal } from "./WordReveal";

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;
  const capT = portfolioData[lang].capabilities;
  const isFa = lang === "fa";

  return (
    <section
      id="about"
      className="px-gutter max-w-5xl mx-auto border-t border-white/[0.08] section-p relative mt-[-4rem] z-30"
    >
      <div
        className="hidden md:block absolute -top-8 -left-12 rtl:-left-auto rtl:-right-12 text-[clamp(10rem,20vw,18rem)] font-light text-primary/[0.03] leading-none select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {isFa ? "۰۱" : "01"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl relative z-10"
      >
        <WordReveal
          text={t.title}
          className={`text-headline font-light mb-24 text-primary ${isFa ? 'tracking-normal' : 'tracking-tight'}`}
        />

        {/* Capability Blocks - Moved to Top */}
        <div className="mb-32">
          <span className="text-caption uppercase tracking-widest accent-amber mb-12 block">
            {isFa ? "چگونه کار می‌کنم" : "How I Work"}
          </span>

          <div className="relative">
            <div className="flex md:grid md:grid-cols-2 gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-8 md:pb-0">
              {capT.blocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.1
                  }}
                  className="min-w-[85vw] md:min-w-0 snap-center group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.03] hover:border-white/[0.12] transition-all duration-500"
                >
                  <div className="mb-6 accent-amber/40">
                    {index === 0 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>}
                    {index === 1 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>}
                    {index === 2 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>}
                    {index === 3 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>}
                  </div>
                  <h3 className="text-body font-medium text-primary mb-3 tracking-wide">
                    {block.title}
                  </h3>
                  <p className="text-caption text-secondary leading-relaxed">
                    {block.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="md:hidden absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-bg-void to-transparent pointer-events-none rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r" />

            <p className="md:hidden text-center text-caption text-secondary uppercase tracking-widest mt-4 animate-pulse">
              {isFa ? "→ برای دیدن بیشتر بکشید" : "Swipe to see more →"}
            </p>
          </div>
        </div>

        <div className={`space-y-20 text-[1.1rem] ${isFa ? 'leading-[2.2]' : 'leading-[1.8]'} text-primary/80 font-light`}>
          {/* Integrated Human Moment Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 border-y border-white/[0.08] relative group"
          >
             <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-amber-500/30 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
             <p className={`text-subhead font-light text-primary italic leading-relaxed`}>
               "{portfolioData[lang].humanMoment.quote}"
             </p>
          </motion.div>

          {t.paragraphs?.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
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
          className="mt-24 pt-8 border-t border-white/[0.08] text-caption tracking-widest text-secondary"
        >
          {t.location}
        </motion.div>

      </motion.div>
    </section>
  );
});
