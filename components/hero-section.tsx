"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { TiltCard } from "@/components/tilt-card";

type HeroSectionProps = {
  name: string;
  title: string;
  intro: string;
  availability: string;
  socialLinks: { label: string; href: string }[];
};

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
};

export function HeroSection({ name, title, intro, availability, socialLinks }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center [perspective:1400px]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {availability}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{name}</p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              View Projects
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Start a Conversation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? ArrowRightIcon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-violet-400/10 to-transparent blur-3xl" />
          <TiltCard className="group relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.06] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl" glareClassName="mix-blend-screen" maxSkew={2.8} maxDrift={5}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Primary focus</p>
                <p className="mt-3 text-2xl font-semibold text-white">Startup products that need real engineering depth</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  The best fit is usually a product that needs sharp frontend execution, solid backend decisions, and delivery that can keep up with the business.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/[0.15] to-violet-500/10 p-5">
                <p className="text-sm text-slate-400">Delivery style</p>
                <p className="mt-3 text-2xl font-semibold text-white">Senior, direct, and execution-focused</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Clear communication, sensible architecture, and product-minded implementation from early planning through launch.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Where I add the most value</span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-300">
                  9+ Years
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["Interactive frontends", "Fabric.js builders, premium UI systems, product surfaces"],
                  ["AI workflows", "Automation, copilots, assistants, and operational tooling"],
                  ["Full-stack delivery", "Frontend, backend, integrations, architecture, and launch"],
                ].map(([headline, copy]) => (
                  <div key={headline} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-white">{headline}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
