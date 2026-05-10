import { useState, useEffect, memo, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { portfolioData, Language } from "../data";
import { CinematicParticles } from "./CinematicParticles";

export const Hero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isFa = lang === "fa";

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 50, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax shifts
  const layer2X = useTransform(springX, [0, 1], ["-2%", "2%"]);
  const layer2Y = useTransform(springY, [0, 1], ["-2%", "2%"]);
  const layer3X = useTransform(springX, [0, 1], ["-1.5%", "1.5%"]);
  const layer3Y = useTransform(springY, [0, 1], ["-1.5%", "1.5%"]);
  const layer1X = useTransform(springX, [0, 1], ["-0.8%", "0.8%"]);
  const layer1Y = useTransform(springY, [0, 1], ["-0.8%", "0.8%"]);
  const layer4X = useTransform(springX, [0, 1], ["-0.5%", "0.5%"]);
  const layer4Y = useTransform(springY, [0, 1], ["-0.5%", "0.5%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleLines = useMemo(() => t.title.split("\n"), [t.title]);
  const firstLineWords = titleLines[0].split(" ");
  const firstTwoWords = firstLineWords.slice(0, 2).join(" ");
  const remainingFirstLine = firstLineWords.slice(2).join(" ");

  return (
    <section className="min-h-screen flex items-center pt-[72px] px-6 relative overflow-hidden section-silent bg-[#0A0A0A]">
      {/* Layer 4: Dust Field (Canvas) */}
      <motion.div
        style={{ x: layer4X, y: layer4Y }}
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      >
        <CinematicParticles
          centerX={window.innerWidth * 0.2}
          centerY={window.innerHeight * 0.5}
          mouseX={mouseX.get()}
          mouseY={mouseY.get()}
        />
      </motion.div>

      {/* Hero Visual Composition Container (Left-third focus) */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block">
        <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">

          {/* Layer 1: God Rays */}
          <motion.div
            style={{ x: layer1X, y: layer1Y }}
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center opacity-[0.08] mix-blend-screen will-change-transform"
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 0deg, #D6C7A8 45deg, transparent 90deg, #f59e0b 135deg, transparent 180deg, #D6C7A8 225deg, transparent 270deg, #f59e0b 315deg, transparent 360deg)",
                maskImage: "radial-gradient(circle, black 20%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 70%)"
              }}
            />
          </motion.div>

          {/* Layer 2: Primary Glass Lens */}
          <motion.div
            style={{ x: layer2X, y: layer2Y }}
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <div className="relative w-[420px] h-[420px] rounded-full border border-[#D6C7A8]/15 backdrop-blur-[40px] saturate-[180%] shadow-[inset_0_0_80px_rgba(214,199,168,0.08)]">
              {/* Chromatic Aberration Pseudo-element */}
              <div className="absolute -inset-[1px] rounded-full mix-blend-screen opacity-50">
                <div className="absolute inset-0 rounded-full border-l-2 border-red-500/20 -translate-x-[2px]" />
                <div className="absolute inset-0 rounded-full border-r-2 border-cyan-500/20 translate-x-[2px]" />
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Secondary Lens */}
          <motion.div
            style={{ x: layer3X, y: layer3Y }}
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
          >
            <div className="w-[280px] h-[280px] rounded-full border border-[#D6C7A8]/08 bg-white/[0.01]" />
          </motion.div>

          {/* Lens Reflection (Center Dot) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500/20 rounded-full blur-[2px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Empty left side on desktop to let visual breathe */}
        <div className="hidden lg:block h-1" />

        {/* Right Side — Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col items-start text-left rtl:text-right"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className={`text-[12px] md:text-xs text-amber-500/70 uppercase tracking-widest mb-8 block ${isFa ? "tracking-normal" : ""}`}
          >
            {t.role}
          </motion.span>

          <h1
            className={`${isFa ? "text-[clamp(2.6rem, 6vw, 4rem)]" : "text-hero-display"} text-[#F3F1EB] text-4xl pb-6 ${isFa ? "leading-[1.45]" : "leading-[1.1]"}`}
            dir={isFa ? "rtl" : "ltr"}
          >
            <span className="sr-only">{t.title}</span>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              aria-hidden="true"
              className="flex flex-col"
            >
              {titleLines.map((line, index) => (
                <motion.span
                  key={index}
                  className="inline-block overflow-hidden"
                  variants={{
                    hidden: { opacity: 0, y: "40%", filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  {index === 0 && !isFa ? (
                    <>
                      <span className="font-thin">{firstTwoWords} </span>
                      <span className="font-light">{remainingFirstLine}</span>
                    </>
                  ) : (
                    <span className={isFa ? "font-normal" : "font-light"}>{line}</span>
                  )}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-white/70 max-w-[460px] leading-[1.8] mb-12 ${isFa ? "text-[15px] md:text-base leading-[2.2]" : "text-[15px] md:text-body-lg"}`}
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
                className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={isFa ? "M7 16l-4-4m0 0l4-4m-4 4h18" : "M17 8l4 4m0 0l-4 4m4-4H3"}
                />
              </svg>
            </a>
            <a href="/resume.pdf" download className="btn-ghost">
              {t.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero to About Bridge Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0A0A0A] z-20 pointer-events-none" />
    </section>
  );
});
