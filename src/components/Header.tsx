import React, { useState, useEffect, memo } from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header = memo(({ lang, setLang }: HeaderProps) => {
  const isEn = lang === 'en';
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = ['hero', 'projects', 'philosophy', 'expertise', 'experience', 'visual', 'contact'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = isEn
    ? [
        { id: 'projects', label: 'Works' },
        { id: 'philosophy', label: 'Philosophy' },
        { id: 'expertise', label: 'Expertise' },
        { id: 'contact', label: 'Contact' }
      ]
    : [
        { id: 'projects', label: 'پروژه‌ها' },
        { id: 'philosophy', label: 'فلسفه' },
        { id: 'expertise', label: 'تخصص' },
        { id: 'contact', label: 'تماس' }
      ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-5 flex justify-between items-center bg-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-6">
        <div className="text-base font-medium tracking-tight whitespace-nowrap shrink-0" dir="ltr">
          <span className="text-primary">Sadegh</span>
          <span className="text-muted ml-1">Shahid</span>
        </div>

        <nav className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] text-muted">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`transition-colors relative py-1 ${activeSection === item.id ? 'text-accent' : 'hover:text-primary'}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                />
              )}
            </a>
          ))}
        </nav>
      </div>

      <motion.button
        onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/5 transition-colors"
      >
        <Globe size={12} className="text-muted" />
        <span className="text-primary">{lang === 'en' ? 'FA' : 'EN'}</span>
      </motion.button>
    </header>
  );
});

Header.displayName = 'Header';
