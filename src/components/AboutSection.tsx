
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      {/* Animated shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10"
      >
        <div className="absolute -top-20 right-10 w-72 h-72 bg-snmblue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-snmteal-100/30 rounded-full blur-3xl"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            >
              Get Paid Faster{" "}
              <span className="relative">
                <span className="text-gradient relative z-10">Without Losing Patients</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-snmteal-200/50 -z-0 rounded-full transform -rotate-1"></span>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 text-xl mb-8"
            >
              We recover what's owed—without aggressive tactics—ensuring you maintain 
              your reputation and keep patients coming back. Our approach is built on 
              trust, compliance, and patient-centered communication.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-700 text-xl mb-10"
            >
              For accounts requiring stronger action, we report to major credit bureaus 
              after a defined period and can facilitate legal action through our network 
              of partnered debt collection attorneys when necessary.
            </motion.p>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="flex items-start bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-snmblue-200 transition-all duration-200"
                >
                  <div className="p-2 rounded-full bg-gradient-to-br from-snmteal-50 to-snmteal-100 mr-4">
                    <CheckCircle className="h-6 w-6 text-snmteal-500 flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{step.label}</p>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                  <div className="absolute h-1 w-full top-0 left-0 bg-gradient-to-r from-snmblue-500 to-snmteal-500"></div>
                  <CardContent className="p-6 text-center">
                    <motion.p 
                      className="text-4xl font-bold text-snmblue-600 mb-2"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 2,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <motion.div 
              className="col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="border-0 shadow-xl overflow-hidden card-shine">
                <div className="bg-gradient-to-r from-snmblue-600 to-snmteal-600 text-white p-8">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-2xl font-bold mb-3"
                  >
                    Our Promise
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-white/90 text-lg"
                  >
                    We turn outstanding medical receivables into consistent cash flow, 
                    while preserving the trust and dignity of your patient relationships.
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
