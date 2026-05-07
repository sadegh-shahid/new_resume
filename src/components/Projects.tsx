import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { Language, portfolioData, ProjectItem } from '../data';

export const Projects = React.memo(({ lang }: { lang: Language }) => {
  const { projects } = portfolioData[lang];
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProject = projects.items.find(p => p.id === 1); // AFSSOLAR
  // Limit to 3 projects only as per instructions
  const otherProjects = projects.items.filter(p => p.id !== 1).slice(0, 3);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] font-medium mb-10">
            {projects.title}
          </span>

          {featuredProject && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(featuredProject)}
              className="relative aspect-[21/9] w-full overflow-hidden cursor-pointer group mb-20 bg-[#0a0a0a]"
            >
              <img
                src={featuredProject.images[0]}
                alt=""
                className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                <span className="text-accent text-[10px] font-mono tracking-widest mb-2 block uppercase">Featured Project</span>
                <h3 className="text-3xl lg:text-5xl font-light mb-4">{featuredProject.name}</h3>
                <p className="large-body text-muted max-w-xl line-clamp-2">{featuredProject.impact}</p>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden mb-6 bg-[#0a0a0a] relative">
                  <img
                    src={project.images[0]}
                    alt=""
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-accent/5">
                    <ArrowRight className="text-accent" size={32} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-light">{project.name}</h4>
                  <span className="text-muted/50 font-mono text-xs">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-10"
          >
            <div className="absolute inset-0 bg-bg/98 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#0a0a0a] border border-white/5 overflow-y-auto overflow-x-hidden no-scrollbar"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-white/5 rounded-full transition-colors backdrop-blur-sm">
                <X size={20} className="text-muted hover:text-white" />
              </button>

              <div className="p-8 lg:p-16">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-0">
                    <div>
                      <span className="text-accent text-[10px] font-mono tracking-widest mb-4 block uppercase">{selectedProject.year} — {selectedProject.role}</span>
                      <h2 className="text-4xl lg:text-5xl mb-8">{selectedProject.name}</h2>

                      <div className="space-y-8">
                        <div>
                          <p className="text-[10px] text-accent uppercase tracking-widest mb-2">The Challenge</p>
                          <p className="large-body text-primary">{selectedProject.problem}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-accent uppercase tracking-widest mb-2">The Solution</p>
                          <p className="large-body text-muted">{selectedProject.solution}</p>
                        </div>
                        <div className="p-6 border border-accent/10 bg-accent/[0.02]">
                          <p className="text-[10px] text-accent uppercase tracking-widest mb-2">Metrics</p>
                          <p className="text-xl font-light text-primary">{selectedProject.result}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.stack.map(s => <span key={s} className="px-3 py-1 border border-white/5 bg-white/[0.02] text-[10px] text-muted font-mono">{s}</span>)}
                        </div>
                        {selectedProject.link && (
                          <a href={selectedProject.link} target="_blank" className="inline-flex items-center gap-3 text-primary hover:text-accent transition-colors group">
                            <span>Launch Site</span>
                            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    {/* Horizontal scrollable gallery */}
                    <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory">
                      {selectedProject.images.map((img, i) => (
                        <div key={i} className="min-w-[80%] lg:min-w-[100%] snap-center">
                          <img src={img} alt="" className="w-full aspect-video object-cover border border-white/5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

Projects.displayName = 'Projects';
