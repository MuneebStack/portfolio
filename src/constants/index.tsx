import { Layers, ClipboardCheck, Gauge, Lightbulb, Shapes, PenTool, Code } from "lucide-react";

import type {
  AbilityType,
  CounterItemType,
  ExperienceCardType,
  ExpLogoType,
  LogoIconType,
  NavLinkType,
  ProjectType,
  SocialImgType,
  TestimonialType,
  WordType
} from "../types";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
// import { FaUpwork } from "react-icons/fa6";

const navLinks: NavLinkType[] = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  }
];

const words: WordType[] = [
  { text: "Ideas", Icon: Lightbulb },
  { text: "Architectures", Icon: Shapes },
  { text: "Infrastructure", Icon: PenTool },
  { text: "Code", Icon: Code },
];

const counterItems: CounterItemType[] = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList: LogoIconType[] = [
  {
    imgPath: "images/logos/company-logo-1.png",
  },
  {
    imgPath: "images/logos/company-logo-2.png",
  },
  {
    imgPath: "images/logos/company-logo-3.png",
  },
  {
    imgPath: "images/logos/company-logo-4.png",
  },
  {
    imgPath: "images/logos/company-logo-5.png",
  },
  {
    imgPath: "images/logos/company-logo-6.png",
  },
  {
    imgPath: "images/logos/company-logo-7.png",
  },
  {
    imgPath: "images/logos/company-logo-8.png",
  },
  {
    imgPath: "images/logos/company-logo-9.png",
  },
  {
    imgPath: "images/logos/company-logo-10.png",
  },
  {
    imgPath: "images/logos/company-logo-11.png",
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "PixelPlay – Real-Time Image Processing",
    summary:
      "PixelPlay is a browser-based image processing application that applies visual effects in real time, delivering high performance without server-side processing.",
    highlights: [
      "Real-time image transformations executed entirely in the browser",
      "WebAssembly (Rust) for high-performance, compute-intensive image processing",
      "Zero server uploads, ensuring user privacy and low latency",
      "Seamless JavaScript ↔ WASM interoperability",
    ],
    skills: ["Rust", "WebAssembly", "JavaScript", "Tailwind CSS", "HTML5"],
    image: "images/showcase/pixelplay.png",
    liveUrl: "https://pixelplay.xionex.cloud",
  },
  {
    id: 2,
    title: "NewsFlux – Personalised News from Trusted Sources",
    summary:
      "NewsFlux is a modern, distraction-free news aggregation platform that delivers personalized feeds from multiple trusted sources.",
    highlights: [
      "API integrations with The Guardian and New York Times",
      "Search and feed customization by category or source",
      "Secure login and registration",
      "Server-side caching with Redis for performance",
      "Dockerized development, testing, and deployment",
      "Hosted on Google Cloud Platform",
    ],
    skills: ["Laravel", "PostgreSQL", "Redis", "React", "Docker", "Google Cloud Platform"],
    image: "images/showcase/newsflux.png",
    liveUrl: "https://newsflux.xionex.cloud",
  },
  {
    id: 3,
    title: "TeamTrade Manager – Team & Transfer Ledger",
    summary:
      "TeamTrade Manager is an admin dashboard for managing football teams, players, and player transfers with balance-based buy and sell operations.",
    highlights: [
      "Modeled team–player relationships and ownership rules",
      "Marketplace buy/sell transfers with balance validation",
      "Automatic balance deduction and team reassignment",
      "Dashboard analytics with visual team and player insights",
    ],
    skills: ["Symfony", "PostgreSQL", "React", "Tailwind CSS", "HTML5"],
    image: "images/showcase/teamtrade.png",
    liveUrl: "https://teamtrade.xionex.cloud",
  },
  {
    id: 4,
    title: "File Versioner (Open-Source Package)",
    summary:
      "File Versioner is an open-source Node.js CLI tool for versioning static assets and automatically updating file references.",
    highlights: [
      "File versioning via hash-based filenames",
      "Automatic reference updates in HTML, PHP, and related files",
      "JSON-based configuration for flexible setups",
      "Folder-level control over versioning behavior",
      "Optional in-file updates",
      "Customizable version string length",
      "CLI-based workflow using npx",
    ],
    skills: ["Node.js", "JavaScript", "TypeScript"],
    image: "images/showcase/file-versioner.png",
    liveUrl: "https://www.npmjs.com/package/file-versioner",
  },
  {
    id: 5,
    title: "DropMate (Open-Source Package)",
    summary:
      "DropMate is an open-source JavaScript / TypeScript library for building drag-and-drop image upload interfaces.",
    highlights: [
      "Drag-and-drop image uploads",
      "Image preview generation",
      "Reordering of uploaded and existing images",
      "Support for editing pre-loaded images",
      "Configurable file limits and input attributes",
      "Framework-agnostic integration",
      "TypeScript support with typed API",
    ],
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    image: "images/showcase/dropmate.png",
    liveUrl: "https://www.npmjs.com/package/dropmate",
  },
  {
    id: 6,
    title: "CaptchaBuilder (Open-Source Package)",
    summary:
      "CaptchaBuilder is an open-source PHP library for generating CAPTCHA images using the GD extension.",
    highlights: [
      "CAPTCHA image generation",
      "Configurable text length and font size",
      "Session-friendly CAPTCHA validation",
      "Simple API for refreshing CAPTCHA challenges",
      "Composer-based installation",
    ],
    skills: ["PHP", "HTML5", "CSS3"],
    image: "images/showcase/captcha-builder.png",
    liveUrl: "https://packagist.org/packages/muneebstack/captcha-builder"
  }
];

