export type Language = "en" | "fa";

export interface ProjectItem {
  id: number;
  name: string;
  year: string;
  link?: string;
  role: string;
  stack: string[];
  description: string;
  images: string[];
}

export interface VisualItem {
  id: number;
  title: string;
  images: string[];
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export const portfolioData = {
  en: {
    nav: {
      work: "Work",
      about: "Studio",
      contact: "Contact",
    },
    hero: {
      role: "Brand Identity · Full-Stack Development · AI Systems",
      title: "Brand systems that scale.",
      description:
        "From strategy to production — one designer, zero handoff loss. I build brand identities and the code that brings them to life.",
      ctaPrimary: "View Selected Work",
      ctaSecondary: "Start a Project",
    },
    about: {
      title: "Studio",
      paragraph:
        "I design brand systems that work across every touchpoint — from a business card to a React application. Ten years shaping visual identities. Four years shipping production code. The gap between design and development is where most projects die. I live in that gap.",
      capabilities: [
        "Brand Strategy",
        "Visual Identity",
        "Product Design",
        "React / Next.js",
        "AI Creative Pipelines",
        "Design Systems",
      ],
      location: "Based in Iran · Available worldwide",
    },
    process: {
      title: "Method",
      subtitle: "How I work — from first conversation to final delivery.",
      steps: [
        {
          num: "01",
          title: "Discovery",
          desc: "Competitive audit, stakeholder interviews, and brand positioning. Understanding the business before touching a pixel.",
        },
        {
          num: "02",
          title: "Strategy",
          desc: "Defining the brand personality, voice, and visual direction. A north star document that keeps every decision aligned.",
        },
        {
          num: "03",
          title: "Design",
          desc: "Logo, typography, color system, and guidelines. Every element stress-tested across digital and print applications.",
        },
        {
          num: "04",
          title: "Build",
          desc: "React/Next.js frontend, component library, and CMS integration. The design system becomes living code.",
        },
        {
          num: "05",
          title: "Deliver",
          desc: "Asset handoff, documentation, and training. The client owns the system, not just the files.",
        },
      ],
    },
    services: {
      title: "Services",
      items: [
        {
          title: "Brand Identity Systems",
          desc: "Complete visual identity from logo to guidelines. Built to scale across digital, print, and environmental touchpoints.",
        },
        {
          title: "Full-Stack Product Build",
          desc: "React/Next.js frontends with Node.js backends. From prototype to production with obsessive attention to detail.",
        },
        {
          title: "AI Creative Automation",
          desc: "Local GPU pipelines that transform static content into cinematic motion. LLM integrations and generative workflows.",
        },
      ],
    },
    experience: {
      title: "Path",
      summary:
        "10+ years shaping visual identities. 4+ years shipping production web products. The combination is rare — and valuable.",
      items: [
        {
          id: 1,
          role: "Senior Designer & Web Developer",
          company: "AFS (Tehran)",
          date: "2024 — Present",
          description:
            "End-to-end brand identity, UI/UX, and full-stack web implementation for Iran's leading solar energy supplier.",
        },
        {
          id: 2,
          role: "AI Systems Architect",
          company: "AFS (Tehran)",
          date: "2024",
          description:
            "Built local GPU automation pipeline that transforms book chapters into cinematic AI-generated images and motion videos.",
        },
        {
          id: 3,
          role: "Full-Stack Developer & Product Designer",
          company: "Sangin (Independent)",
          date: "2023 — 2024",
          description:
            "Designed and built complete ERP-grade CRM system for iron manufacturing from zero to production.",
        },
        {
          id: 4,
          role: "Senior Designer & Web Developer",
          company: "Makhtoot (Qom)",
          date: "2024",
          description:
            "Zero-to-launch brand system and responsive web platform in 8 weeks.",
        },
        {
          id: 5,
          role: "Frontend Developer & UI/UX Designer",
          company: "Rafed (Qom)",
          date: "2022 — 2024",
          description:
            "Component library and internal system redesign across 5+ platforms.",
        },
      ],
    },
    projects: {
      title: "Selected Work",
      items: [
        {
          id: 1,
          name: "AFSSOLAR",
          year: "2024",
          link: "https://afssolar.ir",
          role: "Full-Stack · Brand · CMS Architecture",
          stack: ["React 19", "Next.js", "Express", "Drizzle", "MariaDB"],
          description:
            "AFS had a 2004-era website losing them B2B contracts. I rebuilt their brand identity and custom headless CMS in 6 weeks. Lighthouse scores near 95. Their sales team now uses the site as a credibility tool.",
          images: [
            "/images/AFS_1.webp",
            "/images/AFS_2.webp",
            "/images/AFS_3.webp",
          ],
        },
        {
          id: 2,
          name: "Rafed Systems",
          year: "2022 — 2024",
          role: "Frontend · UI/UX · Design Systems",
          stack: ["React", "Component Library", "Data Visualization"],
          description:
            "Unified internal tools and component architecture across 5 platforms. Reduced task completion time by 30%. The team now enjoys using tools that feel premium.",
          images: ["/images/Rafed_1.webp", "/images/Rafed_2.webp"],
        },
        {
          id: 3,
          name: "Makhtoot",
          year: "2024",
          role: "Brand · UI/UX · Web",
          stack: ["Brand Identity", "Figma", "React"],
          description:
            "Complete brand-to-website pipeline launched in 8 weeks. From initial concept to market-ready identity — faster than the client expected, better than they imagined.",
          images: ["/images/Makhtoot_1.webp", "/images/Makhtoot_2.webp"],
        },
        {
          id: 4,
          name: "AI Book Visualizer",
          year: "2024",
          role: "AI Systems · Automation · Local GPU Pipeline",
          stack: ["Python", "Stable Diffusion", "ComfyUI", "LLM", "Local GPU"],
          description:
            "End-to-end AI automation that reads book chapters, generates cinematic prompts via LLM, creates images through Stable Diffusion, and renders motion videos — all running locally on GPU without cloud dependencies.",
          images: ["/images/AIBook_1.webp", "/images/AIBook_2.webp"],
        },
        {
          id: 5,
          name: "Sangin CRM",
          year: "2023 — 2024",
          link: "#",
          role: "Full-Stack · ERP Architecture · Product Design",
          stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
          description:
            "Complete ERP-grade CRM for an iron manufacturing company. Inventory management, supply chain tracking, customer relations, financial reporting, and real-time analytics — designed from zero to production.",
          images: [
            "/images/Sangin_1.webp",
            "/images/Sangin_2.webp",
            "/images/Sangin_3.webp",
          ],
        },
      ],
    },
    visual: {
      title: "Brand Archive",
      subtitle:
        "Identity systems, photography, and art direction — the work between the projects.",
      items: [
        {
          id: 1,
          title: "Brand Identity",
          images: [
            "/images/Visual_Brand_1.webp",
            "/images/Visual_Brand_2.webp",
          ],
        },
        {
          id: 2,
          title: "Cinematic Photography",
          images: [
            "/images/Visual_Photo_1.webp",
            "/images/Visual_Photo_2.webp",
          ],
        },
        {
          id: 3,
          title: "Art Direction",
          images: ["/images/Visual_Art_1.webp", "/images/Visual_Art_2.webp"],
        },
        {
          id: 4,
          title: "Interface Design",
          images: ["/images/Visual_UI_1.webp", "/images/Visual_UI_2.webp"],
        },
      ],
    },
    testimonials: {
      title: "Voices",
      items: [
        {
          id: 1,
          name: "Head of Digital, AFS",
          text: "Sadegh shipped AFSSOLAR's custom CMS in 6 weeks with Lighthouse scores near 95. Our previous agency quoted 4 months. He elevated our entire digital presence.",
        },
        {
          id: 2,
          name: "Product Lead, Rafed",
          text: "The component library didn't just reduce task time by 30%. It made our internal tools feel premium. The team actually enjoys using them now.",
        },
        {
          id: 3,
          name: "Founder, Makhtoot",
          text: "From zero to market-ready brand and website in 8 weeks. Sadegh understood our audience faster than we did, and the result speaks for itself.",
        },
        {
          id: 4,
          name: "Operations Director, Sangin",
          text: "The CRM exposed supply chain bottlenecks we didn't know we had. It's not just software — it's a lens into our own business.",
        },
      ],
    },
    contact: {
      title: "Let's build something",
      message: "Tell me what you're making. I'll reply within 24 hours.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline: "Restraint is more powerful than noise.",
      copyright: "© {year} Sadegh Shahid",
    },
  },
  fa: {
    nav: {
      work: "آثار",
      about: "استودیو",
      contact: "تماس",
    },
    hero: {
      role: "هویت برند · توسعه فول‌استک · سیستم‌های AI",
      title: "سیستم هویت بصری مقیاس‌پذیر",
      description:
        "از استراتژی تا پروداکشن — یک طراح، بدون از دست دادن جزئیات. من هویت بصری می‌سازم و کدی که آن را زنده نگه می‌دارد.",
      ctaPrimary: "مشاهده آثار منتخب",
      ctaSecondary: "شروع پروژه",
    },
    about: {
      title: "استودیو",
      paragraph:
        "من سیستم‌های هویت بصری طراحی می‌کنم که در هر نقطه تماس کار می‌کنند — از کارت ویزیت تا اپلیکیشن React. ده سال شکل‌دهی هویت بصری. چهار سال توسعه کد پروداکشن. شکاف بین طراحی و توسعه جایی است که بیشتر پروژه‌ها می‌میرند. من در همان شکاف زندگی می‌کنم.",
      capabilities: [
        "استراتژی برند",
        "هویت بصری",
        "طراحی محصول",
        "React / Next.js",
        "پایپ‌لاین‌های خلاقانه AI",
        "سیستم‌های طراحی",
      ],
      location: "قم، ایران · آماده برای پروژه‌های دورکاری",
    },
    process: {
      title: "روش کار",
      subtitle: "از اولین گفتگو تا تحویل نهایی — مراحل کار من.",
      steps: [
        {
          num: "۰۱",
          title: "کشف",
          desc: "ممیزی رقبا، مصاحبه با ذی‌نفعان، و جایگاه‌یابی برند. درک کسب‌وکار قبل از لمس یک پیکسل.",
        },
        {
          num: "۰۲",
          title: "استراتژی",
          desc: "تعریف شخصیت برند، صدا، و جهت بصری. یک سند راهنما که هر تصمیم را همسو نگه می‌دارد.",
        },
        {
          num: "۰۳",
          title: "طراحی",
          desc: "لوگو، تایپوگرافی، سیستم رنگ، و راهنما. هر عنصر در برابر کاربردهای دیجیتال و چاپی آزمایش می‌شود.",
        },
        {
          num: "۰۴",
          title: "ساخت",
          desc: "فرانت‌اند React/Next.js، کتابخانه کامپوننت، و یکپارچه‌سازی CMS. سیستم طراحی به کد زنده تبدیل می‌شود.",
        },
        {
          num: "۰۵",
          title: "تحویل",
          desc: "تحویل دارایی‌ها، مستندسازی، و آموزش. مشتری صاحب سیستم است، نه فقط فایل‌ها.",
        },
      ],
    },
    services: {
      title: "خدمات",
      items: [
        {
          title: "سیستم‌های هویت بصری",
          desc: "هویت بصری کامل از لوگو تا راهنما. ساخته شده برای مقیاس در نقاط تماس دیجیتال، چاپی، و محیطی.",
        },
        {
          title: "توسعه فول‌استک محصول",
          desc: "فرانت‌اند React/Next.js با بک‌اند Node.js. از نمونه اولیه تا پروداکشن با دقت وسواسی.",
        },
        {
          title: "اتوماسیون خلاقانه AI",
          desc: "پایپ‌لاین GPU محلی که محتوای استاتیک را به سینما تبدیل می‌کند. یکپارچه‌سازی LLM و گردش کارهای جنریتیو.",
        },
      ],
    },
    experience: {
      title: "مسیر",
      summary:
        "۱۰+ سال شکل‌دهی هویت بصری. ۴+ سال توسعه محصول وب. این ترکیب نادر است — و ارزشمند.",
      items: [
        {
          id: 1,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "AFS (تهران)",
          date: "۱۴۰۳ — اکنون",
          description:
            "هویت برند، UI/UX و پیاده‌سازی فول‌استک وب برای بزرگ‌ترین تأمین‌کننده انرژی خورشیدی ایران.",
        },
        {
          id: 2,
          role: "معمار سیستم‌های AI",
          company: "AFS (تهران)",
          date: "۱۴۰۳",
          description:
            "ساخت پایپ‌لاین اتوماسیون GPU محلی که فصل‌های کتاب را به تصاویر و ویدیوهای سینمایی AI تبدیل می‌کند.",
        },
        {
          id: 3,
          role: "توسعه‌دهنده فول‌استک و طراح محصول",
          company: "سنگین (مستقل)",
          date: "۱۴۰۲ — ۱۴۰۳",
          description:
            "طراحی و پیاده‌سازی سیستم CRM در سطح ERP برای تولیدی آهن. از صفر تا پروداکشن.",
        },
        {
          id: 4,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "مخطوط (قم)",
          date: "۱۴۰۳",
          description:
            "سیستم برند و پلتفرم وب، از صفر تا راه‌اندازی در ۸ هفته.",
        },
        {
          id: 5,
          role: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
          company: "رافد (قم)",
          date: "۱۴۰۰ — ۱۴۰۲",
          description:
            "کتابخانه کامپوننت و بازطراحی سیستم‌های درون‌سازمانی در ۵+ پلتفرم.",
        },
      ],
    },
    projects: {
      title: "آثار منتخب",
      items: [
        {
          id: 1,
          name: "AFSSOLAR",
          year: "۱۴۰۳",
          link: "https://afssolar.ir",
          role: "فول‌استک · برند · معماری CMS",
          stack: ["React 19", "Next.js", "Express", "Drizzle", "MariaDB"],
          description:
            "AFS یک وب‌سایت متعلق به ۲۰۰۴ داشت که قراردادهای B2B را از دست می‌داد. من هویت برند و CMS Headless اختصاصی را در ۶ هفته بازسازی کردم. امتیاز Lighthouse نزدیک به ۹۵. تیم فروش اکنون از سایت به عنوان ابزار اعتبارسنجی استفاده می‌کند.",
          images: [
            "/images/AFS_1.webp",
            "/images/AFS_2.webp",
            "/images/AFS_3.webp",
          ],
        },
        {
          id: 2,
          name: "سیستم‌های رافد",
          year: "۱۴۰۰ — ۱۴۰۲",
          role: "فرانت‌اند · UI/UX · سیستم طراحی",
          stack: ["React", "کامپوننت", "بصری‌سازی داده"],
          description:
            "یکپارچه‌سازی ابزارهای درون‌سازمانی و معماری کامپوننت در ۵ پلتفرم. کاهش ۳۰٪ زمان انجام وظایف. تیم حالا از ابزارهایی لذت می‌برد که لوکس به نظر می‌رسند.",
          images: ["/images/Rafed_1.webp", "/images/Rafed_2.webp"],
        },
        {
          id: 3,
          name: "مخطوط",
          year: "۱۴۰۳",
          role: "برند · UI/UX · وب",
          stack: ["هویت برند", "Figma", "React"],
          description:
            "خط کامل برند تا وب‌سایت در ۸ هفته. از ایده تا هویت آماده بازار — سریع‌تر از انتظار مشتری، بهتر از تصور او.",
          images: ["/images/Makhtoot_1.webp", "/images/Makhtoot_2.webp"],
        },
        {
          id: 4,
          name: "ویژوالایزر کتاب AI",
          year: "۱۴۰۳",
          role: "سیستم‌های AI · اتوماسیون · پایپ‌لاین GPU محلی",
          stack: ["Python", "Stable Diffusion", "ComfyUI", "LLM", "GPU محلی"],
          description:
            "پایپ‌لاین اتوماسیون end-to-end که فصل‌های کتاب را می‌خواند، پرامپت‌های سینمایی تولید می‌کند، تصویر می‌سازد و ویدیو رندر می‌دهد — همه روی GPU محلی بدون وابستگی به ابر.",
          images: ["/images/AIBook_1.webp", "/images/AIBook_2.webp"],
        },
        {
          id: 5,
          name: "سنگین CRM",
          year: "۱۴۰۲ — ۱۴۰۳",
          link: "#",
          role: "فول‌استک · معماری ERP · طراحی محصول",
          stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
          description:
            "سیستم CRM در سطح ERP برای یک شرکت تولیدی آهن. مدیریت موجودی، ردیابی زنجیره تأمین، روابط مشتری، گزارش‌دهی مالی و داشبورد تحلیل بلادرنگ — از صفر تا پروداکشن.",
          images: [
            "/images/Sangin_1.webp",
            "/images/Sangin_2.webp",
            "/images/Sangin_3.webp",
          ],
        },
      ],
    },
    visual: {
      title: "آرشیو هویت بصری",
      subtitle:
        "سیستم‌های هویت، عکاسی، و جهت‌گیری هنری — کارهایی که بین پروژه‌ها انجام می‌شود.",
      items: [
        {
          id: 1,
          title: "هویت برند",
          images: [
            "/images/Visual_Brand_1.webp",
            "/images/Visual_Brand_2.webp",
          ],
        },
        {
          id: 2,
          title: "عکاسی سینمایی",
          images: [
            "/images/Visual_Photo_1.webp",
            "/images/Visual_Photo_2.webp",
          ],
        },
        {
          id: 3,
          title: "جهت‌گیری هنری",
          images: ["/images/Visual_Art_1.webp", "/images/Visual_Art_2.webp"],
        },
        {
          id: 4,
          title: "طراحی رابط",
          images: ["/images/Visual_UI_1.webp", "/images/Visual_UI_2.webp"],
        },
      ],
    },
    testimonials: {
      title: "بازخورد مشتریان",
      items: [
        {
          id: 1,
          name: "مدیر دیجیتال، AFS",
          text: "صادق CMS اختصاصی AFSSOLAR را در ۶ هفته با امتیاز Lighthouse نزدیک به ۹۵ تحویل داد. آژانس قبلی ۴ ماه تخمین زده بود. او تمام حضور دیجیتال ما را ارتقا داد.",
        },
        {
          id: 2,
          name: "سرپرست محصول، رافد",
          text: "کتابخانه کامپوننت نه تنها زمان وظایف را ۳۰٪ کاهش داد، بلکه ابزارهای درون‌سازمانی‌مان را لوکس کرد. تیم حالا واقعاً از کار با آن لذت می‌برد.",
        },
        {
          id: 3,
          name: "مؤسس، مخطوط",
          text: "از صفر تا برند و وب‌سایت آماده بازار در ۸ هفته. صادق مخاطب ما را سریع‌تر از خودمان درک کرد و نتیجه خودش حرف می‌زند.",
        },
        {
          id: 4,
          name: "مدیر عملیات، سنگین",
          text: "سیستم CRM گلوگاه‌های زنجیره تأمین را نشان داد که ما از وجودشان خبر نداشتیم. این فقط نرم‌افزار نیست — یک ذره‌بین به کسب‌وکار خودمان است.",
        },
      ],
    },
    contact: {
      title: "بیایید بسازیم",
      message: "بگویید چه می‌سازید. ظرف ۲۴ ساعت پاسخ می‌دهم.",
      email: "m110s11061@gmail.com",
      phone: "+۹۸ ۹۳۶ ۹۹۱ ۳۲۲۸",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline: "خویشتن‌داری قدرتمندتر از هیاهو است.",
      copyright: "© {year} صادق شهید",
    },
  },
};
