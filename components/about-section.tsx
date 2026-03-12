import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

type AboutSectionProps = {
  about: string;
  specialization: string;
  stats: { value: string; label: string }[];
};

export function AboutSection({ about, specialization, stats }: AboutSectionProps) {
  return (
    <AnimatedSection id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-8">
        <SectionHeading
          eyebrow="About"
          title="I build products that look premium, feel reliable, and help serious businesses earn trust faster."
          description="The goal is simple: combine strong visual execution, solid engineering, and commercial clarity so your product looks credible from the first interaction."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-8 text-slate-300">
            <p>{about}</p>
            <p>{specialization}</p>
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
      </div>
    </AnimatedSection>
  );
}
