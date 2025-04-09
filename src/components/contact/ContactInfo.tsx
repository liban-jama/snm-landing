
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-snmblue-600 to-snmblue-700 text-white rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
          <div>
            <p className="font-medium text-lg">Email</p>
            <p className="text-snmblue-100">info@snmcollections.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
          <div>
            <p className="font-medium text-lg">Address</p>
            <p className="text-snmblue-100">1001 SOUTH MAIN SUITE 700<br />KALISPELL, MT 59901</p>
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
          <a href="mailto:info@snmcollections.com" className="flex items-center">
            Email Now <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
