"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Sajan Shah Foundation",
    role: "Software Engineer",
    period: "April 2025 – May 2026",
    type: "Remote",
    color: "gold",
    metrics: ["SaaS Product", "Full-Stack", "AI Integration"],
    description:
      "Building intelligent SaaS platforms with Next.js, Node.js, and AI integrations. Developing real-time systems, RESTful APIs, and data pipelines for enterprise clients.",
    logo: "BW",
  },
  {
    company: "Sajan Shah Foundation",
    role: "Web Developer Intern",
    period: "August 2024 – April 2025",
    type: "On-Site",
    color: "cyan",
    metrics: ["React.js", "Node.js", "PostgreSQL"],
    description:
      "Developed and maintained web applications for NGO operations. Built donation tracking dashboards, volunteer management systems, and impact analytics platforms.",
    logo: "SS",
  },
  {
    company: "Parul University",
    role: "Teaching Intern",
    period: "July 2023 – March 2024",
    type: "On-site",
    color: "purple",
    metrics: ["100+ Students", "Web Dev", "Curriculum"],
    description:
      "Taught web development fundamentals to 100+ students. Designed curriculum covering HTML, CSS, JavaScript, React basics, and project-based learning.",
    logo: "PU",
  },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; text: string }> = {
  gold: { dot: "bg-gold-bright shadow-[0_0_15px_rgba(240,192,64,0.8)]", border: "border-gold-bright/30", badge: "bg-gold-bright/10 text-gold-bright border-gold-bright/30", text: "text-gold-bright" },
  cyan: { dot: "bg-cyan-bright shadow-[0_0_15px_rgba(0,255,240,0.8)]", border: "border-cyan-bright/30", badge: "bg-cyan-bright/10 text-cyan-bright border-cyan-bright/30", text: "text-cyan-bright" },
  purple: { dot: "bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]", border: "border-purple-400/30", badge: "bg-purple-400/10 text-purple-400 border-purple-400/30", text: "text-purple-400" },
};

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4">[ 04. CAREER ]</div>
          <h2 className="font-grotesk font-bold text-5xl md:text-[56px] gradient-text">Career Trajectory</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden sm:block" style={{ transform: "translateX(-50%)" }} />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.2, duration: 0.7 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 ${!isRight ? "md:[direction:rtl]" : ""}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 md:left-1/2 top-8 w-3 h-3 rounded-full ${c.dot} z-10 hidden sm:block`}
                    style={{ transform: "translate(-50%, -50%)" }}
                  />

                  {/* Card */}
                  <div className={`glass-card rounded-2xl p-6 border ${c.border} transition-all hover:shadow-lg md:col-start-${isRight ? "1" : "2"}`} style={{ direction: "ltr" }}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-grotesk font-black text-sm shrink-0 ${c.badge} border`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-grotesk font-bold text-xl ${c.text}`}>{exp.company}</h3>
                        <p className="text-text-primary font-semibold font-inter text-sm">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-xs font-mono text-text-muted">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {exp.type}</span>
                    </div>

                    <p className="text-text-secondary text-sm font-inter leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.metrics.map((m) => (
                        <span key={m} className={`text-xs font-mono px-3 py-1 rounded-full border ${c.badge}`}>{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
