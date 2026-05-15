import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { ResearchSection } from "@/components/sections/Research";
import { EducationSection } from "@/components/sections/Education";
import { ContactSection } from "@/components/sections/Contact";
import { MarqueeBand } from "@/components/ui/MarqueeBand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeBand />
      <AboutSection />
      <MarqueeBand />
      <SkillsSection />
      <MarqueeBand />
      <ProjectsSection />
      <MarqueeBand />
      <ExperienceSection />
      <MarqueeBand />
      <ResearchSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
