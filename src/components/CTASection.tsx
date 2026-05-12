import React from 'react';

type CTASectionProps = {
  onNavigate?: (pathname: string) => void;
};

const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Built for Connection */}
      <section className="bg-[#f0f2f7] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0f2d5e] mb-6">
            Built for Connection
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Connex AI operates as a technology holding company dedicated to
            architecting the next generation of talent and systems connectivity.
            By leveraging proprietary AI frameworks, we build and scale platforms
            that bridge the gap between untapped potential and mission-critical
            operational requirements.
          </p>
        </div>
      </section>

      {/* Dark CTA Banner */}
      <section className="bg-[#0f2d5e] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-tight">
            Ready to Experience the Future <br className="hidden md:block" />
            of AI + Human Intelligence?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate?.('/#products')}
              className="bg-[#e8622a] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Explore Our Products
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.('/contact')}
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
