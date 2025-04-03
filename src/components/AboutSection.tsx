
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const processSteps = [
    {
      label: "Engage as Your Billing Department",
      description: "Patients recognize us as an extension of your team."
    },
    {
      label: "Customized Recovery Process",
      description: "Tailored to your practice & patient needs."
    },
    {
      label: "Results Without Hassle",
      description: "You focus on care, we handle collections."
    }
  ];

  const companyStats = [
    { label: "Years Experience", value: "30+" },
    { label: "First-Party Specialists", value: "100%" },
    { label: "Recovery Focus", value: "Patient Trust" },
    { label: "Collections Strategy", value: "Non-Aggressive" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-snmblue-50 to-snmteal-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Paid Faster <span className="text-gradient">Without Losing Patients</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We recover what's owed—without aggressive tactics—ensuring you maintain 
              your reputation and keep patients coming back. Our approach is built on 
              trust, compliance, and patient-centered communication.
            </p>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-snmteal-500 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">{step.label}</p>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {companyStats.map((stat, index) => (
              <Card key={index} className="border-gray-100 shadow-sm text-center">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-snmblue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
            <div className="col-span-2">
              <Card className="border-gray-100 shadow-sm bg-gradient-to-r from-snmblue-600 to-snmteal-500 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Our Promise</h3>
                  <p>
                    We turn outstanding medical receivables into consistent cash flow, 
                    while preserving the trust and dignity of your patient relationships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

