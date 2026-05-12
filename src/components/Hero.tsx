import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-white pt-24 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-orange-100 text-[#e8622a] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Strategic Intelligence
            </span>

            <h1 className="text-5xl xl:text-6xl font-extrabold text-[#0f2d5e] leading-tight mb-6">
              Orchestrating <br />
              the Future of{' '}
              <span className="text-[#e8622a]">AI Across Industries.</span>{' '}
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              At ConnexAI, we blend human expertise with proprietary AI-driven intelligence to create seamless, real-world solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#0f2d5e] hover:bg-[#0a1f42] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
                Schedule Your Free Consultation
                <ArrowRight size={18} />
              </button>
              {/* <button className="border-2 border-[#0f2d5e] text-[#0f2d5e] hover:bg-[#0f2d5e] hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
                View Case Studies
              </button> */}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-[#0a1a2e] rounded-3xl overflow-hidden p-6 shadow-2xl">
              {/* Glowing orb visual */}
              <div className="relative flex items-center justify-center" style={{ minHeight: 340 }}>
                {/* Outer rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full border border-cyan-500/20 animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-cyan-400/30" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-cyan-300/40" />
                </div>

                {/* Grid lines background */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Core glow */}
                <div className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-700 shadow-[0_0_80px_30px_rgba(0,220,255,0.35)] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/30 to-cyan-200/10 backdrop-blur-sm" />
                </div>

                {/* Accent dots */}
                <div className="absolute top-8 right-10 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(0,220,255,0.5)]" />
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_3px_rgba(0,150,255,0.4)]" />
              </div>

              {/* Badge overlay */}
              <div className="mt-4 bg-gray-200/90 rounded-2xl px-5 py-4 flex items-center gap-4">
                <div className="bg-[#0f2d5e] p-2.5 rounded-xl">
                  <BarChart2 size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    Real-Time Analysis
                  </p>
                  <p className="text-sm font-semibold text-[#0f2d5e]">
                    99.9% Prediction Accuracy for Clinical Outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
