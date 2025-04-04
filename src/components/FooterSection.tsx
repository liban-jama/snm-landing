
import { Link } from "react-router-dom";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SNM <span className="text-snmteal-400">Collections</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Specialized medical debt recovery services that maintain patient relationships 
              while improving your bottom line.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white">Medical Debt Collection</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white">Early-Out Programs</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white">Insurance Resolution</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white">Credit Bureau Reporting</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-white">Legal Action Facilitation</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/#benefits" className="text-gray-300 hover:text-white">Benefits</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} SNM Collections. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
