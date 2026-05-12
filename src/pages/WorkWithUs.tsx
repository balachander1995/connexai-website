import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type WorkWithUsProps = {
  onNavigate?: (pathname: string) => void;
};

const WorkWithUs: React.FC<WorkWithUsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-bold text-[#0f2d5e] mb-4">Work With Us</h1>
        <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-8">Join our mission through partnerships, careers, and strategic collaboration</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Partner with Connex AI</h2>
            <p>Whether you are a healthcare provider, employer, or technology partner, we welcome conversations about how artificial intelligence can improve care delivery and workforce outcomes.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">Careers</h2>
            <p>Interested in joining our team? We look for people with deep product experience, healthcare domain knowledge, and a passion for AI-driven innovation.</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-[#f8fafc] p-8">
            <h3 className="text-xl font-semibold text-[#0f2d5e] mb-4">Let’s start the conversation</h3>
            <p className="text-gray-600">Email us at <a href="mailto:contact@connexai.org" className="text-[#0f2d5e] hover:underline">contact@connexai.org</a> with your inquiry, partner interest, or career question.</p>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default WorkWithUs;
