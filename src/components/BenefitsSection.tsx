
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Increased Cash Flow",
    description: "Accelerate your revenue cycle and improve practice financial health with our targeted collection strategies."
  },
  {
    title: "Preserved Patient Relationships",
    description: "Our respectful approach maintains the integrity of your provider-patient relationships."
  },
  {
    title: "Regulatory Compliance",
    description: "Rest assured with our strict adherence to HIPAA, FDCPA and all healthcare billing regulations."
  },
  {
    title: "Reduced Administrative Burden",
    description: "Let your team focus on patient care while we handle the complex collection process."
  },
  {
    title: "Custom Reporting",
    description: "Gain insights with detailed analytics on collection performance and payment trends."
  },
  {
    title: "Competitive Rates",
    description: "Our contingency-based fees mean you only pay when we successfully recover your outstanding balances."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Healthcare Providers <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            When you partner with SNM Collections, you gain more than just a collection agency. 
            You gain a dedicated ally in your financial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-snmteal-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
