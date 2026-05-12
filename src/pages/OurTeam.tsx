import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type OurTeamProps = {
  onNavigate?: (pathname: string) => void;
};

const OurTeam: React.FC<OurTeamProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">
      <Navbar onNavigate={onNavigate} />
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl font-bold text-[#0f2d5e] mb-4">Our Team</h1>
        <p className="text-gray-500 text-sm uppercase tracking-[0.2em] mb-8">Meet the people building better healthcare experiences with AI</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">A collaborative team for AI and healthcare</h2>
            <p>Connex AI brings together experts in healthcare, machine learning, product strategy, and user experience. Our team designs solutions that empower providers, payers, and employers.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Engineering', description: 'Building scalable AI systems and secure analytics platforms.' },
              { title: 'Clinical Strategy', description: 'Aligning product design with clinical workflows and care standards.' },
              { title: 'Customer Success', description: 'Supporting partners with onboarding, insight, and delivery.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 p-6 bg-[#f8fafc]">
                <h3 className="text-lg font-semibold text-[#0f2d5e] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0f2d5e] mb-3">What drives us</h2>
            <p>We focus on trust, precision, and measurable outcomes. Every product, partnership, and decision is shaped by our commitment to better patient experiences and smarter organizational decisions.</p>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default OurTeam;
