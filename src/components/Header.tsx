import React, { memo } from 'react';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header = memo(({ lang, setLang }: HeaderProps) => {
  const t = portfolioData[lang].nav;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jump
      window.history.pushState(null, '', `#${targetId}`);
      // Manage focus for accessibility
      elem.setAttribute('tabindex', '-1');
      elem.focus({ preventScroll: true });
    }
  };

  const isEn = lang === 'en';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-24 lg:px-32 py-8 flex justify-between items-center bg-transparent" role="banner">
      <div className="text-xl font-light tracking-tighter" aria-hidden="true" dir="ltr">
        <span className="text-white">Mohammad Sadegh</span>
        <span className="text-white/20 ml-2">Shahid</span>
      </div>
      
      <div className="flex items-center gap-12">
        <nav aria-label="Main Navigation" className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] text-white/40">
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors">{t.projects}</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">{t.about}</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors">{t.contact}</a>
        </nav>

        <motion.button
          onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
          aria-label={`Switch language to ${lang === 'en' ? 'Persian' : 'English'}`}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors focus:outline-none"
        >
          <div className="w-4 h-[1px] bg-white/20" />
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
            >
              {lang === 'en' ? 'Persian' : 'English'}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </header>
  );
});
