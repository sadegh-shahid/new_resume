import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Code, Server, Layout, Fingerprint, PenTool, Image as ImageIcon, Camera, Sparkles } from 'lucide-react';

const focusIcons = [Code, Server, Layout, Fingerprint, PenTool, ImageIcon, Camera, Sparkles];

export const About = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].about;

  const isEn = lang === 'en';

  return (
    <section id="about" className="py-32 px-8 md:px-24 lg:px-32 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-7">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl font-light tracking-tight mb-12 ${isEn ? 'font-serif italic' : ''}`}
            >
              {t.title}
            </motion.h2>
            <p className="text-white/40 text-xl leading-relaxed mb-12 font-light">
              {t.summary}
            </p>
            <div className="w-24 h-[1px] bg-[#8C9475] opacity-50" />
          </div>
          
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="relative p-12 bg-white/[0.01] border border-white/5 overflow-hidden">
               {/* Aesthetic corner accent */}
               <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#8C9475]/30" />
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#8C9475]/30" />

              <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-10 block font-semibold">
                {lang === 'en' ? 'Core Focus' : 'حوزه‌های تمرکز'}
              </h3>
              <ul className="flex flex-col gap-6">
                {t.coreFocus.map((focus, i) => {
                  return (
                    <li key={i} className="flex items-center gap-6 text-white/50 group transition-all duration-500">
                      <span className="text-[#8C9475] text-[10px] font-mono opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                      <span className="group-hover:text-white group-hover:translate-x-2 transition-all text-sm uppercase tracking-widest font-light">{focus}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});
