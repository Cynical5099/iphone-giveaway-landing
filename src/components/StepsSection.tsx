import { CheckCircle } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Enter your details on the next page",
      description: "Quick and secure registration process"
    },
    {
      number: 2,
      title: "Confirm your email to lock your entry",
      description: "Check your inbox and click the confirmation link"
    },
    {
      number: 3,
      title: "Wait for confirmation then you're in!",
      description: "You'll receive notification if you're selected"
    }
  ];

  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-text-hero">
          How to Enter
        </h2>
        
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-4 p-4 bg-surface-elevated rounded-xl shadow-[var(--shadow-soft)]"
            >
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-trust-green text-white font-semibold text-sm">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-hero mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted">
                  {step.description}
                </p>
              </div>
              <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-xs text-center text-text-muted">
          No purchase necessary. Limited entries per household.
        </p>
      </div>
    </section>
  );
};

export default StepsSection;