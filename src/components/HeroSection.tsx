import { Button } from "@/components/ui/button";
import smartphoneImage from "@/assets/smartphone-hero.jpg";

const HeroSection = () => {
  return (
    <section className="px-4 py-12 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-4 text-3xl font-bold text-text-hero leading-tight">
          Enter for a Chance to Get the New iPhone 17 Pro Max 📱
        </h1>
        
        <p className="mb-8 text-text-muted leading-relaxed">
          Spots are limited and entries close soon — follow the quick steps below to secure your entry.
        </p>
        
        <div className="mb-8 flex justify-center">
          <img
            src={smartphoneImage}
            alt="Modern smartphone giveaway prize"
            className="h-64 w-auto rounded-2xl shadow-[var(--shadow-soft)] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;