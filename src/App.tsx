import { useState, useEffect } from "react";
import { useScroll, useSpring, motion, AnimatePresence } from "motion/react";
import { Language, portfolioData } from "./data";
import { LoadingSequence } from "./components/LoadingSequence";
import { HumanMoment } from "./components/HumanMoment";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { VisualWorks } from "./components/VisualWorks";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  // Default to Persian based on user request priority
  const [lang, setLang] = useState<Language>("fa");
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem('hasVisited') !== 'true';
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Set text direction based on chosen language
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!isLoading) {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [isLoading]);

  return (
    <div
      className="min-h-screen selection:bg-[#D6C7A8] selection:text-[#0A0A0A] bg-[#08090A]"
      dir={lang === "fa" ? "rtl" : "ltr"}
      lang={lang}
    >
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-[#D6C7A8] focus:text-[#0A0A0A] focus:rounded-lg">
        {lang === 'fa' ? 'پرش به محتوا' : 'Skip to content'}
      </a>
      <AnimatePresence>
        {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Progress Bar — Visible but refined */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] bg-[#D6C7A8] z-[60] accent-glow ${lang === 'fa' ? 'origin-right' : 'origin-left'}`}
        style={{ scaleX }}
        aria-label="Reading progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
      />

      <Header lang={lang} setLang={setLang} />

      <main className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Hero lang={lang} />
        <HumanMoment lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <VisualWorks lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
