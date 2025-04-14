import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--snmblue-100),0.8),transparent_70%)]"></div>
      
      <div className="absolute top-20 right-10 w-64 h-64 bg-snmteal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-snmblue-300/20 rounded-full blur-3xl"></div>
      
      {/* Animated dots grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:w-1/2 z-10"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-snmblue-100 to-snmteal-100 text-snmblue-800 rounded-full"
            >
              Third-Party Medical Collections
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-extrabold leading-none mb-6"
            >
              Recover Medical Debt.{" "}
              <span className="text-gradient block mt-4">Without the Risk.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mt-6 mb-8 max-w-xl"
            >
              Compassionate Third-Party Debt Collection — You Only Pay If We Collect.
              Let your staff focus on care. We handle the unpaid accounts.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-snmblue-600 to-snmteal-600 hover:from-snmblue-700 hover:to-snmteal-700 shadow-lg hover:shadow-xl text-white font-semibold py-6 px-8 rounded-full">
                <motion.a 
                  href="https://cal.com/snmcollections/discovery" 
                  className="flex items-center text-lg relative z-10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Calendar className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Schedule Your Free Consultation
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <motion.div 
                className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-100 relative z-10 overflow-hidden"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-snmblue-50 to-snmteal-50 opacity-60"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-snmblue-500 to-snmteal-500"></div>
                
                <h3 className="text-2xl font-semibold mb-5 text-center text-gray-800">
                  Third-Party Medical Debt Collection That Works — Without Hurting Patient Trust
                </h3>
                
                <p className="text-gray-600 mb-8 text-center">
                  We specialize in ethical, HIPAA-compliant recovery for healthcare providers. 
                  No aggressive tactics. No upfront fees. Just results.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "30+", label: "Years Medical Collections Experience" },
                    { value: "90%+", label: "Recovery on Qualified Accounts" },
                    { value: "100%", label: "Contingency-Based – No Recovery, No Fee" },
                    { value: "Fully", label: "HIPAA & FDCPA Compliant" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-white"
                    >
                      <motion.h3 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 2,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                        className={`text-4xl font-bold mb-2 ${i % 2 === 0 ? 'text-snmblue-600' : 'text-snmteal-600'}`}
                      >
                        {stat.value}
                      </motion.h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-snmteal-200 rounded-full opacity-30 blur-md"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-snmblue-200 rounded-full opacity-30 blur-md"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
