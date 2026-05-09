import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isFa = lang === 'fa';
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/photo-1618005182384-a83a8bd57fbe.webp';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-[72px] px-6 relative overflow-hidden section-silent">
      {/* Loading Placeholder */}
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0 bg-white/[0.02] backdrop-blur-sm pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Abstract Background Image - Restrained, Cinematic */}
      <motion.div
        animate={imageLoaded ? { opacity: 0.08 } : { opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("/images/photo-1618005182384-a83a8bd57fbe.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Subtle Cinematic Gradient Overlay - Premium Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#D6C7A8]/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#B07D52]/[0.02] blur-[100px]" />
      </div>

      {/* Main Content - Asymmetrical RTL Composition with Silence */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Right Side - Text Content (RTL first) - Refined Typography Hierarchy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col items-start text-right rtl:text-right"
        >
          {/* Top Label - Whisper Quiet, Smaller Scale for Premium Feel */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className={`text-[10px] md:text-xs text-white/25 uppercase tracking-widest mb-8 block ${isFa ? 'mb-6 tracking-normal' : ''}`}
          >
            {t.role}
          </motion.span>

          {/* Headline - Bold & Confident, Line by line reveal */}
          <h1 className={`${isFa ? 'text-[clamp(2.4rem, 6vw, 4rem)]' : 'text-hero-display'} font-light text-[#F3F1EB] mb-10 ${isFa ? 'leading-[1.45]' : 'leading-[1.35]'}`} dir={isFa ? 'rtl' : 'ltr'}>
            <span className="sr-only">{t.title}</span>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.22 } }
              }}
              aria-hidden="true"
              className="flex flex-col"
            >
              {t.title.split("\n").map((line, index) => (
                <motion.span
                  key={index}
                  className="inline-block overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: "70%", filter: "blur(5px)" },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          {/* Subtext - Smaller, Quieter, More Breathable */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-white/45 max-w-[460px] leading-[2.3] mb-12 ${isFa ? 'text-[15px] md:text-base' : 'text-[15px] md:text-body-lg'}`}
          >
            {t.description}
          </motion.p>

          {/* Buttons - Restrained entrance, Elegant Spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-5"
          >
            <a
              href="#projects"
              className="btn-primary group"
            >
              {t.ctaPrimary}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-[-1px] rtl:group-hover:translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-ghost"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Left Side - Visual Silence / Atmospheric Space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="hidden lg:flex items-center justify-center relative h-[500px]"
        >
          {/* Atmospheric Orb */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-500/10 to-transparent blur-[80px]"
          />
        </motion.div>
      </div>
    </section>
  );
});
