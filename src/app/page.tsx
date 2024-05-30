import ProjectSection from "@/components/contents/ProjectSection";
import HeroSection from "../components/contents/HeroSection";
import InfoSection from "@/components/contents/InfoSection";
import SkillsSection from "@/components/contents/SkillsSection";
import ContactSection from "@/components/contents/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center container *:my-12">
      <HeroSection />
      <InfoSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
