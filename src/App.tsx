import { useState, useEffect } from "react";
import { useScroll, useSpring, motion, AnimatePresence } from "motion/react";
import { Language, portfolioData } from "./data";
import { LoadingSequence } from "./components/LoadingSequence";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { VisualWorks } from "./components/VisualWorks";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { ArrowUp } from "lucide-react";

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
      <AnimatePresence>
        {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Progress Bar — Visible but refined */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] bg-[#D6C7A8] z-[60] accent-glow ${lang === 'fa' ? 'origin-right' : 'origin-left'}`}
        style={{ scaleX }}
      />

      <Header lang={lang} setLang={setLang} />

      <main className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <VisualWorks lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer - Architectural */}
      <footer className="relative w-full py-24 px-6 border-t border-white/[0.08] mt-32 overflow-hidden bg-[#08090A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 relative z-10">
          {/* Left Side */}
          <div className="max-w-md">
            <p className={`text-lg font-light text-white/80 leading-relaxed ${lang === 'fa' ? 'leading-[2.2]' : ''}`}>
              {portfolioData[lang].footer.tagline}
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-end gap-6 self-end md:self-auto">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-white/[0.12] flex items-center justify-center hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-white/60 group-hover:text-amber-500 transition-colors" />
            </button>
            <p className="text-sm text-white/60 font-light tracking-widest">
              <span dir="ltr">
                {portfolioData[lang].footer.copyright.replace(
                  "{year}",
                  String(new Date().getFullYear()),
                )}
              </span>
            </p>
          </div>
        </div>

        {/* Watermark */}
        <div
          className="absolute bottom-0 end-0 translate-y-1/2 text-[20vw] font-light text-white/[0.02] leading-none pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          {lang === 'fa' ? 'پایان' : 'END'}
        </div>
      </footer>
    </div>
  );
}
