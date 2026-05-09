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
      window.history.pushState(null, '', `#${targetId}`);
      elem.setAttribute('tabindex', '-1');
      elem.focus({ preventScroll: true });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[72px] px-6 backdrop-blur-md bg-[#0A0A0A]/60 border-b border-white/[0.08]" role="banner">
      {/* Logo - Left in RTL */}
      <div className="text-xl font-medium tracking-tight" aria-label="Sadegh Shahid" dir="ltr">
        <span className="text-[#D6C7A8]">S</span><span className="text-white/70">adegh</span><span className="text-white/40">Shahid</span>
      </div>
      
      {/* Navigation - Center */}
      <nav aria-label="Main Navigation" className="hidden md:flex gap-4 lg:gap-8 text-xs lg:text-sm text-white/60">
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors relative group">
          {t.about}
          <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#D6C7A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-white transition-colors relative group">
          {t.projects}
          <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#D6C7A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-white transition-colors relative group">
          {t.experience}
          <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#D6C7A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
        <a href="#visual-works" onClick={(e) => handleNavClick(e, 'visual-works')} className="hover:text-white transition-colors relative group">
          {t.visual}
          <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#D6C7A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
        <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="hover:text-white transition-colors relative group">
          {t.testimonials}
          <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#D6C7A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition-colors relative group">
          {t.contact}
          <span className="absolute bottom-[-4px] left-1/2 w-0 h-[1px] bg-[#D6C7A8] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </a>
      </nav>

      {/* Language Switch - Right in RTL */}
      <motion.button
        onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
        aria-label={`Switch language to ${lang === 'en' ? 'Persian' : 'English'}`}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-xs text-white/50 border border-white/[0.15] rounded-full px-3 py-1.5 hover:bg-white/[0.08] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D6C7A8]/50 overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={lang}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="block font-medium"
          >
            {lang === 'en' ? 'FA' : 'EN'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </header>
  );
});
