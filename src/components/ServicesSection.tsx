
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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

const clients = [
  "Hospitals",
  "Urgent Care Clinics",
  "Private Practices",
  "Specialty Providers",
  "Outpatient Facilities",
  "Billing Companies"
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const cardHoverVariants = {
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(var(--snmblue-300),0.2),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(var(--snmteal-300),0.2),transparent)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            What <span className="relative">
              <span className="text-gradient relative z-10">We Do</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-snmteal-200/50 -z-0 rounded-full transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-xl">
            SNM Collections offers comprehensive debt recovery solutions tailored 
            specifically for the healthcare industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg h-full overflow-hidden group">
                  <CardHeader className="pb-2 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-snmblue-400 to-snmteal-400 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></div>
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-snmblue-100 to-snmblue-200 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <service.icon className="h-8 w-8 text-snmblue-600" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-snmblue-50/80 to-snmteal-50/80 rounded-3xl p-8 md:p-12 mb-24 backdrop-blur-sm shadow-xl border border-white/30"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Our simple process gets you paid faster with minimal effort on your part.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {step: 1, title: "Schedule a Free Consultation", desc: "We'll review your current A/R and pain points."},
              {step: 2, title: "Get a Custom Collection Plan", desc: "Tailored to your practice's size, specialties, and patient demographics."},
              {step: 3, title: "We Start Collecting", desc: "You get paid when we recover — nothing out of pocket."}
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-white text-snmblue-600 text-2xl font-bold mb-4 shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-snmblue-100 to-snmteal-100 opacity-60"></div>
                  <span className="relative z-10">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 right-0 w-24 h-px bg-gradient-to-r from-snmblue-200 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-snmblue-600 to-snmteal-600 hover:from-snmblue-700 hover:to-snmteal-700 text-white font-medium py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <a href="https://cal.com/snmcollections/discovery" className="flex items-center text-lg">
                <Calendar className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Book Your Free Strategy Call
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Who We <span className="relative">
              <span className="text-gradient relative z-10">Work With</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-snmteal-200/50 -z-0 rounded-full transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            We partner with healthcare providers of all sizes and specialties.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {clients.map((client, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                className="bg-white py-4 px-6 rounded-xl border border-gray-100 shadow-sm hover:border-snmblue-200 transition-all duration-200"
              >
                <p className="font-semibold text-gray-700">{client}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 mt-8 font-semibold"
          >
            If your patients owe you — we can help recover what's rightfully yours.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-10 border border-gray-100 shadow-xl mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-snmblue-50/50 to-snmteal-50/50 -z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Your Brand. Still Protected.</h2>
            <p className="text-gray-600 text-center text-lg">
              As a third-party agency, we represent your organization with the same professionalism 
              you'd expect from your own staff. Patients get reminders, payment options, and 
              communication that reflect positively on your practice — even during collections.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {q: "How do your fees work?", a: "We work on a contingency basis. That means if we don't collect, you don't pay."},
              {q: "Will patients know you're a third-party agency?", a: "Yes, but we operate with discretion, respect, and care — always protecting your brand."},
              {q: "What types of accounts do you accept?", a: "We accept everything from early-stage delinquencies to aged receivables and insurance denials."}
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
