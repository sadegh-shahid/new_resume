import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import { ChevronDown, Wrench, Lightbulb, Target } from "lucide-react";
import { WordReveal } from "./WordReveal";

export const VisualWorks = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].visual;
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const isFa = lang === "fa";

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="visual-works"
      className="px-6 max-w-5xl mx-auto section-quiet relative"
    >
      <div
        className="hidden md:block absolute -top-8 -left-12 rtl:-left-auto rtl:-right-12 text-[clamp(10rem,20vw,18rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {isFa ? "۰۵" : "05"}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <div className="mb-24">
          <WordReveal
            text={t.title}
            className={`text-4xl md:text-5xl font-light ${isFa ? 'tracking-normal' : 'tracking-tight'}`}
          />
        </div>

        <div className="flex flex-col gap-4">
          {t.items.map((item, i) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border border-white/[0.08] rounded-2xl bg-white/[0.03] overflow-hidden group"
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left rtl:text-right py-8 px-6 md:px-10 flex items-center justify-between hover:bg-white/[0.03] transition-colors focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <h3 className="text-xl md:text-2xl font-light text-white/80 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-white/30 shrink-0 ms-4"
                  >
                    <ChevronDown size={20} aria-hidden="true" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-10 pb-8 pt-4 border-t border-white/[0.08] text-white/70">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="flex flex-col gap-2 relative group/tooltip-tools">
                            <div className="flex items-center gap-2 text-amber-500 mb-1 cursor-help w-max">
                              <Wrench size={14} aria-hidden="true" />
                              <span className="font-medium text-xs uppercase tracking-widest text-amber-500">
                                {lang === "en" ? "Tools" : "ابزارها"}
                              </span>
                            </div>
                            <p className="text-sm font-mono tracking-wide">
                              {item.tools}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2 relative group/tooltip-concept">
                            <div className="flex items-center gap-2 text-amber-500 mb-1 cursor-help w-max">
                              <Lightbulb size={14} aria-hidden="true" />
                              <span className="font-medium text-xs uppercase tracking-widest text-amber-500">
                                {lang === "en" ? "Concept" : "مفهوم"}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed">
                              {item.concept}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2 relative group/tooltip-impact">
                            <div className="flex items-center gap-2 text-amber-500 mb-1 cursor-help w-max">
                              <Target size={14} aria-hidden="true" />
                              <span className="font-medium text-xs uppercase tracking-widest text-amber-500">
                                {lang === "en" ? "Impact" : "تأثیر"}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed">
                              {item.impact}
                            </p>
                          </div>
                        </div>

                        {/* Image Thumbnail Showcase */}
                        {"images" in item &&
                          Array.isArray((item as any).images) && (
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                              {(item as any).images.map(
                                (img: string, idx: number) => (
                                  <div
                                    key={idx}
                                    className="relative aspect-video rounded-xl overflow-hidden border border-white/[0.08] group/image"
                                  >
                                    <img
                                      src={img}
                                      alt={`${item.title} preview ${idx + 1}`}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                                      referrerPolicy="no-referrer"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  </div>
                                ),
                              )}
                            </div>
                          )}

                        <div className="mt-8 flex justify-end">
                          <button
                            onClick={() => setExpandedId(null)}
                            className="text-white/50 hover:text-white transition-colors text-[12px] uppercase tracking-widest px-4 py-2 rounded-full border border-white/[0.08] hover:border-white/[0.20] focus:outline-none"
                          >
                            {item.closeBtn}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
});