const abilities: AbilityType[] = [
  {
    Icon: Layers,
    title: "SaaS & Distributed Systems Architecture",
    desc: "Designing multi-tenant database schemas, decoupled backend services, and event-driven pipelines built for high concurrency and ultra-low latency."
  },
  {
    Icon: Gauge,
    title: "Performance & Infrastructure Optimization",
    desc: "Identifying system bottlenecks, refactoring high-volume database queries, and reducing cloud operational overhead while maintaining 99.99% uptime."
  },
  {
    Icon: ClipboardCheck,
    title: "Enterprise Integrations & Regulatory Compliance",
    desc: "Architecting secure API pipelines, SHA-256 cryptographic verification, custom payload signing, and strict regulatory compliance protocols (e.g., ZATCA e-invoicing standards)."
  }
]

export const techCategories = [
  {
    name: "Core Architectural Capabilities",
    skills: [
      {
        // Indigo/Blue -> Stability, Scalability, Systems
        name: "Distributed Systems",
        icon: "https://ui-avatars.com/api/?name=DS&background=1e1b4b&color=818cf8&bold=true&rounded=true&size=128"
      },
      {
        // Cyan/Teal -> Modern Cloud, Multi-Tenancy
        name: "Multi-Tenant SaaS",
        icon: "https://ui-avatars.com/api/?name=SAAS&background=083344&color=38bdf8&bold=true&rounded=true&size=128"
      },
      {
        // Emerald/Green -> Architectural Balance & Clean Code
        name: "Monolith vs. Microservices",
        icon: "https://ui-avatars.com/api/?name=MS&background=064e3b&color=34d399&bold=true&rounded=true&size=128"
      },
      {
        // Amber/Orange -> Real-time Data Streams & Event Flow
        name: "Event-Driven Pipelines",
        icon: "https://ui-avatars.com/api/?name=EDA&background=451a03&color=fbbf24&bold=true&rounded=true&size=128"
      },
      {
        // Purple/Violet -> Complex Query Optimization & Data Wisdom
        name: "High-Volume SQL & Query Refactoring",
        icon: "https://ui-avatars.com/api/?name=SQL&background=3b0764&color=c084fc&bold=true&rounded=true&size=128"
      },
      {
        // Rose/Crimson -> High Velocity & Ultra-Low Latency
        name: "Low-Latency API Engineering",
        icon: "https://ui-avatars.com/api/?name=API&background=4c0519&color=fb7185&bold=true&rounded=true&size=128"
      },
      {
        // Slate/Steel -> Cryptography & Hardened Security
        name: "Cryptographic Payload Signing (SHA-256)",
        icon: "https://ui-avatars.com/api/?name=SHA&background=0f172a&color=94a3b8&bold=true&rounded=true&size=128"
      },
      {
        // Gold/Warm Yellow -> Enterprise Compliance, Trust & Value
        name: "Regulatory Protocol Compliance (ZATCA)",
        icon: "https://ui-avatars.com/api/?name=REG&background=3f2e04&color=facc15&bold=true&rounded=true&size=128"
      },
      {
        // Coral/Red -> Redis In-Memory Speed & Hot Caching
        name: "Redis & Caching Strategy",
        icon: "https://ui-avatars.com/api/?name=CACHE&background=450a0a&color=f87171&bold=true&rounded=true&size=128"
      },
      {
        // Fuchsia/Electric Pink -> AI Innovation & Future Workflows
        name: "AI Developer Automation",
        icon: "https://ui-avatars.com/api/?name=AI&background=4a044e&color=e879f9&bold=true&rounded=true&size=128"
      },
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "PHP", icon: "images/skills/languages/php.svg" },
      { name: "JavaScript", icon: "images/skills/languages/javascript.svg" },
      { name: "TypeScript", icon: "images/skills/languages/typescript.svg" },
      { name: "Python", icon: "images/skills/languages/python.svg" },
      { name: "Rust", icon: "images/skills/languages/rust.svg" },
      { name: "Java", icon: "images/skills/languages/java.svg" },
      { name: "SQL", icon: "images/skills/languages/sql.svg" },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "images/skills/frontend/react.svg" },
      { name: "Vue", icon: "images/skills/frontend/vue.svg" },
      { name: "Next.js", icon: "images/skills/frontend/nextjs.svg" },
      { name: "React Native", icon: "images/skills/frontend/react-native.svg" },
      { name: "Web Assembly", icon: "images/skills/frontend/web-assembly.svg" },
      { name: "Three.js", icon: "images/skills/frontend/threejs.svg" },
      { name: "Web GL", icon: "images/skills/frontend/webgl.svg" },
      { name: "GSAP", icon: "images/skills/frontend/gsap.svg" },
      { name: "Redux", icon: "images/skills/frontend/redux.svg" },
      { name: "Inertia.js", icon: "images/skills/frontend/inertiajs.svg" },
      { name: "jQuery", icon: "images/skills/frontend/jquery.svg" },
      { name: "HTML5", icon: "images/skills/frontend/html5.svg" },
      { name: "CSS3", icon: "images/skills/frontend/css3.svg" },
      { name: "SASS", icon: "images/skills/frontend/sass.svg" },
      { name: "Tailwind", icon: "images/skills/frontend/tailwind.svg" },
      { name: "Bootstrap", icon: "images/skills/frontend/bootstrap.svg" },
      { name: "SVG", icon: "images/skills/frontend/svg.svg" },
      { name: "HTML5 Canvas", icon: "images/skills/frontend/html5-canvas.svg" },
      { name: "Chrome Extension", icon: "images/skills/frontend/chrome-extension.svg" },
      { name: "PWA", icon: "images/skills/frontend/pwa.svg" },
      { name: "Vite", icon: "images/skills/frontend/vite.svg" },
      { name: "Webpack", icon: "images/skills/frontend/webpack.svg" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "images/skills/backend/nodejs.svg" },
      { name: "Express.js", icon: "images/skills/backend/express.svg" },
      { name: "Laravel", icon: "images/skills/backend/laravel.svg" },
      { name: "Symfony", icon: "images/skills/backend/symfony.svg" },
      { name: "CodeIgniter", icon: "images/skills/backend/codeigniter.svg" },
      { name: "Doctrine", icon: "images/skills/backend/doctrine.svg" },
      { name: "PHPUnit", icon: "images/skills/backend/phpunit.svg" },
    ]
  },
  {
    name: "Databases & Caching",
    skills: [
      { name: "MySQL", icon: "images/skills/databases/mysql.svg" },
      { name: "MariaDB", icon: "images/skills/databases/mariadb.svg" },
      { name: "PostgreSQL", icon: "images/skills/databases/postgresql.svg" },
      { name: "SQLite", icon: "images/skills/databases/sqlite.svg" },
      { name: "MongoDB", icon: "images/skills/databases/mongodb.svg" },
      { name: "Redis", icon: "images/skills/databases/redis.svg" },
      { name: "SQL Server", icon: "images/skills/databases/sqlserver.svg" },
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "GCP", icon: "images/skills/cloud/gcp.svg" },
      { name: "AWS", icon: "images/skills/cloud/aws.svg" },
      { name: "Firebase", icon: "images/skills/cloud/firebase.svg" },
      { name: "Docker", icon: "images/skills/cloud/docker.svg" },
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "images/skills/tools/git.svg" },
      { name: "GitHub", icon: "images/skills/tools/github.svg" },
      { name: "GitLab", icon: "images/skills/tools/gitlab.svg" },
      { name: "Figma", icon: "images/skills/tools/figma.svg" },
      { name: "Postman", icon: "images/skills/tools/postman.svg" },
      { name: "WordPress", icon: "images/skills/tools/wordpress.svg" },
      { name: "Shopify", icon: "images/skills/tools/shopify.svg" },
    ]
  }
];

