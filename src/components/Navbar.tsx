
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-snmblue-600">SNM</span> <span className="text-snmteal-600">Collections</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-gray-600 hover:text-snmblue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("benefits")} 
              className="text-gray-600 hover:text-snmblue-600 transition-colors font-medium"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-gray-600 hover:text-snmblue-600 transition-colors font-medium"
            >
              About Us
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="cta-button"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-500 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-5 py-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-snmblue-600 py-2 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-snmblue-600 py-2 transition-colors font-medium"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-snmblue-600 py-2 transition-colors font-medium"
              >
                About Us
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="cta-button w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
