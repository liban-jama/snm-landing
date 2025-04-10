
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div 
        className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-snmteal-200/20 to-snmblue-200/20 blur-3xl"
      />
      <div 
        className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-t from-snmblue-200/20 to-snmteal-200/20 blur-3xl"
      />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 z-10">
            <h1 className="font-extrabold leading-tight mb-6">
              Recover Medical Debt. 
              <span className="text-gradient block mt-2">Without the Risk.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6 mb-8 max-w-xl">
              Compassionate Third-Party Debt Collection — You Only Pay If We Collect.
              Let your staff focus on care. We handle the unpaid accounts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="cta-button group">
                <a href="https://cal.com/snmcollections/discovery" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Schedule Your Free Consultation
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative z-10 animate-float">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-snmblue-50 to-snmteal-50 rounded-2xl blur-2xl opacity-60"></div>
              <h3 className="text-xl font-semibold mb-5 text-center text-gray-800">
                Third-Party Medical Debt Collection That Works — Without Hurting Patient Trust
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                We specialize in ethical, HIPAA-compliant recovery for healthcare providers. 
                No aggressive tactics. No upfront fees. Just results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-snmblue-50 to-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-snmblue-600 mb-2">30+</h3>
                  <p className="text-gray-600">Years Medical Collections Experience</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-snmteal-50 to-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-snmteal-600 mb-2">90%+</h3>
                  <p className="text-gray-600">Recovery on Qualified Accounts</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-snmteal-50 to-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-snmteal-600 mb-2">100%</h3>
                  <p className="text-gray-600">Contingency-Based – No Recovery, No Fee</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-snmblue-50 to-white rounded-xl shadow-sm">
                  <h3 className="text-4xl font-bold text-snmblue-600 mb-2">Fully</h3>
                  <p className="text-gray-600">HIPAA & FDCPA Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
