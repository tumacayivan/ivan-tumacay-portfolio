import Navbar from "@/components/Navbar";
import BackgroundMusic from "@/components/BackgroundMusic";
import ControlsNotice from "@/components/ControlsNotice";
import IgnitionSequence from "@/components/reaction/IgnitionSequence";
import Detonation from "@/components/reaction/Detonation";
import Cut from "@/components/reaction/Cut";
import Dosimeter from "@/components/reaction/Dosimeter";
import ActBreak from "@/components/reaction/ActBreak";
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
 * The record, in four parts: theory, the build, the test, the consequence.
 * Section ids stay fixed so every jump link and the cut between scenes
 * keep working.
 */
const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <IgnitionSequence />
      <Detonation />
      <Cut />
      <BackgroundMusic />
      <ControlsNotice />
      <Dosimeter />
      <Navbar />

      {/* Grain over everything. It is what the film is made of. */}
      <div aria-hidden className="grain-layer pointer-events-none fixed -inset-[12%] z-[100]" />

      {/* The shockwave shakes this, and nothing that is pinned to the frame. */}
      <main id="stage">
        <HeroSection />

        <ActBreak
          numeral="I"
          title="Theory"
          line="Who he is, where he trained, and what he is cleared to do."
        />
        <SubjectProfileSection />
        <SkillsMarquee />

        <ActBreak
          numeral="II"
          title="The build"
          line="The apparatus he made, the work he shipped, and the programme he runs."
        />
        <TradingBotsSection />
        <PortfolioSection />
        <ServicesSection />

        <ActBreak
          numeral="III"
          title="The test"
          line="Ten years of it, logged in order — training, roles, and every build still running."
        />
        <EducationSection />
        <ExperienceSection />
        <SoftwarePortfolioSection />

        <ActBreak
          numeral="IV"
          title="The consequence"
          line="What all of it means for the next piece of work — yours."
        />
        <WhySection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
