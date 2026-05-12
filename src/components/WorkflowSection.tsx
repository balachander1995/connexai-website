import React from 'react';
import { Database, BrainCircuit, Network, Rocket } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Data & Inputs',
    description: 'Aggregating fragmented data points into a unified core.',
    icon: Database,
    active: false,
  },
  {
    number: '2',
    title: 'AI + Human Intelligence',
    description: 'Validating neural insights with industry expert oversight.',
    icon: BrainCircuit,
    active: true,
  },
  {
    number: '3',
    title: 'Competency Mapping',
    description: 'Visualizing relationships between skills and requirements.',
    icon: Network,
    active: false,
  },
  {
    number: '4',
    title: 'Smart Matching',
    description: 'Executing the optimal connection with surgical precision.',
    icon: Rocket,
    active: false,
    orange: true,
  },
];

const WorkflowSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f2d5e] mb-3">
            Precision Workflow
          </h2>
          <p className="text-gray-500 text-lg">
            How we bridge the gap between raw data and operational success.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-0">
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center text-center max-w-[200px] mx-auto md:mx-0 w-full">
                {/* Icon Box */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-sm ${
                    step.active
                      ? 'bg-[#0f2d5e]'
                      : step.orange
                      ? 'bg-[#e8622a]'
                      : 'bg-gray-100'
                  }`}
                >
                  <step.icon
                    size={30}
                    className={
                      step.active || step.orange ? 'text-white' : 'text-[#0f2d5e]'
                    }
                  />
                </div>

                {/* Text */}
                <h3 className="font-bold text-[#0f2d5e] text-base mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-10 px-2">
                  <div className="w-10 h-0.5 bg-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
