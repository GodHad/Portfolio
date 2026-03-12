"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@/components/icons";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  name: string;
  links: NavLink[];
};

export function Navbar({ name, links }: NavbarProps) {
  const [active, setActive] = useState<string>(links[0]?.href ?? "#about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        threshold: [0.2, 0.35, 0.55],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [links]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6",
          scrolled
            ? "border-white/[0.12] bg-slate-950/[0.72] shadow-[0_10px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-white/10 bg-white/5 backdrop-blur-md"
        )}
      >
        <Link href="#home" className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
          {name}
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm text-slate-300 transition hover:text-white",
                active === link.href && "bg-white/10 text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 md:inline-flex"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-slate-950/[0.92] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white",
                  active === link.href && "bg-white/10 text-white"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-200"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
