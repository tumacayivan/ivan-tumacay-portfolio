import Navbar from "@/components/Navbar";
import BackgroundMusic from "@/components/BackgroundMusic";
import ControlsNotice from "@/components/ControlsNotice";
import IntroSequence from "@/components/drift/IntroSequence";
import SceneCut from "@/components/drift/SceneCut";
import DriftHUD from "@/components/drift/DriftHUD";
import HeroSection from "@/components/HeroSection";
import SubjectProfileSection from "@/components/SubjectProfileSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import TradingBotsSection from "@/components/TradingBotsSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import SoftwarePortfolioSection from "@/components/SoftwarePortfolioSection";
import EducationSection from "@/components/EducationSection";
import WhySection from "@/components/WhySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <IntroSequence />
      <SceneCut />
      <BackgroundMusic />
      <ControlsNotice />
      <DriftHUD />
      <Navbar />
      <main>
        <HeroSection />
        <SubjectProfileSection />
        <SkillsMarquee />
        <TradingBotsSection />
        <PortfolioSection />
        <ServicesSection />
        <EducationSection />
        <ExperienceSection />
        <SoftwarePortfolioSection />
        <WhySection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
