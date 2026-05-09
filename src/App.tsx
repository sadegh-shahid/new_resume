import { useState, useEffect } from "react";
import { useScroll, useSpring, motion } from "motion/react";
import { Language } from "./data";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CapabilitySnapshot } from "./components/CapabilitySnapshot";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { VisualWorks } from "./components/VisualWorks";
import { Testimonials } from "./components/Testimonials";
import { HumanMoment } from "./components/HumanMoment";
import { Contact } from "./components/Contact";

export default function App() {
  // Default to Persian based on user request priority
  const [lang, setLang] = useState<Language>("fa");

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

  return (
    <div
      className="min-h-screen selection:bg-[#D6C7A8] selection:text-[#0A0A0A]"
      dir={lang === "fa" ? "rtl" : "ltr"}
      lang={lang}
    >
      {/* Progress Bar — Visible but refined */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#D6C7A8] z-[60] origin-left shadow-[0_0_12px_rgba(214,199,168,0.35)]"
        style={{ scaleX }}
      />

      <Header lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <CapabilitySnapshot lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <VisualWorks lang={lang} />
        <Testimonials lang={lang} />
        <HumanMoment lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer - Minimal, Quiet */}
      <footer className="text-center py-16 text-white/20 text-[10px] tracking-widest border-t border-white/[0.04] mt-32">
        <p className="font-light opacity-60">ساخته‌شده با دقت، ریتم، و هدف</p>
        <p className="mt-3 opacity-30">
          © {new Date().getFullYear()} Sadegh Shahid
        </p>
      </footer>
    </div>
  );
}
