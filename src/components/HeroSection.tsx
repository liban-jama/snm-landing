
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-snmblue-50 to-snmteal-50 py-20 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,var(--tw-gradient-stops))] from-snmteal-500 via-white to-snmblue-500"
      />
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Recover More. <span className="text-gradient block mt-2">Stress Less.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6">
              Medical Debt Collection Made Simple & Effective. We specialize in compassionate, 
              first-party medical debt recovery that helps you maximize collections while 
              protecting patient relationships.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-snmblue-600 hover:bg-snmblue-700">
                <a href="#contact">Schedule a Free Consultation</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-snmblue-600 text-snmblue-600 hover:bg-snmblue-50"
              >
                <a href="#services" className="flex items-center">
                  Learn How It Works <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-snmblue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmblue-600">90%+</h3>
                  <p className="text-gray-600 mt-2">Recovery Rates</p>
                </div>
                <div className="text-center p-4 bg-snmteal-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmteal-600">100%</h3>
                  <p className="text-gray-600 mt-2">Patient-Centric</p>
                </div>
                <div className="text-center p-4 bg-snmteal-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmteal-600">30+</h3>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-snmblue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmblue-600">Custom</h3>
                  <p className="text-gray-600 mt-2">Billing Solutions</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-snmblue-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-snmteal-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

