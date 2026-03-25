import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
};

export function Footer({
  name,
  links,
  socialLinks,
}: {
  name: string;
  links: { label: string; href: string }[];
  socialLinks: { label: string; href: string }[];
}) {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[1.8rem] border border-white/10 bg-white/5 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white">{name}</p>
          <p className="mt-2 text-sm text-slate-400">(c) 2026 {name}. Senior full-stack engineering for modern product teams.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-slate-300">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap] ?? MailIcon;

            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
