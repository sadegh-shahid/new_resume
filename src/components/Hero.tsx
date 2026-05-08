import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';
import { CinematicParticles } from './CinematicParticles';

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
      className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading Placeholder */}
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 bg-white/5 backdrop-blur-3xl animate-pulse pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Abstract Background Image */}
      <motion.div
        animate={
          !imageLoaded
            ? { opacity: 0 }
            : isHovered 
              ? { scale: 1.05, opacity: 0.15 } 
              : { scale: 1, opacity: 0.15 }
        }
        transition={
          !imageLoaded
            ? { duration: 0 }
            : isHovered 
              ? { duration: 1, ease: "easeOut" } 
              : { duration: 1 }
        }
        className="absolute inset-0 z-0 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("/images/photo-1618005182384-a83a8bd57fbe.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background atmospheric blur */}
      <motion.div 
        animate={
          isHovered 
            ? { scale: 1.05, opacity: 0.85 } 
            : { scale: 1, opacity: 1 }
        }
        transition={
          isHovered 
            ? { duration: 0.5, ease: "easeOut" } 
            : { duration: 0.5 }
        }
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Cinematic Background Particles */}
      <CinematicParticles />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className={`text-white/50 uppercase ${isEn ? 'tracking-[0.2em]' : 'tracking-normal'} text-xs md:text-sm font-semibold mb-6`}>
          {t.role}
        </h2>
        <h1 className={`text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light tracking-tighter mb-10 ${isEn ? '' : 'font-bold'}`}>
          <span className="sr-only">{t.title}</span>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            aria-hidden="true"
            className="inline-flex flex-wrap justify-center gap-x-3 gap-y-4"
          >
            {t.title.split(" ").map((word, index) => (
              <span key={index} className="inline-block overflow-hidden relative pb-2">
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: "100%" },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {(t as any).description}
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto">
          <a
            href="#projects"
            className={`inline-flex items-center justify-center border border-white/30 rounded-full px-8 py-4 ${isEn ? 'text-sm uppercase tracking-widest' : 'text-base tracking-normal font-medium'} hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center font-semibold`}
          >
            {t.ctaPrimary}
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center border border-transparent bg-white/5 rounded-full px-8 py-4 ${isEn ? 'text-sm uppercase tracking-widest' : 'text-base tracking-normal font-medium'} hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 w-full sm:w-auto text-center`}
          >
            {t.ctaSecondary}
          </a>
        </div>
      </motion.div>
    </section>
  );
});
