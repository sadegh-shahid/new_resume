import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { Language, portfolioData } from '../data';

export const Contact = React.memo(({ lang }: { lang: Language }) => {
  const { contact } = portfolioData[lang];
  const isEn = lang === 'en';

  return (
    <section id="contact" className="py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-medium mb-6 block">
            {contact.title}
          </span>
          <h2 className="text-5xl lg:text-8xl mb-12 leading-tight">
            {isEn ? "Let's build something cinematic." : "بیایید چیزی سینمایی خلق کنیم."}
          </h2>

          <p className="large-body text-muted mb-16 max-w-2xl">
            {contact.message}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <a href={`mailto:${contact.email}`} className="flex flex-col group">
                <span className="text-[10px] text-muted uppercase tracking-widest mb-1">Email</span>
                <span className="text-2xl font-light group-hover:text-accent transition-colors">{contact.email}</span>
              </a>
              <a href={`tel:${contact.phone}`} className="flex flex-col group" dir="ltr">
                <span className="text-[10px] text-muted uppercase tracking-widest mb-1">Phone</span>
                <span className="text-2xl font-light group-hover:text-accent transition-colors text-left">{contact.phone}</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-10 items-end">
              <a href={contact.linkedinUrl} target="_blank" className="text-muted hover:text-primary transition-colors flex items-center gap-2 uppercase text-[10px] tracking-widest">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={contact.githubUrl} target="_blank" className="text-muted hover:text-primary transition-colors flex items-center gap-2 uppercase text-[10px] tracking-widest">
                <Github size={16} /> GitHub
              </a>
              <a href={contact.whatsappUrl} target="_blank" className="text-muted hover:text-primary transition-colors flex items-center gap-2 uppercase text-[10px] tracking-widest">
                <Phone size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
