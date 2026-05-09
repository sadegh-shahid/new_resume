import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
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

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className=" px-6 max-w-5xl mx-auto border-t border-white/[0.04] section-quiet relative"
    >
      <div
        className="absolute top-10 left-6 rtl:left-auto rtl:right-6 text-[clamp(6rem,12vw,10rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none font-serif z-0"
        aria-hidden="true"
      >
        {lang === "fa" ? "۰۳" : "03"}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2 }}
      >
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-light tracking-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/40 text-base mt-4 max-w-2xl leading-relaxed"
          >
            {t.summary}
          </motion.p>
        </div>

        {/* Timeline - Restrained */}
        <div className="flex flex-col relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/[0.08] before:to-transparent mb-32">
          {t.items.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-8"
              >
                {/* Timeline marker */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.08] bg-black/30 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-amber-500/30 group-hover:bg-amber-500/5 cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-amber-500/60 transition-colors" />
                </div>

                {/* Content card */}
                <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/[0.03] border border-white/[0.04] p-6 rounded-2xl hover:bg-white/[0.05] transition-colors cursor-pointer text-left rtl:text-right"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-amber-500/60 font-mono">
                      {item.date}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-white/30"
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-light mb-1 text-white">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-white/40 block mb-4">
                    {item.company}
                  </span>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/60 leading-relaxed text-sm md:text-base border-t border-white/[0.04] pt-4 mt-2">
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
        <div className="border-t border-white/[0.04] pt-32">
          <h3 className="text-xl md:text-2xl font-light tracking-tight mb-16 text-white">
            {skillsT.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {skillsT.categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.04] p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 group"
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
                <p className="text-white/50 text-sm md:text-base leading-relaxed">
                  {cat.items}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {expertiseToFocusMap[i]?.map((focusIdx) => (
                    <span
                      key={focusIdx}
                      className="text-[9px] uppercase tracking-widest text-white/15 border border-white/[0.04] px-2 py-1 rounded"
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
