import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type ContactProps = {
  onNavigate?: (pathname: string) => void;
};

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-bold text-[#0f2d5e] mb-4">Contact Connex AI</h1>
        <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-8">Reach out for partnerships, questions, or product inquiries</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">General Inquiries</h2>
            <p>If you have questions about Connex AI, our products, or how we can help your organization, email us at <a href="mailto:contact@connexai.org" className="text-[#0f2d5e] hover:underline">contact@connexai.org</a>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Partnerships</h2>
            <p>For strategic partnerships, integration inquiries, or collaboration opportunities, we’re here to help. Tell us about your goals and we’ll connect you with the right team.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Office Locations</h2>
            <p>Connex AI LLC</p>
            <p>159 N Wolcott St Ste 133, Casper, WY 82601</p>
            <p>Mailing: 1603 Capitol Ave Ste 415 #220478, Cheyenne, WY 82001</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-[#f8fafc] p-8">
            <h3 className="text-xl font-semibold text-[#0f2d5e] mb-4">Send a message</h3>
            <p className="text-gray-600">Want a response from our team? Use the email address above or complete the contact form on our website.</p>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Contact;
