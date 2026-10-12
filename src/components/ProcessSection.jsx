import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/sections.css';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: 'Provide relevant information about your company, export orders, shipment timelines, and financing requirements.',
    },
    {
      number: '02',
      title: 'Discuss With Our Team',
      description: 'Our team reviews the business requirements and discusses potentially relevant financing routes.',
    },
    {
      number: '03',
      title: 'Explore Next Steps',
      description: 'Possible next steps depend on the business requirements, suitability, due diligence, and relevant financing partners.',
    },
  ];

  return (
    <section className="process-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="process-header">
          <span className="section-eyebrow">HOW IT WORKS</span>
          <h2 className="section-title">
            From export order to financing discussion.
          </h2>
          <p className="section-subtitle">
            A straightforward, consultative process designed to identify capital pathways for your cross-border trade transactions.
          </p>
        </div>

        {/* 3 Step Process Flow */}
        <div className="process-steps-row">
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="process-step-item">
                <div className="process-step-badge">
                  {step.number}
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="process-connector" aria-hidden="true">
                  <ArrowRight size={22} strokeWidth={2.2} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
