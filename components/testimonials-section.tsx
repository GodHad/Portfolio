import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection({ testimonials }: { testimonials: { quote: string; name: string; role: string }[] }) {
  return (
    <AnimatedSection id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="A small selection of feedback from people I have worked with."
          description="Kept intentionally concise. The goal is simple: give a clearer sense of how the work feels from the client and product side."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-base leading-8 text-slate-300">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
