
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <Link to="/" className="text-2xl font-bold">
              <span className="text-snmblue-600">SNM</span> <span className="text-snmteal-600">Collections</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { name: "Services", id: "services" },
              { name: "Benefits", id: "benefits" },
              { name: "About Us", id: "about" },
              { name: "Contact", id: "contact" }
            ].map((item, i) => (
              <motion.button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                className="text-gray-700 hover:text-snmblue-600 transition-colors font-medium relative gradient-border-bottom"
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button 
                asChild
                className="bg-gradient-to-r from-snmblue-600 to-snmteal-600 hover:from-snmblue-700 hover:to-snmteal-700 text-white font-medium py-5 px-6 rounded-full shadow-md hover:shadow-lg group"
              >
                <a href="https://cal.com/snmcollections/discovery" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Book a Call
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-700 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-2 overflow-hidden"
            >
              <motion.div 
                className="flex flex-col space-y-6 py-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 mt-2"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0 }
                }}
              >
                {[
                  { name: "Services", id: "services" },
                  { name: "Benefits", id: "benefits" },
                  { name: "About Us", id: "about" },
                  { name: "Contact", id: "contact" }
                ].map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                    transition={{ duration: 0.2, delay: i * 0.1 }}
                    className="text-gray-700 hover:text-snmblue-600 py-2 transition-colors font-medium text-lg"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <motion.div
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="pt-2"
                >
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-snmblue-600 to-snmteal-600 hover:from-snmblue-700 hover:to-snmteal-700 text-white font-medium py-5 rounded-xl shadow-md group"
                  >
                    <a href="https://cal.com/snmcollections/discovery" className="flex items-center justify-center">
                      <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Book a Call
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
