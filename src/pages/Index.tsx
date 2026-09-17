import Navbar from "@/components/Navbar";
import BackgroundMusic from "@/components/BackgroundMusic";
import ControlsNotice from "@/components/ControlsNotice";
import IntroSequence from "@/components/drift/IntroSequence";
import SceneCut from "@/components/drift/SceneCut";
import DriftHUD from "@/components/drift/DriftHUD";
import CarPass from "@/components/drift/CarPass";
import MontageSection from "@/components/MontageSection";
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
        <CarPass variant="rivalA" direction="right" label="Next · the private build" />
        <TradingBotsSection />
        <MontageSection />
        <PortfolioSection />
        <CarPass variant="rivalB" direction="left" label="Next · what I can run for you" />
        <ServicesSection />
        <EducationSection />
        <ExperienceSection />
        <SoftwarePortfolioSection />
        <CarPass variant="lead" direction="right" label="Last corner" />
        <WhySection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
