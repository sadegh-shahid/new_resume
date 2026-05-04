import { motion } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Code, Server, Layout, Fingerprint, PenTool, Image as ImageIcon, Camera, Sparkles } from 'lucide-react';

const focusIcons = [Code, Server, Layout, Fingerprint, PenTool, ImageIcon, Camera, Sparkles];

export function About({ lang }: { lang: Language }) {
  const t = portfolioData[lang].about;

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">{t.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {t.summary}
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">
              Focus Areas
            </h3>
            <ul className="flex flex-col gap-4">
              {t.coreFocus.map((focus, i) => {
                const Icon = focusIcons[i] || Code;
                return (
                  <li key={i} className="flex items-center gap-4 text-white/80 group transition-all duration-300">
                    <div className="p-2.5 bg-white/5 rounded-xl text-white/50 group-hover:bg-amber-500/10 group-hover:text-amber-500 border border-transparent group-hover:border-amber-500/20 transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <span className="group-hover:text-white transition-colors">{focus}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