const experienceCards: ExperienceCardType[] = [
  {
    title: "Software Solutions Architect",
    date: "07/2026 - Present",
    logoPath: "images/experiences/persistbrands.jpg",
    achievements: [
      "Engineered core digital platforms and custom developer tooling, including internal CLI utilities, automation scripts, and AI-driven workflows, streamlining execution speed and multi-system rollouts.",
      "Partnered directly with C-level executives to translate business objectives into software solutions, resolve structural system bottlenecks, and optimize digital infrastructure for peak efficiency."
    ]
  },
  {
    title: "Team Lead",
    date: "05/2026 - 08/2026",
    logoPath: "https://ui-avatars.com/api/?name=D&background=27272a&color=ffffff&bold=true&rounded=true&size=128",
    achievements: [
      "Spearheaded engineering operations and GitLab release workflows for a B2B ERP accounting system, managing code reviews, technical roadmaps, and executive briefings to prepare the platform for global enterprise expansion.",
      "Led continuous architectural enhancements across core invoicing and payment modules, reducing deployment friction by 30% and improving overall platform stability for active business clients."
    ]
  },
  {
    title: "Senior Software Engineer",
    date: "04/2026 - 05/2026",
    logoPath: "https://ui-avatars.com/api/?name=D&background=27272a&color=ffffff&bold=true&rounded=true&size=128",
    achievements: [
      "Refactored bloat and redundant auto-generated code across primary financial modules, reducing codebase complexity by 35% and establishing clean, maintainable architecture patterns.",
      "Diagnosed and resolved critical production bugs in sales and purchase invoice workflows, restoring system reliability and directly stemming client churn across key enterprise accounts.",
    ]
  },
  {
    title: "Independent Senior Software Engineer",
    date: "10/2025 - 03/2026",
    logoPath: "https://ui-avatars.com/api/?name=SE&background=18181b&color=38bdf8&bold=true&rounded=true&size=128",
    achievements: [
      "Designed, fine-tuned, and deployed 3 applied-ML semantic search SBERT models; integrated the best model into an internal artifact repository for reusable asset retrieval.",
      "Built and deployed 2 React Native apps and end-to-end full-stack systems (Python, PHP, Node.js, Rust, Go), owning CI/CD, release pipelines, containerized deployments, APIs, and post-launch maintenance.",
      "Provided scoped technical consulting (NDA) for startups and enterprises, including technical audits, workflow optimization, and exportable, audit-ready systems. Deliverables were documented and handover-ready."
    ]
  },
  {
    title: "Senior Software Engineer",
    date: "03/2025 - 09/2025",
    logoPath: "images/experiences/connect.jpg",
    achievements: [
      "Led a cross-functional team of 6 (SE's + QA's) while simultaneously contributing hands-on across 10+ modules, including attendance, shifts, gratuity, airfare etc.",
      "Assisted 2 senior SE's across parallel teams and supported engineering decisions, requirement clarifications, and system-level planning across the entire application.",
      "Performed 20+ PR reviews weekly, collaborated closely with CSM, sales, IT, and stakeholders, and regularly supported critical production issues, including after business hours, to maintain smooth product delivery."
    ]
  },

  {
    title: "Software Engineer",
    date: "01/2024 - 02/2025",
    logoPath: "images/experiences/connect.jpg",
    achievements: [
      "Improved system efficiency by 30% through optimised queries, architectural refactoring, and streamlined data flows across multiple modules, significantly enhancing performance under scale.",
      "Strengthened maintainability by restructuring legacy code, enforcing clean coding standards, and improving long-term scalability.",
      "Collaborated closely with engineering, QA, and product teams to ensure fast and accurate execution."
    ]
  },

  {
    title: "Full Stack Engineer",
    date: "08/2023 - 08/2024",
    logoPath: "images/experiences/dynamic.jpg",
    achievements: [
      "Engineered a fully custom, high-performance PHP framework achieving 90+ lighthouse scores, dramatically improving load times and development agility.",
      "Built a complete, fully functional system on top of the custom framework, including a full admin panel, user-facing site, and business logic, optimised for speed and scalability.",
      "Playing a pivotal role in applications decision-making processes, ensuring alignment with business objectives and technology strategies."
    ]
  },

  {
    title: "Full Stack Engineer",
    date: "10/2022 - 12/2022",
    logoPath: "images/experiences/wo.jpg",
    achievements: [
      "Contributed to nearly 70% of the platform’s core development, helping transform the application into a viable business product.",
      "Implemented performance and stability improvements that increased overall maintainability of the system."
    ]
  },

  {
    title: "Backend Developer",
    date: "06/2022 - 09/2022",
    logoPath: "images/experiences/wo.jpg",
    achievements: [
      "Developed back-end functionality for 4 product modules, ensuring stable API communication and clean integration across modules.",
      "Demonstrated success in delivering efficient solutions, leading to recognition and advancement to Full Stack Engineer role."
    ]
  },

  {
    title: "Frontend Web Developer",
    date: "03/2022 - 05/2022",
    logoPath: "images/experiences/wo.jpg",
    achievements: [
      "Developed 4 product modules from Figma designs, significantly improving usability and engagement for internal and external users.",
      "Gained the trust and confidence of the company, leading to an advancement to Backend Developer role."
    ]
  },

  {
    title: "Full Stack Developer",
    date: "01/2022 - 06/2023",
    logoPath: "images/experiences/fiverr.jpg",
    achievements: [
      "Achieved Level 2 Seller status, delivering 50+ orders with 5-star ratings across all projects.",
      "Developed end-to-end features across frontend, backend, APIs, and databases for global clients.",
      "Built PWAs and Chrome extensions that improved client workflows and automation."
    ]
  }
];

