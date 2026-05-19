import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";

export const Services = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].services;
  const isFa = lang === "fa";

  return (
    <section id="services" className="px-6 max-w-6xl mx-auto section-padding-sm relative">
            <div className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`} aria-hidden="true">
        {isFa ? "۰۵" : "05"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="mb-12 md:mb-16 flex items-end justify-between">
          <h2 className={`text-section-title font-bold text-[#F4F1EA] ${isFa ? "" : "tracking-tighter"}`}>
            {t.title}
          </h2>
          <div className="hidden md:block w-24 h-[2px] bg-white/[0.08]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-[#111] hover:border-[#C9A84C]/20 hover:bg-[#141414] transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mb-6 text-[#C9A84C] font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className={`text-lg font-bold text-[#F4F1EA] mb-3 ${isFa ? "" : "tracking-tight"}`}>
                {item.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
