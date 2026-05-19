import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";

export const Experience = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].experience;
  const isFa = lang === "fa";

  return (
    <section id="experience" className="px-6 max-w-6xl mx-auto section-padding relative">
      <div className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`} aria-hidden="true">
        {isFa ? "۰۶" : "06"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h2 className={`text-section-title font-bold text-[#F4F1EA] mb-4 ${isFa ? "" : "tracking-tighter"}`}>
              {t.title}
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-12 h-[2px] bg-[#C9A84C] origin-left rtl:origin-right"
            />
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-white/60 font-light leading-relaxed max-w-xl">
              {t.summary}
            </p>
          </div>
        </div>

        {/* Experience List — Clean, No Timeline Dots */}
        <div className="flex flex-col gap-0 border-t border-white/[0.06]">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group py-8 md:py-10 border-b border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-12 hover:bg-white/[0.01] transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-medium text-[#F4F1EA] group-hover:text-[#C9A84C] transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs text-white/40 font-mono hidden md:inline">
                    {item.date}
                  </span>
                </div>
                <p className="text-sm text-white/55">
                  {item.company}
                </p>
              </div>

              <div className="md:max-w-md md:text-right rtl:md:text-left">
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
                <span className="text-xs text-white/35 font-mono mt-2 block md:hidden">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
