import React from 'react';

const logos = [
  { id: 1, label: 'Partner 1' },
  { id: 2, label: 'Partner 2' },
  { id: 3, label: 'Partner 3' },
  { id: 4, label: 'Partner 4' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="bg-[#f0f2f7] py-14">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-16 h-16 bg-gray-400/40 rounded-xl flex items-center justify-center"
            >
              {/* Placeholder logo block */}
              <div className="w-8 h-8 bg-gray-500/60 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
