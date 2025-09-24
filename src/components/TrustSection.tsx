import { Clock, Shield, Users } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Users,
      text: "Limited spots available daily"
    },
    {
      icon: Shield,
      text: "Secure entry in under 2 minutes"
    },
    {
      icon: Clock,
      text: "Entries close soon"
    }
  ];

  return (
    <section className="px-4 py-6 border-t border-border">
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center text-center sm:flex-col sm:gap-2"
            >
              <point.icon className="w-5 h-5 text-trust-blue flex-shrink-0" />
              <span className="text-sm text-text-muted font-medium">
                {point.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;