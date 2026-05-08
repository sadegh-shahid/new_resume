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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5" role="banner">
      <div className="text-xl font-medium tracking-tighter" aria-hidden="true" dir="ltr">
        <span>Sadegh</span>
        <span className="text-white/50">Shahid</span>
      </div>
      
      <nav aria-label="Main Navigation" className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">{t.about}</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-white transition-colors">{t.experience}</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors">{t.projects}</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors">{t.contact}</a>
      </nav>

      <motion.button
        onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
        aria-label={`Switch language to ${lang === 'en' ? 'Persian' : 'English'}`}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-2 text-xs uppercase tracking-widest border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden relative"
      >
        <motion.div
          key={lang + 'glow'}
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-white/20 rounded-full pointer-events-none"
        />
        <Globe size={14} aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.span
            key={lang}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            {lang === 'en' ? 'FA' : 'EN'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </header>
  );
});
