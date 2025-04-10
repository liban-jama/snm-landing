
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
    <section id="benefits" className="section-padding relative bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--snmblue-50),0.3),transparent)] -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">
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
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-snmteal-50 mr-4 group-hover:bg-snmteal-100 transition-colors">
                  <CheckCircle className="h-7 w-7 text-snmteal-500 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
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
