"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Terminal, Code2, Database, BrainCircuit, Server, BarChart3 } from "lucide-react";

const whatIDo = [
  { icon: Code2, label: "Full-Stack Web Apps" },
  { icon: Server, label: "REST APIs" },
  { icon: Database, label: "Real-time Systems" },
  { icon: BrainCircuit, label: "ML Development" },
  { icon: Terminal, label: "AI Integrations" },
  { icon: BarChart3, label: "Data Pipelines" },
];

const terminalLines = [
  { delay: 0, prompt: "$", cmd: "whoami", output: "ashutosh-shekhar -- full-stack engineer & ai architect" },
  { delay: 1500, prompt: "$", cmd: "ls skills/", output: "react/ node/ python/ ml/ aws/ postgres/ docker/" },
  { delay: 3500, prompt: "$", cmd: "cat current_status.txt", output: "🟢 ACTIVE | Building SaaS + ML at Bwik Technologies\n   > Available for freelance & full-time roles" },
  { delay: 6000, prompt: "$", cmd: "ping ashutosh", output: "PING ashutosh: Response time < 24h\n   > Always ready to collaborate." },
];

function TerminalWindow() {
  const [lines, setLines] = useState<{ prompt: string; cmd: string; output?: string; typing?: boolean }[]>([]);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    terminalLines.forEach(({ delay, prompt, cmd, output }) => {
      setTimeout(() => {
        setLines((prev) => [...prev, { prompt, cmd, typing: true }]);
        setTimeout(() => {
          setLines((prev) =>
            prev.map((l, i) =>
              i === prev.length - 1 ? { ...l, typing: false, output } : l
            )
          );
        }, 800);
      }, delay);
    });
  }, [inView]);

  return (
    <div ref={ref} className="terminal w-full h-full">
      <div className="terminal-bar">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#febc2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="ml-3 text-text-muted text-xs font-mono">ashutosh@portfolio ~ terminal</span>
      </div>
      <div className="p-4 min-h-[300px] font-mono text-sm">
        {lines.map((line, i) => (
          <div key={i} className="mb-3">
            <div className="flex items-center gap-2">
              <span className="text-green-400">{line.prompt}</span>
              <span className="text-gold-bright">{line.cmd}</span>
              {line.typing && (
                <span className="w-2 h-4 bg-cyan-bright animate-blink inline-block" />
              )}
            </div>
            {line.output && (
              <div className="mt-1 text-text-secondary whitespace-pre-line pl-4 text-xs leading-relaxed">
                {line.output}
              </div>
            )}
          </div>
        ))}
        {lines.length > 0 && !lines[lines.length - 1].typing && (
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span className="w-2 h-4 bg-cyan-bright animate-blink inline-block" />
          </div>
        )}
      </div>
    </div>
  );
}

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-bright/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4">[ 01. ABOUT ME ]</div>
          <h2 className="font-grotesk font-bold text-5xl md:text-[56px] gradient-text">
            Crafting Digital Intelligence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-4 mb-8"
            >
              <p className="text-text-secondary text-base md:text-lg font-inter leading-relaxed">
                I&apos;m a{" "}
                <span className="text-gold-bright font-semibold">full-stack developer</span>{" "}
                specializing in React.js, Node.js, and PostgreSQL — building SaaS platforms,
                RESTful APIs, and real-time systems that scale.
              </p>
              <p className="text-text-secondary text-base md:text-lg font-inter leading-relaxed">
                As a{" "}
                <span className="text-cyan-bright font-semibold">data scientist</span>, I build
                ML models, AI integrations, and predictive analytics pipelines using Python,
                TensorFlow, and OpenAI APIs to extract intelligence from data.
              </p>
            </motion.div>

            {/* What I Do Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <h3 className="font-grotesk font-bold text-xl text-text-primary mb-4">
                What I Do
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {whatIDo.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="glass-card rounded-xl p-3 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold-bright/10 border border-gold-bright/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold-bright" />
                    </div>
                    <span className="text-text-secondary text-sm font-inter">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-full min-h-[400px]"
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
