import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';

export const Skills = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].skills;
  const isEn = lang === 'en';
  const [view, setView] = useState<'radar' | 'list'>('radar');
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="expertise" className="py-32 border-t border-white/5 bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
              {t.title}
            </span>
            <h2 className="max-w-2xl">{isEn ? "Technical & Creative Toolkit" : "مجموعه ابزارهای فنی و خلاق"}</h2>
          </div>

          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setView('radar')}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${view === 'radar' ? 'bg-accent text-bg' : 'text-muted hover:text-primary'}`}
            >
              {isEn ? 'Radar View' : 'نمای راداری'}
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${view === 'list' ? 'bg-accent text-bg' : 'text-muted hover:text-primary'}`}
            >
              {isEn ? 'List View' : 'نمای لیستی'}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === 'radar' ? (
            <motion.div
              key="radar"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-[500px] w-full bg-white/[0.02] border border-white/5 rounded-2xl p-8"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={t.categories}>
                  <PolarGrid stroke="rgba(255,255,255,0.05)" />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, uppercase: true }}
                  />
                  <Radar
                    name="Level"
                    dataKey="level"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.15}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0', fontSize: '12px' }}
                    itemStyle={{ color: '#f59e0b' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {t.categories.map((cat, i) => (
                <div
                  key={i}
                  className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className="flex justify-between items-end mb-4">
                    <h4 className="text-xl font-light">{cat.name}</h4>
                    <span className="text-accent font-mono text-xs">{cat.level}%</span>
                  </div>
                  <p className="small-body text-muted mb-6">{cat.items}</p>
                  <div className="h-[1px] w-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.level}%` }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
