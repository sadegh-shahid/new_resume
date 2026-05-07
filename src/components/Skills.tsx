import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';

export const Skills = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].skills;
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const isEn = lang === 'en';

  return (
    <section id="skills" className="py-48 px-8 md:px-24 lg:px-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-48 h-fit">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl font-light tracking-tight mb-12 ${isEn ? 'font-serif italic' : ''}`}
            >
              {t.title}
            </motion.h2>
            <div className="h-px w-24 bg-[#8C9475]/30 mb-8" />
            <p className="text-white/20 text-xs uppercase tracking-[0.3em] font-medium max-w-xs">
              {lang === 'en' ? 'Technical Proficiency & Creative Toolkit' : 'توانمندی‌های فنی و ابزارهای خلاق'}
            </p>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {t.categories.map((cat, i) => {
                const isActive = activeSkill === i;

                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                  className="group relative border border-white/5 p-10 hover:bg-[#0C0C0C]/30 transition-all duration-700"
                >
                  <div className="flex justify-between items-baseline mb-8">
                    <span className="text-[#8C9475] text-[10px] font-mono opacity-40">0{i + 1}</span>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-[#8C9475]' : 'text-white/10'}`}>{cat.level}%</span>
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-light mb-6 transition-all duration-500 ${isActive ? 'text-white translate-x-2' : 'text-white/40'} ${isEn ? 'font-serif' : ''}`}>
                    {cat.name}
                  </h3>

                  <p className="text-white/30 text-sm leading-relaxed font-light mb-8 italic">
                    {cat.items}
                  </p>

                  <div className="h-px w-full bg-white/5 relative overflow-hidden">
                     <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: cat.level / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute top-0 left-0 rtl:right-0 rtl:left-auto h-full w-full origin-left rtl:origin-right ${isActive ? 'bg-[#8C9475]' : 'bg-[#8C9475]/20'}`}
                    />
                  </div>
                </motion.div>
              )})}
            </div>

            <div className="h-[500px] w-full relative border border-white/5 flex items-center justify-center bg-[#0C0C0C]/10">
               {/* Abstract circular decorative element */}
               <div className="absolute w-[80%] h-[80%] border border-white/[0.02] rounded-full" />
               <div className="absolute w-[60%] h-[60%] border border-white/[0.01] rounded-full" />

            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="60%" data={t.categories}>
                <PolarGrid stroke="rgba(255,255,255,0.05)" />
                <PolarAngleAxis 
                  dataKey="name" 
                  tick={false}
                />
                <Radar
                  name="Proficiency"
                  dataKey="level"
                  stroke="#8C9475"
                  fill="#8C9475"
                  fillOpacity={0.05}
                  isAnimationActive={true}
                  animationDuration={1000}
                />
              </RadarChart>
            </ResponsiveContainer>

            <AnimatePresence mode="wait">
              {activeSkill !== null && (
                <motion.div
                  key={activeSkill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute text-[#8C9475] font-serif italic text-4xl opacity-20 pointer-events-none"
                >
                  {t.categories[activeSkill].name}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
  );
});
