import { useState, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, Language } from "../data";
import {
  Send,
  CheckCircle2,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Copy,
  ExternalLink,
} from "lucide-react";

export const Contact = memo(({ lang }: { lang: Language }) => {
  const t = portfolioData[lang].contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const isFa = lang === "fa";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    )
      return;
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

${formData.message}`);
    window.location.href = `mailto:${t.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(t.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="px-6 max-w-6xl mx-auto section-padding-lg relative"
    >
      {/* Watermark */}
      <div
        className={`watermark-num ${isFa ? "-right-4" : "-left-4"} top-8`}
        aria-hidden="true"
      >
        {isFa ? "۰۸" : "08"}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        {/* Left — Text & Links */}
        <div>
          <h2
            className={`text-section-title font-bold text-[#F4F1EA] mb-6 ${isFa ? "" : "tracking-tighter"}`}
          >
            {t.title}
          </h2>
          <p className="text-lg text-white/60 font-light mb-12 max-w-md leading-relaxed">
            {t.message}
          </p>

          <div className="flex flex-col gap-4">
            {/* WhatsApp — PRIMARY for Persian business culture */}
            <a
              href={t.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-[#2A9D8F]/30 bg-[#2A9D8F]/5 hover:bg-[#2A9D8F]/10 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-[#2A9D8F]/15 flex items-center justify-center text-[#2A9D8F]">
                <MessageCircle size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-[#2A9D8F] block mb-0.5 font-medium">
                  {isFa ? "واتساپ (سریع‌ترین)" : "WhatsApp (Fastest)"}
                </span>
                <span className="text-sm text-white/75 font-mono" dir="ltr">
                  {t.phone}
                </span>
              </div>
              <ExternalLink
                size={14}
                className="text-white/25 group-hover:text-[#2A9D8F] shrink-0 transition-colors"
              />
            </a>

            {/* Email — Copy-to-clipboard + mailto */}
            <button
              onClick={copyEmail}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.06] hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-all text-left w-full"
            >
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C]">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-white/45 block mb-0.5">
                  {isFa ? "ایمیل" : "Email"}
                </span>
                <span className="text-sm text-white/75 font-mono" dir="ltr">
                  {t.email}
                </span>
              </div>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#C9A84C] shrink-0"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Copy
                      size={14}
                      className="text-white/25 group-hover:text-white/50 shrink-0 transition-colors"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <div className="flex gap-3 mt-4">
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={t.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-[#C9A84C] hover:border-[#C9A84C]/30 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right — Form (functional mailto) */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder={isFa ? "نام" : "Name"}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#C9A84C]/40 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-colors text-sm"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder={isFa ? "ایمیل" : "Email"}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#C9A84C]/40 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-colors text-sm ${!isFa ? "" : "text-right"}`}
              dir="ltr"
              required
            />
          </div>

          <div>
            <textarea
              placeholder={isFa ? "پیام" : "Message"}
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-[#C9A84C]/40 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-colors resize-none text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full md:w-auto self-start justify-center m-auto"
          >
            <span className="flex items-center gap-2">
              {isFa ? "باز کردن ایمیل کلاینت" : "Open Email Client"}
              <Send size={16} />
            </span>
          </button>

          <p className="text-xs text-white/35 mt-1 mx-auto">
            {isFa
              ? "فرم کلاینت ایمیل شما را باز می‌کند. داده‌ای روی سرور ذخیره نمی‌شود."
              : "This opens your default email client. No data is stored on this server."}
          </p>
        </form>
      </motion.div>
    </section>
  );
});
