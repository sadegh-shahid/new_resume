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
      className="px-6 max-w-5xl mx-auto section-mezzo relative"
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl md:text-5xl font-light ${isFa ? 'tracking-normal' : 'tracking-tight'}`}
          >
            {t.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((item, i) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col border border-white/[0.08] rounded-3xl bg-white/[0.03] overflow-hidden group"
              >
                {/* Immediate Visual Reveal */}
                {"images" in item && Array.isArray((item as any).images) && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08]">
                    <img
                      src={(item as any).images[0]}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.src = '/fallback-image.jpg';
                      }}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-light text-white/90 group-hover:text-white transition-colors mb-6">
                    {item.title}
                  </h3>

                  <div className="space-y-6 flex-grow mb-8">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-amber-500/80 mb-1">
                        <Wrench size={12} aria-hidden="true" />
                        <span className="font-medium text-[10px] uppercase tracking-widest">
                          {lang === "en" ? "Tools" : "ابزارها"}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-white/60">
                        {item.tools}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-amber-500/80 mb-1">
                        <Target size={12} aria-hidden="true" />
                        <span className="font-medium text-[10px] uppercase tracking-widest">
                          {lang === "en" ? "Impact" : "تأثیر"}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-white/70">
                        {item.impact}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full py-4 px-6 rounded-xl border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02] transition-all flex items-center justify-between text-xs uppercase tracking-widest text-white/50 hover:text-white/80"
                  >
                    <span>{isExpanded ? item.closeBtn : item.detailsBtn}</span>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                      <ChevronDown size={14} aria-hidden="true" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 mt-8 border-t border-white/[0.08]">
                           <div className="flex items-center gap-2 text-amber-500/80 mb-3">
                              <Lightbulb size={12} aria-hidden="true" />
                              <span className="font-medium text-[10px] uppercase tracking-widest">
                                {lang === "en" ? "Concept" : "مفهوم"}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed text-white/80">
                              {item.concept}
                            </p>

                            {/* Secondary Image if exists */}
                            {(item as any).images.length > 1 && (
                              <div className="mt-8 rounded-xl overflow-hidden border border-white/[0.08]">
                                <img
                                  src={(item as any).images[1]}
                                  alt={`${item.title} secondary`}
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                            )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
});
