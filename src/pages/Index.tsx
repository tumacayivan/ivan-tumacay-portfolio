import { useEffect } from "react";
import { notifyVisit } from "@/lib/notify";
import Navbar from "@/components/Navbar";
import BackgroundMusic from "@/components/BackgroundMusic";
import HeroSection from "@/components/HeroSection";
import SubjectProfileSection from "@/components/SubjectProfileSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import SoftwarePortfolioSection from "@/components/SoftwarePortfolioSection";
import EducationSection from "@/components/EducationSection";
import WhySection from "@/components/WhySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    notifyVisit();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BackgroundMusic />
      <Navbar />
      <HeroSection />
      <SubjectProfileSection />
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
