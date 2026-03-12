import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";

type FeaturedCapability = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

export function ServicesSection({
  skills,
  featuredCapability,
}: {
  skills: { title: string; description: string }[];
  featuredCapability: FeaturedCapability;
}) {
  return (
    <AnimatedSection id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl [perspective:1400px]">
        <SectionHeading
          eyebrow="Services"
          title="The capabilities clients hire when they need quality, clarity, and dependable execution."
          description="Each offer is framed around outcomes that matter to founders, product teams, and businesses investing in serious web products."
        />

        <TiltCard className="group mb-6 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/12 via-white/5 to-violet-500/10 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-8" glareClassName="mix-blend-screen" maxSkew={3.2} maxDrift={5}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">{featuredCapability.eyebrow}</p>
              <h3 className="mt-4 max-w-2xl text-2xl font-semibold text-white md:text-3xl">{featuredCapability.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{featuredCapability.description}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {featuredCapability.highlights.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/10 bg-slate-950/55 px-4 py-4 text-sm font-medium text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </TiltCard>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <TiltCard
              key={skill.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07]"
              glareClassName="mix-blend-screen"
              maxSkew={3.8} maxDrift={6}
            >
              <article>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-400/10 text-sm font-semibold text-cyan-200">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{skill.description}</p>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
