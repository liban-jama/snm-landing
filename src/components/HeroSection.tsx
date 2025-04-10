
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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
              Recover Medical Debt. <span className="text-gradient block mt-2">Without the Risk.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6">
              Compassionate Third-Party Debt Collection — You Only Pay If We Collect.
              Let your staff focus on care. We handle the unpaid accounts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-snmblue-600 hover:bg-snmblue-700">
                <a href="https://cal.com/snmcollections/discovery" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Free Consultation
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100 relative z-10">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
                Third-Party Medical Debt Collection That Works — Without Hurting Patient Trust
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                We specialize in ethical, HIPAA-compliant recovery for healthcare providers. 
                No aggressive tactics. No upfront fees. Just results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-snmblue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmblue-600">30+</h3>
                  <p className="text-gray-600 mt-2">Years Medical Collections Experience</p>
                </div>
                <div className="text-center p-4 bg-snmteal-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmteal-600">90%+</h3>
                  <p className="text-gray-600 mt-2">Recovery on Qualified Accounts</p>
                </div>
                <div className="text-center p-4 bg-snmteal-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmteal-600">100%</h3>
                  <p className="text-gray-600 mt-2">Contingency-Based – No Recovery, No Fee</p>
                </div>
                <div className="text-center p-4 bg-snmblue-50 rounded-lg">
                  <h3 className="text-3xl font-bold text-snmblue-600">Fully</h3>
                  <p className="text-gray-600 mt-2">HIPAA & FDCPA Compliant</p>
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
