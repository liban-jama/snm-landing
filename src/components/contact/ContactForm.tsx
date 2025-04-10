
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
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
    
    // Only proceed if not already submitting
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // This function will run after Netlify's form handler
    // The form submission is actually handled by Netlify's built-in form handling
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
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-8">
      <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
      
      {/* Important: form must have the netlify attribute AND the hidden input fields */}
      <form 
        name="contact" 
        method="POST" 
        netlify="true"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        {/* Required for Netlify form detection */}
        <input type="hidden" name="form-name" value="contact" />
        
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
  );
};

export default ContactForm;
