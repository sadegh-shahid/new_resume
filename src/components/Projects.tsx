import React, { memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { portfolioData, Language } from "../data";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";

export const Projects = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].projects;
  const isEn = lang === 'en';
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const paginate = (newDirection: number, length: number) => {
    setDirection(newDirection);
    setCurrentImageIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) return length - 1;
      if (next >= length) return 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-8 md:px-24 lg:px-32 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-7xl font-light tracking-tight ${isEn ? 'font-serif italic' : ''}`}
          >
            {t.title}
          </motion.h2>
          <div className="h-[1px] flex-1 bg-white/5 mx-8 mb-4 hidden md:block" />
          <p className="text-white/30 text-sm uppercase tracking-[0.2em] mb-4">
            {lang === 'en' ? 'Curated Selection' : 'منتخب آثار'}
          </p>
        </div>

        <div className="space-y-32">
          {t.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group cursor-pointer focus:outline-none`}
                onClick={() => {
                  setSelectedProject(item.id);
                  setCurrentImageIndex(0);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(item.id);
                    setCurrentImageIndex(0);
                  }
                }}
                aria-label={`${lang === "en" ? "View details for" : "مشاهده جزئیات"} ${item.name}`}
              >
                {/* Image Preview Area */}
                <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative border border-white/5 bg-[#0C0C0C]">
                   <motion.img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700 grayscale"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                   <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                      <div className="p-4 bg-[#080808] border border-white/10">
                        <ArrowUpRight size={18} className="text-[#8C9475]" />
                      </div>
                   </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 text-left rtl:text-right">
                  <span className="text-[#8C9475] text-xs uppercase tracking-[0.2em] mb-4 block font-medium">
                    {item.year} &middot; {item.role}
                  </span>
                  <h3 className={`text-4xl md:text-5xl lg:text-6xl font-light mb-8 group-hover:translate-x-2 transition-transform duration-500 ${isEn ? 'font-serif' : ''}`}>
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-lg leading-relaxed mb-8 max-w-md line-clamp-3 font-light">
                    {item.impact}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {item.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] uppercase tracking-widest text-white/20 border-b border-white/5 pb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-4 text-white/60 group-hover:text-white transition-colors duration-300">
                    <span className="text-xs uppercase tracking-widest border-b border-white/20 group-hover:border-[#8C9475] pb-1 transition-all">
                      {item.readMore}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/95"
              aria-hidden="true"
            />

            {t.items.find((i) => i.id === selectedProject) &&
              (() => {
                const item = t.items.find((i) => i.id === selectedProject)!;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-6xl bg-[#080808] overflow-y-auto md:overflow-hidden border border-white/10 flex flex-col md:flex-row my-auto max-h-[90vh] z-10"
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-8 right-8 z-20 p-4 bg-[#0C0C0C] hover:bg-[#1A1A1A] transition-colors border border-white/10"
                      aria-label="Close dialog"
                    >
                      <X size={18} />
                    </button>

                    {/* Image Carousel */}
                    {item.images && item.images.length > 0 && (
                      <div className="w-full md:w-1/2 relative bg-black/50 group/carousel aspect-video md:aspect-auto md:min-h-full flex-shrink-0 overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                          <motion.img
                            key={currentImageIndex}
                            src={item.images[currentImageIndex]}
                            alt={`${item.name} screenshot ${currentImageIndex + 1}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              x: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              },
                              opacity: { duration: 0.2 },
                            }}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                              e.stopPropagation();
                              const swipe = Math.abs(offset.x) * velocity.x;
                              if (swipe < -10000 || offset.x < -50) {
                                paginate(1, item.images!.length);
                              } else if (swipe > 10000 || offset.x > 50) {
                                paginate(-1, item.images!.length);
                              }
                            }}
                          />
                        </AnimatePresence>

                        {item.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                paginate(-1, item.images!.length);
                              }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-[#080808] border border-white/10 text-white/50 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 z-20"
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                paginate(1, item.images!.length);
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-[#080808] border border-white/10 text-white/50 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 z-20"
                              aria-label="Next image"
                            >
                              <ChevronRight size={20} />
                            </button>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                              {item.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setDirection(
                                      idx > currentImageIndex ? 1 : -1,
                                    );
                                    setCurrentImageIndex(idx);
                                  }}
                                  className={`w-12 h-1 transition-all ${idx === currentImageIndex ? "bg-[#8C9475]" : "bg-white/10 hover:bg-white/20"}`}
                                  aria-label={`Go to slide ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    <div
                      className={`flex-1 flex flex-col w-full ${item.images && item.images.length > 0 ? "md:w-1/2" : ""} p-6 md:p-12 overflow-visible md:overflow-y-auto`}
                    >
                      <div className="mb-6 md:mb-8 pr-12 lg:pr-0 lg:pl-12 rtl:pr-0 rtl:pl-12 rtl:lg:pl-0 rtl:lg:pr-12">
                        <h3 className="text-4xl md:text-5xl font-light mb-2">
                          {item.name}
                        </h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0 }}
                          className="text-[#8C9475] text-xs uppercase tracking-[0.2em] mt-4 mb-2 font-medium"
                        >
                          {item.role} &middot; {item.year}
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0 }}
                        className="grid grid-cols-1 gap-6 mb-8"
                      >
                        <div className="grid grid-cols-1 gap-4 mb-6">
                          <div className="border border-white/5 p-8 text-left rtl:text-right relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#8C9475]/20" />
                            <span className="block text-[10px] uppercase tracking-widest text-[#8C9475] mb-3 font-semibold">
                              {lang === "en" ? "Problem" : "مسئله"}
                            </span>
                            <p className="text-white/50 text-sm leading-relaxed font-light italic">
                              {item.problem}
                            </p>
                          </div>
                          <div className="border border-white/5 p-8 text-left rtl:text-right relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#8C9475]/40" />
                            <span className="block text-[10px] uppercase tracking-widest text-[#8C9475] mb-3 font-semibold">
                              {lang === "en" ? "Solution" : "راهکار"}
                            </span>
                            <p className="text-white/70 text-sm leading-relaxed font-light">
                              {item.solution}
                            </p>
                          </div>
                          <div className="border border-white/5 p-8 text-left rtl:text-right relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#8C9475]/60" />
                            <span className="block text-[10px] uppercase tracking-widest text-[#8C9475] mb-3 font-semibold">
                              {lang === "en" ? "Result" : "نتیجه"}
                            </span>
                            <p className="text-white/90 text-sm leading-relaxed font-light">
                              {item.result}
                            </p>
                          </div>
                        </div>

                        <div className="border border-white/5 p-8 md:p-12 text-left rtl:text-right mb-8 bg-[#0C0C0C]/30 relative">
                          <span className="block text-[10px] uppercase tracking-widest text-[#8C9475] mb-4 font-semibold">
                            {lang === "en" ? "Narrative" : "روایت"}
                          </span>
                          <p className="text-white/50 text-sm md:text-base leading-relaxed md:leading-loose whitespace-pre-wrap font-light">
                            {item.details}
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0 }}
                        className="pt-6 border-t border-white/10 text-left rtl:text-right"
                      >
                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-4">
                          {lang === "en" ? "Technologies" : "فناوری‌ها"}
                        </span>
                        <div className="flex flex-wrap gap-3 rtl:justify-start">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              dir="ltr"
                              className="px-4 py-1.5 text-xs border border-white/10 hover:border-[#8C9475]/50 transition-colors text-white/50 hover:text-white bg-transparent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })()}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});
