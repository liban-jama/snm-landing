
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Calendar, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Paid <span className="text-gradient">Without the Headaches</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Contact our team today to discuss how SNM Collections can help improve your 
            healthcare facility's financial performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-snmblue-600 hover:bg-snmblue-700">
              <a href="https://cal.com/snmcollections/discovery" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-snmblue-600 text-snmblue-600 hover:bg-snmblue-50">
              <a href="#contact-form" className="flex items-center">
                <Send className="mr-2 h-5 w-5" />
                Send Us a Message
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
