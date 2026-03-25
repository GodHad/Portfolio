import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

type AboutSectionProps = {
  title: string;
  description: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
  credibilityItems: { label: string; value: string; description: string }[];
};

export function AboutSection({ title, description, paragraphs, stats, credibilityItems }: AboutSectionProps) {
  return (
    <AnimatedSection id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-8">
        <SectionHeading eyebrow="About" title={title} description={description} />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-8 text-slate-300">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <p className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {credibilityItems.map((item) => (
            <article key={item.label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">{item.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
