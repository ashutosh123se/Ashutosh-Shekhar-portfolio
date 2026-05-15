"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    title: "Frontend",
    color: "gold",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "cyan",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "Prisma ORM", "JWT Auth"],
  },
  {
    title: "AI & Data Science",
    color: "purple",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenAI API"],
  },
  {
    title: "DevOps",
    color: "gold",
    skills: ["AWS", "Docker", "NGINX", "PM2", "GitHub Actions", "Ubuntu VPS"],
  },
];

const colorMap: Record<string, { border: string; pill: string; title: string; badge: string }> = {
  gold: {
    border: "border-gold-bright/20 hover:border-gold-bright/50",
    pill: "bg-gold-bright/10 text-gold-bright border border-gold-bright/20",
    title: "text-gold-bright",
    badge: "bg-gold-bright/10 border-gold-bright/30 text-gold-bright",
  },
  cyan: {
    border: "border-cyan-bright/20 hover:border-cyan-bright/50",
    pill: "bg-cyan-bright/10 text-cyan-bright border border-cyan-bright/20",
    title: "text-cyan-bright",
    badge: "bg-cyan-bright/10 border-cyan-bright/30 text-cyan-bright",
  },
  purple: {
    border: "border-purple-accent/20 hover:border-purple-accent/50",
    pill: "bg-purple-accent/10 text-purple-400 border border-purple-accent/20",
    title: "text-purple-400",
    badge: "bg-purple-accent/10 border-purple-accent/30 text-purple-400",
  },
};

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4">[ 02. EXPERTISE ]</div>
          <h2 className="font-grotesk font-bold text-5xl md:text-[56px] gradient-text">
            Tech I Master
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map(({ title, color, skills }, groupIdx) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: groupIdx * 0.1 + 0.2, duration: 0.6 }}
                className={`glass-card rounded-2xl p-6 border ${c.border} transition-all duration-500 group`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className={`font-grotesk font-bold text-xl ${c.title}`}>{title}</h3>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${c.badge}`}>
                    {skills.length} skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: groupIdx * 0.1 + i * 0.05 + 0.3 }}
                      className={`text-sm font-mono px-3 py-1.5 rounded-lg ${c.pill} transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-4 glass-card rounded-2xl p-6 border border-border-subtle"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-grotesk font-bold text-lg gradient-text mb-1">
                Currently Learning
              </h3>
              <p className="text-text-muted text-sm font-mono">
                Always evolving. Always building.
              </p>
            </div>
            <div className="flex gap-3">
              {["Rust 🦀", "LangChain 🔗"].map((item) => (
                <span
                  key={item}
                  className="font-mono text-sm px-4 py-2 rounded-full bg-gradient-to-r from-gold-bright/10 to-cyan-bright/10 border border-gold-bright/20 text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
