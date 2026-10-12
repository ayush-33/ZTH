import React from 'react';
import { PackageCheck, Clock, Coins, ArrowRight } from 'lucide-react';
import '../styles/sections.css';

export default function ChallengeSection() {
  const challengeStages = [
    {
      stage: '01',
      title: 'Fulfil the Order',
      description: 'Businesses may need to pay for production, procurement, packaging, and logistics before shipment.',
      icon: <PackageCheck size={24} strokeWidth={2} />,
    },
    {
      stage: '02',
      title: 'Wait for Payment',
      description: 'International buyers may pay after shipment or according to agreed credit terms.',
      icon: <Clock size={24} strokeWidth={2} />,
    },
    {
      stage: '03',
      title: 'Manage Working Capital',
      description: 'The timing gap can put pressure on operating cash flow while the exporter waits for payment.',
      icon: <Coins size={24} strokeWidth={2} />,
    },
  ];

  return (
    <section className="challenge-section" id="challenge">
      <div className="container">
        {/* Section Header */}
        <div className="challenge-header">
          <span className="section-eyebrow">THE WORKING-CAPITAL CHALLENGE</span>
          <h2 className="section-title">
            An export order is an opportunity. Cash flow is what keeps it moving.
          </h2>
          <p className="section-subtitle">
            Exporters often need to incur significant upfront costs for production, procurement, and shipment,
            while payments from international buyers may arrive weeks or months later. Bridging this timing gap
            is essential to maintaining smooth operations and fulfilling incoming demand.
          </p>
        </div>

        {/* 3 Coordinated Sequence Cards with Flow Connectors */}
        <div className="challenge-cards-row">
          {challengeStages.map((card, idx) => (
            <React.Fragment key={card.stage}>
              <div className="challenge-card">
                <div className="card-top-row">
                  <div className="card-icon-bubble">
                    {card.icon}
                  </div>
                  <span className="card-stage-num">Stage {card.stage}</span>
                </div>
                <h3 className="challenge-card-title">{card.title}</h3>
                <p className="challenge-card-desc">{card.description}</p>
              </div>

              {idx < challengeStages.length - 1 && (
                <div className="challenge-flow-arrow" aria-hidden="true">
                  <ArrowRight size={20} strokeWidth={2.2} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
