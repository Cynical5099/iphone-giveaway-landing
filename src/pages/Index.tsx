import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg">
        <HeroSection />
        <StepsSection />
        <CTASection />
        <TrustSection />
      </div>
    </div>
  );
};

export default Index;
