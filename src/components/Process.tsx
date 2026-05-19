import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";
import { ParallaxLayer } from "./ParallaxLayer";

export const Process = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].process;
  const isFa = lang === "fa";

  return (
    <section id="process" className="px-6 max-w-6xl mx-auto section-padding-lg relative">
      {/* Watermark */}
      <div
        className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`}
        aria-hidden="true"
      >
        {isFa ? "۰۲" : "02"}
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
          <div className="lg:col-span-5">
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
          <div className="lg:col-span-7 flex items-end">
            <p className="text-lg text-white/60 font-light leading-relaxed max-w-xl">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Process Steps — Connected Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C9A84C]/40 via-[#C9A84C]/20 to-transparent ${isFa ? "right-[1.2rem] md:right-[1.5rem]" : "left-[1.2rem] md:left-[1.5rem]"}`}
            style={{ transformOrigin: "top" }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {t.steps.map((step, index) => (
              <ParallaxLayer key={step.num} speed={index % 2 === 0 ? -0.1 : -0.05}>
                <motion.div
                  initial={{ opacity: 0, x: isFa ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative pl-12 md:pl-16 ${isFa ? "pr-12 md:pr-16 pl-0" : ""}`}
                >
                  {/* Step Number Node */}
                  <div
                    className={`absolute top-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#C9A84C]/30 bg-[#0a0a0a] flex items-center justify-center ${isFa ? "right-0" : "left-0"}`}
                  >
                    <span className="text-[10px] md:text-xs font-bold text-[#C9A84C]">
                      {step.num}
                    </span>
                  </div>

                  <div className={`${isFa ? "text-right" : ""}`}>
                    <h3 className={`text-xl md:text-2xl font-bold text-[#F4F1EA] mb-3 ${isFa ? "" : "tracking-tight"}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/55 leading-relaxed max-w-lg font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </ParallaxLayer>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
});
