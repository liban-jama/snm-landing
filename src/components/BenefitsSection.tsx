
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    y: 20,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.6
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.2
    }
  }
};

const BenefitsSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleMediaChange = (e) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <section id="benefits" className="py-24 md:py-32 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* Only show decorative blobs on desktop */}
      {isClient && !isReducedMotion && (
        <>
          <div 
            className="absolute top-20 right-10 w-64 h-64 bg-snmblue-100/40 rounded-blob -z-10 blur-3xl hardware-accelerated will-change-transform hidden md:block"
          ></div>
          <div 
            className="absolute bottom-20 left-10 w-80 h-80 bg-snmteal-100/40 rounded-blob -z-10 blur-3xl hardware-accelerated will-change-transform hidden md:block"
          ></div>
        </>
      )}
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            isClient ? (
              <motion.div 
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 group hardware-accelerated"
              >
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-gradient-to-br from-snmteal-50 to-snmteal-100 mr-4 transition-colors duration-300 group-hover:from-snmteal-100 group-hover:to-snmteal-200">
                    <CheckCircle className="h-7 w-7 text-snmteal-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
                
                {/* Simplified gradient line animation */}
                <div className="w-0 h-1 bg-gradient-to-r from-snmblue-400 to-snmteal-400 mt-6 group-hover:w-full transition-all duration-300 ease-in-out rounded-full"></div>
              </motion.div>
            ) : (
              // Static fallback when not client-side
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 group"
              >
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-gradient-to-br from-snmteal-50 to-snmteal-100 mr-4">
                    <CheckCircle className="h-7 w-7 text-snmteal-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
                
                <div className="w-0 h-1 bg-gradient-to-r from-snmblue-400 to-snmteal-400 mt-6 rounded-full"></div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
