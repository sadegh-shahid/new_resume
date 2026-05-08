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
    <section className="min-h-screen flex items-center justify-center pt-[72px] px-6 relative overflow-hidden">
      {/* Loading Placeholder */}
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 bg-white/[0.02] backdrop-blur-sm pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Abstract Background Image - Cinematic */}
      <motion.div
        animate={imageLoaded ? { opacity: 0.12 } : { opacity: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("/images/photo-1618005182384-a83a8bd57fbe.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background atmospheric blur - subtle vignette effect */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D6C7A8]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content - Asymmetrical RTL Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Right Side - Text Content (RTL first) */}
        <motion.div
          initial={{ opacity: 0, x: isFa ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-start text-right rtl:text-right"
        >
          {/* Top Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs md:text-sm text-white/40 uppercase tracking-normal mb-6 block"
          >
            {t.role}
          </motion.span>

          {/* Headline - Line by line reveal */}
          <h1 className="text-hero-display font-bold text-[#F3F1EB] mb-8 leading-[1.35]">
            <span className="sr-only">{t.title}</span>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } }
              }}
              aria-hidden="true"
              className="flex flex-col"
            >
              {t.title.split("،").map((line, index) => (
                <motion.span
                  key={index}
                  className="inline-block overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: "100%", filter: "blur(8px)" },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  {line}{index < t.title.split("،").length - 1 && "،"}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-white/60 max-w-[620px] mb-10 leading-[1.9]"
          >
            {t.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="btn-primary group"
            >
              {t.ctaPrimary}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-[-2px] rtl:group-hover:translate-x-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

        {/* Left Side - Visual Composition (Abstract, cinematic) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="hidden lg:flex items-center justify-center relative h-[600px]"
        >
          {/* Layered abstract composition - photography-inspired */}
          <div className="relative w-full h-full">
            {/* Main image fragment */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[10%] right-[10%] w-[60%] h-[50%] overflow-hidden rounded-sm"
            >
              <div className="w-full h-full bg-gradient-to-br from-white/[0.08] to-transparent" />
            </motion.div>

            {/* Secondary fragment */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-[20%] left-[15%] w-[50%] h-[40%] overflow-hidden rounded-sm"
            >
              <div className="w-full h-full bg-gradient-to-tl from-[#D6C7A8]/[0.06] to-transparent" />
            </motion.div>

            {/* Architectural lines */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.15, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[30%] left-[5%] w-[80%] h-[1px] bg-white/20"
            />
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 0.12, scaleY: 1 }}
              transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[10%] right-[25%] w-[1px] h-[60%] bg-white/15"
            />

            {/* Glass reflection effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1.6, delay: 1.2 }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});
