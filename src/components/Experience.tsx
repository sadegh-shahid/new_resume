import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import { WordReveal } from "./WordReveal";
import {
  ChevronDown,
  Code,
  Server,
  Layout,
  Fingerprint,
  PenTool,
  Image as ImageIcon,
  Camera,
  Sparkles,
} from "lucide-react";

const focusIcons = [
  Code,
  Server,
  Layout,
  Fingerprint,
  PenTool,
  ImageIcon,
  Camera,
  Sparkles,
];

// Map Expertise index to Focus Area indices
const expertiseToFocusMap: Record<number, number[]> = {
  0: [0, 1], // Web Development -> Front-End, Back-End
  1: [2, 6], // Product & UX -> UI/UX, Photography
  2: [3, 4, 5], // Visual & Brand -> Brand, Graphic, Visual Storytelling
  3: [7], // AI Workflow -> AI-Assisted
};

export const Experience = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].experience;
  const aboutT = portfolioData[lang].about;
  const skillsT = portfolioData[lang].skills;
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const isFa = lang === "fa";

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="px-6 max-w-5xl mx-auto border-t border-white/[0.08] section-mezzo relative"
    >
      <div
        className="hidden md:block absolute -top-8 -left-12 rtl:-left-auto rtl:-right-12 text-[clamp(10rem,20vw,18rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none z-0 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        {isFa ? "۰۴" : "04"}
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/70 text-base mt-4 max-w-2xl leading-relaxed"
          >
            {t.summary}
          </motion.p>
        </div>

        {/* Timeline - Restrained */}
        <div className="flex flex-col relative before:absolute before:inset-0 before:ms-5 before:-translate-x-px rtl:before:translate-x-px before:h-full before:w-[1px] before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTIpIi8+PC9zdmc+')] before:bg-repeat-y before:bg-[length:4px_12px] mb-32">
          {t.items.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className="relative flex items-center gap-8 group is-active py-8"
              >
                {/* Timeline marker */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.12] bg-black/30 text-white shadow shrink-0 z-10 transition-all group-hover:border-amber-500/30 group-hover:bg-amber-500/5 group-hover:accent-glow cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-amber-500/60 transition-colors" />
                </div>

                {/* Content card */}
                <div
                  className="flex-1 bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl hover:bg-white/[0.05] transition-colors cursor-pointer text-left rtl:text-right"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[12px] uppercase tracking-widest text-amber-500 font-medium">
                      {item.date}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-white/60"
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </motion.div>
                  </div>
                  <h3 className="text-subhead font-light mb-1 text-white">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-white/60 block mb-4">
                    {item.company}
                  </span>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 leading-relaxed text-sm md:text-base border-t border-white/[0.08] pt-4 mt-2">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Combined Expertise & Focus Areas Section */}
        <div className="border-t border-white/[0.08] pt-32">
          <h3 className="text-xl md:text-2xl font-light tracking-tight pb-4 text-white">
            {skillsT.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {skillsT.categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="flex flex-wrap gap-3 mb-6">
                  {expertiseToFocusMap[i]?.map((focusIdx) => {
                    const Icon = focusIcons[focusIdx];
                    return (
                      <div
                        key={focusIdx}
                        className="p-2 bg-white/[0.03] rounded-lg text-white/20 group-hover:text-amber-500/60 transition-colors"
                        title={aboutT.coreFocus[focusIdx]}
                      >
                        <Icon size={16} />
                      </div>
                    );
                  })}
                </div>
                <h4 className="text-lg font-medium text-amber-500/80 mb-3">
                  {cat.name}
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {cat.items}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {expertiseToFocusMap[i]?.map((focusIdx) => (
                    <span
                      key={focusIdx}
                      className="text-[11px] uppercase tracking-widest text-white/60 border border-white/[0.12] px-2 py-1 rounded"
                    >
                      {aboutT.coreFocus[focusIdx]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
});
