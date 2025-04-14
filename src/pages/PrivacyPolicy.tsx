
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>SNM Collections ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you engage with our services, website, or communications.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect personal information that you provide directly to us, including:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Contact information (name, address, email, phone number)</li>
              <li>Payment and financial information</li>
              <li>Healthcare provider information</li>
              <li>Account and debt information</li>
              <li>Communications with our representatives</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your information for purposes including:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Processing and collecting debts</li>
              <li>Communicating with you about your account</li>
              <li>Reporting to credit bureaus as permitted by law</li>
              <li>Complying with legal obligations</li>
              <li>Improving our services</li>
              <li>Processing payments</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Information Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Our clients (healthcare providers)</li>
              <li>Credit bureaus and reporting agencies</li>
              <li>Legal and financial advisors</li>
              <li>Courts and law enforcement agencies</li>
              <li>Service providers who help us operate our business</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
            <p>Depending on your location, you may have rights regarding your personal information, including:</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Access to your information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of certain information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
            <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet or electronic storage system is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>Email: info@snmcollections.com</p>
            <p>Address: 1001 SOUTH MAIN SUITE 700, KALISPELL, MT 59901</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
