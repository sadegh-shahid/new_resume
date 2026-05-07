import React, { memo } from "react";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Language } from '../data';
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export const Contact = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].contact;
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = lang === 'en' ? 'Name is required' : 'نام الزامی است';
    
    if (!formData.email.trim()) {
      newErrors.email = lang === 'en' ? 'Email is required' : 'ایمیل الزامی است';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'en' ? 'Invalid email format' : 'فرمت ایمیل نامعتبر است';
    }
    
    if (formData.phone.trim() && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = lang === 'en' ? 'Invalid phone number format' : 'فرمت شماره تماس نامعتبر است';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = lang === 'en' ? 'Message is required' : 'پیام الزامی است';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    
    // Simulating an API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const isEn = lang === 'en';

  return (
    <section id="contact" className="py-48 px-8 md:px-24 lg:px-32 relative overflow-hidden">
      {/* Cinematic lighting effect */}
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-[#8C9475]/5 blur-[150px] -z-10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-6xl md:text-8xl font-light tracking-tight mb-16 ${isEn ? 'font-serif italic' : ''}`}
            >
              {t.title}
            </motion.h2>

            <div className="space-y-24">
              <div>
                <p className="text-white/30 text-xl leading-relaxed mb-16 font-light italic max-w-sm">
                  {t.message}
                </p>

                <div className="space-y-12">
                   <a href={`mailto:${t.email}`} className="block group w-fit">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C9475]/40 group-hover:text-[#8C9475] transition-colors block mb-4">01 / {lang === 'en' ? 'Email' : 'ایمیل'}</span>
                      <span className="text-2xl md:text-3xl text-white/50 group-hover:text-white transition-all duration-500 font-light">{t.email}</span>
                      <div className="h-px w-0 group-hover:w-full bg-[#8C9475]/30 transition-all duration-700 mt-4" />
                   </a>
                   <a href={t.whatsappUrl} className="block group w-fit">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C9475]/40 group-hover:text-[#8C9475] transition-colors block mb-4">02 / {lang === 'en' ? 'WhatsApp' : 'واتساپ'}</span>
                      <span className="text-2xl md:text-3xl text-white/50 group-hover:text-white transition-all duration-500 font-light">{t.phone}</span>
                      <div className="h-px w-0 group-hover:w-full bg-[#8C9475]/30 transition-all duration-700 mt-4" />
                   </a>
                </div>
              </div>

              <div className="flex gap-12 pt-12 border-t border-white/5 w-fit">
                <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#8C9475] transition-colors uppercase text-[10px] tracking-[0.3em]">LinkedIn</a>
                <a href={t.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#8C9475] transition-colors uppercase text-[10px] tracking-[0.3em]">GitHub</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 pt-12 md:pt-32">
            <form onSubmit={handleSubmit} className="space-y-12">
               <div className="relative group">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-[#8C9475] transition-colors mb-4 block">01 / {isEn ? 'Name' : 'نام'}</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#8C9475] py-4 text-white outline-none transition-colors font-light"
                    placeholder={isEn ? "Your Name" : "نام شما"}
                  />
               </div>

               <div className="relative group">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-[#8C9475] transition-colors mb-4 block">02 / {isEn ? 'Email' : 'ایمیل'}</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#8C9475] py-4 text-white outline-none transition-colors font-light"
                    placeholder={isEn ? "Email Address" : "آدرس ایمیل"}
                  />
               </div>

               <div className="relative group">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-white/20 group-focus-within:text-[#8C9475] transition-colors mb-4 block">03 / {isEn ? 'Message' : 'پیام'}</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#8C9475] py-4 text-white outline-none transition-colors font-light resize-none"
                    placeholder={isEn ? "What's on your mind?" : "چه در ذهن دارید؟"}
                  />
               </div>

               <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group relative flex items-center gap-8 py-4 px-2 overflow-hidden"
               >
                  <span className="text-xs uppercase tracking-[0.3em] text-white/80 group-hover:text-white transition-colors">{isEn ? 'Send Message' : 'ارسال پیام'}</span>
                  <div className="w-12 h-[1px] bg-[#8C9475] transform scale-x-100 group-hover:scale-x-150 transition-transform origin-left" />

                  {status === 'success' && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs text-[#8C9475]"
                    >
                      {isEn ? 'Received' : 'دریافت شد'}
                    </motion.span>
                  )}
               </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
});
