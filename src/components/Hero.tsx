import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isEn = lang === 'en';

  return (
    <section 
      className="min-h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden bg-off-black"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-olive-accent/10 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-black to-transparent opacity-80" />
      </div>

      <div className="relative z-10 grid grid-cols-12 gap-8 items-end">
        {/* Left Column: Role & Title */}
        <div className="col-span-12 lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={`text-white/30 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 ${isEn ? '' : 'tracking-normal'}`}>
              {t.role}
            </h2>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-bold tracking-tighter mb-12 max-w-5xl">
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
                className="block"
              >
                {t.title.split(' ').slice(0, 3).join(' ')}
              </motion.span>
              <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                className="block text-white/40"
              >
                {t.title.split(' ').slice(3).join(' ')}
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Right/Bottom: Description & CTA - Asymmetrical Placement */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-white/50 text-lg md:text-xl mb-12 leading-relaxed font-light">
              {t.description}
            </p>

            <div className="flex items-center gap-12">
              <a
                href="#projects"
                className="text-xs uppercase tracking-[0.3em] text-white hover:text-white/60 transition-colors border-b border-white/20 pb-2"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.77, 0, 0.175, 1] }}
        className="absolute left-8 md:left-24 bottom-0 w-[1px] h-32 bg-white/10 origin-bottom"
      />
    </section>
  );
});
