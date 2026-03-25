"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { ExternalLinkIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";

type Project = {
  title: string;
  category: string;
  role: string;
  summary: string;
  problem: string;
  contribution: string;
  impact: string;
  tech: readonly string[];
  highlights: readonly string[];
  image: string;
  demoHref: string;
  demoLabel: string;
};

type ProjectsSectionProps = {
  projects: readonly Project[];
  categories: readonly string[];
};

export function ProjectsSection({ projects, categories }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <AnimatedSection id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl [perspective:1400px]">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that shows how I approach product challenges, not just how I style cards."
          description="A curated set of builds across ecommerce, AI, and Web3, with the product context, engineering role, and delivery value made clear."
          action={
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeCategory === category
                      ? "border-cyan-300/40 bg-cyan-400/10 text-cyan-100"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          }
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.title}
                className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                glareClassName="mix-blend-screen"
                maxSkew={3.8}
                maxDrift={6}
              >
                <article>
                  <div className="relative h-64 overflow-hidden border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      suppressHydrationWarning
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
                      {project.category}
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-cyan-200/80">{project.role}</p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
                    </div>

                    <div className="grid gap-3 text-sm leading-7 text-slate-400">
                      <div>
                        <span className="font-medium text-white">Problem:</span> {project.problem}
                      </div>
                      <div>
                        <span className="font-medium text-white">Built:</span> {project.contribution}
                      </div>
                      <div>
                        <span className="font-medium text-white">Why it matters:</span> {project.impact}
                      </div>
                    </div>

                    <ul className="grid gap-2 text-sm text-slate-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={project.demoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                      >
                        {project.demoLabel}
                        <ExternalLinkIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
