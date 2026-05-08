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
              <h3 className="text-sm font-medium text-[#F3F1EB] mb-2 tracking-wide">
                {block.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
