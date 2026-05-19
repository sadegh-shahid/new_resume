import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";
import { ParallaxLayer } from "./ParallaxLayer";

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;
  const isFa = lang === "fa";

  return (
    <section id="about" className="px-6 max-w-6xl mx-auto section-padding relative">
      <div className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-0`} aria-hidden="true">
        {isFa ? "۰۴" : "04"}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left — Title + floating portrait mark */}
        <div className="lg:col-span-4">
          <ParallaxLayer speed={-0.2}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={`text-section-title text-[#E8E6E1] mb-4 ${isFa ? "" : "tracking-tight"}`}
            >
              {t.title}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-12 h-[1px] bg-[#C9A84C] origin-left rtl:origin-right"
            />

            {/* Floating geometric portrait */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mt-12 relative"
            >
              <div className="w-28 h-28 rounded-full border border-white/[0.08] bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative">
                <span className="text-4xl font-extralight text-[#C9A84C]" style={{ fontFamily: '"Playfair Display", ui-serif, serif' }}>S</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-[#C9A84C]/10"
                  style={{ borderStyle: "dashed" }}
                />
              </div>
            </motion.div>
          </ParallaxLayer>
        </div>

        {/* Right — Content */}
        <div className="lg:col-span-8">
          <ParallaxLayer speed={-0.1}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className={`text-lg md:text-xl text-white/70 font-light leading-relaxed ${isFa ? "leading-[1.75] mb-12 prose-persian" : "mb-12 max-w-2xl"}`}
            >
              {t.paragraph}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="cinematic-label block mb-4">
                {isFa ? "توانایی‌ها" : "Capabilities"}
              </span>
              <div className="flex flex-wrap gap-2">
                {t.capabilities.map((cap, i) => (
                  <motion.span
                    key={cap}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
                    className="tag tag-gold"
                  >
                    {cap}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="mt-12 pt-6 border-t border-white/[0.04] text-xs text-white/45 font-light tracking-widest"
            >
              {t.location}
            </motion.p>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
});
