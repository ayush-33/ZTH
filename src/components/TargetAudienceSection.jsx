import React from 'react';
import { Globe2, Factory, Truck, TrendingUp, CheckCircle2 } from 'lucide-react';
import '../styles/sections.css';

export default function TargetAudienceSection() {
  const targetProfiles = [
    {
      id: 'po-fulfilment',
      icon: <Globe2 size={24} strokeWidth={2} />,
      title: 'Order-Backed Exporters',
      description: 'Businesses holding confirmed international purchase orders or Letters of Credit seeking liquidity to execute shipment volume without delay.',
      points: [
        'Confirmed cross-border purchase orders',
        'Scalable delivery capacity',
        'Verified overseas buyers',
      ],
    },
    {
      id: 'manufacturers',
      icon: <Factory size={24} strokeWidth={2} />,
      title: 'Export Manufacturers',
      description: 'Producers and fabricators supplying overseas buyers who need capital to acquire raw materials and sustain factory production runs.',
      points: [
        'High raw material procurement costs',
        'Extended production manufacturing cycles',
        'Recurring bulk export shipments',
      ],
    },
    {
      id: 'supply-chain',
      icon: <Truck size={24} strokeWidth={2} />,
      title: 'Logistics & Supply Chains',
      description: 'Trading companies and export houses managing freight, warehousing, and customs clearance charges across shipping routes.',
      points: [
        'Significant multimodal freight expenses',
        'Customs clearance & port handling needs',
        'Multi-country supplier networks',
      ],
    },
    {
      id: 'scaling-businesses',
      icon: <TrendingUp size={24} strokeWidth={2} />,
      title: 'Scaling Export Enterprises',
      description: 'Enterprises expanding into new global geographies seeking disciplined cash-flow structures to absorb 60–90+ day debtor collection periods.',
      points: [
        'Rapidly expanding trade volumes',
        'Lengthening credit term requests',
        'Preservation of core operating cash reserves',
      ],
    },
  ];

  return (
    <section className="audience-section" id="who-is-this-for">
      <div className="container">
        {/* Section Header */}
        <div className="audience-header">
          <span className="section-eyebrow">WHO WE SUPPORT</span>
          <h2 className="section-title">
            Tailored for active cross-border businesses.
          </h2>
          <p className="section-subtitle">
            Export finance solutions can be evaluated for qualified enterprises operating across international commercial trade, manufacturing, and distribution.
          </p>
        </div>

        {/* 4 Profile Cards Grid */}
        <div className="audience-grid">
          {targetProfiles.map((profile) => (
            <div key={profile.id} className="audience-card">
              <div className="audience-icon-wrap">
                {profile.icon}
              </div>
              <h3 className="audience-card-title">{profile.title}</h3>
              <p className="audience-card-desc">{profile.description}</p>
              
              <ul className="audience-points-list">
                {profile.points.map((pt, i) => (
                  <li key={i} className="audience-point-item">
                    <CheckCircle2 size={14} className="point-check-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
