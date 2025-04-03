
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileCheck, 
  HeartPulse, 
  ShieldCheck, 
  PieChart, 
  MessageSquare, 
  Wallet 
} from "lucide-react";

const services = [
  {
    title: "Medical Debt Collection",
    description: "Specialized recovery of outstanding medical debts with a patient-centered approach.",
    icon: HeartPulse
  },
  {
    title: "HIPAA Compliant Process",
    description: "All collection efforts strictly adhere to healthcare privacy regulations and patient data protection.",
    icon: ShieldCheck
  },
  {
    title: "Early-Out Programs",
    description: "Proactive billing and follow-up services to recover payment before traditional collections.",
    icon: FileCheck
  },
  {
    title: "Insurance Resolution",
    description: "Expert navigation of insurance claims to maximize reimbursement and reduce patient burden.",
    icon: Wallet
  },
  {
    title: "Data Analytics",
    description: "Detailed reporting and insights to identify trends and optimize your revenue cycle.",
    icon: PieChart
  },
  {
    title: "Patient Communication",
    description: "Respectful and effective communication strategies that preserve patient relationships.",
    icon: MessageSquare
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Specialized Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            SNM Collections offers comprehensive debt recovery solutions tailored 
            specifically for the healthcare industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-snmblue-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-snmblue-600" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
