import { useState, useEffect } from 'react';
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
    restDelta: 0.001
  });

  useEffect(() => {
    // Set text direction based on chosen language
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen selection:bg-[#D6C7A8] selection:text-[#0A0A0A]" dir={lang === 'fa' ? 'rtl' : 'ltr'} lang={lang}>
      {/* Progress Bar - Subtle */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#D6C7A8]/30 z-[60] origin-left"
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
      
      {/* Footer - Minimal */}
      <footer className="text-center py-12 text-white/30 text-xs border-t border-white/[0.08] mt-24">
        <p className="font-light">ساخته‌شده با دقت، ریتم، و هدف</p>
        <p className="mt-2 opacity-50">© {new Date().getFullYear()} Sadegh Shahid</p>
      </footer>
    </div>
  );
}
