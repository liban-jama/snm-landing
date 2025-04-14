
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.3
    }
  }
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute inset-0 -z-10 opacity-30" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="morphing-blob absolute top-20 right-10 w-64 h-64 bg-snmblue-100/40 rounded-blob -z-10 blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="morphing-blob absolute bottom-20 left-10 w-80 h-80 bg-snmteal-100/40 rounded-blob -z-10 blur-3xl"
        style={{ animationDelay: "-5s" }}
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Why Healthcare Providers{" "}
            <span className="relative">
              <span className="text-gradient relative z-10">Choose Us</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-snmteal-200/50 -z-0 rounded-full transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-xl">
            When you partner with SNM Collections, you gain more than just a collection agency. 
            You gain a dedicated ally in your financial success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 group"
            >
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-gradient-to-br from-snmteal-50 to-snmteal-100 mr-4 transition-colors duration-300 group-hover:from-snmteal-100 group-hover:to-snmteal-200">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle className="h-7 w-7 text-snmteal-600 flex-shrink-0" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
              
              {/* Gradient line that animates on hover */}
              <div className="w-0 h-1 bg-gradient-to-r from-snmblue-400 to-snmteal-400 mt-6 group-hover:w-full transition-all duration-300 ease-in-out rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
