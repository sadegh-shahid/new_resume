import { useState, useEffect, lazy, Suspense } from 'react';
import { useScroll, useSpring, motion } from 'motion/react';
import { Language } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { VisualWorks } from './components/VisualWorks';

// ⚡ Bolt: Code-splitting for better initial load performance.
// The Skills component depends on the 'recharts' library, which is relatively large.
// By lazy loading it, we move recharts and the Skills logic into a separate chunk,
// reducing the main bundle size by ~45% (from ~731kB to ~400kB).
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  // Default to Persian based on user request priority
  const [lang, setLang] = useState<Language>('fa');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
    mass: 0.1
  });

  useEffect(() => {
    // Set text direction based on chosen language
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-[#080808]">
      <div className="cinematic-overlay" />
      <div className="vignette" />

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#8C9475] z-50 origin-left rtl:origin-right opacity-50"
        style={{ scaleX }}
      />
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Suspense fallback={<div className="h-[600px] flex items-center justify-center text-white/20">...</div>}>
          <Skills lang={lang} />
        </Suspense>
        <VisualWorks lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>
      
      <footer className="py-24 px-8 md:px-24 lg:px-32 mt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/10 text-[10px] tracking-[0.4em] uppercase">
        <span>© {new Date().getFullYear()} Mohammad Sadegh Shahid</span>
        <span className="hidden md:block h-px flex-1 bg-white/5 mx-12" />
        <span>Cinematic Digital Identity</span>
      </footer>
    </div>
  );
}
