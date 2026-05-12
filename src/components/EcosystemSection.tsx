import React from 'react';
import { ExternalLink, CalendarCheck, CheckCircle2 } from 'lucide-react';

const healthpodLogo = new URL('../assets/healthpod-logo.webp', import.meta.url).href;
const sleakLogo = new URL('../assets/sleak-logo.webp', import.meta.url).href;

const EcosystemSection: React.FC = () => {
  return (
    <section id="products" className="bg-[#f0f2f7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0f2d5e] mb-3">Our Ecosystem</h2>
          <p className="text-gray-500 text-lg">
            Two distinct pillars driving innovation through competency-based AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HealthPOD Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-gray-50 rounded-2xl overflow-hidden h-[72px] w-auto flex items-center justify-center">
                <img
                  src={healthpodLogo}
                  alt="HealthPOD logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-[#0f2d5e] bg-blue-50 px-3 py-1 rounded-full uppercase">
                Clinical Workforce Intelligence
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#0f2d5e] mb-3">
              HealthPOD™
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              World's most advanced workforce optimization system for healthcare.
            </p>

            <ul className="space-y-2 mb-8">
              {['Autonomous Patient Scheduling', 'Predictive Risk Stratification'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-[#e8622a] flex-shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="mt-auto">
              <button className="w-full flex items-center justify-center gap-2 bg-[#0f2d5e] hover:bg-[#0a1f42] text-white font-semibold py-3.5 rounded-xl transition-colors">
                Explore HealthPOD™
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Sleak Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-orange-50 rounded-2xl overflow-hidden h-[72px] w-auto flex items-center justify-center">
                <img
                  src={sleakLogo}
                  alt="Sleak logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-[#e8622a] bg-orange-50 px-3 py-1 rounded-full uppercase">
                Operational Speed
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#0f2d5e] mb-3">Sleak</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Delivering End-to-End Technology, Business & Personal Solutions for Organizations and Individuals.
            </p>

            <ul className="space-y-2 mb-8">
              {['Technology guidance for new implementations', 'Personal Consulting for individual'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-[#e8622a] flex-shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="mt-auto">
              <button className="w-full flex items-center justify-center gap-2 bg-[#e8622a] hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-colors">
                Book a Consultation
                <CalendarCheck size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
