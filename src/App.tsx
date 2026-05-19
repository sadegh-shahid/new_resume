import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language, portfolioData } from "./data";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { VisualWorks } from "./components/VisualWorks";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { LoadingSequence } from "./components/LoadingSequence";
import { CustomCursor } from "./components/CustomCursor";
import { DepthEnvironment } from "./components/DepthEnvironment";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<Language>("fa");
  const [showTop, setShowTop] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen selection:bg-[#C9A84C] selection:text-[#050505] bg-[#050505]"
      dir={lang === "fa" ? "rtl" : "ltr"}
      lang={lang}
    >
      {!loaded && <LoadingSequence onComplete={() => setLoaded(true)} />}

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <DepthEnvironment />
            <CustomCursor />
            <Header lang={lang} setLang={setLang} />

            <main className="relative z-10">
              <Hero lang={lang} />
              <Projects lang={lang} />
              <Process lang={lang} />
              <VisualWorks lang={lang} />
              <About lang={lang} />
              <Services lang={lang} />
              <Experience lang={lang} />
              <Testimonials lang={lang} />
              <Contact lang={lang} />
            </main>

            <footer className="relative z-10 w-full pb-20 px-6 border-t border-white/[0.04] mt-0 overflow-hidden bg-[#050505]">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
                <p className={`text-sm font-light text-white/50 max-w-sm leading-relaxed ${lang === "fa" ? "leading-[1.75]" : ""}`}>
                  {portfolioData[lang].footer.tagline}
                </p>
                <p className="text-xs text-white/40 font-light tracking-widest">
                  {portfolioData[lang].footer.copyright.replace("{year}", String(new Date().getFullYear()))}
                </p>
              </div>
              <div className="absolute bottom-0 end-0 translate-y-1/3 text-[18vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none z-0" aria-hidden="true">
                {lang === "fa" ? "پایان" : "END"}
              </div>
            </footer>

            <AnimatePresence>
              {showTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-8 end-8 z-50 w-12 h-12 rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all group"
                  aria-label="Back to top"
                >
                  <ArrowUp size={18} className="text-white/40 group-hover:text-[#C9A84C] transition-colors" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
