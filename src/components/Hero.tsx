import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import { CinematicParticles } from "./CinematicParticles";

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isFa = lang === "fa";
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/photo-1618005182384-a83a8bd57fbe.webp";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-[72px] px-6 relative overflow-hidden section-silent">
      {/* Layer 0: Cinematic Particles — Ambient Floating Dust */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <CinematicParticles />
      </div>

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

      {/* Layer 1: Abstract Background Image — Slightly more present */}
      <motion.div
        animate={imageLoaded ? { opacity: 0.12 } : { opacity: 0 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("/images/photo-1618005182384-a83a8bd57fbe.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Layer 2: Atmospheric Gradient Blobs — Stronger, more complex */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-[-15%] left-[-15%] w-[75%] h-[75%] rounded-full bg-[#D6C7A8]/[0.06] blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[65%] h-[65%] rounded-full bg-[#B07D52]/[0.05] blur-[120px]" />
        <div className="absolute top-[30%] right-[5%] w-[45%] h-[45%] rounded-full bg-[#B07D52]/[0.04] blur-[90px]" />
      </div>

      {/* Layer 3: Text-safe vignette so background can be brighter without hurting readability */}
      <div className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Right Side — Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col items-start text-right rtl:text-right"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className={`text-[12px] md:text-xs text-white/60 uppercase tracking-widest mb-8 block ${isFa ? "tracking-normal" : ""}`}
          >
            {t.role}
          </motion.span>

          <h1
            className={`${isFa ? "text-[clamp(2.6rem, 6vw, 4rem)]" : "text-hero-display"} font-light text-[#F3F1EB] text-4xl pb-6 ${isFa ? "leading-[1.45]" : "leading-[1.35]"}`}
            dir={isFa ? "rtl" : "ltr"}
          >
            <span className="sr-only">{t.title}</span>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.22 } } }}
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
                      transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-white/60 max-w-[460px] leading-[2.3] mb-12 ${isFa ? "text-[15px] md:text-base" : "text-[15px] md:text-body-lg"}`}
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-5"
          >
            <a href="#projects" className="btn-primary group">
              {t.ctaPrimary}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-[-1px] rtl:group-hover:translate-x-[1px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="/resume.pdf" download className="btn-ghost">
              {t.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Left Side — Cinematic Visual Composition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="hidden lg:flex items-center justify-center relative h-[600px]"
        >
          {/* Primary Orb — Amber, dominant */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 45, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-amber-500/15 to-transparent blur-[100px] will-change-transform"
          />

          {/* Secondary Orb — Ivory, offset for depth */}
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.06, 1] }}
            transition={{
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-bl from-[#D6C7A8]/12 to-transparent blur-[80px] translate-x-[-50px] translate-y-[80px] will-change-transform"
          />

          {/* Tertiary Orb — Bronze, small accent pulse */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[180px] h-[180px] rounded-full bg-[#B07D52]/20 blur-[60px] translate-x-[100px] translate-y-[-100px] will-change-transform"
          />

          {/* Concentric Rings — "Lens" focal point */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] border border-white/[0.05] rounded-full will-change-transform"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute w-[260px] h-[260px] border border-white/[0.04] rounded-full will-change-transform"
          />
          <div className="absolute w-[220px] h-[220px] border border-white/[0.03] rounded-full will-change-transform" />
          <div className="absolute w-[8px] h-[8px] bg-amber-500/30 rounded-full blur-[2px]" />
        </motion.div>
      </div>
    </section>
  );
});
