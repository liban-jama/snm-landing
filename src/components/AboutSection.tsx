
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const companyStats = [
    { label: "Years Experience", value: "30+" },
    { label: "Healthcare Clients", value: "500+" },
    { label: "Recovery Rate", value: "95%" },
    { label: "Staff Certifications", value: "100%" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-snmblue-50 to-snmteal-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">SNM Collections</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Since our founding, SNM Collections has specialized exclusively in healthcare debt recovery. 
              We understand the unique challenges of medical billing and collections, from complex insurance 
              issues to patient financial hardship.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Our approach balances effective collections with compassionate patient communication, 
              helping healthcare providers maintain their reputation while improving their bottom line.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-snmteal-500 mr-3 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Healthcare Specialization:</span> Focused exclusively on medical debt recovery
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-snmteal-500 mr-3 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Regulatory Expertise:</span> Full compliance with HIPAA, FDCPA and state regulations
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-snmteal-500 mr-3 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Patient-Centered Approach:</span> Respectful communication that preserves relationships
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-snmteal-500 mr-3 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Advanced Technology:</span> Secure systems that protect patient data
                </p>
              </div>
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
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p>
                    To help healthcare providers thrive financially while maintaining the highest 
                    standards of patient care and ethical collections practices.
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
