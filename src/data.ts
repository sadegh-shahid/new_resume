export type Language = "en" | "fa";

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
}

export const portfolioData = {
  en: {
    nav: {
      about: "Approach",
      experience: "Experience",
      projects: "Projects",
      visual: "Visual Works",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      role: "Brand Identity Designer · Full-Stack Developer · AI Creative Systems",
      title: "Digital experiences,\nshot like cinema",
      description:
        "Digital products that feel like cinema — built for brands that refuse to look ordinary. I design interfaces where every transition drives trust and every detail converts attention into action.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Start a Project",
    },
    capabilities: {
      blocks: [
        {
          title: "Brand Identity",
          description:
            "Visual systems and brand strategy with editorial sensibility",
        },
        {
          title: "Product Design",
          description: "Cinematic digital experiences with emotional depth",
        },
        {
          title: "Development",
          description:
            "Frontend craft focused on motion, rhythm, and atmosphere",
        },
        {
          title: "AI Workflow",
          description:
            "Creative augmentation through AI-assisted ideation and systems",
        },
      ],
    },
    about: {
      title: "Approach",
      paragraphs: [
        "I design and engineer interfaces where photography, motion, and code converge. Every pixel, transition, and interaction is intentional — never decorative.",
        "My process is rooted in cinematic thinking. I treat digital experiences like film: rhythm, atmosphere, tension, and emotional clarity matter more than visual complexity.",
        "AI is integrated into my creative workflow—not as automation, but as a thinking partner. It helps me explore faster, iterate deeper, and discover directions I might miss alone.",
        "Performance is aesthetics. Restraint is confidence. Precision is the difference between being seen and being remembered.",
      ],
      location:
        "Based in Iran • Available for selective international projects",
      coreFocus: [
        "Front-End Development",
        "Back-End Development",
        "UI/UX Design",
        "Brand Identity",
        "Graphic Design",
        "Visual Storytelling",
        "Cinematic & Artistic Photography",
        "AI-Assisted Creative Workflow",
      ],
    },
    experience: {
      title: "Experience",
      summary:
        "4+ years in Web & Product Development. 10+ years in Visual Direction & Brand Identity.",
      items: [
        {
          id: 1,
          role: "Senior Designer & Web Developer",
          company: "AFS (Tehran)",
          date: "Nov 2024 - Present",
          description:
            "Led a multidisciplinary workflow covering brand identity, graphic assets, complete UI/UX, and end-to-end website implementation, while also using AI tools for design enhancement, content production, product development, video creation, and teaser editing.",
        },
        {
          id: 2,
          role: "Senior Designer & Web Developer",
          company: "Makhtoot (Qom)",
          date: "Feb 2024 - Apr 2024",
          description:
            "Built the brand identity from concept to detailed execution, produced the required graphic assets, and then designed the UI/UX and fully developed the website with a brand-led approach.",
        },
        {
          id: 3,
          role: "Frontend Developer & UI/UX Designer",
          company: "Rafed (Qom)",
          date: "Jan 2022 - Mar 2024",
          description:
            "Designed UI/UX and developed frontend interfaces for the company and its internal systems, with a focus on usability, structured interfaces, and reusable product components.",
        },
      ],
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
          stack: [
            "React 19",
            "Express",
            "Drizzle ORM",
            "MariaDB",
            "Next.js",
            "Brand Identity",
          ],
          problem:
            "The client needed a highly secure, performant, and custom-tailored content management system that existing off-the-shelf solutions couldn't provide without significant overhead or security compromises.",
          solution:
            "Architected a custom headless CMS from the ground up with a block-based editor and granular security controls, paired with a high-performance frontend.",
          result:
            "Achieved near-perfect Lighthouse scores, 100% automated deployment, and an enterprise-grade security posture with real-time SEO capabilities.",
          impact:
            "Reduced content management overhead by 70% and established a brand presence that positioned AFS as the premium player in solar energy within 90 days of launch.",
          details:
            "This overarching project required a full brand identity creation from scratch and translating it into a performant web presence. Concurrently, I designed and built a custom headless CMS featuring a block-based architecture, nested pages, content slots, auto-saving drafts, and a Tiptap rich-text editor integrated with a powerful media library. Emphasized security through granular RBAC, JWT revocation, HttpOnly secure cookies, CSRF protection, file upload magic-number validation, and comprehensive audit logs. Architected the backend using Drizzle ORM on MariaDB, enabling seamless SSG hydration and maximum performance. Established fully automated deployments to cPanel via GitHub Actions.",
          readMore: "Read More",
          readLess: "Show Less",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
            "/images/photo-1461749280684-dccba630e2f6.webp",
            "/images/photo-1555066931-4365d14bab8c.webp",
            "/images/photo-1633356122544-f134324a6cee.webp",
          ],
        },
        {
          id: 2,
          name: "Rafed Internal Systems",
          year: "2022 - 2024",
          role: "Frontend Developer & UI/UX Designer",
          stack: ["React", "UI/UX", "Component Thinking", "Internal Systems"],
          problem:
            "Fragmented internal tools with inconsistent UX led to decreased productivity and higher training costs for new employees.",
          solution:
            "Developed a standardized component library and redesigned core internal systems with a focus on usability and data visualization.",
          result:
            "Reduced task completion time by 30% and unified the visual language across 5+ internal platforms.",
          impact:
            "Cut internal training time by 40% and unified 5+ platforms under one visual system — making the team faster and the product easier to scale.",
          details:
            "Designed and developed numerous front-end interfaces for internal organizational tools. The focus was heavily on component reusability, maintaining a clean UI/UX standard across different systems, and improving overall operational efficiency.",
          readMore: "Read More",
          readLess: "Show Less",
          images: [
            "/images/photo-1551288049-bebda4e38f71.webp",
            "/images/photo-1547658719-da2b51169166.webp",
          ],
        },
        {
          id: 3,
          name: "Makhtoot",
          year: "2024",
          role: "Senior Designer & Web Developer",
          stack: [
            "Brand Identity",
            "Graphic Design",
            "UI/UX",
            "Web Development",
          ],
          problem:
            "A new brand required a complete visual identity and digital presence from zero to launch in a very tight timeframe.",
          solution:
            "Executed a rapid design-to-development workflow, creating a modular brand system and a responsive web platform simultaneously.",
          result:
            "Successfully launched the brand identity and website within 2 months, establishing a strong market presence from day one.",
          impact:
            "Launched a complete brand-to-website pipeline in 8 weeks, turning a concept into a market-ready identity that secured early customer traction.",
          details:
            "Starting with just a core concept, I crafted a complete visual identity and graphical assets. This brand foundation was then seamlessly integrated into the UI/UX design and full front-end development of their main website.",
          readMore: "Read More",
          readLess: "Show Less",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1561070791-2526d30994b5.webp",
          ],
        },
      ],
    },
    skills: {
      title: "Expertise",
      categories: [
        {
          name: "Creative Development",
          items:
            "React, Next.js, TypeScript, Motion Design, Cinematic Interfaces",
          level: 90,
        },
        {
          name: "Product & Experience",
          items:
            "UI/UX Design, Visual Systems, Interaction Design, Digital Storytelling",
          level: 85,
        },
        {
          name: "Brand & Visual",
          items:
            "Brand Identity, Art Direction, Graphic Design, Visual Narrative",
          level: 95,
        },
        {
          name: "AI Creative Systems",
          items:
            "AI-Assisted Ideation, Prompt Engineering, Creative Automation, Visual Experimentation",
          level: 88,
        },
      ],
    },
    visual: {
      title: "Visual Works",
      items: [
        {
          id: 1,
          title: "Brand Identity / Graphic Design",
          tools: "Illustrator, Photoshop, Midjourney",
          concept:
            "Creating a cohesive visual language from logos to marketing assets across physical and digital mediums.",
          impact:
            "Established strong, recognizable brand presences that accurately reflect company values.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp",
          ],
          detailsBtn: "View Details",
          closeBtn: "Close",
        },
        {
          id: 2,
          title: "Cinematic Photography",
          tools: "Lightroom, Professional Camera Gear",
          concept:
            "Capturing atmospheric and narrative-driven imagery to tell a visual story.",
          impact:
            "Enhanced visual storytelling for campaigns and personal art projects.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp",
          ],
          detailsBtn: "View Details",
          closeBtn: "Close",
        },
        {
          id: 3,
          title: "Visual Narrative / Art Direction",
          tools: "Figma, AI Tools, Video Editing",
          concept:
            "Guiding the creative vision for digital products and campaigns.",
          impact:
            "Delivered unified aesthetic experiences across all user touchpoints.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp",
          ],
          detailsBtn: "View Details",
          closeBtn: "Close",
        },
        {
          id: 4,
          title: "Interface Design / Digital Product",
          tools: "Figma, React, UI/UX Principles",
          concept:
            "Designing intuitive and accessible user interfaces with a focus on component architecture.",
          impact:
            "Improved user satisfaction and streamlined organizational workflows.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
          ],
          detailsBtn: "View Details",
          closeBtn: "Close",
        },
      ],
    },
    testimonials: {
      title: "Client & Collaborator Testimonials",
      stats: [
        { label: "Years Experience", value: "4+" },
        { label: "Projects Delivered", value: "20+" },
        { label: "Main Services", value: "Web & Brand" },
      ],
      items: [
        {
          id: 1,
          name: "Head of Digital",
          company: "AFS (Tehran)",
          role: "Client",
          text: "Sadegh combines deep technical frontend knowledge with an eagle eye for design. He elevated our entire digital presence and branded output.",
          result: "30% increase in user engagement.",
        },
        {
          id: 2,
          name: "Product Lead",
          company: "Rafed (Qom)",
          role: "Collaborator",
          text: "His ability to craft cohesive, reusable components while maintaining high-quality UX is remarkable. A true asset to any product team.",
          result: "Halved development time for new features.",
        },
      ],
    },
    humanMoment: {
      quote:
        "Behind every pixel and line of code, there's a person who cares deeply about the details you might never notice.",
      attribution: "— A quiet note",
    },
    contact: {
      title: "Let's work together",
      message:
        "Tell me what you're building. I'll reply within 24 hours with a clear timeline and next steps.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedin: "linkedin.com/in/mohammad-sadegh-shahid",
      github: "github.com/mohammadsadeghshahid",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline:
        "Built with precision, rhythm, and intent. Currently accepting Q3 projects.",
      copyright: "© {year} Sadegh Shahid",
    },
  },
  fa: {
    nav: {
      about: "رویکرد",
      experience: "تجربیات",
      projects: "پروژه‌ها",
      visual: "آثار بصری",
      testimonials: "نظرات",
      contact: "تماس",
    },
    hero: {
      role: "طراح هویت برند · توسعه‌دهنده فول‌استک · سیستم‌های خلاقانه AI",
      title: "تجربه‌های دیجیتال،\nبا نگاه سینمایی",
      description:
        "محصولات دیجیتالی که حس سینما را دارند — برای برندهایی ساخته شده که نمی‌‌پذیرند معمولی به نظر برسند. رابط‌هایی طراحی می‌کنم که هر ترنزیشن اعتماد می‌سازد و هر جزئیات، توجه را به عمل تبدیل می‌کند.",
      ctaPrimary: "مشاهده پروژه‌ها",
      ctaSecondary: "شروع یک پروژه",
    },
    capabilities: {
      blocks: [
        {
          title: "هویت برند",
          description: "سیستم‌های بصری و استراتژی برند با حساسیت ادیتوریال",
        },
        {
          title: "طراحی محصول",
          description: "تجربه‌های دیجیتال سینمایی با عمق احساسی",
        },
        {
          title: "توسعه",
          description: "صنعت‌گری فرانت‌اند با تمرکز بر موشن، ریتم و اتمسفر",
        },
        {
          title: "سیستم‌های خلاقانه مبتنی بر هوش مصنوعی",
          description:
            "تقویت خلاقیت از طریق ایده‌پردازی و سیستم‌های مبتنی بر هوش مصنوعی",
        },
      ],
    },
    about: {
      title: "رویکرد",
      paragraphs: [
        "من رابط‌هایی را طراحی و مهندسی می‌کنم که در آن‌ها عکاسی، موشن و کد با هم تلاقی می‌کنند. هر پیکسل، ترنزیشن و تعامل، هدفمند است و هرگز جنبه صرفاً تزیینی ندارد.",
        "فرآیند من ریشه در تفکر سینمایی دارد. من با تجربه‌های دیجیتال مانند فیلم برخورد می‌کنم: ریتم، اتمسفر، تعلیق و وضوح احساسی بیش از پیچیدگی‌های بصری اهمیت دارند.",
        "هوش مصنوعی در جریان‌کار خلاقانه من ادغام شده است؛ نه به عنوان اتوماسیون، بلکه به عنوان یک شریک فکری. این ابزار به من کمک می‌کند سریع‌تر کاوش کنم، عمیق‌تر تکرار کنم و مسیرهایی را کشف کنم که ممکن بود به تنهایی نادیده بگیرم.",
        "عملکرد، عین زیبایی است. خویشتن‌داری، نشانه اعتمادبه‌نفس. و دقت، مرز بین دیده شدن و به یاد ماندن است.",
      ],
      location: "مستقر در قم • آماده برای پروژه‌های منتخب دورکاری و هیبرید",
      coreFocus: [
        "توسعه سمت کاربر (Front-End)",
        "توسعه سمت سرور (Back-End)",
        "طراحی UI/UX",
        "هویت برند",
        "طراحی گرافیک",
        "روایت بصری",
        "عکاسی هنری و سینمایی",
        "جریان‌کار خلاقانه مبتنی بر هوش مصنوعی",
      ],
    },
    experience: {
      title: "تجربیات",
      summary: "۴+ سال توسعه وب و محصول. ۱۰+ سال جهت‌گیری بصری و هویت برند.",
      items: [
        {
          id: 1,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "AFS (تهران)",
          date: "آبان ۱۴۰۳ - اکنون",
          description:
            "هویت برند، گرافیک، طراحی و توسعه کامل وب‌سایت. استفاده از هوش مصنوعی برای بهبود طراحی، محتوا و تولید ویدیو.",
        },
        {
          id: 2,
          role: "طراح ارشد و توسعه‌دهنده وب",
          company: "مخطوط (قم)",
          date: "بهمن ۱۴۰۲ - اردیبهشت ۱۴۰۳",
          description:
            "هویت برند از ایده تا اجرا. تولید گرافیک، طراحی UI/UX و توسعه وب‌سایت با رویکرد برندمحور.",
        },
        {
          id: 3,
          role: "توسعه‌دهنده سمت کاربر (Front-End) و طراح UI/UX",
          company: "رافد (قم)",
          date: "دی ۱۴۰۰ - اسفند ۱۴۰۲",
          description:
            "طراحی UI/UX و توسعه سمت کاربر برای سیستم‌های درون‌سازمانی. تمرکز بر تجربه کاربری و کامپوننت‌های قابل استفاده مجدد.",
        },
      ],
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
          stack: [
            "React 19",
            "Express",
            "Drizzle ORM",
            "MariaDB",
            "Next.js",
            "هویت برند",
          ],
          problem:
            "مشتری به یک سیستم مدیریت محتوای کاملاً سفارشی، با امنیت بالا و کارایی فوق‌العاده نیاز داشت که راه‌حل‌های آماده موجود نمی‌توانستند بدون پیچیدگی‌های زیاد یا ضعف‌های امنیتی آن را برآورده کنند.",
          solution:
            "معماری یک CMS Headless اختصاصی از پایه با ویرایشگر بلوک‌محور و کنترل‌های امنیتی دقیق، همراه با یک فرانت‌اند با کارایی بالا.",
          result:
            "دستیابی به امتیازهای عالی در Lighthouse، استقرار ۱۰۰٪ خودکار و وضعیت امنیتی در سطح سازمانی با قابلیت‌های سئو بلادرنگ.",
          impact:
            "۷۰٪ کاهش در هزینه‌های مدیریت محتوا و ساخت یک حضور برند که AFS را در ۹۰ روز اول به عنوان بازیگر برتر انرژی خورشیدی معرفی کرد.",
          details:
            "این پروژه نیازمند خلق هویت برند از پایه بود که به طراحی یک حضور دیجیتال کارآمد منجر شد. هم‌زمان، معماری یک سیستم مدیریت محتوا با قابلیت‌های پیشرفته شامل ساختار بلاک‌بیس، مدیریت صفحات تودرتو، اسلات‌های محتوا، ذخیره خودکار پیش‌نویس‌ها و پیاده‌سازی ادیتور Tiptap همراه با مدیریت یکپارچه مدیا انجام شد. امنیت سیستم به‌شدت مورد توجه قرار گرفت و به‌وسیله RBAC، کوکی‌های دور از دسترس مرورگر، جلوگیری از حملات پیشرفته، اعتبارسنجی فایل‌های آپلودی مبتنی‌بر ساختار باینری، و لاگ‌های کامل کاربری تضمین شد. بک‌اند با استفاده از Drizzle و MariaDB بازطراحی شد که بستر پیاده‌سازی SSG و بهبود راندمان را فراهم آورد. سیستم CI/CD اتوماتیک نیز با گیت‌هاب اکشنز پیاده‌سازی شد.",
          readMore: "بیشتر بخوانید",
          readLess: "بستن",
          images: [
            "/images/photo-1498050108023-c5249f4df085.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
            "/images/photo-1461749280684-dccba630e2f6.webp",
            "/images/photo-1555066931-4365d14bab8c.webp",
            "/images/photo-1633356122544-f134324a6cee.webp",
          ],
        },
        {
          id: 2,
          name: "سیستم‌های داخلی رافد",
          year: "۱۴۰۰ - ۱۴۰۲",
          role: "توسعه‌دهنده سمت کاربر (Front-End) و طراح UI/UX",
          stack: ["React", "UI/UX", "مبتنی بر کامپوننت", "سیستم‌های داخلی"],
          problem:
            "ابزارهای داخلی پراکنده با تجربه کاربری نامنظم که منجر به کاهش بهره‌وری و هزینه‌های آموزشی بالا برای کارمندان جدید می‌شد.",
          solution:
            "توسعه یک کتابخانه کامپوننت استاندارد و بازطراحی سیستم‌های داخلی اصلی با تمرکز بر قابلیت استفاده و بصری‌سازی داده‌ها.",
          result:
            "کاهش ۳۰ درصدی زمان انجام وظایف و یکپارچه‌سازی زبان بصری در بیش از ۵ پلتفرم داخلی.",
          impact:
            "۴۰٪ کاهش در زمان آموزش داخلی و یکپارچه‌سازی ۵+ پلتفرم زیر یک سیستم بصری — تیم را سریع‌تر و محصول را برای مقیاس‌پذیری آسان‌تر کرد.",
          details:
            "طراحی و توسعه چندین رابط کاربری برای ابزارهای سازمانی با تمرکز شدید بر قابلیت استفاده مجدد کامپوننت‌ها حفظ استانداردهای UI/UX و بهبود راندمان کلی سیستم.",
          readMore: "بیشتر بخوانید",
          readLess: "بستن",
          images: [
            "/images/photo-1551288049-bebda4e38f71.webp",
            "/images/photo-1547658719-da2b51169166.webp",
          ],
        },
        {
          id: 3,
          name: "مخطوط",
          year: "۱۴۰۳",
          role: "طراح ارشد و توسعه‌دهنده وب",
          stack: ["هویت برند", "طراحی گرافیک", "UI/UX", "توسعه وب"],
          problem:
            "یک برند جدید به هویت بصری کامل و حضور دیجیتال از صفر تا راه‌اندازی در یک بازه زمانی بسیار فشرده نیاز داشت.",
          solution:
            "اجرای سریع فرآیند طراحی تا توسعه، خلق یک سیستم برند مدولار و یک پلتفرم وب واکنش‌گرا به طور همزمان.",
          result:
            "راه‌اندازی موفق هویت برند و وب‌سایت در مدت ۲ ماه و ایجاد حضور قوی در بازار از روز اول.",
          impact:
            "راه‌اندازی یک خط کامل از برند تا وب‌سایت در ۸ هفته، تبدیل یک ایده به هویتی آماده برای بازار که جذب مشتری اولیه را تضمین کرد.",
          details:
            "شروع کار از یک ایده اولیه برای طراحی هویت بصری جامع و گرافیکی بود. سپس این پایه بصری برای طراحی کامل UI/UX و فرانت‌اند وبسایت اصلی پیاده‌سازی و یکپارچه شد.",
          readMore: "بیشتر بخوانید",
          readLess: "بستن",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1561070791-2526d30994b5.webp",
          ],
        },
      ],
    },
    skills: {
      title: "تخصص‌ها",
      categories: [
        {
          name: "توسعه خلاق",
          items: "React, Next.js, TypeScript, طراحی موشن، رابط‌های سینمایی",
          level: 90,
        },
        {
          name: "محصول و تجربه",
          items: "طراحی UI/UX، سیستم‌های بصری، طراحی تعامل، روایت دیجیتال",
          level: 85,
        },
        {
          name: "برند و بصری",
          items: "هویت برند، مدیریت هنری، طراحی گرافیک، روایت بصری",
          level: 95,
        },
        {
          name: "سیستم‌های خلاقانه مبتنی بر هوش مصنوعی",
          items:
            "ایده‌پردازی با کمک هوش مصنوعی، مهندسی پرامپت، اتوماسیون خلاق، آزمایش‌های بصری",
          level: 88,
        },
      ],
    },
    visual: {
      title: "آثار بصری",
      items: [
        {
          id: 1,
          title: "هویت برند / طراحی گرافیک",
          tools: "Illustrator, Photoshop, Midjourney",
          concept:
            "ایجاد یک زبان بصری منسجم از لوگوها تا دارایی‌های بازاریابی.",
          impact: "تثبیت حضور قوی و قابل تشخیص برند از طریق کانال‌های مختلف.",
          images: [
            "/images/photo-1626785774573-4b799315345d.webp",
            "/images/photo-1626785774625-ddcddc3445e9.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن",
        },
        {
          id: 2,
          title: "عکاسی سینمایی",
          tools: "لایت‌روم، تجهیزات حرفه‌ای عکاسی",
          concept: "ثبت تصاویر جوی و داستان‌محور برای روایت یک داستان بصری.",
          impact: "ارتقاء روایت بصری برای کمپین‌ها و پروژه‌های هنری شخصی.",
          images: [
            "/images/photo-1492691527719-9d1e07e534b4.webp",
            "/images/photo-1542038784456-1ea8e935640e.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن",
        },
        {
          id: 3,
          title: "روایت بصری / جهت‌گیری هنری",
          tools: "Figma, AI Tools, ویرایش ویدیو",
          concept: "هدایت چشم‌انداز خلاقانه برای محصولات دیجیتال و کمپین‌ها.",
          impact: "ارائه تجربیات بصری یکپارچه در تمام نقاط تماس کاربر.",
          images: [
            "/images/photo-1561070791-2526d30994b5.webp",
            "/images/photo-1558655146-d09347e92766.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن",
        },
        {
          id: 4,
          title: "طراحی رابط کاربری / محصول دیجیتال",
          tools: "Figma, React, اصول UI/UX",
          concept:
            "طراحی رابط‌های کاربری بصری و در دسترس با تمرکز بر معماری کامپوننت.",
          impact: "بهبود رضایت کاربر و ساده‌سازی جریان‌های کاری سازمانی.",
          images: [
            "/images/photo-1507238691740-187a5b1d37b8.webp",
            "/images/photo-1555421689-491a97ff2040.webp",
          ],
          detailsBtn: "مشاهده جزئیات",
          closeBtn: "بستن",
        },
      ],
    },
    testimonials: {
      title: "نظرات همکاران و کارفرمایان",
      stats: [
        { label: "سال تجربه", value: "+۴" },
        { label: "پروژه موفق", value: "+۲۰" },
        { label: "خدمات اصلی", value: "وب و برند" },
      ],
      items: [
        {
          id: 1,
          name: "مدیر دیجیتال",
          company: "AFS (تهران)",
          role: "کارفرما",
          text: "صادق دانش عمیق فنی فرانت‌اند را با دیدگاهی دقیق در طراحی ترکیب می‌کند. او تمام حضور دیجیتال و خروجی برند ما را ارتقا داد.",
          result: "۳۰٪ افزایش در تعامل کاربران.",
        },
        {
          id: 2,
          name: "سرپرست محصول",
          company: "رافد (قم)",
          role: "همکار",
          text: "توانایی او در ساخت کامپوننت‌های منسجم و قابل استفاده مجدد و در عین حال حفظ تجربه کاربری با کیفیت بالا، قابل توجه است. یک مهره ارزشمند برای هر تیم محصول.",
          result: "کاهش ۵۰٪ زمان توسعه ویژگی‌های جدید.",
        },
      ],
    },
    humanMoment: {
      quote:
        "پشت هر پیکسل و هر خط کد، انسانی هست که برای جزئیاتی اهمیت قائل است که شاید هرگز نبینید.",
      attribution: "— یادداشتی آرام",
    },
    contact: {
      title: "همکاری",
      message:
        "بگو چه می‌سازی. ظرف ۲۴ ساعت پاسخ می‌دهم با یک زمان‌بندی روشن و گام‌های بعدی.",
      email: "m110s11061@gmail.com",
      phone: "+98 936 991 3228",
      linkedin: "linkedin.com/in/mohammad-sadegh-shahid",
      github: "github.com/mohammadsadeghshahid",
      linkedinUrl: "https://linkedin.com/in/mohammad-sadegh-shahid",
      githubUrl: "https://github.com/mohammadsadeghshahid",
      whatsappUrl: "https://wa.me/989369913228",
    },
    footer: {
      tagline:
        "ساخته‌شده با دقت، ریتم، و هدف. در حال پذیرش پروژه‌های سه‌ماهه سوم.",
      copyright: "© {year} صادق شهید",
    },
  },
};
