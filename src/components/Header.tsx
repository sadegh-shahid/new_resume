import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { portfolioData, Language } from "../data";
import { Logo } from "./Logo";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header = memo(({ lang, setLang }: HeaderProps) => {
  const t = portfolioData[lang].nav;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const headerBg = useTransform(scrollY, [0, 50], ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.92)"]);
  const headerBorder = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.06)"]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const isFa = lang === "fa";

  const navItems = [
    { label: t.work, href: "#projects" },
    { label: isFa ? "روش کار" : "Method", href: "#process" },
    { label: isFa ? "آرشیو بصری" : "Archive", href: "#visual-works" },
    { label: t.about, href: "#about" },
    { label: isFa ? "مسیر" : "Path", href: "#experience" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 h-[64px] border-b transition-colors ${
        isMobile ? "bg-[#0a0a0a]/95" : "backdrop-blur-xl"
      }`}
      role="banner"
    >
      <Logo />

      <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/55">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href.replace("#", ""))}
            className="hover:text-white transition-colors relative group py-2"
          >
            {item.label}
            <span className="absolute bottom-0 start-0 w-0 h-[1.5px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <motion.button
          onClick={() => setLang(lang === "en" ? "fa" : "en")}
          whileTap={{ scale: 0.95 }}
          className="text-[11px] font-medium text-white/45 border border-white/[0.12] rounded-full px-3 py-1 hover:bg-white/[0.06] hover:text-white/70 transition-colors"
        >
          {lang === "en" ? "FA" : "EN"}
        </motion.button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 min-w-[44px] min-h-[44px] text-white/60 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-[1px] bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[64px] left-0 right-0 bg-[#0A0A0A]/98 border-b border-white/[0.08] p-6 flex flex-col gap-1 md:hidden z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href.replace("#", ""))}
                className="text-lg text-white/80 hover:text-white py-3 border-b border-white/[0.04] last:border-0"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});
