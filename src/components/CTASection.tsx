import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleCTAClick = () => {
    window.open("https://offerlnks.com/aff_c?offer_id=3070&aff_id=21664&source=Iphone17", "_blank");
  };

  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-md">
        <Button
          variant="cta"
          size="lg"
          onClick={handleCTAClick}
          className="w-full h-14 text-lg rounded-xl"
        >
          👉 Continue to Entry Page
        </Button>
      </div>
    </section>
  );
};

export default CTASection;