"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-void/80 backdrop-blur-xl border-b border-border-subtle shadow-2xl"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-1 group" aria-label="Ashutosh Shekhar - Home">
            <span className="font-grotesk font-black text-2xl text-gold-bright group-hover:drop-shadow-[0_0_10px_rgba(240,192,64,0.8)] transition-all duration-300">
              A
            </span>
            <span className="font-grotesk font-black text-2xl text-cyan-bright group-hover:drop-shadow-[0_0_10px_rgba(0,255,240,0.8)] transition-all duration-300">
              S
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-inter text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === href.slice(1)
                    ? "text-gold-bright"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-gold-bright to-cyan-bright transition-all duration-300 ${
                    activeSection === href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="available-badge">
              <div className="available-dot" />
              Available for Work
            </div>
            <Link
              href="#contact"
              className="btn-gold px-5 py-2 text-sm font-grotesk font-bold"
              data-cursor="CLICK"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text-primary p-2 rounded-lg border border-border-subtle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-bg-elevated border-l border-border-subtle flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                <div className="flex items-center gap-1">
                  <span className="font-grotesk font-black text-2xl text-gold-bright">A</span>
                  <span className="font-grotesk font-black text-2xl text-cyan-bright">S</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2 p-6 flex-1">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 font-inter text-base text-text-secondary hover:text-gold-bright hover:bg-gold-glow rounded-lg transition-all"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-border-subtle">
                <div className="available-badge mb-4 justify-center">
                  <div className="available-dot" />
                  Available for Work
                </div>
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold block text-center px-6 py-3 text-sm font-grotesk font-bold w-full"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
