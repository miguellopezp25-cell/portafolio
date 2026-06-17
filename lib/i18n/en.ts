import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    quote: "Quote",
    contact: "Contact",
  },
  hero: {
    badge: "Available for projects",
    name: "Miguel Angel Lopez Puebla",
    title: "Backend Software Engineer",
    titleAccent: "Cloud & API Development",
    location: "Guadalajara, Jalisco",
    ctaPortfolio: "View Portfolio",
    ctaAbout: "About Me",
  },
  about: {
    title: "Miguel Angel Lopez Puebla",
    role: "Backend Software Engineer — Cloud & API Development",
    bio: "Software Engineer with experience in backend development using Golang, Python, PostgreSQL, and cloud technologies. Specialized in REST API development, database optimization, modular architectures, automated testing, and scalable cloud deployments. Focused on maintainability, software quality, and performance optimization.",
    location: "Guadalajara, Jalisco, Mexico",
    education: "Tecnológico Superior de Jalisco — Computer Systems Engineering",
    educationDetail: "Computer Systems Engineering — 2019 – 2023",
    license: "Professional License 15228724",
    traits: "Self-taught, honest, committed, responsible",
    hobbies: "Snake and ant breeding, technology, reading",
    experience: "Professional Experience",
    skills: "Technical Skills",
    educationSection: "Education",
    skillsList: [
      { title: "Languages", skills: "Golang, TypeScript, Python, Java" },
      { title: "Backend", skills: "REST APIs, SQLC, Microservices, Modular Architecture" },
      { title: "Databases", skills: "SQL, PostgreSQL, JSONB, Query Optimization" },
      { title: "Cloud & DevOps", skills: "AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD" },
      { title: "Testing", skills: "Testify, SQLMock, Unit Testing, 95%+ Coverage" },
      { title: "Monitoring", skills: "Prometheus, Loki" },
      { title: "Frontend & Web", skills: "React, Next.js" },
      { title: "Tools", skills: "Git, GitHub, Postman, Beaver" },
      { title: "Languages", skills: "Spanish (Native), English (B2)" },
      { title: "AI & Productivity", skills: "Claude Code, Cursor, GitHub Copilot, ChatGPT" },
    ],
    experienceList: [
      {
        role: "Appointmetly — Backend Developer (Golang/Python)",
        date: "Feb 2024 – Mar 2026",
        achievements: [
          "Led the design and development of 30+ REST APIs using modular backend architecture.",
          "Developed and maintained backend microservices using Golang, Python, SQLC, and PostgreSQL.",
          "Optimized complex SQL queries and JSONB structures to improve performance.",
          "Achieved over 95% automated test coverage using Testify and SQLMock.",
          "Managed cloud deployments using AWS EC2, S3, and Lambda with Docker and Kubernetes.",
          "Integrated monitoring and observability solutions using Prometheus and Loki.",
        ],
      },
      {
        role: "Global Gas — Web Developer",
        date: "Jun 2023 – Feb 2024",
        achievements: [
          "Collaborated on migrating a Java monolith to a Node.js microservices architecture.",
          "Developed authentication and error handling middlewares for backend APIs.",
          "Improved technical documentation and onboarding processes using Postman.",
          "Participated in technical requirements analysis and backend service improvements.",
          "Maintained and optimized a Java-based monolithic system prior to migration.",
        ],
      },
      {
        role: "Freelance — Full Stack Developer",
        date: "2024 – Present",
        achievements: [
          "Developed full stack web applications using React/Next.js with Golang backends.",
          "Implemented REST APIs and backend business logic using Golang and PostgreSQL.",
          "Designed scalable layered architectures using handlers, services, and repositories.",
          "Optimized PostgreSQL relational structures and SQL query performance.",
          "Configured hosting, SSL certificates, and deployment environments.",
        ],
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    description: "Some of the projects I've worked on as a private and freelance developer.",
    projects: [
      {
        title: "Appointmetly - Business Appointment Management",
        desc: "Led the design and development of 30+ REST APIs with modular architecture in Go/Python. SQL and JSONB query optimization, 95%+ test coverage with Testify/SQLMock. Monitoring with Prometheus and Loki.",
        tags: ["Go", "Python", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
      },
      {
        title: "Java to Microservices Migration — Global Gas",
        desc: "Migrated a Java monolith to Node.js microservices with authentication and error handling middlewares. Technical documentation with Postman.",
        tags: ["Java", "Node.js", "Express", "Microservices"],
      },
      {
        title: "Educational Control System",
        desc: "Scalable layered architecture (handlers, services, repositories) in Go and React. PostgreSQL query optimization improving load by 20%. Docker deployment.",
        tags: ["Go", "React", "PostgreSQL", "Docker"],
      },
      {
        title: "Tattoo Studio - Booking System",
        desc: "Frontend for booking management and portfolio with Next.js. Responsive interface, hosting configuration, SSL certificates and domains.",
        tags: ["TypeScript", "Next.js", "React"],
      },
      {
        title: "Admin Module & Gallery",
        desc: "Administrative frontend for dynamic content management with Next.js and React. Git/GitHub workflow.",
        tags: ["TypeScript", "Next.js", "React"],
      },
      {
        title: "Medical Practice Management",
        desc: "Frontend for medical office management with Next.js and React. Optimized interface for user experience.",
        tags: ["TypeScript", "Next.js", "React"],
      },
      {
        title: "Seed Store - Catalog & Shopping Cart",
        desc: "Online store with seed catalog, shopping cart, and order creation. Direct payment via WhatsApp. Built with Next.js and TypeScript.",
        tags: ["TypeScript", "Next.js", "React"],
      },
      {
        title: "Restaurant - Digital Menu",
        desc: "Interactive digital menu with React and TypeScript. Modern interface focused on performance and user experience.",
        tags: ["React", "TypeScript", "Next.js"],
      },
      {
        title: "Personal Portfolio",
        desc: "My professional portfolio built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui. Responsive design, dark/light mode, i18n Spanish/English.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind"],
      },
    ],
  },
  services: {
    title: "Technologies",
    description: "These are some of the technologies I work with to build robust and scalable solutions.",
    subTitle: "Services",
    subDescription: "I offer complete solutions to take your ideas to the next level, from frontend to infrastructure and artificial intelligence.",
    technologies: [
      { name: "Golang" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    categories: [
      {
        title: "Frontend",
        description: "Modern, responsive, high-performance interfaces.",
        services: [
          { title: "Web Development", desc: "Web applications with React, Next.js and Tailwind CSS. Fast, accessible and attractive interfaces." },
          { title: "UI/UX Design", desc: "User-centered interface design, responsive and optimized for any device." },
        ],
      },
      {
        title: "Backend",
        description: "Robust APIs, microservices, and scalable data management.",
        services: [
          { title: "APIs & Microservices", desc: "REST API and microservice development in Go, Python and Node.js." },
          { title: "Databases", desc: "Design, implementation and optimization of relational and NoSQL databases." },
          { title: "Containers & Orchestration", desc: "Containerization with Docker and orchestration with Kubernetes for scalable deployments." },
        ],
      },
      {
        title: "Infrastructure",
        description: "Server installation, cabling, and computer equipment maintenance.",
        services: [
          { title: "Server Installation & Cabling", desc: "Rack assembly, structured cabling, network configuration, and server setup." },
          { title: "Equipment Maintenance", desc: "Optimization, cleaning, formatting, and updating of computer equipment." },
          { title: "Software Installation", desc: "Installation and configuration of development software, servers, and databases." },
          { title: "Technical Support", desc: "Remote and on-site IT infrastructure support: networks, deployment, and system administration." },
        ],
      },
      {
        title: "Artificial Intelligence",
        description: "AI service integration and intelligent automation.",
        services: [
          { title: "AI API Integration", desc: "Integration with OpenAI, Google AI, Claude and other platforms to power your applications." },
          { title: "Intelligent Automation", desc: "AI-powered automated processes: data analysis, content generation, and decision making." },
          { title: "Chatbots & Assistants", desc: "Development of chatbots and virtual assistants with natural language processing." },
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    description: "Send me a direct message via WhatsApp.",
    name: "Name",
    phone: "Phone",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send via WhatsApp",
  },
  footer: {
    tagline: "Backend & Cloud Developer",
  },
  notFound: {
    title: "Page not found",
    message: "The page you're looking for doesn't exist or was moved. Go back home instead.",
    button: "Go home",
  },
};
