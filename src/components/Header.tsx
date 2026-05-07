import React, { memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header = memo(({ lang, setLang }: HeaderProps) => {
  const t = portfolioData[lang].nav;
  const isEn = lang === 'en';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-start pointer-events-none" role="banner">
      <div className="pointer-events-auto">
        <div className="text-2xl font-bold tracking-tighter" aria-hidden="true" dir="ltr">
          <span className="text-white">Sadegh</span>
          <span className="text-white/20">Shahid</span>
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-12 pointer-events-auto">
        <motion.button
          onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
          aria-label={`Switch language to ${lang === 'en' ? 'Persian' : 'English'}`}
          className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors py-1"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {lang === 'en' ? 'Persian' : 'English'}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <nav aria-label="Main Navigation" className="flex flex-col items-end gap-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors">{t.projects}</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">{t.about}</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-white transition-colors">{t.experience}</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors">{t.contact}</a>
        </nav>
      </div>
    </header>
  );
});
