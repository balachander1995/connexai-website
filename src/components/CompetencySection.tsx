import React from 'react';
import { ShieldCheck, Users, Briefcase, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Not just resumes — real skill validation',
    description:
      'We move beyond text-matching to identify proven capabilities through AI diagnostics.',
  },
  {
    icon: Users,
    title: 'AI enhanced with human judgment',
    description:
      'Our algorithms are built to assist, not replace, the nuanced expertise of professionals.',
  },
  {
    icon: Briefcase,
    title: 'Built for high-stakes industries',
    description:
      "Engineered for precision where accuracy isn't just a metric—it's a requirement.",
  },
  {
    icon: TrendingUp,
    title: 'Scalable data-driven decision making',
    description:
      'Enterprise-grade infrastructure that grows with your organizational complexity.',
  },
];

const CompetencySection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1a2e] to-[#0d3060] shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0 flex items-center justify-center">
              {/* Placeholder for the professional image */}
              <div className="relative flex flex-col items-center gap-4 p-10">
                {/* Floating blobs / decorative circles */}
                <div className="absolute top-8 right-10 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
                <div className="absolute bottom-16 left-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/10" />
                </div>

                {/* Centered silhouette placeholder */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-b from-cyan-300/30 to-blue-600/20 flex items-center justify-center shadow-[0_0_60px_20px_rgba(0,200,255,0.15)]">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-b from-cyan-400/20 to-blue-700/10" />
                </div>
                <p className="text-white/40 text-sm mt-4">Professional Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Right — Features */}
          <div>
            <h2 className="text-4xl font-bold text-[#0f2d5e] mb-2">
              Where AI Meets
            </h2>
            <h2 className="text-4xl font-bold text-[#e8622a] mb-10">
              Real Competency
            </h2>

            <div className="space-y-7">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-5 items-start">
                  <div className="bg-orange-50 p-3 rounded-xl flex-shrink-0">
                    <feature.icon size={22} className="text-[#e8622a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f2d5e] mb-1 text-[15px]">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetencySection;
