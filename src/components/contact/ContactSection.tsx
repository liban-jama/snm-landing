
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Calendar, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-snmblue-500 to-snmteal-500"></div>
      <div 
        className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-t from-snmteal-100/30 to-snmblue-100/30 blur-3xl"
      />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">
            Get Paid <span className="text-gradient">Without the Headaches</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Contact our team today to discuss how SNM Collections can help improve your 
            healthcare facility's financial performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="cta-button group">
              <a href="https://cal.com/snmcollections/discovery" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Schedule a Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white border-snmblue-600 text-snmblue-600 hover:bg-snmblue-50 font-semibold py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <a href="#contact-form" className="flex items-center">
                <Send className="mr-2 h-5 w-5" />
                Send Us a Message
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-snmblue-50 to-white p-8 rounded-2xl shadow-sm">
            <ContactInfo />
          </div>
          <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
