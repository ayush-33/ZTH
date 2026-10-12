import React from 'react';
import { Wallet, Scale, CalendarClock } from 'lucide-react';
import '../styles/sections.css';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: 'Preserve Core Liquidity',
      description: 'Keep existing domestic operating reserves intact for payroll and vendor commitments rather than tying up cash in lengthy overseas trade cycles.',
      icon: <Wallet size={24} strokeWidth={2} />,
    },
    {
      id: 2,
      title: 'Take on Larger Contracts',
      description: 'Confidently accept larger order volumes and new international buyers without straining internal balance-sheet constraints.',
      icon: <Scale size={24} strokeWidth={2} />,
    },
    {
      id: 3,
      title: 'Stabilize Payment Timelines',
      description: 'Bridge 30–90+ day foreign payment terms with structured financing to maintain predictable procurement and dispatch schedules.',
      icon: <CalendarClock size={24} strokeWidth={2} />,
    },
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        {/* Section Header */}
        <div className="benefits-header">
          <span className="section-eyebrow">STRATEGIC ADVANTAGES</span>
          <h2 className="section-title">
            Support for your global growth journey.
          </h2>
          <p className="section-subtitle">
            Beyond individual transactions, structured export liquidity helps cross-border businesses build stability and capture international market opportunities.
          </p>
        </div>

        {/* 3 Strategic Benefit Cards */}
        <div className="benefits-grid">
          {benefits.map((item) => (
            <div key={item.id} className="benefit-card">
              <div className="benefit-icon-box">
                {item.icon}
              </div>
              <h3 className="benefit-card-title">{item.title}</h3>
              <p className="benefit-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
