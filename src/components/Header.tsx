import React, { memo, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Logo } from './Logo';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header = memo(({ lang, setLang }: HeaderProps) => {
  const t = portfolioData[lang].nav;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
      elem.setAttribute('tabindex', '-1');
      elem.focus({ preventScroll: true });
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[72px] px-6 backdrop-blur-md bg-[#0A0A0A]/60 border-b border-white/[0.08]" role="banner">
      {/* Logo - Left in RTL */}
      <div className="flex items-center" aria-label="Sadegh Shahid">
        <Logo />
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
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-[1px] bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
            />
            <span
              className={`w-full h-[1px] bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-[1px] bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
            />
          </div>
        </button>

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
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/[0.06] p-6 flex flex-col gap-4 md:hidden z-40"
          >
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-lg text-white/70 hover:text-white py-2 border-b border-white/[0.03]">
              {t.about}
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-lg text-white/70 hover:text-white py-2 border-b border-white/[0.03]">
              {t.projects}
            </a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-lg text-white/70 hover:text-white py-2 border-b border-white/[0.03]">
              {t.experience}
            </a>
            <a href="#visual-works" onClick={(e) => handleNavClick(e, 'visual-works')} className="text-lg text-white/70 hover:text-white py-2 border-b border-white/[0.03]">
              {t.visual}
            </a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="text-lg text-white/70 hover:text-white py-2 border-b border-white/[0.03]">
              {t.testimonials}
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-lg text-white/70 hover:text-white py-2 border-b border-white/[0.03]">
              {t.contact}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});
