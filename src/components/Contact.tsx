import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import { WordReveal } from "./WordReveal";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Contact = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim())
      newErrors.name = lang === "en" ? "Name is required" : "نام الزامی است";

    if (!formData.email.trim()) {
      newErrors.email =
        lang === "en" ? "Email is required" : "ایمیل الزامی است";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        lang === "en" ? "Invalid email format" : "فرمت ایمیل نامعتبر است";
    }

    if (formData.phone.trim() && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone =
        lang === "en"
          ? "Invalid phone number format"
          : "فرمت شماره تماس نامعتبر است";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        lang === "en" ? "Message is required" : "پیام الزامی است";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulating an API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Fallback: Open mailto with form data
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${t.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  const isEn = lang === "en";

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto relative">
      <motion.div
        animate={{
          scale: 1,
          opacity: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center glass-surface rounded-3xl p-8 lg:p-16"
      >
        <div className="w-full mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[12px] uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {isEn
              ? "Currently: Deep in a brand system for a solar energy client. Open for Q3 2026."
              : "در حال حاضر: غرق در طراحی سیستم برند برای یک مشتری انرژی خورشیدی. آماده برای همکاری‌های جدید."}
          </motion.div>
          <WordReveal
            text={t.title}
            className={`text-4xl md:text-5xl font-light mb-4 ${isEn ? 'tracking-tighter' : 'tracking-normal'}`}
          />
          <p className="text-white/70 text-lg max-w-xl mx-auto">{t.message}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col h-full justify-between gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${t.email}`}
                aria-label="Send an email"
                className="flex items-center justify-between  gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500 hover:bg-amber-500/5 transition-all duration-300 focus:outline-none w-full"
              >
                <div className="p-3 bg-black/30 rounded-full text-amber-500">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div className="flex flex-col items-start rtl:items-end">
                  <span className="text-sm text-white/60">
                    {isEn ? "Email" : "ایمیل"}
                  </span>
                  <span
                    className="text-sm tracking-widest text-white/90 font-light"
                    dir="ltr"
                  >
                    {t.email}
                  </span>
                </div>
              </a>

              <a
                href={t.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 justify-between  hover:border-amber-500 hover:bg-amber-500/5 transition-all duration-300 focus:outline-none w-full"
              >
                <div className="p-3 bg-black/30 rounded-full  text-amber-500">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div className="flex flex-col items-start rtl:items-end">
                  <span className="text-sm text-white/60">
                    {isEn ? "WhatsApp" : "واتساپ"}
                  </span>
                  <span
                    className="text-sm tracking-widest text-white/90 font-light"
                    dir="ltr"
                  >
                    {t.phone}
                  </span>
                </div>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-4 bg-white/5 border border-white/10 text-white/60 hover:text-amber-500 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 focus:outline-none rounded-2xl"
              >
                <Linkedin size={22} aria-hidden="true" />
              </a>
              <a
                href={t.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-4 bg-white/5 border border-white/10 text-white/60 hover:text-amber-500 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 focus:outline-none rounded-2xl"
              >
                <Github size={22} aria-hidden="true" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full order-1 lg:order-2"
          >
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  className="bg-amber-500/10 border border-amber-500/30 text-amber-500 p-4 rounded-xl flex items-center gap-3 mb-2"
                >
                  <CheckCircle2 size={24} />
                  <span className="font-semibold">
                    {isEn
                      ? "Thank you! Your message has been sent successfully."
                      : "با تشکر! پیام شما با موفقیت ارسال شد."}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-1 text-left rtl:text-right">
              <label htmlFor="name" className="sr-only">
                {isEn ? "Your Name" : "نام شما"}
              </label>
              <input
                id="name"
                type="text"
                placeholder={isEn ? "Your Name" : "نام شما"}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`w-full bg-black/30 border ${errors.name ? "border-red-500 focus:ring-red-500/50" : "border-white/[0.15] focus:border-amber-500/50 focus:ring-amber-500/50"} rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all`}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-xs px-2"
                  >
                    {errors.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-1 text-left rtl:text-right">
              <label htmlFor="email" className="sr-only">
                {isEn ? "Email Address" : "آدرس ایمیل"}
              </label>
              <input
                id="email"
                type="email"
                placeholder={isEn ? "Email Address" : "آدرس ایمیل"}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full bg-black/30 border ${errors.email ? "border-red-500 focus:ring-red-500/50" : "border-white/[0.15] focus:border-amber-500/50 focus:ring-amber-500/50"} rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all ${!isEn && "text-right"}`}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-xs px-2"
                  >
                    {errors.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-1 text-left rtl:text-right">
              <label htmlFor="phone" className="sr-only">
                {isEn ? "Phone Number (Optional)" : "شماره تماس (اختیاری)"}
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={
                  isEn ? "Phone Number (Optional)" : "شماره تماس (اختیاری)"
                }
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                className={`w-full bg-black/30 border ${errors.phone ? "border-red-500 focus:ring-red-500/50" : "border-white/[0.15] focus:border-amber-500/50 focus:ring-amber-500/50"} rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all ${!isEn && "text-right"}`}
              />
              <AnimatePresence>
                {errors.phone && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-xs px-2"
                  >
                    {errors.phone}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-1 text-left rtl:text-right mb-2">
              <label htmlFor="message" className="sr-only">
                {isEn ? "Your Message" : "پیام شما"}
              </label>
              <textarea
                id="message"
                placeholder={isEn ? "Your Message" : "پیام شما"}
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                className={`w-full bg-black/30 border ${errors.message ? "border-red-500 focus:ring-red-500/50" : "border-white/[0.15] focus:border-amber-500/50 focus:ring-amber-500/50"} rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 transition-all resize-none`}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-500 text-xs px-2"
                  >
                    {errors.message}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="group relative flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#D6C7A8] text-[#0A0A0A] font-medium hover:bg-[#E5D5B8] hover:accent-glow transition-all disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden mt-2"
            >
              <AnimatePresence mode="wait">
                {status === "submitting" ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    <span>{isEn ? "Sending..." : "در حال ارسال..."}</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <span>
                      {status === "success"
                        ? isEn
                          ? "Sent"
                          : "ارسال شد"
                        : isEn
                          ? "Send Message"
                          : "ارسال پیام"}
                    </span>
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1 transition-transform"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
});
