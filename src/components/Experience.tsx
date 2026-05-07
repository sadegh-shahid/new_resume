import React from 'react';
import { motion } from 'motion/react';
import { Language, portfolioData } from '../data';

export const Experience = React.memo(({ lang }: { lang: Language }) => {
  const { experience } = portfolioData[lang];
  const isEn = lang === 'en';

  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
            {experience.title}
          </span>
          <h2 className="max-w-2xl">{experience.summary}</h2>
        </div>

        <div className="space-y-1">
          {experience.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isEn ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-b border-white/5 py-12 hover:bg-white/[0.01] transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="text-muted text-xs font-mono mb-2 block">{item.date}</span>
                  <h3 className="text-2xl font-light text-primary group-hover:text-accent transition-colors">{item.role}</h3>
                  <p className="text-muted mt-2">{item.company}</p>
                </div>
                <div className="md:w-1/2 lg:w-1/3">
                  <p className="small-body text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';
