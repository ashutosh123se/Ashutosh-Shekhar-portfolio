"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com/", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ashutosh-shekhar-344aa1221/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ashutoshshekhar37@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle bg-bg-deep/50 backdrop-blur-xl mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left - Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-grotesk font-black text-3xl text-gold-bright">A</span>
              <span className="font-grotesk font-black text-3xl text-cyan-bright">S</span>
            </div>
            <p className="text-text-secondary text-sm font-inter leading-relaxed mb-6">
              Engineered with precision.<br />
              Building the future, one line at a time.
            </p>
            <div className="available-badge inline-flex">
              <div className="available-dot" />
              Open to opportunities
            </div>
          </div>

          {/* Center - Links */}
          <div>
            <h3 className="font-grotesk font-bold text-text-primary mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-text-secondary hover:text-gold-bright text-sm font-inter transition-colors duration-200 flex items-center gap-1 group"
                >
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h3 className="font-grotesk font-bold text-text-primary mb-6">Say Hello</h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:ashutoshshekhar37@gmail.com"
                className="text-text-secondary hover:text-gold-bright text-sm font-mono transition-colors"
              >
                ashutoshshekhar37@gmail.com
              </a>
              <a
                href="tel:+919431471654"
                className="text-text-secondary hover:text-cyan-bright text-sm font-mono transition-colors"
              >
                +91 9431471654
              </a>
            </div>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg border border-border-subtle flex items-center justify-center text-text-secondary hover:text-gold-bright hover:border-gold-bright hover:shadow-[0_0_15px_rgba(240,192,64,0.2)] transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-text-muted text-xs font-mono">
          <p>© 2026 Ashutosh Shekhar. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and ☕ coffee.</p>
        </div>
      </div>
    </footer>
  );
}
