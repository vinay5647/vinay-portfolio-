export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  isFuture?: boolean;
  metric?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  date: string;
  doi: string;
  citations: number;
  pdfUrl?: string;
  summary: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialId: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Vinay Bharadwaj",
  title: "AI & Machine Learning Engineer",
  roles: [
    "AI Engineer",
    "Python Developer",
    "Machine Learning Engineer",
    "Backend Developer",
    "FastAPI Developer",
    "AI Research Enthusiast",
    "Software Developer",
  ],
  heroBio: "Final-year Computer Science Engineering (AI & ML) student passionate about building intelligent software, AI-powered systems, scalable backend solutions, and real-world machine learning applications.",
  aboutBio: "Hi, I'm Vinay Bharadwaj — an aspiring AI & Machine Learning Engineer driven by curiosity and innovation. I specialize in building intelligent applications, AI-powered systems, and scalable backend solutions using Python, FastAPI, Machine Learning, and modern web technologies. I enjoy transforming complex ideas into practical, impactful software while continuously exploring the latest advancements in AI. My goal is to create technology that not only works efficiently but also delivers meaningful value to people and businesses.",
  profileImage: "/images/vinay.jpg",
  email: "bharadwajvinay40@gmail.com",
  phone: "+91 8147836287",
  location: "Mysore, India",
  portfolioUrl: "https://vinaybharadwaj-portfolio.vercel.app/",
  github: "https://github.com/vinay5647",
  githubProfile: "https://github.com/vinay5647",
  linkedin: "https://www.linkedin.com/in/vinay-bharadwaj-247ab7354",
  resumeUrl: "/Vinay_Bharadwaj_Resume.pdf",
  education: {
    degree: "Bachelor of Engineering",
    field: "Computer Science (AI & ML)",
    institution: "Maharaja Institute of Technology Mysore",
    period: "2021 - 2025 (Final Year)",
    highlights: ["AI", "Backend", "Python", "Problem Solving", "Continuous Learning"],
  },
};

