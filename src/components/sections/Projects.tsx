"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

const categories = ["All Projects", "Full-Stack", "AI / ML", "Backend", "Android"];

const projects = [
  {
    id: 1,
    title: "LeadFlow AI",
    category: "Full-Stack",
    description: "Intelligent lead management SaaS with AI-powered scoring, automated follow-ups, and real-time analytics. Built for modern sales teams.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "OpenAI API", "Prisma", "Stripe"],
    github: "https://github.com",
    demo: "https://leadflow.ai",
    featured: true,
    gradient: "from-gold-bright/20 to-purple-accent/20",
  },
  {
    id: 2,
    title: "StockSense ML",
    category: "AI / ML",
    description: "Deep learning stock prediction using LSTM, GRU, CNN-LSTM hybrid. 87% directional accuracy on NSE/BSE.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "FastAPI"],
    github: "https://github.com",
    demo: "#",
    featured: false,
    gradient: "from-cyan-bright/20 to-purple-accent/20",
  },
  {
    id: 3,
    title: "NexaCommerce API",
    category: "Backend",
    description: "High-performance RESTful e-commerce API with JWT auth, payment gateway, and real-time inventory.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS S3", "Docker"],
    github: "https://github.com",
    demo: "#",
    featured: false,
    gradient: "from-gold-bright/20 to-cyan-bright/20",
  },
  {
    id: 4,
    title: "SentimentScope",
    category: "AI / ML",
    description: "Real-time social sentiment analysis using BERT transformers. Processes 10K+ tweets/minute with 94% accuracy.",
    tech: ["Python", "BERT", "FastAPI", "Redis", "WebSocket"],
    github: "https://github.com",
    demo: "#",
    featured: false,
    gradient: "from-purple-accent/20 to-cyan-bright/20",
  },
  {
    id: 5,
    title: "TaskForge",
    category: "Full-Stack",
    description: "Real-time collaborative project management with AI task suggestions, Kanban boards, and team analytics.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "OpenAI"],
    github: "https://github.com",
    demo: "#",
    featured: false,
    gradient: "from-gold-bright/20 to-purple-accent/20",
  },
  {
    id: 6,
    title: "MediPredict",
    category: "AI / ML",
    description: "Medical diagnosis ML system predicting patient risk scores using ensemble models with 91% precision.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Flask", "React"],
    github: "https://github.com",
    demo: "#",
    featured: false,
    gradient: "from-cyan-bright/20 to-gold-bright/20",
  },
  {
    id: 7,
    title: "DevPulse Analytics",
    category: "Backend",
    description: "Developer productivity API tracking GitHub metrics, deployment frequency, and DORA metrics with real-time dashboards.",
    tech: ["Node.js", "GraphQL", "PostgreSQL", "GitHub API", "Docker"],
    github: "https://github.com",
    demo: "#",
    featured: false,
    gradient: "from-purple-accent/20 to-gold-bright/20",
  },
  {
    id: 8,
    title: "FocusAI",
    category: "AI / ML",
    description: "AI-powered productivity platform that analyzes work patterns, auto-schedules deep work sessions, and provides intelligent task prioritization using LLM reasoning.",
    tech: ["Next.js", "OpenAI API", "LangChain", "PostgreSQL", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "#",
    featured: false,
    gradient: "from-gold-bright/20 to-cyan-bright/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card rounded-2xl overflow-hidden border border-border-subtle hover:border-gold-bright/30 transition-all duration-300 group flex flex-col"
        style={{ transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)" }}
      >
        <div className="bg-bg-elevated px-4 py-2.5 flex items-center gap-2 border-b border-border-subtle">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 bg-bg-surface rounded px-2 py-0.5 text-xs text-text-muted font-mono truncate">
            {project.title.toLowerCase().replace(/\s/g, "")}.dev
          </div>
        </div>
        <div className={`h-36 bg-gradient-to-br ${project.gradient} relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-grotesk font-black text-4xl text-white/10">{project.title.slice(0, 2)}</span>
          </div>
          <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded bg-bg-void/60 border border-border-subtle text-text-muted">
            {project.category}
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="font-grotesk font-bold text-lg text-text-primary group-hover:text-gold-bright transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm font-inter leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-bg-elevated border border-border-subtle text-text-muted">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-bg-elevated border border-border-subtle text-text-muted">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
          <div className="flex gap-4 pt-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-text-muted hover:text-gold-bright text-xs font-mono transition-colors">
              <GithubIcon size={13} /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-text-muted hover:text-cyan-bright text-xs font-mono transition-colors">
              <ExternalLink size={13} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const featured = projects.find((p) => p.featured)!;
  const filtered =
    activeCategory === "All Projects"
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <section id="projects" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4">[ 03. PORTFOLIO ]</div>
          <h2 className="font-grotesk font-bold text-5xl md:text-[56px] gradient-text">Featured Projects</h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured */}
        {(activeCategory === "All Projects" || activeCategory === featured.category) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden mb-6 border border-gold-bright/20 hover:border-gold-bright/40 transition-all group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`h-64 lg:h-auto bg-gradient-to-br ${featured.gradient} relative flex items-center justify-center min-h-[240px]`}>
                <div className="text-center">
                  <div className="font-grotesk font-black text-7xl text-white/10">{featured.title.slice(0, 2)}</div>
                </div>
                <div className="absolute top-4 left-4 font-mono text-xs px-3 py-1 rounded-full bg-gold-bright text-bg-void font-bold">★ FEATURED</div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="section-label text-[10px] mb-3">{featured.category}</span>
                <h3 className="font-grotesk font-black text-4xl gradient-text mb-4">{featured.title}</h3>
                <p className="text-text-secondary font-inter leading-relaxed mb-6">{featured.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tech.map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2 px-5 py-2 text-sm">
                    <GithubIcon size={16} /> Code
                  </a>
                  <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2 px-5 py-2 text-sm">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