const expLogos: ExpLogoType[] = [
  {
    name: "logo1",
    imgPath: "images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "images/logo3.png",
  },
];

const testimonials: TestimonialType[] = [
  // {
  //   name: "Mikail Puskullu",
  //   location: "Romorantin, France",
  //   review:
  //     "I wanted to express my heartfelt gratitude for the outstanding work you have done on my website. Your skills are truly remarkable, and I am amazed by your prompt and effective communication. Thanks to your talent, my website is now exceptional. Once again, thank you so much for your professionalism and your valuable contribution to the success of my project.",
  //   imgPath: "https://ui-avatars.com/api/?name=Mikail+Puskullu&background=6C63FF&color=ffffff",
  //   source: {
  //     url: "https://www.upwork.com/freelancers/~0132b24cfd95d29249",
  //     Icon: <FaUpwork className="text-green-400 text-base" />,
  //     desc: "Upwork Work History"
  //   },
  //   hasStars: false
  // },
  {
    name: "Kasun Samanpriya",
    location: "Dubai, United Arab Emirates",
    review: "I had the pleasure of working with Muneeb, who joined as a Software Engineer and within just a year was promoted to Senior Software Engineer—a clear reflection of his talent and dedication. His knowledge of technology is outstanding, and he has an impressive ability to solve complex problems and manage edge cases with ease. What I admired most about Muneeb is his commitment. He never limited himself to just his own tasks—he cared about the bigger picture, including the performance and quality of the entire application. He was always ready to support his teammates, guide them in the right direction, and put in extra effort when needed to get things done on time. Muneeb is a highly skilled professional who brings both technical excellence and dedication to his work, and I have no doubt he will continue to achieve great success in his career. I truly recommend Muneeb to any company looking for a skilled, passionate, and dedicated professional. He will undoubtedly be a great asset to any team he joins.",
    imgPath: "https://ui-avatars.com/api/?name=Kasun+Samanpriya&background=FFD93D&color=000000&size=128",
    source: {
      url: "https://www.linkedin.com/in/muneeb69",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  },
  {
    name: "Royston Joshua Alvares",
    location: "Bengaluru, India",
    review: "I had the privilege of working with Muneeb at Connect Resources, and he quickly became one of my go-to guides whenever I faced challenges. He was always approachable, and whenever I had doubts about code, he was willing to jump on a call and patiently work through the issue with me. Muneeb’s guidance and collaborative spirit had a big impact on my learning and growth. He combines strong technical expertise with humility and teamwork — qualities that make him an outstanding senior engineer and a great colleague to work with.",
    imgPath: "https://ui-avatars.com/api/?name=Royston+Joshua+Alvares&background=FF6B6B&color=ffffff",
    source: {
      url: "https://www.linkedin.com/in/muneeb69",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  },
  {
    name: "Nuwan Hettiarachchi",
    location: "Colombo, Srilanka",
    review: "I had the pleasure of working with Muneeb for over 1.5 years on a multi-tenant, large-scale HR platform. As a Senior Software Engineer and Team Lead, he played a key role in developing core components — including custom payroll and attendance modules — while collaborating on implementations and client requirement sessions. He demonstrated a strong understanding of both the technical and business aspects, making him one of the most reliable and technically proficient colleagues I’ve worked with. His ability to interpret client requirements and suggest improvements helped us design feasible, scalable solutions. He consistently considers all facets of a requirement — from edge cases to UX to system performance — delivering robust, future-proof solutions. This attention to detail is invaluable in our multi-client environment. He is a proactive self-starter who quickly adapts to new technologies and articulates ideas clearly. A natural mentor, he fosters knowledge sharing and collaboration, elevating the entire team. He is polite and humble, maintaining a positive, team-first attitude. He writes clean, well-structured code that is easy for others to understand, simplifying collaboration and maintenance. He never compromises on quality to meet deadlines and is undaunted by any challenge. With a deep understanding of our system architecture, he provides valuable insight during both planning and execution. In summary, Muneeb is an exceptional developer, leader, mentor, and team player. His contributions have been critical to our product’s success and our company’s growth. I highly recommend him; any organisation would be fortunate to have him on their team.",
    imgPath: "https://ui-avatars.com/api/?name=Nuwan+Hettiarachchi&background=6C63FF&color=ffffff",
    source: {
      url: "https://www.linkedin.com/in/muneeb69",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  },
  {
    name: "Muhammad Noushad",
    location: "Dubai, United Arab Emirates",
    review: "I had the pleasure of leading a team of software engineers, where Muneeb stood out as a truly exceptional team member. His ability to write clean, reusable, and future-proof code consistently impressed me. He always approached development with a forward-thinking mindset, anticipating future changes and ensuring the codebase remained adaptable. Beyond his technical strengths, muneeb demonstrated a high level of professionalism and a strong helping nature. He frequently went the extra mile, often investing additional time to ensure project success. His communication with clients was clear and effective, and he collaborated seamlessly with the sales and Customer Success (CSM) teams, ensuring alignment across all stakeholders. What also sets him apart is his calm and composed demeanor, even under pressure. He showed great potential in leadership, taking initiative and supporting his peers when needed. Overall, muneeb is not only a skilled developer but also a dependable and collaborative team player. I highly recommend him for any team looking for someone who brings both technical excellence and a positive team dynamic.",
    imgPath: "https://ui-avatars.com/api/?name=Muhammad+Noushad&background=4ECDC4&color=ffffff",
    source: {
      url: "https://www.linkedin.com/in/muneeb69",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  },
  // {
  //   name: "Mikail Puskullu",
  //   location: "Romorantin, France",
  //   review:
  //     "This freelancer is outstanding! I will definitely work with them again as they are a gem: excellent communication, top-notch work quality, and highly skilled in web development and design, among other abilities.",
  //   imgPath: "https://ui-avatars.com/api/?name=Mikail+Puskullu&background=6C63FF&color=ffffff",
  //   source: {
  //     url: "https://www.upwork.com/freelancers/~0132b24cfd95d29249",
  //     Icon: <FaUpwork className="text-green-400 text-base" />,
  //     desc: "Upwork Work History"
  //   },
  //   hasStars: false
  // },
  {
    name: "Emil Thomas",
    location: "Dubai, United Arab Emirates",
    review: "I had the privilege of working with Muneeb, and I can confidently say he is one of the most reliable and talented senior developers I’ve come across. His problem-solving mindset and positive attitude towards tackling complex challenges were truly inspiring. No matter how difficult the situation, I could always count on him to come up with practical solutions and innovative ideas. What sets Muneeb apart is not just the excellence in his own work—which was always flawless—but also his selfless nature. He never limited himself to just his responsibilities; instead, he went out of his way to support colleagues, offer guidance, and ensure everyone around him could overcome their hurdles. He is a true team player, a natural leader, and a great friend. Even though we were in different teams and zones, he would check in on me and others to make sure we were doing well—something that speaks volumes about his character.",
    imgPath: "https://ui-avatars.com/api/?name=Emil+Thomas&background=4ECDC4&color=ffffff",
    source: {
      url: "https://www.linkedin.com/in/muneeb69",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  },
  {
    name: "Rumesh Isaac",
    location: "Dubai, United Arab Emirates",
    review: "I had the privilege of managing Muneeb Shoukat directly at Connect HR, and I can confidently say he is one of the most dedicated and talented professionals I’ve worked with. During our time working together, Muneeb consistently demonstrated exceptional problem-solving skills, a strong work ethic, and remarkable attention to detail. He took ownership of his responsibilities, delivered results on time, and often went beyond expectations to support the team and ensure project success. What stood out most about Muneeb was his ability to collaborate effectively with cross-functional teams and bring innovative ideas to challenges. His contributions had a measurable impact on both project delivery and overall team performance. Beyond his technical skills, Muneeb is a reliable and approachable team player who elevates the people around him. I have no doubt he will continue to excel and add value wherever he goes, and I wholeheartedly recommend him for any future opportunity.",
    imgPath: "https://ui-avatars.com/api/?name=Rumesh+Isaac&background=FFD93D&color=000000",
    source: {
      url: "https://www.linkedin.com/in/muneeb69/",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  },
  {
    name: "Binvin B",
    location: "Bengaluru, India",
    review: "I’ve had the privilege of working with Muneeb Shoukat at Connect Resource, and he has consistently stood out as a highly skilled and dependable software engineer. He has a clear understanding of the solutions he builds and an impressive ability to explain complex processes in a simple, structured manner. On multiple occasions, he patiently addressed my queries, even taking the time to walk me through step-by-step explanations over Google Meet, which speaks volumes about his commitment and clarity. Beyond his technical expertise, Muneeb has demonstrated remarkable leadership qualities. He has been a constant source of support not only to his teammates but also to colleagues across different teams. His approachable nature, willingness to share knowledge, and passion for his work made him a go-to person for guidance and collaboration. I’m confident that wherever he goes, he will bring the same level of expertise, passion, and leadership that made him such an asset at Connect Resource. I truly recommend him as a valuable professional who can make a positive impact in any organization.",
    imgPath: "https://ui-avatars.com/api/?name=Binvin+B&background=FF6B6B&color=ffffff",
    source: {
      url: "https://www.linkedin.com/in/muneeb69",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  },
  {
    name: "Thilina Pathum",
    location: "Colombo, Srilanka",
    review: "I had the pleasure of working with Muneeb at Connect Resources, and I can confidently say he is an exceptional Senior Software Engineer and technical leader. His knowledge of software engineering principles, scalable architectures, and modern technology stacks is outstanding. He consistently approaches challenges with a solution oriented mindset and handles complex project situations with professionalism and confidence. </br></br> One of Muneeb’s strongest qualities is his communication and leadership style. Whenever the team faced technical or project related issues, he was always willing to support and guide everyone with patience and clarity. He has a unique ability to explain deep technical concepts and complex scenarios in a simple, clear, and easily understandable way, which greatly helped both developers and QA team members collaborate effectively. </br></br> As a QE professional, I especially appreciated his strong understanding of quality focused development and problem solving approach. He works with high motivation, supports the entire team, and ensures projects are handled efficiently from both technical and collaborative perspectives. Muneeb is truly a valuable asset to any organization, and I highly recommend him to any team looking for a skilled, reliable, and inspiring engineering professional.",
    imgPath: "https://ui-avatars.com/api/?name=Binvin+B&background=FF6B6B&color=ffffff",
    source: {
      url: "https://www.linkedin.com/in/muneeb69",
      Icon: <FaLinkedin className="text-blue-400 text-base" />,
      desc: "Linkedin Recommendation"
    },
    hasStars: false
  }
];

const socialImgs: SocialImgType[] = [
  {
    name: "Linkedin",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/muneeb69"
  },
  {
    name: "Github",
    Icon: FaGithub,
    url: "https://github.com/MuneebStack"
  },
  {
    name: "Stack Overflow",
    Icon: FaStackOverflow,
    url: "https://stackoverflow.com/users/16948533"
  },
  {
    name: "Leetcode",
    Icon: SiLeetcode,
    url: "https://leetcode.com/u/muneebshoukat60"
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  experienceCards,
  expLogos,
  testimonials,
  socialImgs,
  navLinks,
};