export type Language = 'en' | 'fa';

export const portfolioData = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      role: "Front-End | Back-End | UI/UX | Brand Identity",
      title: "Designing and building digital experiences from brand to web.",
      ctaPrimary: "Selected Projects",
      ctaSecondary: "Download CV"
    },
    about: {
      title: "About Me",
      summary: "Over the past four years, I've worked hands-on across Front-End, Back-End, and UI/UX, building digital experiences that balance technical precision with thoughtful interface design. I actively use AI models and tools to optimize design workflows and accelerate product development. My background includes more than ten years of cinematic and artistic photography.",
      coreFocus: [
        "Front-End Development",
        "Back-End Development",
        "UI/UX Design",
        "Brand Identity",
        "Graphic Design",
        "Visual Storytelling",
        "Cinematic & Artistic Photography",
        "AI-Assisted Workflow"
      ]
    },
    experience: {
      title: "Experience",
      summary: "4+ years in Web & Product Development. 10+ years in Visual Direction & Brand Identity.",
      items: [
        {
          id: 1,
          role: "Senior Designer & Web Developer",
          company: "AFS (Tehran)",
          date: "Nov 2024 - Present",
          description: "Led a multidisciplinary workflow covering brand identity, graphic assets, complete UI/UX, and end-to-end website implementation, while also using AI tools for design enhancement, content production, product development, video creation, and teaser editing."
        },
        {
          id: 2,
          role: "Senior Designer & Web Developer",
          company: "Makhtoot (Qom)",
          date: "Feb 2024 - Apr 2024",
          description: "Built the brand identity from concept to detailed execution, produced the required graphic assets, and then designed the UI/UX and fully developed the website with a brand-led approach."
        },
        {
          id: 3,
          role: "Frontend Developer & UI/UX Designer",
          company: "Rafed (Qom)",
          date: "Jan 2022 - Mar 2024",
          description: "Designed UI/UX and developed frontend interfaces for the company and its internal systems, with a focus on usability, structured interfaces, and reusable product components."
        }
      ]
    },
    projects: {
      title: "Selected Projects",
      items: [
        {
          id: 1,
          name: "AFSSOLAR & Custom Headless CMS",
          year: "2024",
          link: "https://afssolar.ir",
          role: "Full-Stack Engineer, Senior Designer & Architect",
          stack: ["React 19", "Express", "Drizzle ORM", "MariaDB", "Next.js", "Brand Identity"],
          impact: "Created a cohesive brand foundation and engineered a hardened, enterprise-grade CMS tailored for the AFS platform, delivering robust real-time SEO, advanced security, and automated CI/CD pipelines.",
          details: "This overarching project required a full brand identity creation from scratch and translating it into a performant web presence. Concurrently, I designed and built a custom headless CMS featuring a block-based architecture, nested pages, content slots, auto-saving drafts, and a Tiptap rich-text editor integrated with a powerful media library. Emphasized security through granular RBAC, JWT revocation, HttpOnly secure cookies, CSRF protection, file upload magic-number validation, and comprehensive audit logs. Architected the backend using Drizzle ORM on MariaDB, enabling seamless SSG hydration and maximum performance. Established fully automated deployments to cPanel via GitHub Actions.",
          readMore: "Read More",
          readLess: "Show Less",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
            "/images/photo-1461749280684-dccba630e2f6.webp",
            "/images/photo-1555066931-4365d14bab8c.webp",
            "/images/photo-1633356122544-f134324a6cee.webp"
          ]
        },
        {
          id: 2,
          name: "Rafed Internal Systems",
          year: "2022 - 2024",
          role: "Frontend Developer & UI/UX Designer",
          stack: ["React", "UI/UX", "Component Thinking", "Internal Systems"],
          impact: "Helped standardize the internal user experience and create clearer, more usable interfaces.",
          details: "Designed and developed numerous front-end interfaces for internal organizational tools. The focus was heavily on component reusability, maintaining a clean UI/UX standard across different systems, and improving overall operational efficiency.",
          readMore: "Read More",
          readLess: "Show Less",
          images: [
            "/images/photo-1551288049-bebda4e38f71.webp",
            "/images/photo-1547658719-da2b51169166.webp"
          ]
        },
        {
          id: 3,
          name: "Makhtoot",
          year: "2024",
          role: "Senior Designer & Web Developer",
          stack: ["Brand Identity", "Graphic Design", "UI/UX", "Web Development"],
          impact: "Turned the initial brand idea into a usable visual language for design, content, and digital presence.",
          details: "Starting with just a core concept, I crafted a complete visual identity and graphical assets. This brand foundation was then seamlessly integrated into the UI/UX design and full front-end development of their main website.",
          readMore: "Read More",
          readLess: "Show Less",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1561070791-2526d30994b5.webp"
          ]
        }
      ]
    },
    skills: {
      title: "Expertise",
      categories: [
        { name: "Web Development", items: "Next.js, React, TypeScript, Web Development", level: 90 },
        { name: "Product & UX", items: "Back-End Development, UI/UX Design, Product Thinking, Responsive Interfaces", level: 85 },
        { name: "Visual & Brand", items: "Brand Identity, Graphic Design, Visual Storytelling, Art Direction", level: 95 },
        { name: "AI Workflow", items: "AI Tools, ChatGPT, Midjourney, Content Production, Workflow Optimization", level: 88 }
      ]
    },
    visual: {
      title: "Visual Works",
      items: [
        {
          id: 1,
          title: "Brand Identity / Graphic Design",
          tools: "Illustrator, Photoshop, Midjourney",
          concept: "Creating a cohesive visual language from logos to marketing assets across physical and digital mediums.",
          impact: "Established strong, recognizable brand presences that accurately reflect company values.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp"
          ],
          detailsBtn: "View Details",
          closeBtn: "Close"
        },
        {
          id: 2,
          title: "Cinematic Photography",
          tools: "Lightroom, Professional Camera Gear",
          concept: "Capturing atmospheric and narrative-driven imagery to tell a visual story.",
          impact: "Enhanced visual storytelling for campaigns and personal art projects.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp"
          ],
          detailsBtn: "View Details",
          closeBtn: "Close"
        },
        {
          id: 3,
          title: "Visual Narrative / Art Direction",
          tools: "Figma, AI Tools, Video Editing",
          concept: "Guiding the creative vision for digital products and campaigns.",
          impact: "Delivered unified aesthetic experiences across all user touchpoints.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp"
          ],
          detailsBtn: "View Details",
          closeBtn: "Close"
        },
        {
          id: 4,
          title: "Interface Design / Digital Product",
          tools: "Figma, React, UI/UX Principles",
          concept: "Designing intuitive and accessible user interfaces with a focus on component architecture.",
          impact: "Improved user satisfaction and streamlined organizational workflows.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp"
          ],
          detailsBtn: "View Details",
          closeBtn: "Close"
        }
      ]
    },
    testimonials: {
      title: "Client & Collaborator Testimonials",
      items: [
        {
          id: 1,
          name: "Manager",
          role: "AFS (Tehran)",
          text: "Sadegh combines deep technical frontend knowledge with an eagle eye for design. He elevated our entire digital presence and branded output."
        },
        {
          id: 2,
          name: "Project Lead",
          role: "Rafed (Qom)",
          text: "His ability to craft cohesive, reusable components while maintaining high-quality UX is remarkable. A true asset to any product team."
        }
      ]
    },
    contact: {
      title: "Let's work together",
      message: "If you have a project or role in mind, the best first step is a short message with your goal, timeline, and core need.",
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
      about: "درباره من",
      experience: "تجربیات",
      projects: "پروژه‌ها",
      skills: "مهارت‌ها",
      contact: "تماس"
    },
    hero: {
      role: "Front-End | Back-End | UI/UX | Brand Identity",
      title: "طراحی و توسعه تجربه‌های دیجیتال از برند تا وب.",
      ctaPrimary: "پروژه‌های منتخب",
      ctaSecondary: "دانلود رزومه"
    },
    about: {
      title: "درباره من",
      summary: "در چهار سال اخیر به‌صورت عملی در حوزه‌های Front-End، Back-End و UI/UX فعالیت کرده‌ام و تجربه‌های دیجیتالی ساخته‌ام که دقت فنی را با طراحی هدفمند ترکیب می‌کنند. به‌طور فعال از مدل‌ها و ابزارهای هوش مصنوعی برای بهینه‌سازی فرآیند طراحی و تسریع توسعه محصول استفاده می‌کنم. بیش از ده سال تجربه در عکاسی سینمایی و هنری دارم.",
      coreFocus: [
        "توسعه فرانت‌اند",
        "توسعه بک‌اند",
        "طراحی رابط و تجربه کاربری",
        "هویت برند",
        "طراحی گرافیک",
        "روایت بصری",
        "عکاسی هنری و سینمایی",
        "جریان‌کار مبتنی بر هوش‌مصنوعی"
      ]
    },
    experience: {
      title: "تجربیات",
      summary: "۴+ سال در توسعه وب و محصول. ۱۰+ سال در جهت‌گیری بصری و هویت برند.",
      items: [
        {
          id: 1,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "AFS (تهران)",
          date: "آبان ۱۴۰۳ - اکنون",
          description: "مدیریت و اجرای فرایند طراحی هویت برند، تولید گرافیک‌های موردنیاز، طراحی و پیاده‌سازی کامل وب‌سایت و استفاده کاربردی از ابزارهای هوش مصنوعی برای بهبود طراحی، تولید محتوا، توسعه محصول، ساخت ویدیو و تدوین تیزر."
        },
        {
          id: 2,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "مخطوط (قم)",
          date: "بهمن ۱۴۰۲ - اردیبهشت ۱۴۰۳",
          description: "طراحی و توسعه هویت برند از مرحله ایده‌پردازی تا اجرای جزئیات بصری، تولید خروجی‌های گرافیکی موردنیاز و سپس طراحی UI/UX و توسعه کامل وب‌سایت با رویکرد برندمحور."
        },
        {
          id: 3,
          role: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
          company: "رافد (قم)",
          date: "دی ۱۴۰۰ - اسفند ۱۴۰۲",
          description: "طراحی UI/UX و توسعه فرانت‌اند برای مجموعه و پروژه‌های درون‌سازمانی، با تمرکز بر تجربه کاربری، ساختار منظم رابط‌ها و پیاده‌سازی صفحات و کامپوننت‌های موردنیاز محصولات سازمانی."
        }
      ]
    },
    projects: {
      title: "پروژه‌های منتخب",
      items: [
        {
          id: 1,
          name: "وب‌سایت AFSSOLAR و سیستم مدیریت محتوای اختصاصی",
          year: "۱۴۰۳",
          link: "https://afssolar.ir",
          role: "توسعه‌دهنده فول‌استک و طراح ارشد",
          stack: ["React 19", "Express", "Drizzle ORM", "MariaDB", "Next.js", "هویت برند"],
          impact: "ایجاد یکپارچگی در برند و طراحی و مهندسی یک CMS اختصاصی و حرفه‌ای سازمانی برای پلتفرم AFS با تمرکز بر امنیت پیشرفته، ابزارهای بلادرنگ سئو، و دیپلوی خودکار.",
          details: "این پروژه نیازمند خلق هویت برند از پایه بود که به طراحی یک حضور دیجیتال کارآمد منجر شد. هم‌زمان، معماری یک سیستم مدیریت محتوا با قابلیت‌های پیشرفته شامل ساختار بلاک‌بیس، مدیریت صفحات تودرتو، اسلات‌های محتوا، ذخیره خودکار پیش‌نویس‌ها و پیاده‌سازی ادیتور Tiptap همراه با مدیریت یکپارچه مدیا انجام شد. امنیت سیستم به‌شدت مورد توجه قرار گرفت و به‌وسیله RBAC، کوکی‌های دور از دسترس مرورگر، جلوگیری از حملات پیشرفته، اعتبارسنجی فایل‌های آپلودی مبتنی‌بر ساختار باینری، و لاگ‌های کامل کاربری تضمین شد. بک‌اند با استفاده از Drizzle و MariaDB بازطراحی شد که بستر پیاده‌سازی SSG و بهبود راندمان را فراهم آورد. سیستم CI/CD اتوماتیک نیز با گیت‌هاب اکشنز پیاده‌سازی شد.",
          readMore: "بیشتر بخوانید",
          readLess: "بستن",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
            "/images/photo-1461749280684-dccba630e2f6.webp",
            "/images/photo-1555066931-4365d14bab8c.webp",
            "/images/photo-1633356122544-f134324a6cee.webp"
          ]
        },
        {
          id: 2,
          name: "سیستم‌های داخلی رافد",
          year: "۱۴۰۰ - ۱۴۰۲",
          role: "توسعه‌دهنده فرانت‌اند و طراح UI/UX",
          stack: ["React", "UI/UX", "کاپوننت‌بیس", "سیستم‌های داخلی"],
          impact: "کمک به استانداردسازی تجربه کاربران سازمانی و ایجاد رابط‌هایی روشن‌تر و کاربردی‌تر.",
          details: "طراحی و توسعه چندین رابط کاربری برای ابزارهای سازمانی با تمرکز شدید بر قابلیت استفاده مجدد کامپوننت‌ها حفظ استانداردهای UI/UX و بهبود راندمان کلی سیستم.",
          readMore: "بیشتر بخوانید",
          readLess: "بستن",
          images: [
            "/images/photo-1551288049-bebda4e38f71.webp",
            "/images/photo-1547658719-da2b51169166.webp"
          ]
        },
        {
          id: 3,
          name: "مخطوط",
          year: "۱۴۰۳",
          role: "طراح ارشد و توسعه‌دهنده وب",
          stack: ["هویت برند", "طراحی گرافیک", "UI/UX", "توسعه وب"],
          impact: "تبدیل ایده اولیه برند به یک زبان بصری قابل استفاده در طراحی، محتوا و حضور دیجیتال.",
          details: "شروع کار از یک ایده اولیه برای طراحی هویت بصری جامع و گرافیکی بود. سپس این پایه بصری برای طراحی کامل UI/UX و فرانت‌اند وبسایت اصلی پیاده‌سازی و یکپارچه شد.",
          readMore: "بیشتر بخوانید",
          readLess: "بستن",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1561070791-2526d30994b5.webp"
          ]
        }
      ]
    },
    skills: {
      title: "تخصص‌ها",
      categories: [
        { name: "توسعه وب", items: "Next.js, React, TypeScript, توسعه وب", level: 90 },
        { name: "محصول و تجربه کاربری", items: "توسعه سمت سرور، طراحی UI/UX، تفکر محصول، رابط‌های واکنش‌گرا", level: 85 },
        { name: "بصری و برند", items: "هویت برند، طراحی گرافیک، روایت بصری، کارگردانی هنری", level: 95 },
        { name: "هوش مصنوعی", items: "ابزارهای AI، ChatGPT، Midjourney، تولید محتوا، بهینه‌سازی فرآیند", level: 88 }
      ]
    },
    visual: {
      title: "آثار بصری",
      items: [
        {
          id: 1,
          title: "هویت برند / طراحی گرافیک",
          tools: "Illustrator, Photoshop, Midjourney",
          concept: "ایجاد یک زبان بصری منسجم از لوگوها تا دارایی‌های بازاریابی.",
          impact: "تثبیت حضور قوی و قابل تشخیص برند از طریق کانال‌های مختلف.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp"
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن"
        },
        {
          id: 2,
          title: "عکاسی سینمایی",
          tools: "لایت‌روم، تجهیزات حرفه‌ای عکاسی",
          concept: "ثبت تصاویر جوی و داستان‌محور برای روایت یک داستان بصری.",
          impact: "ارتقاء روایت بصری برای کمپین‌ها و پروژه‌های هنری شخصی.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp"
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن"
        },
        {
          id: 3,
          title: "روایت بصری / جهت‌گیری هنری",
          tools: "Figma, AI Tools, ویرایش ویدیو",
          concept: "هدایت چشم‌انداز خلاقانه برای محصولات دیجیتال و کمپین‌ها.",
          impact: "ارائه تجربیات بصری یکپارچه در تمام نقاط تماس کاربر.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp"
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن"
        },
        {
          id: 4,
          title: "طراحی رابط کاربری / محصول دیجیتال",
          tools: "Figma, React, اصول UI/UX",
          concept: "طراحی رابط‌های کاربری بصری و در دسترس با تمرکز بر معماری کامپوننت.",
          impact: "بهبود رضایت کاربر و ساده‌سازی جریان‌های کاری سازمانی.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp"
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن"
        }
      ]
    },
    testimonials: {
      title: "نظرات همکاران و کارفرمایان",
      items: [
        {
          id: 1,
          name: "مدیریت",
          role: "AFS (تهران)",
          text: "صادق دانش عمیق فنی فرانت‌اند را با دیدگاهی دقیق در طراحی ترکیب می‌کند. او تمام حضور دیجیتال و خروجی برند ما را ارتقا داد."
        },
        {
          id: 2,
          name: "مدیر پروژه",
          role: "رافد (قم)",
          text: "توانایی او در ساخت کامپوننت‌های منسجم و قابل استفاده مجدد و در عین حال حفظ تجربه کاربری با کیفیت بالا، قابل توجه است. یک مهره ارزشمند برای هر تیم محصول."
        }
      ]
    },
    contact: {
      title: "بیایید همکاری کنیم",
      message: "اگر پروژه یا فرصت همکاری مشخصی دارید، بهترین مسیر شروع یک پیام کوتاه با توضیح هدف، زمان‌بندی و نیاز اصلی شماست.",
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
