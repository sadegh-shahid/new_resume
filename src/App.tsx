import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { useScroll, useSpring, motion, useMotionValue } from 'motion/react';
import Lenis from 'lenis';
import { Language } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About as Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { VisualWorks } from './components/VisualWorks';
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
import { Contact } from './components/Contact';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-bg text-primary selection:bg-accent/30 selection:text-white">
      <div className="film-grain" />

      <motion.div 
        className="custom-cursor hidden md:block"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[110] origin-left rtl:origin-right"
        style={{ scaleX }}
      />

      <Header lang={lang} setLang={setLang} />

      <main>
        <section id="hero">
          <Hero lang={lang} />
        </section>

        <Projects lang={lang} />
        <Philosophy lang={lang} />

        <Suspense fallback={<div className="h-96 flex items-center justify-center opacity-5">...</div>}>
          <Skills lang={lang} />
        </Suspense>

        <Experience lang={lang} />

        <section id="visual">
          <VisualWorks lang={lang} />
        </section>

        <Contact lang={lang} />
      </main>
      
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-[10px] text-muted uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} — Engineered by Mohammad Sadegh Shahid
          </p>
        </div>
      </footer>
    </div>
  );
}
