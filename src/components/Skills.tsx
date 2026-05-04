import { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';

export function Skills({ lang }: { lang: Language }) {
  const t = portfolioData[lang].skills;
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="sticky top-20 z-30 bg-[#0a0a0a]/90 backdrop-blur-md py-4 px-4 -mx-4 rounded-2xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light tracking-tighter"
          >
            {t.title}
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-8 md:gap-12 order-2 lg:order-1">
            {t.categories.map((cat, i) => {
              const isActive = activeSkill === i;
              const isDimmed = activeSkill !== null && activeSkill !== i;
              
              return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: lang === 'en' ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                onClick={() => setActiveSkill(isActive ? null : i)}
                className={`group border-l-2 pl-6 transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'border-amber-500' 
                    : isDimmed 
                      ? 'border-white/5 opacity-40 hover:opacity-70 hover:border-amber-500/50' 
                      : 'border-white/10 hover:border-amber-500'
                }`}
                style={{ direction: lang === 'fa' ? 'rtl' : 'ltr', borderLeftWidth: lang === 'en' ? '2px' : '0', borderRightWidth: lang === 'fa' ? '2px' : '0', paddingLeft: lang === 'fa' ? '0' : '1.5rem', paddingRight: lang === 'fa' ? '1.5rem' : '0' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`text-xl font-medium transition-colors ${isActive ? 'text-amber-500' : 'text-white'}`}>{cat.name}</h3>
                  <div className="relative group/tooltip flex items-center justify-center">
                    <span className={`text-sm font-mono ${isActive ? 'text-amber-500 cursor-default' : 'text-amber-500/80 cursor-default'}`}>{cat.level}%</span>
                    <div className="absolute bottom-full mb-2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-black border border-white/20 text-white/90 text-xs py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap pointer-events-none z-10 w-max left-1/2 -translate-x-1/2">
                      {cat.level >= 90 ? (lang === 'en' ? 'Expert' : 'متخصص') : cat.level >= 75 ? (lang === 'en' ? 'Advanced' : 'پیشرفته') : cat.level >= 60 ? (lang === 'en' ? 'Intermediate' : 'متوسط') : (lang === 'en' ? 'Beginner' : 'مبتدی')}
                    </div>
                  </div>
                </div>
                <p className={`text-sm md:text-base leading-relaxed tracking-wide transition-colors ${isActive ? 'text-white/80' : 'text-white/50'}`}>
                  {cat.items}
                </p>
                {/* Visual bar for level */}
                <div className="h-1 w-full bg-white/10 mt-4 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.level}%` }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.3 + (i * 0.1) }}
                    className={`h-full ${isActive ? 'bg-amber-500' : 'bg-amber-500/80'}`} 
                  />
                </div>
              </motion.div>
            )})}
          </div>
          
          <div className="order-1 lg:order-2 h-[350px] sm:h-[450px] w-full bg-white/5 rounded-full border border-white/10 p-4 lg:p-8 relative">
            <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-[80px]" />
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={t.categories}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis 
                  dataKey="name" 
                  stroke="rgba(255,255,255,0.5)" 
                  tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12, fontFamily: 'var(--font-sans)', letterSpacing: lang === 'fa' ? 'normal' : '0.05em' }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="level"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.2}
                  isAnimationActive={true}
                  animationDuration={1500}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#f59e0b' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
