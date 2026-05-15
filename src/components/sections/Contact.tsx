"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { MapPin, Clock, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  budget: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  "Full-Stack Development Project",
  "AI / ML Integration",
  "Data Science Consulting",
  "Freelance Collaboration",
  "Job Opportunity",
  "Research Partnership",
  "General Inquiry",
];

const budgets = [
  "< ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
  "Open to discuss",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      await axios.post("/api/contact", data);
      setSubmitted(true);
      reset();
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f0c040", "#00fff0", "#7928ca", "#ffffff"],
      });
    } catch (e) {
      setError("Failed to send message. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-bright/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="section-label mb-4">[ 07. CONNECT ]</div>
          <h2 className="font-grotesk font-bold text-5xl md:text-[56px] gradient-text">
            Let&apos;s Build Together
          </h2>
          <p className="text-text-secondary font-inter mt-4 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s talk. I&apos;m available for freelance,
            full-time, and research collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Info - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Status card */}
            <div className="glass-card rounded-2xl p-6 border border-green-500/20">
              <div className="available-badge inline-flex mb-4">
                <div className="available-dot" />
                Available for Work
              </div>
              <div className="space-y-3 text-sm font-inter">
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin size={15} className="text-gold-bright shrink-0" />
                  New Delhi, India
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Clock size={15} className="text-cyan-bright shrink-0" />
                  Response time: &lt;24 hours
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Mail size={15} className="text-purple-400 shrink-0" />
                  <a href="mailto:ashutoshshekhar37@gmail.com" className="hover:text-gold-bright transition-colors font-mono text-xs break-all">
                    ashutoshshekhar37@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Phone size={15} className="text-gold-bright shrink-0" />
                  <a href="tel:+919431471654" className="hover:text-gold-bright transition-colors font-mono text-xs">
                    +91 9431471654
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="glass-card rounded-2xl p-6 border border-border-subtle">
              <h3 className="font-grotesk font-bold text-text-primary mb-4">Find Me Online</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: GithubIcon, label: "GitHub", href: "https://github.com", handle: "@ashutosh-shekhar" },
                  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com", handle: "in/ashutosh-shekhar" },
                  { icon: Mail, label: "Email", href: "mailto:ashutoshshekhar37@gmail.com", handle: "ashutoshshekhar37@gmail.com" },
                ].map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border-subtle hover:border-gold-bright/30 hover:bg-gold-bright/5 transition-all group"
                  >
                    <Icon size={16} className="text-text-muted group-hover:text-gold-bright transition-colors" />
                    <div>
                      <div className="text-text-primary text-sm font-inter font-medium">{label}</div>
                      <div className="text-text-muted text-xs font-mono">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 border border-green-500/30 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={40} className="text-green-400" />
                </motion.div>
                <h3 className="font-grotesk font-bold text-2xl gradient-text mb-3">Message Sent!</h3>
                <p className="text-text-secondary font-inter">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost mt-6 px-6 py-2 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-card rounded-2xl p-8 border border-border-subtle space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label text-[10px] block mb-2" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      {...register("name")}
                      className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary font-inter text-sm focus:outline-none focus:border-gold-bright/50 focus:bg-bg-elevated placeholder-text-muted transition-all"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="section-label text-[10px] block mb-2" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email")}
                      className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary font-inter text-sm focus:outline-none focus:border-gold-bright/50 placeholder-text-muted transition-all"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label text-[10px] block mb-2" htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      {...register("subject")}
                      className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary font-inter text-sm focus:outline-none focus:border-gold-bright/50 transition-all"
                    >
                      <option value="">Select subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="text-red-400 text-xs mt-1 font-mono">{errors.subject.message}</p>}
                  </div>
                  <div>
                    <label className="section-label text-[10px] block mb-2" htmlFor="budget">Budget (Optional)</label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary font-inter text-sm focus:outline-none focus:border-gold-bright/50 transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="section-label text-[10px] block mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project, goals, and timeline..."
                    {...register("message")}
                    className="w-full bg-bg-elevated border border-border-subtle rounded-xl px-4 py-3 text-text-primary font-inter text-sm focus:outline-none focus:border-gold-bright/50 placeholder-text-muted resize-none transition-all"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message.message}</p>}
                </div>

                {error && (
                  <p className="text-red-400 text-sm font-mono bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full flex items-center justify-center gap-3 py-4 text-base font-grotesk font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-bg-void border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message →
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
