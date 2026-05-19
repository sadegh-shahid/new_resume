import { memo, useMemo, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { portfolioData, Language } from "../data";
import { CinematicParticles } from "./CinematicParticles";

export const ImmersiveHero = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].hero;
  const isFa = lang === "fa";
  const titleLines = useMemo(() => t.title.split("\n"), [t.title]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const { scrollYProgress } = useScroll();
  // Reduced parallax intensity on mobile
  const bgY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 150 : 300]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 80 : 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1.05 : 1.1]);

  return (
    <section
      className="relative min-h-screen flex items-end pb-20 md:pb-32 pt-[80px] px-6 overflow-hidden"
      style={{ minHeight: "100dvh", paddingBottom: "calc(env(safe-area-inset-bottom) + 5rem)" }}
    >
      {/* Deep background layer */}
      <motion.div style={{ y: bgY, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url("/images/AFS_1.webp")`,
          filter: "brightness(0.28) contrast(1.2) saturate(0.3) blur(2px)",
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-transparent to-[#050505]/85" />
      </motion.div>

      {/* Dust layer — disabled on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 z-[1]">
          <CinematicParticles />
        </div>
      )}

      {/* Content */}
      <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }}
          className="cinematic-label block mb-8 md:mb-10">
          {t.role}
        </motion.span>

        <h1 className={`text-hero-display text-[#E8E6E1] mb-10 md:mb-14 ${
          isFa ? "font-bold leading-[1.08]" : "font-extralight leading-[0.92] tracking-tight"
        }`} dir={isFa ? "rtl" : "ltr"}>
          <span className="sr-only">{t.title.replace("\n", " ")}</span>
          <div className="flex flex-col" aria-hidden="true">
            {titleLines.map((line, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <motion.span initial={{ opacity: 0, y: "110%" }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.9 + index * 0.25 }}
                  className="inline-block">
                  {line}
                </motion.span>
              </span>
            ))}
          </div>
        </h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1.6 }}
          className={`text-white/55 max-w-lg mb-12 md:mb-16 mt-2 font-light ${isFa ? "text-base leading-[1.75]" : "text-body-lg"}`}>
          {t.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2 }}
          className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary group">
            {t.ctaPrimary}
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
          </a>
          <a href="#contact" className="btn-ghost">
            {t.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#050505] z-20 pointer-events-none" />
    </section>
  );
});
