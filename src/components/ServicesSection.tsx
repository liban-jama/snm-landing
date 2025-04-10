
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileCheck, 
  HeartPulse, 
  ShieldCheck, 
  PieChart, 
  MessageSquare, 
  Wallet,
  Gavel,
  CreditCard,
  Calendar
} from "lucide-react";

const services = [
  {
    title: "Medical Debt Collection",
    description: "Third-party recovery services that get results while preserving your reputation.",
    icon: HeartPulse
  },
  {
    title: "Insurance Resolution",
    description: "We pursue unresolved claims and reduce patient confusion around denied or delayed coverage.",
    icon: ShieldCheck
  },
  {
    title: "Early-Out Services",
    description: "Let us handle billing follow-ups before they go delinquent, boosting recovery rates.",
    icon: FileCheck
  },
  {
    title: "Legal & Credit Bureau Reporting",
    description: "For long-overdue accounts, we escalate recovery through compliant legal means and major credit bureaus.",
    icon: Gavel
  },
  {
    title: "Data & Reporting",
    description: "Transparent performance reports give you full visibility into your collections, trends, and outcomes.",
    icon: PieChart
  },
  {
    title: "Patient-Focused Communication",
    description: "We treat your patients with dignity — no threats, no pressure, just clear and respectful outreach.",
    icon: MessageSquare
  }
];

const benefits = [
  {
    title: "Only Pay If We Collect",
    description: "We don't charge a cent until we recover what you're owed."
  },
  {
    title: "Preserve Your Reputation",
    description: "Patients are treated professionally and respectfully, even when bills go unpaid."
  },
  {
    title: "Accelerate Your Cash Flow",
    description: "Get faster returns on delinquent accounts without lifting a finger."
  },
  {
    title: "Reduce Admin Load",
    description: "Free your team from chasing unpaid bills. We handle it all."
  },
  {
    title: "Stay Compliant",
    description: "We're fully HIPAA, FDCPA, and TCPA compliant — and always up to date with healthcare regulations."
  }
];

const clients = [
  "Hospitals",
  "Urgent Care Clinics",
  "Private Practices",
  "Specialty Providers",
  "Outpatient Facilities",
  "Billing Companies"
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="text-gray-600 text-lg">
            SNM Collections offers comprehensive debt recovery solutions tailored 
            specifically for the healthcare industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Healthcare Providers <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We understand the unique challenges healthcare providers face with unpaid accounts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover-scale">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-8 w-8 rounded-full bg-snmteal-100 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-snmteal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-snmblue-50 to-snmteal-50 rounded-2xl p-8 md:p-12 mb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Our simple process gets you paid faster with minimal effort on your part.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-snmblue-600 text-2xl font-bold mb-4 shadow-sm">1</div>
              <h3 className="text-xl font-semibold mb-2">Schedule a Free Consultation</h3>
              <p className="text-gray-600">We'll review your current A/R and pain points.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-snmblue-600 text-2xl font-bold mb-4 shadow-sm">2</div>
              <h3 className="text-xl font-semibold mb-2">Get a Custom Collection Plan</h3>
              <p className="text-gray-600">Tailored to your practice's size, specialties, and patient demographics.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-snmblue-600 text-2xl font-bold mb-4 shadow-sm">3</div>
              <h3 className="text-xl font-semibold mb-2">We Start Collecting</h3>
              <p className="text-gray-600">You get paid when we recover — nothing out of pocket.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://cal.com/snmcollections/discovery" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-snmblue-600 hover:bg-snmblue-700">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who We <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We partner with healthcare providers of all sizes and specialties.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 py-4 px-6 rounded-lg border border-gray-100">
                <p className="font-semibold text-gray-700">{client}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 mt-8 font-semibold">
            If your patients owe you — we can help recover what's rightfully yours.
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Your Brand. Still Protected.</h2>
          <p className="text-gray-600 text-center">
            As a third-party agency, we represent your organization with the same professionalism 
            you'd expect from your own staff. Patients get reminders, payment options, and 
            communication that reflect positively on your practice — even during collections.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How do your fees work?</h3>
              <p className="text-gray-600">We work on a contingency basis. That means if we don't collect, you don't pay.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Will patients know you're a third-party agency?</h3>
              <p className="text-gray-600">Yes, but we operate with discretion, respect, and care — always protecting your brand.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What types of accounts do you accept?</h3>
              <p className="text-gray-600">We accept everything from early-stage delinquencies to aged receivables and insurance denials.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
