
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By accessing or using the services of SNM Collections ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Services</h2>
            <p>SNM Collections provides medical debt collection services to healthcare providers. Our services include:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Patient account management and collections</li>
              <li>Credit reporting after defined periods</li>
              <li>Facilitation of legal action through partnered attorneys when necessary</li>
              <li>Payment processing and arrangements</li>
              <li>Customer service related to outstanding medical debts</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Compliance with Laws</h2>
            <p>We operate in compliance with all applicable laws, including but not limited to:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Fair Debt Collection Practices Act (FDCPA)</li>
              <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
              <li>Fair Credit Reporting Act (FCRA)</li>
              <li>State collection and consumer protection laws</li>
            </ul>
            <p>Our services are designed to maintain compliance with these regulations while effectively recovering outstanding balances.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Healthcare Provider Responsibilities</h2>
            <p>Healthcare providers using our services are responsible for:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Providing accurate account information</li>
              <li>Notifying us of any direct payments received</li>
              <li>Maintaining patient records in accordance with HIPAA</li>
              <li>Communicating any account disputes or resolutions</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Patient Rights</h2>
            <p>Patients have certain rights when interacting with our collection services:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>The right to dispute a debt</li>
              <li>The right to request validation of debt</li>
              <li>The right to be treated with dignity and respect</li>
              <li>The right to reasonable payment arrangements</li>
              <li>The right to cease communications in certain circumstances as permitted by law</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Collection Actions</h2>
            <p>Our collection process may include:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Written communications</li>
              <li>Telephone contact during permissible hours</li>
              <li>Credit bureau reporting after defined periods</li>
              <li>Legal action through partnered attorneys when necessary and appropriate</li>
            </ul>
            <p>All actions are conducted in compliance with applicable laws and regulations.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, SNM Collections shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any related matters.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will provide notice of significant changes as required by law. Continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
            <p>These Terms shall be governed by the laws of the State of Montana without regard to its conflict of law provisions.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p>Email: info@snmcollections.com</p>
            <p>Address: 1001 SOUTH MAIN SUITE 700, KALISPELL, MT 59901</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default TermsOfService;
