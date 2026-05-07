import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../data';

export const About = React.memo(({ lang }: { lang: Language }) => {
  const isEn = lang === 'en';

  const philosophy = isEn
    ? [
        { title: "Interfaces are experiences, not pages.", desc: "Focusing on the emotional journey of the user." },
        { title: "Performance is part of aesthetics.", desc: "Speed and fluidity define the quality of craft." },
        { title: "Motion should guide, not decorate.", desc: "Purposeful animation that directs attention." },
        { title: "I bring photographic sensibility into digital craft.", desc: "Using light, depth, and composition." }
      ]
    : [
        { title: "رابط‌ها تجربه هستند، نه صرفا صفحه.", desc: "تمرکز بر سفر احساسی کاربر." },
        { title: "عملکرد بخشی از زیبایی‌شناسی است.", desc: "سرعت و روانی، کیفیت ساخت را تعریف می‌کنند." },
        { title: "حرکت باید هدایت کند، نه تزئین.", desc: "انیمیشن هدفمند که توجه را جلب می‌کند." },
        { title: "من حس عکاسی را به صنعت دیجیتال می‌آورم.", desc: "استفاده از نور، عمق و ترکیب‌بندی." }
      ];

  return (
    <section id="philosophy" className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">
            {isEn ? "Philosophy" : "فلسفه"}
          </span>
          <h2 className="max-w-2xl">{isEn ? "The principles that drive my work." : "اصولی که محرک کار من هستند."}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {philosophy.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-l border-accent/20 pl-8 py-2"
            >
              <h4 className="text-xl font-light mb-4 text-primary">{item.title}</h4>
              <p className="small-body text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
