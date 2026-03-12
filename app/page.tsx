import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MouseGlowBackground } from "@/components/mouse-glow-background";
import { Navbar } from "@/components/navbar";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import {
  featuredCapability,
  navLinks,
  personalInfo,
  processSteps,
  projectCategories,
  projects,
  skills,
  socialLinks,
  stats,
  testimonials,
} from "@/data/site";

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip">
      <MouseGlowBackground />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.18] blur-[140px]" />
        <div className="absolute right-0 top-80 h-[24rem] w-[24rem] rounded-full bg-violet-500/[0.12] blur-[120px]" />
        <div className="absolute left-0 top-[52rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/[0.08] blur-[120px]" />
      </div>

      <Navbar name={personalInfo.name} links={navLinks} />
      <HeroSection
        name={personalInfo.name}
        title={personalInfo.title}
        intro={personalInfo.intro}
        availability={personalInfo.availability}
        socialLinks={socialLinks}
      />
      <AboutSection about={personalInfo.about} specialization={personalInfo.specialization} stats={stats} />
      <ServicesSection skills={skills} featuredCapability={featuredCapability} />
      <ProjectsSection projects={projects} categories={projectCategories} />
      <ProcessSection steps={processSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection email={personalInfo.email} socialLinks={socialLinks} />
      <Footer name={personalInfo.name} links={navLinks} socialLinks={socialLinks} />
    </main>
  );
}
