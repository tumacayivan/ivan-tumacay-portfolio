import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import SoftwarePortfolioSection from "@/components/SoftwarePortfolioSection";
import EducationSection from "@/components/EducationSection";
import WhySection from "@/components/WhySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsMarquee />
      <PortfolioSection />
      <ServicesSection />
      <EducationSection />
      <ExperienceSection />
      <SoftwarePortfolioSection />
      <div id="why">
        <WhySection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
