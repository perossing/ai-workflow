import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import AboutSection from "@/components/AboutSection";
import SplashImage from "@/components/SplashImage";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <AboutSection />
      <SplashImage />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <NewsSection />
      <FooterSection />
    </main>
  );
}
