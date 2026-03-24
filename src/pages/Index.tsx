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
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-[-12%] top-[34%] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[140px]" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EngineeringFocusSection />
        <SkillsSection />
        <ProjectsSection />
        <MoreProjectsSection />
        <CareerDirectionSection />
        <OngoingWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
