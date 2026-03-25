import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <AnimatedSection id="process" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 p-6 md:p-8">
        <SectionHeading
          eyebrow="Process"
          title="A working style built to keep ambitious projects clear, moving, and under control."
          description="The goal is straightforward: reduce ambiguity early, make progress visible, and keep quality high as the product takes shape."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Step {index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
