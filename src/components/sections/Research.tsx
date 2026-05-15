"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, ExternalLink, Microscope, Brain, TrendingUp } from "lucide-react";

const tags = ["Deep Learning", "LSTM", "GRU", "CNN-LSTM", "Stock Market", "Python", "Keras", "TensorFlow"];

const researching = [
  { icon: Brain, label: "Explainable AI (XAI)" },
  { icon: Microscope, label: "LLM Fine-tuning" },
  { icon: TrendingUp, label: "Financial ML" },
];

export function ResearchSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="research" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4">[ 05. ACADEMIA ]</div>
          <h2 className="font-grotesk font-bold text-5xl md:text-[56px] gradient-text">Published Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Publication Card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 glass-card rounded-2xl p-8 border border-gold-bright/20 hover:border-gold-bright/40 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-bright/10 border border-gold-bright/20 flex items-center justify-center shrink-0">
                <BookOpen size={22} className="text-gold-bright" />
              </div>
              <div>
                <div className="section-label text-[9px] mb-2 text-gold-bright">RESEARCH PAPER · 2024</div>
                <h3 className="font-grotesk font-bold text-xl text-text-primary leading-snug">
                  Exploring Deep Learning Algorithms for Enhancing Stock Price Prediction
                </h3>
              </div>
            </div>

            <p className="text-text-secondary font-inter text-sm leading-relaxed mb-6">
              A comprehensive study of deep learning architectures — including{" "}
              <span className="text-cyan-bright font-semibold">LSTM</span>,{" "}
              <span className="text-cyan-bright font-semibold">GRU</span>, and{" "}
              <span className="text-cyan-bright font-semibold">CNN-LSTM hybrid models</span> —
              for predicting stock prices on NSE/BSE indices. The research demonstrates that
              CNN-LSTM achieves superior temporal pattern recognition with 87% directional accuracy
              over traditional models.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="skill-pill text-[11px]">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="/research-paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 px-5 py-2 text-sm"
              >
                <ExternalLink size={14} /> Read Paper
              </a>
            </div>
          </motion.div>

          {/* Currently Researching */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="glass-card rounded-2xl p-6 border border-cyan-bright/20 hover:border-cyan-bright/40 transition-all flex flex-col"
          >
            <div className="section-label text-[9px] mb-4 text-cyan-bright">CURRENTLY RESEARCHING</div>
            <h3 className="font-grotesk font-bold text-xl text-text-primary mb-6">
              Exploring next frontiers
            </h3>
            <div className="flex flex-col gap-4 flex-1">
              {researching.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-bg-elevated border border-border-subtle"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-bright/10 border border-cyan-bright/20 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-cyan-bright" />
                  </div>
                  <span className="text-text-secondary text-sm font-inter">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 rounded-xl bg-gold-bright/5 border border-gold-bright/10">
              <p className="text-text-muted text-xs font-mono text-center">
                Open to research collaborations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
