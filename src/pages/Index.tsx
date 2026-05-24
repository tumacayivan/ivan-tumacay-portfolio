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
import ClassifiedEffects from "@/components/ClassifiedEffects";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background doc-vignette">
      <ClassifiedEffects />
      <BackgroundMusic />
      <Navbar />
      <HeroSection />
      <SectionDivider label="SUBJECT PROFILE" code="SEC-01" />
      <SubjectProfileSection />
      <SectionDivider label="KNOWN SKILL SET" code="SEC-02" />
      <SkillsMarquee />
      <SectionDivider label="CASE FILES" code="SEC-04" />
      <PortfolioSection />
      <SectionDivider label="SERVICES OFFERED" code="SEC-03" />
      <ServicesSection />
      <SectionDivider label="EDUCATION FILE" code="SEC-02" />
      <EducationSection />
      <SectionDivider label="OPERATIONAL HISTORY" code="SEC-05" />
      <ExperienceSection />
      <SectionDivider label="SOFTWARE PROJECTS" code="SEC-07" />
      <SoftwarePortfolioSection />
      <SectionDivider label="WHY THIS SUBJECT" code="SEC-06" />
      <div id="why">
        <WhySection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
