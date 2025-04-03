
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting SNM Collections. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Contact our team today to discuss how SNM Collections can help improve your 
            healthcare facility's financial performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-snmblue-600 to-snmblue-700 text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-lg">Phone</p>
                  <p className="text-snmblue-100">(888) 555-6789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <p className="text-snmblue-100">contact@snmcollections.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-lg">Address</p>
                  <p className="text-snmblue-100">123 Medical Plaza, Suite 400<br />Chicago, IL 60601</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium text-lg">Business Hours</p>
                  <p className="text-snmblue-100">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-lg mb-4">Schedule a Free Consultation</h4>
              <p className="text-snmblue-100 mb-4">
                Discover how our specialized medical debt collection services can benefit your healthcare practice.
              </p>
              <Button 
                asChild 
                className="bg-white text-snmblue-600 hover:bg-gray-100"
              >
                <a href="tel:8885556789" className="flex items-center">
                  Call Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Healthcare Organization *
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    placeholder="Northside Medical Center"
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your needs..."
                    className="resize-none"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-snmblue-600 hover:bg-snmblue-700" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
