import React from 'react';
import { Globe2, Factory, Truck, TrendingUp, Network, LineChart, Briefcase, ArrowUpRight } from 'lucide-react';
import '../styles/sections.css';

export default function SupportEcosystemSection() {
  const businessTypes = [
    {
      id: 'order-backed',
      title: 'Order-Backed Exporters',
      description: 'Fulfilling confirmed international purchase orders or verified Letters of Credit.',
      icon: <Globe2 size={22} strokeWidth={2} />,
    },
    {
      id: 'manufacturers',
      title: 'Export Manufacturers',
      description: 'Funding raw-material procurement and factory production before overseas dispatch.',
      icon: <Factory size={22} strokeWidth={2} />,
    },
    {
      id: 'trading-houses',
      title: 'Trading Companies & Export Houses',
      description: 'Managing bulk consignments, multimodal freight, and supplier settlement timelines.',
      icon: <Truck size={22} strokeWidth={2} />,
    },
    {
      id: 'expanding-enterprises',
      title: 'Businesses Expanding Internationally',
      description: 'Entering new foreign markets while navigating extended 30–90+ day buyer credit terms.',
      icon: <TrendingUp size={22} strokeWidth={2} />,
    },
  ];

  const ecosystemCapabilities = [
    {
      id: 'capital-network',
      title: 'Capital Network',
      description: 'Potential connections with institutional financing networks as trade requirements scale.',
      icon: <Network size={20} strokeWidth={2} />,
      link: 'https://zth.co.in/#capital-network',
    },
    {
      id: 'financial-structuring',
      title: 'Financial & Strategic Structuring',
      description: 'Advisory on financial modeling, transaction readiness, and suitable capital pathways.',
      icon: <LineChart size={20} strokeWidth={2} />,
      link: 'https://zth.co.in/#pre-fundraising-light',
    },
    {
      id: 'business-growth',
      title: 'Business & Growth',
      description: 'Connecting trade financing with wider corporate expansion and strategic partnerships.',
      icon: <Briefcase size={20} strokeWidth={2} />,
      link: 'https://zth.co.in/#partnership-advisory',
    },
  ];

  return (
    <section className="merged-ecosystem-section" id="who-we-support">
      <div className="container">
        {/* Section Header */}
        <div className="merged-section-header">
          <span className="section-eyebrow">WHO WE SUPPORT & ECOSYSTEM</span>
          <h2 className="section-title">
            Built around your export and growth requirements.
          </h2>
          <p className="section-subtitle">
            Export Finance introduces a focused working-capital pathway for businesses engaged in international trade, while connecting with ZTH's broader financial and business ecosystem.
          </p>
        </div>

        {/* Part 1: Who We Support Grid (4 Cards) */}
        <div className="support-profiles-grid">
          {businessTypes.map((item) => (
            <div key={item.id} className="support-profile-card">
              <div className="support-profile-icon">
                {item.icon}
              </div>
              <h3 className="support-profile-title">{item.title}</h3>
              <p className="support-profile-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Part 2: ZTH Ecosystem Integration Strip (3 Cards) */}
        <div className="ecosystem-integration-block" id="ecosystem">
          <div className="ecosystem-block-header">
            <span className="ecosystem-block-eyebrow">ZTH ECOSYSTEM</span>
            <h3 className="ecosystem-block-title">Synergy with ZTH's Core Capabilities</h3>
            <p className="ecosystem-block-desc">
              Export Finance connects seamlessly with ZTH's established advisory and financial network to support wider strategic growth.
            </p>
          </div>

          <div className="ecosystem-capabilities-grid">
            {ecosystemCapabilities.map((cap) => (
              <a
                key={cap.id}
                href={cap.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ecosystem-capability-card"
                aria-label={`Explore ${cap.title} on ZTH`}
              >
                <div className="capability-card-top">
                  <div className="capability-icon-box">
                    {cap.icon}
                  </div>
                  <ArrowUpRight size={15} className="capability-ext-arrow" />
                </div>
                <h4 className="capability-title">{cap.title}</h4>
                <p className="capability-desc">{cap.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
