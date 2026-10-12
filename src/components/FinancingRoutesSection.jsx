import React from 'react';
import { Layers, FileSpreadsheet, Anchor, Receipt } from 'lucide-react';
import '../styles/sections.css';

export default function FinancingRoutesSection() {
  const routes = [
    {
      id: 'pre-shipment',
      title: 'Pre-Shipment Finance',
      subtitle: 'Production & Procurement',
      description: 'May support raw-material procurement, production, packaging, and other eligible operational costs before goods are shipped.',
      icon: <Layers size={22} strokeWidth={2} />,
      idealFor: 'Managing supplier payments & factory overheads',
    },
    {
      id: 'post-shipment',
      title: 'Post-Shipment Finance',
      subtitle: 'Post-Dispatch Liquidity',
      description: 'May provide working capital against eligible shipping or export documents while the exporter awaits payment from the overseas buyer.',
      icon: <Anchor size={22} strokeWidth={2} />,
      idealFor: 'Unlocking liquidity immediately after shipment dispatch',
    },
    {
      id: 'export-order',
      title: 'Export Order Financing',
      subtitle: 'Confirmed Order Backing',
      description: 'Financing structured around eligible confirmed international purchase orders (POs) or relevant verified trade documentation.',
      icon: <FileSpreadsheet size={22} strokeWidth={2} />,
      idealFor: 'Executing large export orders beyond existing balance-sheet limits',
    },
    {
      id: 'invoice-discounting',
      title: 'Receivables & Invoice Financing',
      subtitle: 'Accounts Receivable',
      description: 'Access working capital against eligible export receivables or invoices before the buyer pays, bridging lengthy settlement cycles.',
      icon: <Receipt size={22} strokeWidth={2} />,
      idealFor: 'Sustaining operating cash flow during 30–90+ day debtor cycles',
    },
  ];

  return (
    <section className="routes-section" id="financing-options">
      <div className="container">
        {/* Section Header */}
        <div className="routes-header">
          <span className="section-eyebrow">FINANCING OPTIONS</span>
          <h2 className="section-title">
            Potential financing routes to explore.
          </h2>
          <p className="section-subtitle">
            Financing requirements vary according to the export cycle, business operations, and buyer payment terms. Explore structured trade finance categories that may align with your operational rhythm.
          </p>
        </div>

        {/* 4 Routes Grid */}
        <div className="routes-grid">
          {routes.map((route) => (
            <div key={route.id} className="route-card">
              <div className="route-card-header">
                <div className="route-icon-box">
                  {route.icon}
                </div>
                <div>
                  <h3 className="route-card-title">{route.title}</h3>
                  <span className="route-card-sub">{route.subtitle}</span>
                </div>
              </div>
              <p className="route-card-desc">{route.description}</p>
              <div className="route-card-footer">
                <span className="route-focus-label">Common use case:</span>
                <span className="route-focus-val">{route.idealFor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Note */}
        <div className="routes-disclaimer">
          <p>
            <strong>Note on advisory & financing partners:</strong> The categories above represent common trade finance structures. Actual availability, approval, and commercial terms depend on the relevant financing partners and their due-diligence or underwriting criteria. ZTH provides advisory support and network facilitation without acting as a direct lender.
          </p>
        </div>
      </div>
    </section>
  );
}
