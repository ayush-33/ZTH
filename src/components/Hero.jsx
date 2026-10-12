import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/hero.css';

export default function Hero() {
  const scrollToSection = (targetId) => (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
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
    <section className="hero-section" id="hero">
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span>EXPORT FINANCE · ZTH</span>
            </div>

            <h1 className="hero-title">
              Where Export Orders<br />
              Meet <span>Working Capital.</span>
            </h1>

            <p className="hero-description">
              Explore financing options for fulfilling international orders and
              managing the gap between shipment and payment.
            </p>

            <div className="hero-cta-group">
              <a
                href="#enquiry"
                onClick={scrollToSection('enquiry')}
                className="hero-btn-primary"
                id="hero-primary-cta"
              >
                <span>Discuss Your Export Finance Needs</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#financing-options"
                onClick={scrollToSection('financing-options')}
                className="hero-btn-secondary"
                id="hero-secondary-cta"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Logistics Image */}
          <div className="hero-media">
            <div className="hero-image-wrapper">
              <img
                src="/hero-ship.jpg"
                alt="Cargo ship loaded with international export containers at commercial seaport dock"
                className="hero-img"
                width="720"
                height="450"
                loading="eager"
              />
              <div className="hero-img-badge">
                <span className="hero-img-badge-dot" />
                <span>Global Trade & Logistics Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
