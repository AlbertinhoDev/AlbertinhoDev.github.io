import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EngineeringFocusSection from "@/components/portfolio/EngineeringFocusSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import MoreProjectsSection from "@/components/portfolio/MoreProjectsSection";
import CareerDirectionSection from "@/components/portfolio/CareerDirectionSection";
import OngoingWorkSection from "@/components/portfolio/OngoingWorkSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EngineeringFocusSection />
      <SkillsSection />
      <ProjectsSection />
      <MoreProjectsSection />
      <CareerDirectionSection />
      <OngoingWorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
