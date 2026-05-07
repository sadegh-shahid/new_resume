import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../data';

export const Hero = React.memo(({ lang }: { lang: Language }) => {
  const isEn = lang === 'en';
  const name = isEn ? "Mohammad Sadegh Shahid" : "محمد صادق شهید";
  const headline = isEn ? "Crafting cinematic digital experiences." : "خلق تجربه‌های دیجیتال سینمایی.";
  const subheadline = isEn
    ? "I design and engineer interfaces where motion, photography, and code converge into emotionally resonant digital worlds."
    : "من رابط‌هایی را طراحی و مهندسی می‌کنم که در آن‌ها حرکت، عکاسی و کد برای خلق دنیاهای دیجیتال تاثیرگذار با هم تلاقی می‌کنند.";

  return (
    <div className="relative min-h-[80vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          {/* Left Side: Content (70% width on desktop) */}
          <div className="w-full lg:w-[70%] z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-accent uppercase tracking-[0.3em] text-[10px] font-medium mb-4">
                {name}
              </span>

              <h1 className="mb-6 max-w-[1000px] leading-[1.05]">
                {headline}
              </h1>

              <p className="large-body text-muted max-w-[650px] mb-8">
                {subheadline}
              </p>

              <div className="flex gap-8 items-center">
                <a
                  href="#projects"
                  className="group relative py-1 text-primary text-sm font-medium tracking-wide"
                >
                  {isEn ? "View Selected Works" : "مشاهده پروژه‌ها"}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-300" />
                </a>

                <a
                  href="#contact"
                  className="text-muted hover:text-primary transition-colors text-sm font-medium tracking-wide"
                >
                  {isEn ? "Let's Talk" : "گفتگو کنیم"}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Abstract Parallax Shape */}
          <div className="w-full lg:w-[30%] h-[300px] lg:h-[400px] relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full blur-[100px] bg-accent/20 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 amber-overlay pointer-events-none opacity-50" />
    </div>
  );
});

Hero.displayName = 'Hero';
