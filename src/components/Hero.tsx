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

      {/* Abstract Background Image - More visible for visual weight */}
      <motion.div
        animate={imageLoaded ? { opacity: 0.12 } : { opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("/images/photo-1618005182384-a83a8bd57fbe.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Main Content - Asymmetrical RTL Composition with Silence */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Right Side - Text Content (RTL first) - Reduced scale */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col items-start text-right rtl:text-right"
        >
          {/* Top Label - Whisper Quiet */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className={`text-xs md:text-sm text-white/30 uppercase tracking-normal mb-6 block ${isFa ? 'mb-5' : ''}`}
          >
            {t.role}
          </motion.span>

          {/* Headline - Line by line reveal, reduced scale for Persian */}
          <h1 className={`${isFa ? 'text-[clamp(2.2rem, 6vw, 4.5rem)]' : 'text-hero-display'} font-light text-[#F3F1EB] mb-8 ${isFa ? 'leading-[1.4]' : 'leading-[1.35]'}`}>
            <span className="sr-only">{t.title}</span>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.18 } }
              }}
              aria-hidden="true"
              className="flex flex-col"
            >
              {t.title.split("،").map((line, index) => (
                <motion.span
                  key={index}
                  className="inline-block overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: "60%", filter: "blur(4px)" },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  {line}{index < t.title.split("،").length - 1 && "،"}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          {/* Subtext - Smaller, more breathable */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className={`text-white/50 max-w-[480px] leading-[2.2] mb-10 ${isFa ? 'text-base md:text-lg' : 'text-body-lg'}`}
          >
            {t.description}
          </motion.p>

          {/* Buttons - Restrained entrance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
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
          {/* Empty space - intentional silence for visual breathing */}
        </motion.div>
      </div>
    </section>
  );
});
