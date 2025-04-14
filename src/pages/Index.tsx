
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import FooterSection from "@/components/FooterSection";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <FooterSection />
      
      {/* Sticky CTA button */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="sticky-cta"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-snmblue-600 to-snmteal-600 hover:from-snmblue-700 hover:to-snmteal-700 text-white font-semibold py-5 px-6 rounded-full shadow-xl group">
              <a href="https://cal.com/snmcollections/discovery" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Book a Consultation
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
