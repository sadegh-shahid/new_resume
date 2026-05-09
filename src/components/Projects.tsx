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
    <section id="projects" className="py-40 px-6 max-w-7xl mx-auto section-quiet relative">
      <div className="absolute top-10 left-6 rtl:left-auto rtl:right-6 text-[clamp(6rem,12vw,10rem)] font-light text-white/[0.03] leading-none select-none pointer-events-none font-serif z-0" aria-hidden="true">
        {lang === 'fa' ? '۰۲' : '02'}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4 }}
      >
        {/* Section Header - Editorial Style */}
        <div className="mb-28 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem, 5vw, 3.5rem)] font-light tracking-tight text-[#F3F1EB] mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/40 text-[15px] leading-relaxed max-w-[420px]"
          >
            {lang === 'en' 
              ? "Selected case studies in creative development and AI-driven design."
              : "مطالعات موردی منتخب در توسعه خلاق و طراحی مبتنی بر هوش مصنوعی."
            }
          </motion.p>
        </div>

        {/* Projects Grid - More Breathing Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {t.items.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.15,
                }}
                className="group flex flex-col p-12 rounded-3xl card-bg border border-white/[0.03] transition-all duration-500 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500/30"
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
                <div className="flex flex-col-reverse md:flex-row md:justify-between items-start mb-12 gap-4 md:gap-0">
                  <h3 className="text-[clamp(1.4rem, 3vw, 1.8rem)] font-light pr-0 md:pr-8 rtl:pr-0 rtl:md:pl-8 text-[#F3F1EB]">
                    {item.name}
                  </h3>
                  <div className="flex w-full md:w-auto justify-end gap-2 shrink-0 z-10 relative">
                    <button
                      onClick={(e) => toggleFavorite(e, item.id)}
                      className={`p-3 rounded-full transition-all duration-400 focus:outline-none ${favorites.includes(item.id) ? "bg-amber-500/10 text-amber-500" : "bg-white/5 text-white/30 hover:bg-white/8 hover:text-white/60"}`}
                      aria-label="Toggle favorite"
                    >
                      <motion.div
                        animate={
                          favorites.includes(item.id)
                            ? { scale: [1, 1.15, 1] }
                            : {}
                        }
                        transition={{ duration: 0.4 }}
                      >
                        <Heart
                          size={18}
                          className={
                            favorites.includes(item.id)
                              ? "fill-amber-500 text-amber-500"
                              : ""
                          }
                        />
                      </motion.div>
                    </button>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-3">
                    {item.role}
                  </p>

                  <p className="text-white/70 leading-relaxed mb-8 text-left rtl:text-right line-clamp-3 text-sm">
                    {item.impact}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 rtl:justify-start">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        dir="ltr"
                        className="px-3 py-1 text-[10px] border border-white/[0.06] rounded-full text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center mt-6">
                    <div className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs uppercase tracking-widest text-amber-500/80 font-medium group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-400">
                      <span>{item.readMore}</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-[0.5px] group-hover:-translate-y-[0.5px] rtl:group-hover:-translate-x-[0.5px]"
                      />
                    </div>
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
              transition={{ duration: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {t.items.find((i) => i.id === selectedProject) &&
              (() => {
                const item = t.items.find((i) => i.id === selectedProject)!;
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="relative w-full max-w-5xl bg-[#111] overflow-y-auto md:overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row my-auto max-h-[80vh] z-10"
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-white hover:text-black rounded-full backdrop-blur-md transition-colors"
                      aria-label="Close dialog"
                    >
                      <X size={24} />
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
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 z-20"
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={24} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                paginate(1, item.images!.length);
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 rounded-full text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 z-20"
                              aria-label="Next image"
                            >
                              <ChevronRight size={24} />
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
                                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-amber-500 w-6" : "bg-white/40 hover:bg-white/60"}`}
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
                          className="text-amber-500 text-sm uppercase tracking-widest mt-4 mb-2"
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
                          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-left rtl:text-right">
                            <span className="block text-xs uppercase tracking-widest text-amber-500 mb-2">
                              {lang === "en" ? "Problem" : "مسئله"}
                            </span>
                            <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                              {item.problem}
                            </p>
                          </div>
                          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-left rtl:text-right">
                            <span className="block text-xs uppercase tracking-widest text-amber-500 mb-2">
                              {lang === "en" ? "Solution" : "راهکار"}
                            </span>
                            <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                              {item.solution}
                            </p>
                          </div>
                          <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-left rtl:text-right">
                            <span className="block text-xs uppercase tracking-widest text-amber-500 mb-2">
                              {lang === "en" ? "Result" : "نتیجه"}
                            </span>
                            <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                              {item.result}
                            </p>
                          </div>
                        </div>

                        <div className="bg-black/20 border border-white/10 rounded-2xl p-6 md:p-8 text-left rtl:text-right mb-8">
                          <span className="block text-xs uppercase tracking-widest text-amber-500 mb-3">
                            {lang === "en" ? "Deep Dive" : "جزئیات بیشتر"}
                          </span>
                          <p className="text-white/70 text-sm md:text-base leading-relaxed md:leading-loose whitespace-pre-wrap">
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
                        <div className="flex flex-wrap gap-2 rtl:justify-start">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              dir="ltr"
                              className="px-4 py-2 text-xs md:text-sm border border-white/20 hover:border-white/40 transition-colors rounded-xl text-white/80 bg-white/5"
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
