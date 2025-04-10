
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
    { label: "Collections Strategy", value: "Effective" }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-snmblue-50/50 to-snmteal-50/50 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-70 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bold mb-6">
              Get Paid Faster <span className="text-gradient">Without Losing Patients</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              We recover what's owed—without aggressive tactics—ensuring you maintain 
              your reputation and keep patients coming back. Our approach is built on 
              trust, compliance, and patient-centered communication.
            </p>
            
            <p className="text-gray-700 text-lg mb-8">
              For accounts requiring stronger action, we report to major credit bureaus 
              after a defined period and can facilitate legal action through our network 
              of partnered debt collection attorneys when necessary.
            </p>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <CheckCircle className="h-6 w-6 text-snmteal-500 mr-3 mt-1 flex-shrink-0" />
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
              <Card key={index} className="border-gray-100 shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow">
                <div className="absolute h-1 w-full top-0 left-0 bg-gradient-to-r from-snmblue-500 to-snmteal-500"></div>
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-snmblue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
            <div className="col-span-2">
              <Card className="border-0 shadow-lg overflow-hidden card-shine">
                <div className="bg-gradient-to-r from-snmblue-600 to-snmteal-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-3">Our Promise</h3>
                  <p className="text-white/90">
                    We turn outstanding medical receivables into consistent cash flow, 
                    while preserving the trust and dignity of your patient relationships.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
