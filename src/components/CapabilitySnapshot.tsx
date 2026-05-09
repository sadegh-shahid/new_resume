import { memo } from 'react';
import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';

export const CapabilitySnapshot = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].capabilities;

  return (
    <section className="py-24 px-6 border-t border-white/[0.04] section-compressed">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {t.blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08 
              }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.06] transition-all duration-500"
            >
              <div className="mb-4 text-amber-500/40">
                {index === 0 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>}
                {index === 1 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>}
                {index === 2 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>}
                {index === 3 && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>}
              </div>
              <h3 className="text-sm font-medium text-[#F3F1EB] mb-2 tracking-wide">
                {block.title}
              </h3>
              <p className="text-xs text-white/55 leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
