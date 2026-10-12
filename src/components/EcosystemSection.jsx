import React from 'react';
import { Network, LineChart, TrendingUp, Cpu, ArrowUpRight } from 'lucide-react';
import '../styles/sections.css';

export default function EcosystemSection() {
  const capabilities = [
    {
      id: 'capital-network',
      title: 'Capital Network',
      description: 'Explore relevant capital connections and institutional pathways as financing needs evolve.',
      icon: <Network size={20} strokeWidth={2} />,
      link: 'https://zth.co.in/#capital-network',
    },
    {
      id: 'financial-structuring',
      title: 'Financial & Strategic Structuring',
      description: 'Consider broader financial modeling, capital readiness, and balance-sheet alignment.',
      icon: <LineChart size={20} strokeWidth={2} />,
      link: 'https://zth.co.in/#pre-fundraising-light',
    },
    {
      id: 'business-growth',
      title: 'Business & Growth',
      description: 'Explore wider business priorities, international partnerships, and long-term expansion.',
      icon: <TrendingUp size={20} strokeWidth={2} />,
      link: 'https://zth.co.in/#partnership-advisory',
    },
    {
      id: 'technology',
      title: 'Technology & SaaS',
      description: 'Leverage ZTH OS infrastructure, operating tools, and data-driven systems.',
      icon: <Cpu size={20} strokeWidth={2} />,
      link: 'https://zth.co.in/#investor-mock-room',
    },
  ];

  return (
    <section className="ecosystem-section" id="ecosystem">
      <div className="container">
        {/* Section Header */}
        <div className="ecosystem-header">
          <span className="section-eyebrow">ZTH ECOSYSTEM INTEGRATION</span>
          <h2 className="section-title">
            Part of the ZTH Ecosystem
          </h2>
          <p className="section-subtitle">
            Export Finance addresses immediate working-capital needs associated with export orders,
            while ZTH's broader capabilities provide context for businesses exploring their wider financial
            and growth requirements.
          </p>
        </div>

        {/* Compact 4-Card Horizontal Ecosystem Strip */}
        <div className="ecosystem-strip-grid">
          {capabilities.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ecosystem-item"
              aria-label={`Explore ${item.title} on ZTH`}
            >
              <div className="ecosystem-item-top">
                <div className="ecosystem-icon-box">
                  {item.icon}
                </div>
                <ArrowUpRight size={15} className="ecosystem-ext-arrow" />
              </div>
              <h3 className="ecosystem-item-title">{item.title}</h3>
              <p className="ecosystem-item-desc">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
