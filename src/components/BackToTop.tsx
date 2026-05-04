import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { Language } from '../data';

export function BackToTop({ lang }: { lang: Language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label={lang === 'en' ? 'Back to top' : 'بازگشت به بالا'}
          id="back-to-top"
          className="fixed bottom-8 right-8 z-50 p-3 bg-white/10 hover:bg-amber-500/80 text-white backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          style={{ right: lang === 'fa' ? 'auto' : '2rem', left: lang === 'fa' ? '2rem' : 'auto' }}
        >
          <ChevronUp size={24} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
