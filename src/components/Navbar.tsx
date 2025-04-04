
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-snmblue-700">
              SNM <span className="text-snmteal-600">Collections</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-snmblue-600 transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-snmblue-600 transition-colors">
              Benefits
            </a>
            <a href="#about" className="text-gray-600 hover:text-snmblue-600 transition-colors">
              About Us
            </a>
            <Button asChild className="bg-snmblue-600 hover:bg-snmblue-700">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-500">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a
                href="#services"
                className="text-gray-600 hover:text-snmblue-600 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-snmblue-600 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-snmblue-600 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <Button 
                asChild 
                className="bg-snmblue-600 hover:bg-snmblue-700 w-full"
                onClick={() => setIsOpen(false)}
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
