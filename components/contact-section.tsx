"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

type ContactSectionProps = {
  email: string;
  title: string;
  description: string;
  socialLinks: { label: string; href: string }[];
};

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
};

export function ContactSection({ email, title, description, socialLinks }: ContactSectionProps) {
  return (
    <AnimatedSection id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionHeading eyebrow="Contact" title={title} description={description} />

            <p className="text-base leading-8 text-slate-300">
              Best direct contact:{" "}
              <Link href={`mailto:${email}`} className="text-cyan-200 transition hover:text-cyan-100">
                {email}
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? MailIcon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