export const FLOATING_TECH_BADGES = [
  "Python",
  "FastAPI",
  "Machine Learning",
  "AI",
  "NLP",
  "MongoDB",
  "SQL",
  "GitHub",
  "Flutter",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export const SKILLS_DATA = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 95, icon: "Code" },
      { name: "C++", level: 85, icon: "Cpu" },
      { name: "Java", level: 80, icon: "Terminal" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95, icon: "Layout" },
      { name: "CSS3 / Tailwind", level: 92, icon: "Palette" },
      { name: "React", level: 88, icon: "Atom" },
      { name: "Next.js", level: 85, icon: "Globe" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", level: 92, icon: "Zap" },
      { name: "REST APIs", level: 94, icon: "Server" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL", level: 88, icon: "Database" },
      { name: "MongoDB", level: 86, icon: "Layers" },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "Machine Learning", level: 90, icon: "Brain" },
      { name: "NLP", level: 88, icon: "MessageSquareText" },
      { name: "Deep Learning", level: 82, icon: "Network" },
      { name: "Data Science", level: 85, icon: "BarChart" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 92, icon: "GitBranch" },
      { name: "GitHub", level: 95, icon: "Github" },
      { name: "VS Code", level: 95, icon: "FileCode" },
      { name: "Flutter", level: 78, icon: "Smartphone" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", level: 90, icon: "Users" },
      { name: "Communication", level: 92, icon: "MessageCircle" },
      { name: "Problem Solving", level: 96, icon: "Lightbulb" },
      { name: "Teamwork", level: 94, icon: "HeartHandshake" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "people-meet-agent",
    title: "People Meet Agent",
    description: "Intelligent autonomous AI agent for matching schedules, preferences, and automated meeting orchestration.",
    longDescription:
      "People Meet Agent leverages NLP and predictive scheduling heuristics to automate interpersonal meeting coordination, intelligent availability parsing, and interest-based networking.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "AI Agents", "NLP", "React"],
    githubUrl: "https://github.com/vinay5647/people-meet-agent",
    liveUrl: "https://people-meet-agent.vercel.app",
    featured: true,
    metric: "🤖 Autonomous AI Agent",
  },
  {
    id: "sentiment-analysis-nlp",
    title: "Sentiment Analysis using NLP",
    description: "Deep learning NLP model for fine-grained emotion classification and multi-lingual sentiment detection.",
    longDescription:
      "Built with Python and HuggingFace transformers, this project analyzes text datasets, classifies complex emotional nuances, and visualizes sentiment polarity with real-time FastAPI endpoints.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "NLP", "Deep Learning", "FastAPI", "Tailwind CSS"],
    githubUrl: "https://github.com/vinay5647/sentiment-analysis-nlp",
    liveUrl: "https://sentiment-nlp-demo.vercel.app",
    featured: true,
    metric: "⚡ 85% Model Accuracy",
  },
  {
    id: "rain-detection-system",
    title: "Rain Detection System",
    description: "IoT and ML integrated precipitation prediction model using environmental sensor inputs and computer vision.",
    longDescription:
      "Predictive machine learning pipeline trained on micro-climatic atmospheric data to deliver hyper-local rain forecasts and real-time precipitation alerts.",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    tags: ["Machine Learning", "Python", "Data Science", "ESP8266", "SQL"],
    githubUrl: "https://github.com/vinay5647/rain-detection-system",
    featured: true,
    metric: "📡 Real-Time IoT Sensors",
  },
  {
    id: "ai-unit-converter",
    title: "AI Unit Converter",
    description: "Natural language contextual unit conversion engine powered by LLM parsing and dynamic formula calculation.",
    longDescription:
      "Converts complex scientific and engineering measurements based on conversational text queries e.g., 'convert 50 PSI to kilopascals in vacuum conditions'.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "Python", "FastAPI", "Tailwind CSS"],
    githubUrl: "https://github.com/vinay5647/ai-unit-converter",
    liveUrl: "https://ai-unit-converter.vercel.app",
    featured: true,
    metric: "📱 Cross-Platform Flutter",
  },
  {
    id: "agritech-startup-website",
    title: "Agritech Startup Website",
    description: "Modern full-stack web portal empowering agriculturalists with crop health insights and market analytics.",
    longDescription:
      "Features interactive crop disease diagnosis tools, weather alerts, local crop pricing feeds, and a seamless UI for farmers and agricultural vendors.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "FastAPI", "MongoDB", "Tailwind CSS", "Flutter"],
    githubUrl: "https://github.com/vinay5647/agritech-startup-website",
    liveUrl: "https://agritech-demo.vercel.app",
    featured: true,
    metric: "⏱️ 24h Hackathon Build",
  },
];

export const FUTURE_PROJECTS: Project[] = [
  {
    id: "smart-adaptive-traffic-management",
    title: "Smart Adaptive Traffic Management",
    description: "Computer vision and reinforcement learning system to adjust urban traffic signal timing dynamically.",
    longDescription:
      "A futuristic smart city initiative using live camera feeds and deep Q-learning to minimize vehicle congestion and prioritize emergency vehicles.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
    tags: ["Reinforcement Learning", "YOLOv8", "Python", "FastAPI", "Edge AI"],
    githubUrl: "https://github.com/vinay5647/smart-traffic-ai",
    featured: false,
    isFuture: true,
  },
  {
    id: "people-meet-agent-platform",
    title: "People Meet Agent AI Platform",
    description: "Enterprise SaaS platform scaling autonomous networking agents for global summits, campuses, and tech hubs.",
    longDescription:
      "Next-generation multi-agent coordination ecosystem with voice synthesis, calendaring integrations, and real-time graph database recommendations.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    tags: ["Multi-Agent AI", "Next.js 15", "GraphQL", "Python", "Redis"],
    githubUrl: "https://github.com/vinay5647/people-meet-platform",
    featured: false,
    isFuture: true,
  },
];

export const RESEARCH_PUBLICATIONS: ResearchPaper[] = [
  {
    id: "research-1",
    title: "Optimizing NLP Transformers for Real-Time Sentiment & Intent Parsing in Edge Systems",
    conference: "International Conference on AI & Intelligent Systems (ICAIS 2025)",
    date: "January 2025",
    doi: "10.1109/ICAIS.2025.1098234",
    citations: 12,
    summary:
      "Explores lightweight BERT distillation architectures and FastAPI streaming pipelines for sub-20ms inference latency in resource-constrained web backends.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "AI & Software Engineering Intern",
    company: "Tech Innovation Lab",
    period: "2024 - Present",
    description: [
      "Designed and deployed production FastAPI backend services serving ML models with low latency.",
      "Collaborated with cross-functional teams to integrate NLP models into web applications.",
      "Optimized SQL & MongoDB query performance for high-throughput AI features.",
    ],
    skills: ["Python", "FastAPI", "Machine Learning", "MongoDB", "REST APIs"],
  },
  {
    id: "exp-2",
    role: "Full Stack AI Developer (Academic Projects)",
    company: "Maharaja Institute of Technology Mysore",
    period: "2021 - 2025",
    description: [
      "Led student developer team in building Agritech and Rain Detection machine learning solutions.",
      "Implemented responsive web frontends using React, Next.js, and Tailwind CSS.",
      "Won multiple state-level ideathons with AI automation concepts.",
    ],
    skills: ["Python", "C++", "React", "Machine Learning", "Tailwind CSS"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford Online",
    date: "2024",
    skills: ["Supervised Learning", "Deep Learning", "Neural Networks", "Python"],
    credentialId: "ML-VINAY-8194",
  },
  {
    id: "cert-2",
    title: "FastAPI & Modern Python Microservices",
    issuer: "Udemy Certified",
    date: "2024",
    skills: ["FastAPI", "Async Python", "REST Architecture", "Swagger"],
    credentialId: "FAST-PY-3021",
  },
  {
    id: "cert-3",
    title: "Data Structures & Algorithms in C++ / Java",
    issuer: "GeeksforGeeks / Coding Ninjas",
    date: "2023",
    skills: ["Algorithms", "Problem Solving", "Graph Theory", "Dynamic Programming"],
    credentialId: "DSA-CPP-9912",
  },
];

export const ACHIEVEMENTS = [
  { value: 2, suffix: "×", label: "Ideathon Winner", icon: "Trophy" },
  { value: 1, suffix: "", label: "Technical Innovation Finalist", icon: "Award" },
  { value: 100, suffix: "%", label: "AI & ML Dedicated", icon: "Brain" },
  { value: 10, suffix: "+", label: "Projects Built", icon: "Rocket" },
];
