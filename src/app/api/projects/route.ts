import { NextRequest, NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    title: "LeadFlow AI",
    category: "Full-Stack",
    description: "Intelligent lead management SaaS platform with AI-powered scoring and automation.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "OpenAI API", "Prisma", "Stripe"],
    github: "https://github.com",
    demo: "https://leadflow.ai",
    featured: true,
  },
  {
    id: 2,
    title: "StockSense ML",
    category: "AI / ML",
    description: "Deep learning stock prediction using LSTM, GRU, CNN-LSTM hybrid with 87% accuracy.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "FastAPI"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 3,
    title: "NexaCommerce API",
    category: "Backend",
    description: "High-performance RESTful e-commerce API with JWT auth and real-time inventory.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "SentimentScope",
    category: "AI / ML",
    description: "Real-time social sentiment analysis using BERT transformers.",
    tech: ["Python", "BERT", "FastAPI", "Redis", "WebSocket"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "TaskForge",
    category: "Full-Stack",
    description: "Real-time collaborative project management with AI task suggestions.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "OpenAI"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "MediPredict",
    category: "AI / ML",
    description: "Medical diagnosis ML system with 91% precision using ensemble models.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Flask", "React"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 7,
    title: "DevPulse Analytics",
    category: "Backend",
    description: "Developer productivity API tracking DORA metrics and GitHub analytics.",
    tech: ["Node.js", "GraphQL", "PostgreSQL", "GitHub API", "Docker"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 8,
    title: "DigiWell",
    category: "Android",
    description: "Digital wellness Android app with ML-powered screen time insights.",
    tech: ["Kotlin", "Android", "TensorFlow Lite", "Room DB", "Firebase"],
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const filtered = category && category !== "All Projects"
    ? projects.filter((p) => p.category === category)
    : projects;

  return NextResponse.json({ projects: filtered, total: filtered.length });
}
