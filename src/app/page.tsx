import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import AboutSection from "@/components/AboutSection";
import SplashImage from "@/components/SplashImage";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <AboutSection />
      <SplashImage />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
