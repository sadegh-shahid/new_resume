export type Language = 'en' | 'fa';

export interface ProjectItem {
  id: number;
  name: string;
  year: string;
  link?: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  impact: string;
  details: string;
  readMore: string;
  readLess: string;
  images: string[];
  statement: string; // Added for editorial feel
}

export const portfolioData = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Expertise",
      contact: "Contact"
    },
    hero: {
      role: "Creative Frontend Engineer",
      title: "Building immersive digital experiences through engineering and cinematic design.",
      description: "I create immersive interfaces that blend frontend engineering, motion design, and visual storytelling into emotionally intentional digital experiences.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Inquiry"
    },
    about: {
      title: "Philosophy",
      summary: "I see interfaces as experiences, not pages. My work sits at the intersection of technical precision and cinematic storytelling, focusing on rhythm, detail, and emotional clarity. Performance is not just a metric; it is part of the aesthetic experience.",
      philosophy: [
        { title: "Clarity over decoration", detail: "Every element must serve a purpose. If it doesn't add to the story, it's noise." },
        { title: "Motion with purpose", detail: "Animation should guide attention and provide context, not just decorate the page." },
        { title: "Emotion through restraint", detail: "Luxury is felt in what is left out. We use negative space to let the content breathe." }
      ],
      coreFocus: [
        "Frontend Architecture",
        "Motion Systems",
        "UI/UX Design",
        "Cinematic Photography",
        "AI Integration",
        "Performance Optimization"
      ]
    },
    experience: {
      title: "Archive",
      summary: "A history of building for the web and the eye.",
      items: [
        {
          id: 1,
          role: "Senior Designer & Web Developer",
          company: "AFS (Tehran)",
          date: "2024 — Present",
          description: "Directing the digital identity and architectural implementation of high-performance energy solutions."
        },
        {
          id: 2,
          role: "Senior Designer & Web Developer",
          company: "Makhtoot (Qom)",
          date: "2024",
          description: "Crafting brand-led digital presences from concept to full execution."
        },
        {
          id: 3,
          role: "Frontend Developer & UI/UX Designer",
          company: "Rafed (Qom)",
          date: "2022 — 2024",
          description: "Engineering structured interfaces and reusable systems for complex internal platforms."
        }
      ]
    },
    projects: {
      title: "Selected Works",
      items: [
        {
          id: 1,
          name: "AFSSOLAR",
          year: "2024",
          link: "https://afssolar.ir",
          role: "Full-Stack Engineer & Architect",
          stack: ["React 19", "Express", "Drizzle ORM", "MariaDB"],
          statement: "Built a cinematic interaction system focused on emotional pacing and visual immersion.",
          problem: "The client needed a highly secure, performant, and custom-tailored content management system.",
          solution: "Architected a custom headless CMS from the ground up with a block-based editor.",
          result: "Achieved near-perfect Lighthouse scores and an enterprise-grade security posture.",
          impact: "Created a cohesive brand foundation and engineered a hardened, enterprise-grade CMS.",
          details: "This overarching project required a full brand identity creation from scratch and translating it into a performant web presence. Concurrently, I designed and built a custom headless CMS featuring a block-based architecture, nested pages, and a Tiptap rich-text editor.",
          readMore: "View Case Study",
          readLess: "Close",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp"
          ]
        },
        {
          id: 2,
          name: "Rafed Systems",
          year: "2022-2024",
          role: "Frontend Developer",
          stack: ["React", "UI/UX", "Internal Systems"],
          statement: "Standardizing complex data visualization through refined component architecture.",
          problem: "Fragmented internal tools with inconsistent UX led to decreased productivity.",
          solution: "Developed a standardized component library and redesigned core internal systems.",
          result: "Reduced task completion time by 30% and unified the visual language.",
          impact: "Helped standardize the internal user experience and create clearer, more usable interfaces.",
          details: "Designed and developed numerous front-end interfaces for internal organizational tools. The focus was heavily on component reusability and maintaining a clean UI/UX standard.",
          readMore: "View Case Study",
          readLess: "Close",
          images: [
            "/images/photo-1551288049-bebda4e38f71.webp",
            "/images/photo-1547658719-da2b51169166.webp"
          ]
        }
      ]
    },
    skills: {
      title: "Expertise",
      categories: [
        { name: "Engineering", items: "React, Next.js, TypeScript, Node.js, Drizzle, MariaDB", level: 90 },
        { name: "Design", items: "UI/UX Design, Motion Systems, Brand Identity, Figma", level: 95 },
        { name: "Creative", items: "Cinematic Photography, Art Direction, Visual Storytelling", level: 95 },
        { name: "Innovation", items: "AI-Assisted Workflow, Performance Optimization", level: 88 }
      ]
    },
    visual: {
      title: "Visual Works",
      items: [
        {
          id: 1,
          title: "Brand Identity",
          tools: "Illustrator, Photoshop, Midjourney",
          concept: "Creating a cohesive visual language from logos to marketing assets.",
          impact: "Established strong, recognizable brand presences.",
          images: ["/images/photo-1626785774573-4b799315345d.webp"],
          detailsBtn: "View Details",
          closeBtn: "Close"
        },
        {
          id: 2,
          title: "Cinematic Photography",
          tools: "Lightroom, Professional Camera Gear",
          concept: "Capturing atmospheric and narrative-driven imagery.",
          impact: "Enhanced visual storytelling for campaigns.",
          images: ["/images/photo-1492691527719-9d1e07e534b4.webp"],
          detailsBtn: "View Details",
          closeBtn: "Close"
        }
      ]
    },
    testimonials: {
      title: "Voice",
      stats: [
        { label: "Engineering", value: "4+ Yrs" },
        { label: "Visual Arts", value: "10+ Yrs" }
      ],
      items: [
        {
          id: 1,
          name: "Manager",
          company: "AFS",
          role: "Client",
          text: "Sadegh combines deep technical frontend knowledge with an eagle eye for design. He elevated our entire digital presence.",
          result: "30% increase in user engagement."
        }
      ]
    },
    contact: {
      title: "Inquiry",
      message: "Available for select projects and engineering roles that value visual maturity and technical precision.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedin: "linkedin.com/in/mohammad-sadegh-shahid",
      github: "github.com/mohammadsadeghshahid",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228"
    }
  },
  fa: {
    nav: {
      about: "فلسفه",
      experience: "آرشیو",
      projects: "پروژه‌ها",
      skills: "تخصص",
      contact: "تماس"
    },
    hero: {
      role: "مهندس فرانت‌اند خلاق",
      title: "خلق تجربه‌های دیجیتال غوطه‌ورکننده از طریق مهندسی و طراحی سینمایی.",
      description: "من رابط‌هایی می‌سازم که مهندسی فرانت‌اند، طراحی حرکت و روایت بصری را در تجربه‌های دیجیتالی با بار احساسی و آگاهانه ترکیب می‌کنند.",
      ctaPrimary: "مشاهده پروژه‌ها",
      ctaSecondary: "استعلام"
    },
    about: {
      title: "فلسفه",
      summary: "من رابط‌ها را به عنوان تجربه می‌بینم، نه صرفاً صفحه. کار من در نقطه تلاقی دقت فنی و روایت سینمایی قرار دارد، با تمرکز بر ریتم، جزئیات و وضوح احساسی. عملکرد تنها یک متریک نیست؛ بلکه بخشی از تجربه زیبایی‌شناختی است.",
      philosophy: [
        { title: "وضوح فراتر از تزیین", detail: "هر المان باید هدفی را دنبال کند. اگر به داستان چیزی اضافه نمی‌کند، پس مزاحم است." },
        { title: "حرکت با هدف", detail: "انیمیشن باید توجه را هدایت کند و زمینه را فراهم سازد، نه اینکه صرفاً صفحه را تزیین کند." },
        { title: "احساس از طریق خویشتن‌داری", detail: "لوکس بودن در چیزهایی است که حذف شده‌اند. ما از فضای منفی استفاده می‌کنیم تا محتوا نفس بکشد." }
      ],
      coreFocus: [
        "معماری فرانت‌اند",
        "سیستم‌های حرکتی",
        "طراحی UI/UX",
        "عکاسی سینمایی",
        "یکپارچه‌سازی هوش مصنوعی",
        "بهینه‌سازی عملکرد"
      ]
    },
    experience: {
      title: "آرشیو",
      summary: "تاریخچه‌ای از ساختن برای وب و برای چشم.",
      items: [
        {
          id: 1,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "AFS (تهران)",
          date: "۱۴۰۳ — اکنون",
          description: "هدایت هویت دیجیتال و پیاده‌سازی معماری راه‌حل‌های انرژی با کارایی بالا."
        },
        {
          id: 2,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "مخطوط (قم)",
          date: "۱۴۰۳",
          description: "خلق حضور دیجیتال برندمحور از ایده تا اجرای کامل."
        },
        {
          id: 3,
          role: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
          company: "رافد (قم)",
          date: "۱۴۰۰ — ۱۴۰۲",
          description: "مهندسی رابط‌های ساختاریافته و سیستم‌های قابل استفاده مجدد برای پلتفرم‌های پیچیده داخلی."
        }
      ]
    },
    projects: {
      title: "آثار منتخب",
      items: [
        {
          id: 1,
          name: "AFSSOLAR",
          year: "۱۴۰۳",
          link: "https://afssolar.ir",
          role: "مهندس فول‌استک و معمار",
          stack: ["React 19", "Express", "Drizzle ORM", "MariaDB"],
          statement: "ساخت یک سیستم تعاملی سینمایی با تمرکز بر ریتم احساسی و غوطه‌وری بصری.",
          problem: "مشتری به یک سیستم مدیریت محتوای کاملاً سفارشی، امن و با کارایی بالا نیاز داشت.",
          solution: "معماری یک CMS Headless اختصاصی از پایه با ویرایشگر بلوک‌محور.",
          result: "دستیابی به امتیازهای عالی در Lighthouse و وضعیت امنیتی در سطح سازمانی.",
          impact: "ایجاد یکپارچگی در برند و طراحی یک CMS اختصاصی و حرفه‌ای.",
          details: "این پروژه نیازمند خلق هویت برند از پایه بود که به طراحی یک حضور دیجیتال کارآمد منجر شد. هم‌زمان، معماری یک سیستم مدیریت محتوا با قابلیت‌های پیشرفته انجام شد.",
          readMore: "مشاهده مطالعه موردی",
          readLess: "بستن",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp"
          ]
        }
      ]
    },
    skills: {
      title: "تخصص",
      categories: [
        { name: "مهندسی", items: "React, Next.js, TypeScript, Node.js, Drizzle, MariaDB", level: 90 },
        { name: "طراحی", items: "UI/UX Design, Motion Systems, Brand Identity, Figma", level: 95 },
        { name: "خلاقیت", items: "Cinematic Photography, Art Direction, Visual Storytelling", level: 95 },
        { name: "نوآوری", items: "AI-Assisted Workflow, Performance Optimization", level: 88 }
      ]
    },
    visual: {
      title: "آثار بصری",
      items: [
        {
          id: 1,
          title: "هویت برند",
          tools: "Illustrator, Photoshop, Midjourney",
          concept: "ایجاد یک زبان بصری منسجم از لوگوها تا دارایی‌های بازاریابی.",
          impact: "تثبیت حضور قوی و قابل تشخیص برند.",
          images: ["/images/photo-1626785774573-4b799315345d.webp"],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن"
        }
      ]
    },
    testimonials: {
      title: "صدا",
      stats: [
        { label: "مهندسی", value: "+۴ سال" },
        { label: "هنرهای بصری", value: "+۱۰ سال" }
      ],
      items: [
        {
          id: 1,
          name: "مدیریت",
          company: "AFS",
          role: "کارفرما",
          text: "صادق دانش عمیق فنی فرانت‌اند را با دیدگاهی دقیق در طراحی ترکیب می‌کند. او تمام حضور دیجیتال ما را ارتقا داد.",
          result: "۳۰٪ افزایش در تعامل کاربران."
        }
      ]
    },
    contact: {
      title: "استعلام",
      message: "آماده برای پروژه‌های منتخب و نقش‌های مهندسی که برای بلوغ بصری و دقت فنی ارزش قائل هستند.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedin: "linkedin.com/in/mohammad-sadegh-shahid",
      github: "github.com/mohammadsadeghshahid",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228"
    }
  }
};
