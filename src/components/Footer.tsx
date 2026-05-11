import React from 'react';
import { portfolioData, Language } from '../data';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="relative w-full py-24 px-6 border-t border-white/[0.08] mt-32 overflow-hidden bg-[#08090A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 relative z-10">
        {/* Left Side */}
        <div className="max-w-md">
          <p className={`text-lg font-light text-white/80 leading-relaxed ${lang === 'fa' ? 'leading-[2.2]' : ''}`}>
            {portfolioData[lang].footer.tagline}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-6 self-end md:self-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-white/[0.12] flex items-center justify-center hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-white/60 group-hover:text-amber-500 transition-colors" />
          </button>
          <p className="text-sm text-white/60 font-light tracking-widest">
            <span dir="ltr">
              {portfolioData[lang].footer.copyright.replace(
                "{year}",
                String(new Date().getFullYear()),
              )}
            </span>
          </p>
        </div>
      </div>

      {/* Watermark */}
      <div
        className="absolute bottom-0 end-0 translate-y-1/2 text-[20vw] font-light text-white/[0.02] leading-none pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {lang === 'fa' ? 'پایان' : 'END'}
      </div>
    </footer>
  );
};
