"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download, ChevronDown, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "100+", label: "Students Taught" },
  { value: "1", label: "Publication" },
];

const floatingPills = [
  { label: "React.js", color: "gold" },
  { label: "Python", color: "cyan" },
  { label: "Node.js", color: "gold" },
  { label: "AWS", color: "cyan" },
  { label: "SQL", color: "gold" },
  { label: "ML", color: "cyan" },
];

export function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-bright/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-gold-bright" />
              [ FULL-STACK DEVELOPER &amp; DATA SCIENTIST ]
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4"
            >
              <h1 className="font-grotesk font-black leading-none">
                <span className="block text-[72px] md:text-[96px] gradient-text-gold glow-text-gold">
                  Ashutosh
                </span>
                <span className="block text-[72px] md:text-[96px] gradient-text">
                  Shekhar
                </span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Data Scientist",
                  2000,
                  "AI Integration Engineer",
                  2000,
                  "React & Node.js Expert",
                  2000,
                  "ML Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl font-grotesk font-semibold text-cyan-bright"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-text-secondary text-base md:text-lg font-inter leading-relaxed mb-8 max-w-lg"
            >
              I engineer intelligent, scalable digital products by blending clean
              full-stack architecture with machine learning and AI to build the
              products of tomorrow.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="#projects"
                className="btn-gold flex items-center gap-2 px-6 py-3 text-sm font-grotesk font-bold"
                data-cursor="VIEW"
              >
                Explore My Work <ArrowRight size={16} />
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2 px-6 py-3 text-sm"
              >
                <GithubIcon size={16} /> View on GitHub
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 text-sm font-grotesk font-semibold text-text-secondary border border-border-subtle rounded-full hover:text-text-primary hover:border-text-muted transition-all"
              >
                <Download size={16} /> Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-grotesk font-black text-3xl gradient-text">{value}</div>
                  <div className="text-text-muted text-xs font-mono uppercase tracking-wider mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT - Profile */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center relative">
            {/* Profile Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              {/* Glow blob */}
              <div className="profile-glow" />

              {/* Rotating conic border */}
              <div
                className="absolute inset-0 rounded-full rotating-border"
                style={{
                  background:
                    "conic-gradient(from 0deg, #f0c040, #00fff0, #7928ca, #f0c040)",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-bg-void" />
              </div>

              {/* Profile image */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Ashutosh Shekhar — Full-Stack Developer & AI Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Orbiting dot */}
              <div className="absolute inset-0 rounded-full rotating-border" style={{ animationDuration: "6s" }}>
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold-bright"
                  style={{ boxShadow: "0 0 15px rgba(240,192,64,0.8)" }}
                />
              </div>
            </motion.div>

            {/* Floating pills */}
            <div className="relative w-full mt-8">
              <div className="flex flex-wrap justify-center gap-3">
                {floatingPills.map(({ label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    style={{ animationDelay: `${i * 0.5}s` }}
                    className={`animate-float ${color === "gold" ? "skill-pill" : "skill-pill skill-pill-cyan"}`}
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2 mt-16 scroll-indicator"
        >
          <span className="section-label text-[10px]">Scroll to explore</span>
          <ChevronDown size={20} className="text-gold-bright" />
        </motion.div>
      </div>
    </section>
  );
}
