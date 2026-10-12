import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import '../styles/sections.css';

export default function CtaSection() {
  const scrollToEnquiry = (e) => {
    e.preventDefault();
    const el = document.getElementById('enquiry');
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="cta-banner-section" id="cta-banner">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-glow" aria-hidden="true" />
          <div className="cta-banner-content">
            <span className="cta-banner-eyebrow">TAKE THE NEXT STEP</span>
            <h2 className="cta-banner-title">
              Have an export order to fulfil?
            </h2>
            <p className="cta-banner-desc">
              Share your business requirements to start a conversation about potentially suitable export finance options.
            </p>
            <div className="cta-banner-badges">
              <span className="cta-badge-item">
                <CheckCircle2 size={13} /> Tailored evaluation
              </span>
              <span className="cta-badge-item">
                <CheckCircle2 size={13} /> Direct advisory review
              </span>
              <span className="cta-badge-item">
                <CheckCircle2 size={13} /> Institutional networks
              </span>
            </div>
          </div>
          <div className="cta-banner-action">
            <a 
              href="#enquiry" 
              onClick={scrollToEnquiry}
              className="cta-banner-btn"
              id="cta-banner-btn"
            >
              <span>Discuss Your Export Finance Needs</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
