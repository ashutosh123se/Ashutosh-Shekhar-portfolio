"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "MCA",
    fullName: "Master of Computer Applications",
    institution: "Christ University, Ghaziabad",
    period: "2025 – 2027",
    color: "gold",
    logo: "CU",
    current: true,
  },
  {
    degree: "BCA",
    fullName: "Bachelor of Computer Applications",
    institution: "Parul University",
    period: "2022 – 2025",
    cgpa: "9.12",
    color: "cyan",
    logo: "PU",
    current: false,
  },
];

export function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4">[ 06. EDUCATION ]</div>
          <h2 className="font-grotesk font-bold text-5xl md:text-[56px] gradient-text">
            Academic Foundation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 + 0.2, duration: 0.7 }}
              className={`glass-card rounded-2xl p-8 border ${
                edu.color === "gold"
                  ? "border-gold-bright/20 hover:border-gold-bright/40"
                  : "border-cyan-bright/20 hover:border-cyan-bright/40"
              } transition-all group relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 ${
                  edu.color === "gold" ? "bg-gold-bright" : "bg-cyan-bright"
                }`}
              />

              {edu.current && (
                <div className="available-badge inline-flex mb-4">
                  <div className="available-dot" />
                  Currently Enrolled
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center font-grotesk font-black text-base shrink-0 ${
                    edu.color === "gold"
                      ? "bg-gold-bright/10 border border-gold-bright/30 text-gold-bright"
                      : "bg-cyan-bright/10 border border-cyan-bright/30 text-cyan-bright"
                  }`}
                >
                  {edu.logo}
                </div>
                <div>
                  <div
                    className={`font-grotesk font-black text-3xl ${
                      edu.color === "gold" ? "text-gold-bright" : "text-cyan-bright"
                    }`}
                  >
                    {edu.degree}
                  </div>
                  <div className="text-text-secondary text-sm font-inter">{edu.fullName}</div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap size={15} className="text-text-muted" />
                  <span className="text-text-primary font-inter text-sm font-semibold">
                    {edu.institution}
                  </span>
                </div>
                <div className="text-text-muted font-mono text-xs">{edu.period}</div>
              </div>

              {edu.cgpa && (
                <div className="flex items-center gap-2 mt-4">
                  <Award size={15} className="text-gold-bright" />
                  <span className="text-text-secondary text-sm font-inter">CGPA:</span>
                  <span className="font-grotesk font-bold text-lg gradient-text">{edu.cgpa}</span>
                  <span className="text-text-muted text-xs font-mono">/ 10</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
