import { memo } from "react";
import { motion } from "motion/react";
import { portfolioData, Language } from "../data";
import { Quote } from "lucide-react";

export const Testimonials = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].testimonials;
  const isFa = lang === "fa";

  return (
    <section className="px-6 max-w-5xl mx-auto section-padding relative">
      <div className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`} aria-hidden="true">
        {isFa ? "۰۷" : "07"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h2 className={`text-section-title font-bold text-[#F4F1EA] mb-16 md:mb-24 ${isFa ? "" : "tracking-tighter"}`}>
          {t.title}
        </h2>

        <div className="flex flex-col gap-16 md:gap-24">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              <Quote className="text-[#C9A84C]/20 mb-6" size={48} strokeWidth={1} />

              <blockquote className={`text-2xl md:text-4xl font-light text-white/85 leading-snug mb-8 ${isFa ? "leading-[1.6]" : "leading-[1.3] tracking-tight"}`}>
                "{item.text}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-sm font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">{item.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
