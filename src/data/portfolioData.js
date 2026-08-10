export const PORTFOLIO_DATA = {
  personal: {
    name: "Hemant Kumawat",
    role: "Student / Aspiring Full-Stack Developer",
    tagline: "Building modern web applications, exploring full-stack engineering, and sharing my technical learning journey.",
    bio: "I am a passionate student and aspiring Full-Stack Developer dedicated to mastering modern web development. I focus on building responsive frontend interfaces with HTML, CSS, JavaScript, React.js, and EJS, alongside robust backend architectures with Node.js, Express.js, SQL, MongoDB, Supabase, and WordPress. My goal is to build real-world projects, continuously expand my technical knowledge, and establish a strong developer personal brand.",
    location: "India (Open for Collaboration & Learning Opportunities)",
    email: "hemantkumawat.dev@gmail.com",
    availability: "Open for Collaboration & Developer Projects",
    resumeUrl: "/resume/Hemant-Kumawat-Resume.pdf",
    socials: {
      github: "https://github.com/kumawatshaab12",
      linkedin: "https://linkedin.com/in/hemant-kumawat-4090152bb",
      twitter: "https://x.com/kumawatshaab12"
    }
  },

  stats: [
    { label: "Technologies Learned", value: "10+", icon: "Code2" },
    { label: "Projects Built", value: "6+", icon: "CheckCircle2" },
    { label: "Focus Stack", value: "Full-Stack", icon: "Layers" },
    { label: "Code Commits", value: "500+", icon: "GitCommit" }
  ],

  highlights: [
    {
      title: "Interest in Web Development",
      description: "Driven by a deep passion for building interactive, accessible, and user-centric web applications.",
      icon: "Code2"
    },
    {
      title: "Frontend & UI Design",
      description: "Building responsive, modern interfaces using HTML, CSS, JavaScript, React.js, EJS, and WordPress.",
      icon: "Layout"
    },
    {
      title: "Backend & Databases",
      description: "Developing REST APIs and managing database systems with Node.js, Express.js, SQL, MongoDB, and Supabase.",
      icon: "Server"
    },
    {
      title: "Continuous Growth",
      description: "Constantly learning new technologies, solving development challenges, and growing my developer brand.",
      icon: "Zap"
    }
  ],

  skills: {
    categories: [
      { id: "all", name: "All Technologies" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend" },
      { id: "database", name: "Database & Services" }
    ],
    items: [
      // Frontend
      { name: "HTML", category: "frontend", level: 90, icon: "Code", color: "from-orange-500 to-red-500" },
      { name: "CSS", category: "frontend", level: 88, icon: "Palette", color: "from-blue-400 to-sky-500" },
      { name: "JavaScript", category: "frontend", level: 85, icon: "FileCode", color: "from-yellow-400 to-amber-500" },
      { name: "React.js", category: "frontend", level: 82, icon: "Code", color: "from-cyan-400 to-blue-500" },
      { name: "EJS", category: "frontend", level: 80, icon: "Layers", color: "from-purple-400 to-pink-500" },
      { name: "WordPress", category: "frontend", level: 78, icon: "Globe", color: "from-sky-600 to-indigo-700" },

      // Backend
      { name: "Node.js", category: "backend", level: 82, icon: "Server", color: "from-emerald-500 to-green-600" },
      { name: "Express.js", category: "backend", level: 80, icon: "Terminal", color: "from-gray-300 to-slate-500" },

      // Database & Backend Services
      { name: "SQL", category: "database", level: 78, icon: "Database", color: "from-blue-500 to-cyan-600" },
      { name: "MongoDB", category: "database", level: 80, icon: "Database", color: "from-emerald-600 to-teal-700" },
      { name: "Supabase", category: "database", level: 75, icon: "Cloud", color: "from-emerald-400 to-green-500" }
    ]
  },

  projects: [
    {
      id: "express-mongodb-blog",
      title: "Full-Stack Express & MongoDB Web App",
      shortDescription: "Dynamic server-rendered web application built with Node.js, Express.js, EJS templating, and MongoDB database storage.",
      fullDescription: "A full-stack web application developed as part of my learning journey. Demonstrates server-side rendering with EJS templates, RESTful API routing using Express.js, and persistent data operations with MongoDB.",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      tags: ["Node.js", "Express.js", "MongoDB", "EJS", "CSS"],
      githubUrl: "https://github.com/kumawatshaab12",
      liveUrl: "https://github.com/kumawatshaab12",
      featured: true,
      metrics: "Dynamic EJS Templating • MongoDB Integration",
      keyFeatures: [
        "Dynamic page rendering with EJS template engine",
        "Express.js RESTful routing and custom middleware",
        "MongoDB schema integration for data persistence",
        "Responsive styling with HTML5 and custom CSS"
      ]
    },
    {
      id: "react-frontend-hub",
      title: "React Interactive Web Application",
      shortDescription: "Modern single-page frontend application created with React.js, JavaScript (ES6+), and responsive CSS styling.",
      fullDescription: "Interactive web frontend designed to demonstrate React component hierarchy, state management, event handling, and modern responsive layout design.",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      tags: ["React.js", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/kumawatshaab12",
      liveUrl: "https://github.com/kumawatshaab12",
      featured: true,
      metrics: "React Components • Responsive UI",
      keyFeatures: [
        "Modular React component structure",
        "Interactive state and event handling",
        "Mobile-first responsive design across all viewports",
        "Clean, intuitive user interface"
      ]
    },
    {
      id: "supabase-sql-data-app",
      title: "Supabase & SQL Data Application",
      shortDescription: "Backend service exploration project leveraging Supabase authentication, cloud services, and relational SQL queries.",
      fullDescription: "A practical project exploring cloud backend integration. Demonstrates relational SQL data querying, user authentication flows, and connecting Supabase services to a frontend application.",
      category: "Backend & Services",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
      tags: ["Supabase", "SQL", "JavaScript", "Node.js"],
      githubUrl: "https://github.com/kumawatshaab12",
      liveUrl: "https://github.com/kumawatshaab12",
      featured: true,
      metrics: "SQL Queries • Supabase Backend",
      keyFeatures: [
        "Relational data management using SQL",
        "Supabase cloud backend and authentication setup",
        "Asynchronous JavaScript data fetching",
        "Structured data models"
      ]
    }
  ],

  experience: [
    {
      role: "Full-Stack Web Development Journey",
      company: "Student & Self-Driven Developer",
      location: "India",
      period: "2024 - Present",
      type: "Learning & Projects",
      description: "Focusing on full-stack web development. Mastering server-side architectures with Node.js and Express.js, integrating MongoDB, SQL, and Supabase databases, and building dynamic frontend web interfaces with React.js and EJS.",
      achievements: [
        "Built full-stack CRUD web applications using Express.js, EJS templates, and MongoDB.",
        "Developed interactive single-page frontend applications with React.js and modern CSS.",
        "Explored SQL relational queries and cloud backend services with Supabase."
      ],
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "SQL", "MongoDB", "Supabase"]
    },
    {
      role: "Web Development Foundations & Exploration",
      company: "Self-Paced Studies & Practice",
      location: "India",
      period: "2023 - 2024",
      type: "Foundation Phase",
      description: "Built fundamental computer science and web engineering skills. Built responsive web projects using HTML, CSS, JavaScript, EJS, and explored content management with WordPress.",
      achievements: [
        "Mastered semantic HTML5 and responsive CSS flexbox/grid layouts.",
        "Applied ES6+ JavaScript concepts for interactive web interfaces.",
        "Explored website deployment and WordPress custom site creation."
      ],
      skills: ["HTML", "CSS", "JavaScript", "EJS", "WordPress"]
    }
  ],

  education: [
    {
      degree: "Computer Science / Web Development Studies",
      institution: "Student & Self-Driven Developer Path",
      period: "Current",
      description: "Actively pursuing technical growth in full-stack web development, software logic, and modern web application stacks.",
      badge: "Student"
    }
  ],

  services: [
    {
      id: "frontend-dev",
      title: "Frontend Web Development",
      description: "Building responsive, modern, and interactive user interfaces using HTML, CSS, JavaScript, React.js, and EJS templates.",
      icon: "Code",
      features: [
        "Clean, responsive HTML5 & CSS layouts",
        "Interactive React.js web components",
        "Server-rendered EJS web pages",
        "Cross-device mobile compatibility"
      ]
    },
    {
      id: "backend-dev",
      title: "Backend & REST API Development",
      description: "Building server-side application logic, middleware, and RESTful web APIs using Node.js and Express.js.",
      icon: "Server",
      features: [
        "Node.js server environment setup",
        "Express.js RESTful API endpoints",
        "Middleware & routing logic",
        "JSON data processing"
      ]
    },
    {
      id: "database-services",
      title: "Database & Backend Services",
      description: "Integrating structured data storage and cloud backend services using SQL, MongoDB, and Supabase.",
      icon: "Database",
      features: [
        "MongoDB document collections & CRUD",
        "Relational database structure with SQL",
        "Supabase cloud backend integration",
        "Persistent data storage"
      ]
    },
    {
      id: "wordpress-dev",
      title: "WordPress Web Customization",
      description: "Setting up, customizing, and managing websites using WordPress content management system.",
      icon: "Globe",
      features: [
        "WordPress theme setup & customization",
        "Content structure & page management",
        "Plugin integration & layout styling",
        "User-friendly web management"
      ]
    }
  ],

  faqs: [
    {
      question: "Are you open to web development projects or learning collaborations?",
      answer: "Yes! As a student developer, I am eager to collaborate on web projects, contribute to open-source, and take on new development challenges."
    },
    {
      question: "What technologies are you currently focusing on?",
      answer: "My primary focus is full-stack web development using React.js, Node.js, Express.js, MongoDB, SQL, and Supabase."
    }
  ]
};
