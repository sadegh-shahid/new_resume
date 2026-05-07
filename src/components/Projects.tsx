import React, { memo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].projects;
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const paginate = (newDirection: number, length: number) => {
    setCurrentImageIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) return length - 1;
      if (next >= length) return 0;
      return next;
    });
  };

  return (
    <section id="projects" className="py-40 px-8 md:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">{t.title}</h2>
          <p className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1.1]">
            Curated digital experiences built with engineering precision.
          </p>
        </div>

        <div className="flex flex-col gap-64">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className={`grid grid-cols-12 gap-8 items-center ${index % 2 !== 0 ? 'rtl:flex-row-reverse' : ''}`}
            >
              {/* Project Image - Large & Immersive */}
              <div className={`col-span-12 lg:col-span-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div
                  className="aspect-[16/9] bg-warm-gray overflow-hidden cursor-pointer group relative"
                  onClick={() => {
                    setSelectedProject(item.id);
                    setCurrentImageIndex(0);
                  }}
                >
                  <motion.img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                    <span className="text-xs uppercase tracking-[0.3em] text-white flex items-center gap-2">
                      View Case Study <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Info - Minimal & Editorial */}
              <div className={`col-span-12 lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-col gap-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">{item.year}</span>
                  <h3 className="text-4xl font-bold tracking-tighter">{item.name}</h3>
                  <p className="text-white/60 text-lg leading-relaxed font-light italic">
                    "{item.statement}"
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {item.stack.map((tech) => (
                      <span key={tech} className="text-[10px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(item.id);
                      setCurrentImageIndex(0);
                    }}
                    className="mt-8 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors self-start border-b border-white/20 pb-2"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Simplified Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl"
            />

            {(() => {
              const item = t.items.find((i) => i.id === selectedProject)!;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-7xl h-full bg-off-black border border-white/5 overflow-hidden flex flex-col md:flex-row"
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8 z-50 text-white/40 hover:text-white transition-colors"
                  >
                    <X size={32} />
                  </button>

                  {/* Modal Images */}
                  <div className="w-full md:w-2/3 h-1/2 md:h-full bg-black relative group/carousel">
                    <img
                      src={item.images[currentImageIndex]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {item.images.length > 1 && (
                      <div className="absolute bottom-12 right-12 flex gap-4">
                        <button onClick={() => paginate(-1, item.images.length)} className="p-4 bg-white/5 hover:bg-white/10 text-white transition-all">
                          <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => paginate(1, item.images.length)} className="p-4 bg-white/5 hover:bg-white/10 text-white transition-all">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Modal Content */}
                  <div className="w-full md:w-1/3 p-12 md:p-20 overflow-y-auto">
                    <div className="flex flex-col gap-12">
                      <header>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 block">{item.role}</span>
                        <h3 className="text-5xl font-bold tracking-tighter mb-4">{item.name}</h3>
                        <p className="text-white/50 leading-relaxed font-light italic">"{item.statement}"</p>
                      </header>

                      <section className="flex flex-col gap-8">
                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-4">Problem</h4>
                          <p className="text-white/70 leading-relaxed font-light">{item.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-4">Solution</h4>
                          <p className="text-white/70 leading-relaxed font-light">{item.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-4">Outcome</h4>
                          <p className="text-white/70 leading-relaxed font-light">{item.result}</p>
                        </div>
                      </section>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 text-xs uppercase tracking-[0.3em] text-white border border-white/20 px-8 py-4 text-center hover:bg-white hover:text-black transition-all"
                        >
                          Visit Live Site
                        </a>
                      )}
                    </div>
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
