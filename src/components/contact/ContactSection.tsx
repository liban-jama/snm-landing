
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Calendar, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-snmblue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-snmteal-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get Paid{" "}
            <span className="relative">
              <span className="text-gradient relative z-10">Without the Headaches</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-snmteal-200/50 -z-0 rounded-full transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-xl">
            Contact our team today to discuss how SNM Collections can help improve your 
            healthcare facility's financial performance.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-5 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-snmblue-600 to-snmteal-600 hover:from-snmblue-700 hover:to-snmteal-700 text-white font-semibold py-6 px-8 rounded-full shadow-lg hover:shadow-xl group">
                <a href="https://cal.com/snmcollections/discovery" className="flex items-center text-lg">
                  <Calendar className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                  Schedule a Free Consultation
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Button asChild variant="outline" size="lg" className="bg-white border-snmblue-600 text-snmblue-600 hover:bg-snmblue-50 font-semibold py-6 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <a href="#contact-form" className="flex items-center text-lg">
                  <Send className="mr-3 h-5 w-5" />
                  Send Us a Message
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-snmblue-50/80 to-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/50"
          >
            <ContactInfo />
          </motion.div>
          
          <motion.div 
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold mb-6 text-center"
            >
              Get in Touch
            </motion.h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
