import { useState, useEffect, lazy, Suspense } from 'react';
import { useScroll, useSpring, motion } from 'motion/react';
import { Language } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { VisualWorks } from './components/VisualWorks';

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
    <div className="min-h-screen selection:bg-white selection:text-black">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-50 origin-left rtl:origin-right"
        style={{ scaleX }}
      />
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <VisualWorks lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>
      
      <footer className="text-center py-8 text-white/30 text-sm mt-12 border-t border-white/5 tracking-widest uppercase">
        © {new Date().getFullYear()} Mohammad Sadegh Shahid
      </footer>
    </div>
  );
}
