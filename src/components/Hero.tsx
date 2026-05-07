import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isEn = lang === 'en';
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/photo-1618005182384-a83a8bd57fbe.webp';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section 
      className="min-h-screen flex flex-col items-start justify-center pt-32 pb-24 px-8 md:px-24 lg:px-32 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background atmospheric light - directional falloff instead of a blob */}
      <motion.div 
        animate={
          isHovered 
            ? { opacity: 0.12, x: -20 }
            : { opacity: 0.08, x: 0 }
        }
        className="absolute top-0 right-0 w-[70vw] h-full bg-gradient-to-bl from-[#8C9475]/20 via-transparent to-transparent pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl"
      >
        <h2 className={`text-[#8C9475] uppercase ${isEn ? 'tracking-[0.3em]' : 'tracking-normal'} text-xs md:text-sm font-medium mb-8 opacity-80`}>
          {t.role}
        </h2>

        <h1 className={`text-6xl md:text-8xl lg:text-9xl leading-[1] font-light tracking-tight mb-12 max-w-4xl ${isEn ? 'font-serif italic' : 'font-bold'}`}>
          {t.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-12 mt-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed font-light"
          >
            {(t as any).description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <a
              href="#projects"
              className={`group relative overflow-hidden px-2 py-1 ${isEn ? 'text-xs uppercase tracking-widest' : 'text-sm'} text-white/80 hover:text-white transition-colors duration-500`}
            >
              <span className="relative z-10">{t.ctaPrimary}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8C9475] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>

            <a
              href="#contact"
              className={`group relative overflow-hidden px-2 py-1 ${isEn ? 'text-xs uppercase tracking-widest' : 'text-sm'} text-white/40 hover:text-white transition-colors duration-500`}
            >
              <span className="relative z-10">{t.ctaSecondary}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Vertical decorative line */}
      <div className="absolute right-12 md:right-24 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
    </section>
  );
});
