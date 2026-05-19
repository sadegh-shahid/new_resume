import { memo, useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { portfolioData, Language } from "../data";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { SpatialCard } from "./SpatialCard";
import { ParallaxLayer } from "./ParallaxLayer";

export const Projects = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].projects;
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const isFa = lang === "fa";

  const selectedItem = useMemo(
    () => t.items.find((i) => i.id === selectedProject),
    [t.items, selectedProject]
  );

  useEffect(() => {
    document.body.style.overflow = selectedProject !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section id="projects" className="px-6 max-w-7xl mx-auto section-padding-lg relative">
      <div className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`} aria-hidden="true">
        {isFa ? "۰۱" : "01"}
      </div>

      <div className="relative z-10">
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className={`text-section-title text-[#E8E6E1] ${isFa ? "" : "tracking-tight"}`}>
            {t.title}
          </h2>
          <p className="text-sm text-white/55 max-w-xs font-light leading-relaxed">
            {isFa
              ? "مطالعات منتخب در توسعه خلاق و طراحی مبتنی بر AI."
              : "Selected case studies in creative development and AI-driven design."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.items.map((item, index) => {
            const isLarge = index === 0;
            return (
              <ParallaxLayer
                key={item.id}
                speed={index % 2 === 0 ? -0.3 : -0.15}
                className={isLarge ? "md:col-span-2" : ""}
              >
                <SpatialCard intensity={12} className={isLarge ? "aspect-[21/9]" : "aspect-[16/10]"}>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.4, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="group relative overflow-hidden rounded-xl cursor-pointer card-bg w-full h-full film-frame-hover"
                    onClick={() => setSelectedProject(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(item.id);
                      }
                    }}
                  >
                    {/* Image with depth */}
                    <div className="absolute inset-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover img-cinematic"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="cinematic-label">{item.year}</span>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-full bg-white/5 backdrop-blur-sm text-white/55 hover:text-[#C9A84C] hover:bg-white/10 transition-all"
                            aria-label="Visit site"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>

                      <div>
                        <h3 className={`text-xl md:text-2xl font-medium text-white mb-2 ${isFa ? "" : "tracking-tight"}`}>
                          {item.name}
                        </h3>
                        <p className="text-sm text-white/60 mb-4 max-w-md line-clamp-2 leading-relaxed font-light">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="cinematic-label">
                            {item.stack.length} {isFa ? "تکنولوژی" : "TECH"}
                          </span>
                          <span className="w-8 h-[1px] bg-white/10" />
                        </div>
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute top-6 end-6 md:top-10 md:end-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="w-10 h-10 rounded-full border border-[#C9A84C]/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-[#C9A84C]">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </motion.div>
                </SpatialCard>
              </ParallaxLayer>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject !== null && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/[0.05] rounded-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-20 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/55 hover:text-white border border-white/[0.08] transition-colors"
              >
                <X size={18} />
              </button>
              <div className="w-full md:w-3/5 aspect-video md:aspect-auto md:min-h-[500px] relative bg-black">
                <img src={selectedItem.images[0]} alt={selectedItem.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
                <span className="cinematic-label text-[#C9A84C] mb-6 block">{selectedItem.year}</span>
                <h3 className={`text-2xl font-medium text-white mb-4 ${isFa ? "" : "tracking-tight"}`}>
                  {selectedItem.name}
                </h3>
                <p className="text-sm text-white/60 mb-8 leading-relaxed font-light">
                  {selectedItem.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedItem.stack.map((tech) => (
                    <span key={tech} className="tag tag-gold text-[10px]">{tech}</span>
                  ))}
                </div>
                {selectedItem.link && (
                  <a href={selectedItem.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit text-xs">
                    {isFa ? "مشاهده وب‌سایت" : "View Live Site"}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});
