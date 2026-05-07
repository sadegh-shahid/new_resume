import { memo } from "react";
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const Contact = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].contact;
  const isEn = lang === 'en';

  return (
    <section id="contact" className="py-64 px-8 md:px-24 border-t border-white/5 bg-off-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8">{t.title}</h2>
            <p className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1] mb-16">
              {t.message}
            </p>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-4 block">Email</span>
                <a href={`mailto:${t.email}`} className="text-xl md:text-2xl font-light hover:text-white/60 transition-colors">
                  {t.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-4 block">Social</span>
                <div className="flex gap-8">
                  <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-light hover:text-white/60 transition-colors">
                    LinkedIn
                  </a>
                  <a href={t.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-light hover:text-white/60 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle atmospheric light */}
      <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-olive-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
});
