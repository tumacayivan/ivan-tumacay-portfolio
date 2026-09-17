import Navbar from "@/components/Navbar";
import BackgroundMusic from "@/components/BackgroundMusic";
import ControlsNotice from "@/components/ControlsNotice";
import IntroSequence from "@/components/transit/IntroSequence";
import Warp from "@/components/transit/Warp";
import MissionHUD from "@/components/transit/MissionHUD";
import DockingRing from "@/components/transit/DockingRing";
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

/**
 * MISSION 001 — departure, the long transit, the worlds visited, and
 * what he brings home. The docking rings are the seams between them.
 */
const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <IntroSequence />
      <Warp />
      <BackgroundMusic />
      <ControlsNotice />
      <MissionHUD />
      <Navbar />
      <main>
        <HeroSection />
        <SubjectProfileSection />
        <SkillsMarquee />
        <DockingRing label="Instrument bay ahead" />
        <TradingBotsSection />
        <PortfolioSection />
        <DockingRing label="Capability" />
        <ServicesSection />
        <EducationSection />
        <ExperienceSection />
        <DockingRing label="Survey" />
        <SoftwarePortfolioSection />
        <WhySection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
